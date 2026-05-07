export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-4">
          Browser Extension
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Make Reddit Mobile Web <span className="text-[#58a6ff]">Actually Usable</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8">
          Tired of Reddit begging you to install the app every 5 seconds? This extension kills the banners, fixes the broken UX, and lets you browse Reddit on mobile the way it should work.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Premium — $4.99/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 gap-3 mb-16">
        {[
          ["🚫", "Removes app install banners permanently"],
          ["⚡", "Fixes broken scroll and navigation"],
          ["🔕", "Silences cookie and notification popups"],
          ["🖥️", "Forces desktop-quality content layout"],
        ].map(([icon, text]) => (
          <div key={text as string} className="flex items-center gap-3 bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3">
            <span className="text-xl">{icon}</span>
            <span className="text-[#c9d1d9]">{text}</span>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Premium</div>
          <div className="text-5xl font-bold text-white mb-1">$4.99</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-2 mb-8">
            {[
              "All UX fixes & banner removal",
              "Automatic updates with new fixes",
              "Works on Chrome, Firefox, Edge",
              "Priority support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-6">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which browsers are supported?",
              "Chrome, Firefox, and Edge are fully supported. Any Chromium-based browser should work too.",
            ],
            [
              "Does this break Reddit's functionality?",
              "No. It only removes intrusive UI elements and fixes layout bugs. All core Reddit features remain intact.",
            ],
            [
              "How do I get the extension after subscribing?",
              "After checkout you'll receive a download link and license key by email within minutes.",
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
