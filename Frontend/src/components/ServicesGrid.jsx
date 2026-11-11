import { brand, serviceCards } from "../data";

export default function ServicesGrid() {
  return (
    <section id="all-services" className="bg-brand-tint py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mx-auto max-w-4xl text-center font-head text-3xl font-bold uppercase leading-tight tracking-wide text-brand md:text-4xl">
          Appliance Repair Services In {brand.city} From {brand.startingPrice}
        </h2>
        <p className="mt-4 text-center text-slate-500">
          Fast, dependable repairs by certified technicians.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((s) => (
            <article
              key={s.short}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-linear-to-br from-brand-tint to-white text-2xl">
                {s.icon}
              </div>

              <h3 className="mt-5 font-head text-lg font-bold uppercase leading-snug text-navy">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-slate-500">
                {s.text}
              </p>

              <div className="mt-auto flex gap-3 pt-8">
                <a
                  href="#services"
                  className="rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-brand transition hover:bg-brand-tint-2"
                >
                  Explore More
                </a>
                <a
                  href="#top"
                  className="rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
