import { brand, brands } from "../data";
import Carousel from "./Carousel";


export default function Brands() {
  return (
    <section id="brands" className="bg-white py-16">
      <div className="mx-auto max-w-6xl rounded-lg bg-slate-50 px-4 py-10 shadow-[0_0_40px_rgba(11,61,145,0.06)]">
        <h2 className="mx-auto max-w-3xl text-center font-head text-2xl font-bold uppercase text-brand md:text-3xl">
          We provide a variety of appliance repair services for all popular
          brands.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-500">
          A trusted multi-brand service centre in {brand.city}.
        </p>

        <div className="mt-8">
          <Carousel itemClass="basis-1/2 md:basis-1/6">
            {brands.map((b) => (
              <div
                key={b}
                className="flex h-32 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="font-head text-lg font-bold text-slate-700">
                  {b}
                </span>
                <span className="mt-2 text-sm font-semibold text-brand">
                  service center {brand.city}
                </span>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
