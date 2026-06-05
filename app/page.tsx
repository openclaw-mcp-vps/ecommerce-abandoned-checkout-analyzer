export default function Home() {
  const faqs = [
    {
      q: "How does the tracking script work?",
      a: "Paste one line of JavaScript into your checkout page. It records mouse movements, clicks, and form interactions without capturing sensitive payment data."
    },
    {
      q: "Will it slow down my store?",
      a: "No. The script is under 4 KB, loads asynchronously, and has zero impact on your page speed or Core Web Vitals."
    },
    {
      q: "Is customer data safe and GDPR compliant?",
      a: "Yes. We never record passwords or card numbers. All data is anonymized and stored on EU servers, fully GDPR and CCPA compliant."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          E-commerce Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Discover Why Customers<br />
          <span className="text-[#58a6ff]">Abandon Your Checkout</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Record checkout session replays, generate heatmaps, and pinpoint the exact friction points killing your conversions — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $17/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["Session Replays", "Watch real checkout journeys"],
            ["Heatmaps", "See where users hesitate"],
            ["Drop-off Alerts", "Know the exact exit step"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$17<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop losing sales</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited session recordings",
              "Checkout heatmaps",
              "Abandonment funnel reports",
              "Email drop-off alerts",
              "1-line embed script",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#6e7681] mt-12">
          &copy; {new Date().getFullYear()} CheckoutLens. All rights reserved.
        </p>
      </section>
    </main>
  );
}
