import { brand, areas } from "../data";

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-sky-50 py-8">
      <div className="mx-auto max-w-6xl rounded-lg bg-slate-50 px-4 py-10">
        <h2 className="text-center font-head text-2xl font-bold uppercase md:text-3xl">
          Our Service Areas
        </h2>
        <p className="mt-3 text-center text-slate-600">
          We proudly serve neighborhoods across {brand.city} and nearby regions.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {areas.map((a) => (
            <div
              key={a}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-4 font-semibold text-slate-700"
            >
              <span>📍</span>
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
