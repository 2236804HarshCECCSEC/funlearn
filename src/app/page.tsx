'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useAuth, useUser, initiateEmailSignIn, initiateGoogleSignIn, setDocumentNonBlocking, useFirestore } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { getAdditionalUserInfo, UserCredential } from 'firebase/auth';
import { doc } from 'firebase/firestore';


const formSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

export default function LoginPage() {
  const loginImage = PlaceHolderImages.find((img) => img.id === 'login-hero');
  const auth = useAuth();
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    initiateEmailSignIn(auth, values.email, values.password);
  }

  function handleGoogleSignIn() {
    initiateGoogleSignIn(auth, (credential: UserCredential) => {
      const isNewUser = getAdditionalUserInfo(credential)?.isNewUser;
      if (isNewUser) {
        const newUser = credential.user;
        const userDocRef = doc(firestore, 'users', newUser.uid);
        const avatarImage = PlaceHolderImages.find((img) => img.id === 'user-avatar-2');

        setDocumentNonBlocking(userDocRef, {
          id: newUser.uid,
          email: newUser.email,
          userName: newUser.displayName,
          avatar: newUser.photoURL || avatarImage?.imageUrl || '',
          points: 0,
        }, { merge: true });
         toast({
          title: 'Account Created!',
          description: 'You have been successfully signed up.',
        });
      }
    });
  }

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isUserLoading, router]);
  
  // You might want to show a loading spinner here
  if(isUserLoading || user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    )
  }

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Logo />
            </div>
            <h1 className="text-3xl font-bold font-headline">Login to Fun Learn</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link href="#" className="ml-auto inline-block text-sm underline">
                        Forgot your password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input id="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
                Login with Google
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {loginImage && (
          <Image
            src={loginImage.imageUrl}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            data-ai-hint={loginImage.imageHint}
          />
        )}
      </div>
    </div>
  );
}
