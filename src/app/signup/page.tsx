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
import {
  useAuth,
  useUser,
  setDocumentNonBlocking,
  useFirestore,
  initiateGoogleSignIn,
} from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { createUserWithEmailAndPassword, getAdditionalUserInfo, updateProfile, UserCredential } from 'firebase/auth';
import { doc } from 'firebase/firestore';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});

export default function SignupPage() {
  const loginImage = PlaceHolderImages.find((img) => img.id === 'login-hero');
  const auth = useAuth();
  const firestore = useFirestore();
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const newUser = userCredential.user;

      await updateProfile(newUser, {
        displayName: values.name,
      });
      
      const userDocRef = doc(firestore, 'users', newUser.uid);
      const avatarImage = PlaceHolderImages.find((img) => img.id === 'user-avatar-2');

      setDocumentNonBlocking(userDocRef, {
        id: newUser.uid,
        email: newUser.email,
        userName: values.name,
        avatar: avatarImage?.imageUrl || '',
        points: 0,
      }, { merge: true });

      toast({
        title: 'Account Created!',
        description: 'You have been successfully signed up.',
      });
      router.push('/quiz');
    } catch (error: any) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message || 'Could not create account.',
      });
    }
  }

  function handleGoogleSignIn() {
    initiateGoogleSignIn(auth, (credential: UserCredential) => {
      const isNewUser = getAdditionalUserInfo(credential)?.isNewUser;
      const newUser = credential.user;

      if (isNewUser) {
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
      // For both new and returning users, onAuthStateChanged will redirect to quiz
    });
  }

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/quiz');
    }
  }, [user, isUserLoading, router]);

  if(isUserLoading || user) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Logo />
            </div>
            <h1 className="text-3xl font-bold font-headline">Create an account</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to start your learning quest!
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Alex" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    <Label htmlFor="password">Password</Label>
                    <FormControl>
                      <Input id="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
                Sign up with Google
              </Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/" className="underline">
              Login
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
