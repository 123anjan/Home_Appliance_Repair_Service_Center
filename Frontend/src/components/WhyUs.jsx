import { brand, whyPoints } from "../data";
import Rich from "./Rich";

const fill = (text) =>
  text.replaceAll("{brand}", brand.name).replaceAll("{city}", brand.city);

const paragraphs = [
  "At **{brand}**, we focus on **affordable, reliable appliance repair in {city}** with complete transparency. We keep the process simple: you get a clear **service charge** up front for any repair, with no hidden fees and no surprises, just honest service at your doorstep.",
  "Our technicians are certified and trained to handle **refrigerators, washing machines and microwave ovens** of all leading brands, including Samsung, LG, Whirlpool, IFB, Godrej, Bosch, Haier and Panasonic. With **genuine spare parts** and **same-day service across {city}**, we aim for a quick turnaround and repairs that last.",
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 lg:grid-cols-[1.15fr_1fr]">
        {/* Left: text and list */}
        <div>
          <h2 className="font-head text-3xl font-bold leading-snug text-navy md:text-4xl">
            Why Choose {brand.name} For Your Home Appliances In {brand.city}?
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            {paragraphs.map((p, i) => (
              <p key={i}>
                <Rich text={fill(p)} />
              </p>
            ))}
          </div>

          <ul className="mt-10 space-y-3.5 pl-4 text-lg text-slate-700">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-center gap-4">
                <span className="text-[10px] text-slate-600" aria-hidden="true">
                  ▶
                </span>
                {fill(point)}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: tall photo and button */}
        <div>
          {/* Your own photo at public/images/why-us.jpg */}
          <img
            src="/images/Why-Choose-Roy-Home-Appliances-Service-Care-In-Kolkata.webp"
            alt="Technician repairing a refrigerator"
            className="aspect-[3/4] w-full bg-slate-200 object-cover"
          />
          <a
            href="#top"
            className="mt-6 block bg-navy py-5 text-center text-xl font-bold uppercase text-white transition hover:bg-slate-900"
          >
            Book a service now
          </a>
        </div>
      </div>
    </section>
  );
}
