import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Shield, ChevronDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzYwNDI0NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cybersecurity network visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50"></div>
            <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30">
              <Shield className="w-10 h-10 text-white" />
              <span className="text-white text-xl tracking-wide">ADAPTIVE SENTIENCE</span>
            </div>
          </div>
        </div>

        
        <h1 className="text-6xl text-white mb-6 max-w-4xl mx-auto bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
          Stop Playing Catch-Up with Social-Engineering Attackers
        </h1>
        
        <p className="text-xl text-cyan-50 mb-10 max-w-3xl mx-auto leading-relaxed">
          Adaptive Sentience uses AI-enabled active challenges, graph-based behavior modeling and continuous adversarial retraining to prevent social engineering attacks. It plugs seamlessly into your enterprise email infra and your data never leaves your servers.  Best of all, it works across all your coms channels
        </p>
        
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-cyan-100">Stealth Mode • Limited Access</span>
          </div>
        </div>
        
        <Button 
          size="lg" 
          onClick={onCtaClick}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 px-10 py-7 h-auto shadow-2xl shadow-cyan-500/50 border-0"
        >
          🚀 I'm Interested
        </Button>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 mt-16">
          <span className="text-white/60 text-sm">Learn more</span>
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}
