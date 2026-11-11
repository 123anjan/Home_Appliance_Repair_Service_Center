import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { brand, serviceCards } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 20,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const link = "transition hover:text-brand-light";
  const active = ({ isActive }) =>
    `${link} ${isActive ? "text-brand-light" : ""}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        scrolled || open
          ? "bg-navy/95 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + name */}
        <Link to="/" onClick={close} className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white font-head text-lg font-extrabold tracking-tight text-navy ring-4 ring-white/20"
          >
            {brand.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </span>
          <span className="leading-tight">
            <span className="block font-head text-sm font-bold uppercase tracking-wide sm:text-lg">
              {brand.name}
            </span>
            <span className="hidden text-base sm:block">
              Home Appliance Service Centre In {brand.city}
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink to="/" end className={active}>
              Home
            </NavLink>
          </li>

          <li className="group relative">
            <Link
              to="/#services"
              className={`${link} inline-flex items-center gap-1`}
            >
              Our Services <span className="text-xs">⌄</span>
            </Link>
            <ul className="invisible absolute left-0 top-full min-w-56 bg-white py-2 text-slate-800 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {serviceCards.map((s) => (
                <li key={s.short}>
                  <Link
                    to="/#services"
                    className="block px-4 py-2 text-sm hover:bg-brand-tint hover:text-brand"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink to="/contact" className={active}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <Link
          to="/book"
          className="hidden bg-brand px-6 py-3.5 text-sm font-bold uppercase text-white transition hover:bg-brand-dark md:block"
        >
          Book Service
        </Link>

        <button
          className="p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <Link to="/" onClick={close} className="block py-2">
            Home
          </Link>
          {serviceCards.map((s) => (
            <Link
              key={s.short}
              to="/#services"
              onClick={close}
              className="block py-2 pl-4 text-sm text-slate-300"
            >
              {s.title}
            </Link>
          ))}
          <Link to="/contact" onClick={close} className="block py-2">
            Contact Us
          </Link>
          <Link
            to="/book"
            onClick={close}
            className="mt-2 block bg-brand py-3 text-center text-sm font-bold uppercase"
          >
            Book Service
          </Link>
        </div>
      )}
    </header>
  );
}
