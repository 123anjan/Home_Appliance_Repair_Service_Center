import { asset, brand } from "../data";

export default function EmergencyCta() {
  return (
    <section className="grid bg-navy md:grid-cols-2">
      {/* Left: photo with dark overlay. Put your own photo at public/images/emergency.jpg */}
      <div className="relative min-h-72 md:min-h-96">
        <img
          src={asset("/images/Emergency.webp")}
          alt="Technician taking an emergency repair call"
          className="absolute inset-0 h-full w-full bg-slate-700 object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Right: message and phone number */}
      <div className="flex items-center bg-brand px-8 py-14 text-white md:px-14">
        <div className="max-w-md">
          <h2 className="font-head text-2xl font-bold leading-snug md:text-3xl">
            Quick 24/7 Emergency Appliance Repair Service In {brand.city}
          </h2>

          <div className="mt-6 h-px w-16 bg-white/50" />

          <p className="mt-8 leading-8">
            Appliances can fail at the worst time: a fridge that stops cooling,
            a washer that jams mid-cycle, a microwave that won't heat.{" "}
            <strong>{brand.name}</strong> sends a technician for{" "}
            <strong>same-day emergency repair in {brand.city}</strong>, with the
            charge explained before any work starts.
          </p>

          <a
            href={`tel:${brand.phone}`}
            className="mt-8 inline-flex items-center gap-3 font-head text-3xl font-bold transition hover:text-brand-light md:text-4xl"
          >
            <span aria-hidden="true">📞</span>
            {brand.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
