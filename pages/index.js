import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Head>
        <title>Kickfixx — Clean Energy • Healthy Snacks • Modern Convenience</title>
        <meta name="description" content="Fully branded & managed vending solutions for the Dallas–Fort Worth metro area." />
      </Head>

      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/kickfixx-logo.png" alt="Kickfixx logo" className="h-9 w-auto object-contain" />
            <span className="sr-only">KICKFIXX</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#benefits" className="hover:text-slate-700">Why Kickfixx</a>
            <a href="#options" className="hover:text-slate-700">Placement Options</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
            <a href="https://instagram.com/kickfixx_" target="_blank" rel="noreferrer" className="hover:text-slate-700">Instagram</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-xl text-white" style={{ background: '#0EA5FF' }}>Request a Machine</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20" style={{background: '#0EA5FF'}} />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Clean Energy • Healthy Snacks • Modern Convenience
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Fully branded & managed vending solutions for the Dallas–Fort Worth metro area. No cost to property owners. We install, restock, and maintain.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm">
              <span className="inline-block h-2 w-2 rounded-full" style={{background: '#0EA5FF'}} />
              <strong>Kickfixx</strong> • Local. Insured. On-Time Restocks.
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl text-white shadow-md" style={{background: '#0EA5FF'}}>Get a Free Placement</a>
              <a href="#options" className="px-5 py-3 rounded-xl border border-slate-300">See Placement Options</a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2">✔ Clean energy drinks & hydration</li>
              <li className="flex items-center gap-2">✔ Fast contactless payment</li>
              <li className="flex items-center gap-2">✔ Insured, professional service</li>
              <li className="flex items-center gap-2">✔ Custom product mix for your space</li>
            </ul>
          </div>

          <div className="relative grid place-items-center">
            <div className="relative rounded-3xl shadow-2xl border border-slate-200 bg-white p-2">
              <img src="/mockups/kickfixx-machine.png" alt="Kickfixx vending machine mockup" className="h-[420px] w-auto object-contain" />
            </div>
            <div className="-mt-6 h-6 w-40 rounded-full bg-slate-200 blur" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <p className="text-center text-sm text-slate-500">Trusted by workplaces across DFW</p>
          <div className="mt-4 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-5">
            {['dfw-gym','techpark','med-hq'].map((n) => (
              <img key={n} src={`/partners/${n}.png`} alt="" className="mx-auto h-8 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-[#f7f9fc]">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Convenience', text: 'On-site access to energizing drinks & healthy snacks that boost productivity.' },
            { title: 'Transparent Reporting', text: 'Simple monthly/quarterly sales summaries and flexible terms.' },
            { title: 'Reliable Service', text: 'We install, restock, and maintain—so your space stays clean and stocked.' },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl shadow-card border border-slate-200 p-6">
              <div className="text-lg font-semibold" style={{color: '#0EA5FF'}}>{card.title}</div>
              <p className="mt-2 text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="options" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Placement Options</h2>
          <p className="mt-2 text-slate-600">Choose what fits your property best. We’ll recommend based on traffic and goals.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Revenue Share', desc: 'Building receives a % of monthly gross sales.', badge: 'Great for medium–high traffic' },
              { title: 'Flat Fee', desc: 'Fixed monthly rent for the machine space.', badge: 'Predictable sites & budgets' },
              { title: 'No-Fee Trial', desc: 'Fast, low‑friction placement to prove demand.', badge: 'Ideal for new/strategic locations' },
            ].map((opt, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">{opt.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{opt.desc}</p>
                <p className="mt-3 text-sm text-green-600">✓ {opt.badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">See Installs & Stock Drops</h2>
          <p className="mt-2 text-slate-600">Follow <strong>@kickfixx_</strong> for photos of placements, restocks, and customer favorites.</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {['/photos/install-01.jpg','/photos/restock-01.jpg','/photos/selection-01.jpg','/photos/lobby-01.jpg','/photos/install-01.jpg','/photos/restock-01.jpg','/photos/selection-01.jpg','/photos/lobby-01.jpg'].map((src, i) => (
              <img key={i} src={src} alt="" className="aspect-square rounded-xl object-cover" />
            ))}
          </div>
          <div className="mt-6">
            <a className="px-4 py-2 rounded-xl border border-slate-300" href="https://instagram.com/kickfixx_" target="_blank" rel="noreferrer">Open Instagram</a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Request a Kickfixx Machine</h2>
            <p className="mt-2 text-slate-600">Tell us about your building and preferred placement area. We’ll respond within one business day.</p>
            <div className="mt-6 space-y-2 text-slate-700">
              <p><span className="font-semibold">Phone:</span> 323-327-6388</p>
              <p><span className="font-semibold">Email:</span> info@kickfixx.com</p>
              <p><span className="font-semibold">Service Area:</span> Dallas–Fort Worth Metro Area</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Quick Inquiry</h3>
            <form className="grid gap-3 mt-3" action="https://formspree.io/f/xyzyabcd" method="POST">
              <input className="border rounded-lg px-3 py-2" name="name" placeholder="Your name" />
              <input className="border rounded-lg px-3 py-2" name="company" placeholder="Company / Building" />
              <input className="border rounded-lg px-3 py-2" name="contact" placeholder="Email or phone" />
              <textarea className="border rounded-lg px-3 py-2 h-24" name="message" placeholder="Tell us about your location & best placement spot" />
              <button className="px-4 py-2 rounded-xl text-white" style={{background: '#0EA5FF'}} type="submit">Send Inquiry</button>
              <p className="text-xs text-slate-500">* Replace Formspree endpoint with your own to receive messages.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Kickfixx LLC • Dallas–Fort Worth Metro Area</p>
          <div className="flex items-center gap-4">
            <a href="mailto:info@kickfixx.com" className="hover:text-slate-800">info@kickfixx.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
