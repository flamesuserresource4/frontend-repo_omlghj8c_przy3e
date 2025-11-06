import { Users, PenTool, Shapes, Bolt } from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: 'Infinite canvas',
    desc: 'Sketch, map, and iterate across an endless board with smooth pan and zoom.'
  },
  {
    icon: Users,
    title: 'Real-time multiplayer',
    desc: 'See every cursor and change instantly. No refreshes, no conflicts.'
  },
  {
    icon: Shapes,
    title: 'Smart shapes & connectors',
    desc: 'Create diagrams in seconds with snapping, autolayout, and keyboard-first controls.'
  },
  {
    icon: Bolt,
    title: 'Fast by default',
    desc: 'Optimized interactions and low-latency sessions keep teams in flow.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Built for fast, focused collaboration</h2>
          <p className="mt-3 text-neutral-600">Everything you need for workshops, diagrams, and quick sketching—without the clutter.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-neutral-200 p-6 hover:shadow-sm transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600/10 text-rose-700">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
