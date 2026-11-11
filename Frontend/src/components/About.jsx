import { asset, brand } from "../data";
import Photo from "./Photo";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <p className="flex flex-wrap gap-x-8 font-head text-sm font-bold uppercase tracking-[0.25em] text-navy">
            <span>About</span>
            <span>{brand.name}</span>
          </p>

          <h2 className="mt-4 font-head text-3xl font-bold leading-snug text-navy md:text-4xl">
            Dependable Doorstep Appliance Repair, Often On The Same Day
          </h2>

          <div className="mt-8 h-0.5 w-72 bg-brand" />

          <p className="mt-10 text-lg leading-8 text-slate-600">
            <strong className="text-slate-800">{brand.name}</strong> is a local
            repair team for refrigerators, washing machines, microwave ovens,
            geysers and ACs. We come to your home, explain the fault clearly,
            and fix it with quality parts, so your appliances keep working
            without the cost of replacing them.
          </p>
        </div>

        {/* Replace with your own photo: public/images/about.jpg */}
        <Photo
          src={asset(
            "/images/Roy-Home-Appliances-Repair-Care-Refrigerator-repair-service-e1755869749795.webp",
          )}
          icon="🧰"
          label="Technician repairing an appliance"
        />
      </div>
    </section>
  );
}
