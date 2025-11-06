import { useState } from 'react';
import { Menu, X, PenTool } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-20 bg-white/60 backdrop-blur-md border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-600 text-white">
              <PenTool size={18} />
            </span>
            <span className="font-semibold tracking-tight text-neutral-900">FlowBoard</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors">Features</a>
            <a href="#pricing" className="text-neutral-600 hover:text-neutral-900 transition-colors">Pricing</a>
            <a href="#cta" className="text-neutral-600 hover:text-neutral-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-neutral-800 hover:text-neutral-900">Sign in</button>
            <button className="px-4 py-2 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">Get started</button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 border-t border-neutral-200 pt-4">
              <a href="#features" className="px-2 py-2 rounded-md hover:bg-neutral-100">Features</a>
              <a href="#pricing" className="px-2 py-2 rounded-md hover:bg-neutral-100">Pricing</a>
              <a href="#cta" className="px-2 py-2 rounded-md hover:bg-neutral-100">Contact</a>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-4 py-2 text-sm font-medium text-neutral-800 hover:text-neutral-900">Sign in</button>
                <button className="flex-1 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors">Get started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
