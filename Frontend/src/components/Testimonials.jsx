import { brand, reviews } from "../data";
import Carousel from "./Carousel";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-head text-3xl font-bold uppercase text-brand">
          Testimonials{" "}
          <span className="ml-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 align-middle text-xs">
            {brand.city}
          </span>
        </h2>
        <p className="mt-3 text-center text-slate-500">
          Real words from our customers across the city and beyond.
        </p>

        <div className="mt-10">
          <Carousel itemClass="basis-full md:basis-1/3">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="h-full rounded-xl border border-slate-200 bg-linear-to-b from-blue-50/60 to-white p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-brand">
                    📍 {r.area}, {brand.city}
                  </span>
                  <span className="text-amber-400">
                    {"★".repeat(r.stars)}
                    {"☆".repeat(5 - r.stars)}
                  </span>
                </div>
                <blockquote className="mt-4 text-slate-700">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-brand">
                    {r.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{r.name}</span>
                    <span className="block text-xs text-slate-500">
                      {r.area}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
