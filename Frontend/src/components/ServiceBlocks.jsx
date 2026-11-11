import { brand, serviceBlocks } from "../data";
import Photo from "./Photo";
import Rich from "./Rich";

export default function ServiceBlocks() {
  return (
    <div id="services">
      {serviceBlocks.map((s, i) => {
        const dark = i % 2 === 0;
        return (
          <section
            key={s.short}
            className={dark ? "bg-navy text-white" : "bg-white text-slate-800"}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2">
              <div
                className={`overflow-hidden rounded-sm ${dark ? "" : "md:order-2"}`}
              >
                <Photo src={s.images?.[0]} icon={s.icon} label={s.title} />
                <Photo
                  src={s.images?.[1]}
                  icon="🔧"
                  label={`${s.short} repair`}
                  className="border-t border-white/20"
                />
              </div>

              <div>
                <h2 className="font-head text-2xl font-bold leading-snug md:text-3xl">
                  {s.title} In {brand.city} — Starting Just @
                  {brand.startingPrice}/-
                </h2>
                <p className="mt-5 text-base leading-7">
                  <Rich text={s.text.replace("{brand}", brand.name)} />
                </p>
                <a
                  href={`tel:${brand.phone}`}
                  className="mt-8 inline-block rounded-sm bg-brand px-7 py-3.5 font-bold text-white transition hover:bg-blue-900"
                >
                  CALL {brand.phone}
                </a>
                <h3 className="mt-5 font-head text-lg font-bold">
                  24/7 Emergency {s.short} Repair In {brand.city}
                </h3>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
