import PageHeader from "../components/PageHeader";
import useForm from "../hooks/useForm";
import { brand } from "../data";
import { label, input, button } from "../components/formStyles";
import { sendEmail } from "../lib/sendEmail";

const initial = { name: "", phone: "", email: "", message: "" };

// TODO: replace with your backend call, e.g. fetch('/api/contact/', { method: 'POST', ... })
const send = (d) =>
  sendEmail("New contact message", {
    Name: d.name,
    Phone: d.phone,
    Message: d.message,
    ...(d.email && { email: d.email }), // lets you reply straight to the visitor
  });

export default function Contact() {
  const { form, onChange, onSubmit, status } = useForm(initial, send);

  const info = [
    {
      icon: "📞",
      title: "Call us",
      text: brand.phone,
      href: `tel:${brand.phone}`,
    },
    {
      icon: "💬",
      title: "WhatsApp",
      text: "Chat with us",
      href: `https://wa.me/${brand.whatsapp}`,
    },
    {
      icon: "✉️",
      title: "Email",
      text: brand.email,
      href: `mailto:${brand.email}`,
    },
    { icon: "📍", title: "Address", text: brand.address },
    { icon: "🕒", title: "Working hours", text: brand.hours },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Questions, quotes or urgent repairs? Reach us any way you like."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div className="space-y-4">
            {info.map(({ icon, title, text, href }) => {
              const Tag = href ? "a" : "div";
              return (
                <Tag
                  key={title}
                  {...(href
                    ? {
                        href,
                        target: href.startsWith("http") ? "_blank" : undefined,
                        rel: "noreferrer",
                      }
                    : {})}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 p-5 transition hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-xl">
                    {icon}
                  </span>
                  <span>
                    <span className="block font-head font-bold text-navy">
                      {title}
                    </span>
                    <span className="block break-words text-slate-600">
                      {text}
                    </span>
                  </span>
                </Tag>
              );
            })}
          </div>

          {/* Message form */}
          <form
            onSubmit={onSubmit}
            className="space-y-5 bg-white p-8 shadow-xl ring-1 ring-slate-100"
          >
            <h2 className="font-head text-2xl font-bold uppercase tracking-wide text-navy">
              Send us a message
            </h2>

            <label className={label}>
              Your Name <span className="text-red-600">*</span>
              <input
                className={input}
                name="name"
                required
                value={form.name}
                onChange={onChange}
              />
            </label>
            <label className={label}>
              Phone Number <span className="text-red-600">*</span>
              <input
                className={input}
                name="phone"
                type="tel"
                required
                pattern="[0-9+ ]{8,15}"
                value={form.phone}
                onChange={onChange}
              />
            </label>
            <label className={label}>
              Email
              <input
                className={input}
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
              />
            </label>
            <label className={label}>
              Message <span className="text-red-600">*</span>
              <textarea
                className={input}
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={onChange}
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className={button}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-green-600">
                Thanks! We'll get back to you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        <div className="mx-auto mt-14 max-w-6xl px-4">
          <iframe
            title="Our location"
            className="h-96 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
          />
        </div>
      </section>
    </>
  );
}
