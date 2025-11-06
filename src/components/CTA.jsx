export default function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">Bring your team into one canvas</h3>
            <p className="mt-3 text-neutral-600">Kick off a workshop, map a system, or sketch wireframes together. Start in seconds and invite anyone.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white font-medium hover:bg-neutral-800">Create a free board</a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 font-medium hover:bg-neutral-50">Compare plans</a>
            </div>
            <p className="mt-4 text-xs text-neutral-500">Free forever • No credit card needed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
