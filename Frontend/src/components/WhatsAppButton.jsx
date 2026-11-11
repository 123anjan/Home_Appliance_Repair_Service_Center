import { useEffect, useState } from "react";
import { brand } from "../data";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(true);

  // Show the typing dots for a moment each time the popup opens
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => setTyping(false), 1400);
    return () => clearTimeout(id);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = () => {
    if (!open) setTyping(true); // reset the dots in the event handler
    setOpen(!open);
  };

  const chatUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappText)}`;
  const initials = brand.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="WhatsApp chat"
          className="w-75 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-black/10"
        >
          {/* Header */}
          <div className="relative flex items-center gap-3 bg-[#0e6b57] px-4 py-5 text-white">
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white font-head text-lg font-bold text-[#0e6b57]">
                {initials}
              </div>
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#0e6b57] bg-green-400" />
            </div>
            <div className="pr-4">
              <p className="text-sm font-bold leading-snug">{brand.name}</p>
              <p className="mt-1 text-xs opacity-90">Customer Support 24/7</p>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-lg leading-none opacity-90 hover:opacity-100"
            >
              ×
            </button>
          </div>

          {/* Chat body */}
          <div className="min-h-70px bg-[#e5ddd5] px-4 py-4">
            {typing ? (
              <div
                className="inline-flex gap-1 rounded-lg bg-white px-3 py-2.5 shadow-sm"
                aria-label="Typing"
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-700"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            ) : (
              <div className="inline-block max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-sm text-slate-800 shadow-sm">
                Hi there! 👋 How can we help you today?
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-white p-4">
            <a
              href={chatUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-3 font-semibold text-white transition hover:bg-[#1ebe5a]"
            >
              <FaWhatsapp aria-hidden="true" className="text-xl" /> Click to
              start chat
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={toggle}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-2xl text-white shadow-lg transition hover:scale-110"
      >
        {open ? (
          <span className="text-3xl leading-none">×</span>
        ) : (
          <FaWhatsapp className="text-3xl" />
        )}
      </button>
    </div>
  );
}
