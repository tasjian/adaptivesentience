import { AlertTriangle, TrendingUp, Users, Target } from 'lucide-react';

export function ProblemSection() {
  const stats = [
    {
      icon: AlertTriangle,
      value: '98%',
      label: 'of cyber attacks involve social engineering',
    },
    {
      icon: TrendingUp,
      value: '270%',
      label: 'increase in social engineering attacks since 2020',
    },
    {
      icon: Users,
      value: '$4.9M',
      label: 'average cost of a data breach',
    },
    {
      icon: Target,
      value: '74%',
      label: 'of breaches involve the human element',
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">The Social Engineering Crisis</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Traditional security solutions can't keep pace with sophisticated social engineering tactics. 
            Attackers are exploiting human psychology faster than security teams can respond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-2 text-primary">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
