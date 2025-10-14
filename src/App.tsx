import { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { InterestDialog } from './components/InterestDialog';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero onCtaClick={() => setDialogOpen(true)} />
      <ProblemSection />
      <SolutionSection />
      <Footer />
      
      <InterestDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <Toaster />
    </div>
  );
}
