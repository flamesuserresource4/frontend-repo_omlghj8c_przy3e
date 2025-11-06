import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle top gradient fade to improve text contrast; pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/70 px-3 py-1 text-xs text-neutral-600 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-rose-600" />
          Real-time collaborative whiteboard
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
          Think together. Sketch faster.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
          FlowBoard brings your team into one infinite canvas for brainstorming, diagramming, and workshops. Simple, fast, and built for focus.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium shadow-sm hover:bg-neutral-800 transition-colors">
            Start free
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-neutral-900 font-medium hover:bg-neutral-50">
            See features
          </a>
        </div>
        <p className="mt-4 text-xs text-neutral-500">No credit card required</p>
      </div>
    </section>
  );
}
