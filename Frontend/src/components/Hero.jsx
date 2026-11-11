import { asset, brand, heroPoints } from "../data";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-linear-to-br from-navy via-navy to-brand text-white [clip-path:inset(0)]"
    >
      {/* Fixed image: stays still while scrolling, and the clip-path hides it outside the hero.
          Put your photo at public/images/hero.jpg */}
      <div
        className="fixed inset-0 bg-cover bg-center will-change-transform animate-slow-zoom motion-reduce:animate-none"
        style={{ backgroundImage: `url('${asset("/images/Hero.webp")}')` }}
      />
      {/* Dark overlay: bg-navy/60 shows more of the image, bg-navy/85 shows less */}
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-32 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <h1 className="font-head text-3xl font-bold leading-tight md:text-4xl">
            Home Appliance Repair Service Center In {brand.city} Starting Just @{" "}
            {brand.startingPrice}/-
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-200">
            <strong className="text-white">{brand.name}</strong> provides fast,
            reliable and affordable repair for your fridge, washing machine, AC,
            microwave and geyser.
          </p>

          <p className="mt-6 font-head text-sm font-bold tracking-widest">
            EMERGENCY CALL - 24/7
          </p>
          <a
            href={`tel:${brand.phone}`}
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/30 bg-red-700 px-6 py-3 text-lg font-bold transition hover:bg-red-800"
          >
            <span aria-hidden="true">📞</span> CALL {brand.phone}
          </a>

          <ul className="mt-6 space-y-1.5 text-sky-300">
            {heroPoints.map((point) => (
              <li key={point}>
                <span className="mr-2 text-white" aria-hidden="true">
                  ✔
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: quote form */}
        <LeadForm />
      </div>
    </section>
  );
}
