export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-600">Start free. Upgrade when your team grows.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-neutral-900">Free</h3>
            <p className="mt-1 text-sm text-neutral-600">For individuals getting started</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold">$0</span>
              <span className="text-neutral-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>1 active board</li>
              <li>Basic shapes & connectors</li>
              <li>Export PNG</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 font-medium hover:bg-neutral-50">Get started</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border-2 border-rose-600 bg-white p-6 shadow-sm">
            <div className="inline-flex items-center rounded-full bg-rose-600/10 px-2 py-1 text-xs font-medium text-rose-700">Most Popular</div>
            <h3 className="mt-2 text-lg font-semibold text-neutral-900">Pro</h3>
            <p className="mt-1 text-sm text-neutral-600">For small teams that move fast</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold">$12</span>
              <span className="text-neutral-500">/user/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>Unlimited boards</li>
              <li>Real-time multiplayer</li>
              <li>Custom templates</li>
              <li>PDF & SVG export</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-neutral-800">Start free trial</a>
          </div>

          {/* Business */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-neutral-900">Business</h3>
            <p className="mt-1 text-sm text-neutral-600">For teams that need control</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold">$24</span>
              <span className="text-neutral-500">/user/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>SSO & advanced security</li>
              <li>Shared libraries</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 font-medium hover:bg-neutral-50">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}
