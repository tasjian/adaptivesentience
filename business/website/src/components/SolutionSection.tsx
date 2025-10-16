import { Brain, Shield, Zap, RefreshCw } from 'lucide-react';

export function SolutionSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning models analyze communication patterns and behavioral anomalies in real-time to identify social engineering attempts before they succeed.',
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Adaptive Sentience plugs into your existing enterprise endpoint detection and identity management and works across email, SMS, voice and social.',
    },
    {
      icon: Zap,
      title: 'Real-Time Response',
      description: 'Adaptive Sentience learns and evolves with each threat, ensuring your defenses stay ahead of attacker tactics without manual updates.',
    },
    {
      icon: RefreshCw,
      title: 'Continuous model training',
      description: 'Automated red-teaming that continuously improves social-engineering detection, identifies blind spots, and evolves your defenses—before the real threats arrive.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Prevention, Not Detection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Adaptive Sentience uses cutting-edge AI to understand, predict, and prevent social engineering attacks 
            before they compromise your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
