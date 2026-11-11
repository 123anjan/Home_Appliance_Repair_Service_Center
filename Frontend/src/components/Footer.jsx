import { FaFacebookF, FaInstagram, FaYoutube, FaArrowUp } from "react-icons/fa";
import { brand, serviceCards } from "../data";
import { Link } from "react-router-dom";

const socials = [
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaYoutube, label: "YouTube", href: "#" },
];

const policies = ["Privacy Policy", "Refund Policy", "Disclaimer"];

const heading = "font-head text-xl font-bold uppercase leading-snug text-white";
const link =
  "text-base text-sky-300 transition hover:text-white hover:underline";

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-[1fr_0.8fr_2fr]">
        {/* Column 1: about, registration, contact, social */}
        <div className="text-base leading-8">
          <h3 className={heading}>{brand.name}</h3>

          <p className="mt-6">
            Your trusted{" "}
            <strong>home appliance service centre in {brand.city}</strong> for
            <strong> fridge, washing machine and microwave oven repair</strong>.
            Clear service charges, doorstep visits and certified technicians you
            can rely on. We are an independent local repair provider and not an
            authorised service centre of any particular brand.
          </p>

          <p className="mt-8">
            {brand.registration}
            <br />
            Organisation Name: {brand.name}
            <br />
            Proprietor: {brand.owner}
          </p>

          <p className="mt-8">
            {brand.address}
            <br />
            {brand.phone}
            <br />
            <a
              href={`mailto:${brand.email}`}
              className="break-all hover:underline"
            >
              {brand.email}
            </a>
          </p>

          <div className="mt-6 flex gap-2">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand text-sm text-white transition hover:bg-brand-dark"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: links */}
        <div>
          <h3 className={heading}>Repair Services</h3>
          <ul className="mt-5 space-y-3">
            {serviceCards.map((s) => (
              <li key={s.short}>
                <a href="#services" className={link}>
                  {s.short} Repair
                </a>
              </li>
            ))}
          </ul>

          <h3 className={`${heading} mt-10`}>Important Links</h3>
          <ul className="mt-5 space-y-2.5">
            {policies.map((p) => (
              <li key={p}>
                <a href="#" className={link}>
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: map */}

        <iframe
          title="Our location"
          className="h-90 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
        />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8">
          <p className="text-base">
            Copyright © {new Date().getFullYear()} {brand.name} | Powered by{" "}
            <a
              href={brand.poweredByUrl}
              className="font-semibold text-sky-300 hover:underline"
            >
              {brand.poweredBy}
            </a>
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-bold uppercase text-white transition hover:bg-brand-dark"
          >
            <FaArrowUp aria-hidden="true" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
