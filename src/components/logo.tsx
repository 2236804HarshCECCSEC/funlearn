import { BrainCircuit } from 'lucide-react';

export function Logo() {
  return (
    <div className="group flex items-center gap-2" aria-label="EduQuest home">
      <div className="p-2 bg-primary rounded-lg group-hover:bg-accent transition-colors">
        <BrainCircuit className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold font-headline tracking-wider">
        EduQuest
      </span>
    </div>
  );
}
