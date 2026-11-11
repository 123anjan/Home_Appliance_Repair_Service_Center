import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useForm from "../hooks/useForm";
import { brand } from "../data";
import { sendEmail } from "../lib/sendEmail";

const STORAGE_KEY = "emergencyPopupSeen";
const DELAY_MS = 8000; // how long after page load the popup appears

// TODO: replace with your backend call, e.g. fetch('/api/instant-visit/', { method: 'POST', ... })
const send = (d) =>
  sendEmail("Instant visit request (popup)", {
    Phone: `+91${d.phone}`,
    Source: "Emergency popup",
  });

export default function EmergencyPopup() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(pathname === "/");
  const inputRef = useRef(null);
  const { form, onChange, onSubmit, status } = useForm({ phone: "" }, send);

  // const enabled = pathname === "/"; // only on the home page
  // Open once per visit, after a delay
  /*
  useEffect(() => {
    if (!enabled) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // storage unavailable: just show the popup 
    }
    if (seen) return;
    const id = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(id);
  }, [enabled]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore 
    }
  };
*/
  const close = () => setOpen(false);

  // While open: Escape closes, page scroll locks, input gets focus
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="emergency-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-3 text-3xl leading-none text-slate-700 hover:text-black"
        >
          ×
        </button>

        <h2
          id="emergency-title"
          className="px-6 text-center font-head text-2xl font-bold text-navy sm:text-3xl"
        >
          <span aria-hidden="true">⚡</span> Need Emergency Appliance Repair?
        </h2>

        {status === "sent" ? (
          <div className="mt-6 text-center">
            <p className="text-lg text-green-700">
              Thanks! Our team will call you back shortly to arrange your visit.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-6 bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-slate-900"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="mt-4 text-center text-slate-600">
              Enter your phone number and our support team will call you back
              shortly to arrange a quick doorstep visit.
            </p>

            <form onSubmit={onSubmit} className="mt-6">
              <label
                htmlFor="emergency-phone"
                className="block text-sm font-semibold text-slate-800"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>

              <div className="mt-2 flex items-center border border-slate-400 bg-white focus-within:ring-2 focus-within:ring-brand/30">
                <span className="flex items-center gap-2 border-r border-slate-200 px-3 py-3 text-slate-800">
                  <span aria-hidden="true">🇮🇳</span> +91
                </span>
                <input
                  id="emergency-phone"
                  ref={inputRef}
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title="Enter a 10-digit mobile number"
                  placeholder="ex. 98765 43210"
                  value={form.phone}
                  onChange={onChange}
                  className="w-full px-3 py-3 outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Get Instant Visit"}
              </button>

              {status === "error" && (
                <p className="mt-3 text-sm text-red-600">
                  Something went wrong. Please try again or call {brand.phone}.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
