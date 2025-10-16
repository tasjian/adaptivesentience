import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span>Adaptive Sentience</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/80">© {new Date().getFullYear()} Adaptive Sentience. All rights reserved.</p>
            <p className="text-white/60 mt-1">Currently in stealth mode</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
