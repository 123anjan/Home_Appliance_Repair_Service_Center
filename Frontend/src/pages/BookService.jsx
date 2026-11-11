import PageHeader from "../components/PageHeader";
import useForm from "../hooks/useForm";
import { areas, brand, serviceCards } from "../data";
import { label, input, select, button } from "../components/formStyles";
import { sendEmail } from "../lib/sendEmail";

const slots = [
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
];

const initial = {
  name: "",
  phone: "",
  appliance: "",
  area: "",
  address: "",
  date: "",
  slot: "",
  issue: "",
};

// TODO: replace with your backend call, e.g. fetch('/api/bookings/', { method: 'POST', ... })
const send = (d) =>
  sendEmail("New service booking", {
    Name: d.name,
    Phone: d.phone,
    Appliance: d.appliance,
    Area: d.area,
    Address: d.address,
    "Preferred date": d.date,
    "Preferred time": d.slot,
    Problem: d.issue || "-",
  });

export default function BookService() {
  const { form, onChange, onSubmit, status } = useForm(initial, send);
  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <PageHeader
        title="Book a Service"
        subtitle={`Tell us what needs fixing and when. We'll confirm your slot by phone. Urgent? Call ${brand.phone}.`}
      />

      <section className="bg-white py-16">
        <form
          onSubmit={onSubmit}
          className="mx-auto grid max-w-3xl gap-5 bg-white p-8 shadow-xl ring-1 ring-slate-100 sm:grid-cols-2"
        >
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
            Appliance <span className="text-red-600">*</span>
            <select
              className={select}
              name="appliance"
              required
              value={form.appliance}
              onChange={onChange}
            >
              <option value="">Select appliance</option>
              {serviceCards.map((s) => (
                <option key={s.short}>{s.short}</option>
              ))}
              <option>Other</option>
            </select>
          </label>
          <label className={label}>
            Your Area <span className="text-red-600">*</span>
            <select
              className={select}
              name="area"
              required
              value={form.area}
              onChange={onChange}
            >
              <option value="">Select area</option>
              {areas.map((a) => (
                <option key={a}>{a}</option>
              ))}
              <option>Other</option>
            </select>
          </label>

          <label className={`${label} sm:col-span-2`}>
            Full Address <span className="text-red-600">*</span>
            <input
              className={input}
              name="address"
              required
              value={form.address}
              onChange={onChange}
            />
          </label>

          <label className={label}>
            Preferred Date <span className="text-red-600">*</span>
            <input
              className={input}
              name="date"
              type="date"
              min={today}
              required
              value={form.date}
              onChange={onChange}
            />
          </label>
          <label className={label}>
            Preferred Time <span className="text-red-600">*</span>
            <select
              className={select}
              name="slot"
              required
              value={form.slot}
              onChange={onChange}
            >
              <option value="">Select a time slot</option>
              {slots.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>

          <label className={`${label} sm:col-span-2`}>
            What's the problem?
            <textarea
              className={input}
              name="issue"
              rows="4"
              placeholder="e.g. fridge not cooling, strange noise…"
              value={form.issue}
              onChange={onChange}
            />
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className={button}
            >
              {status === "sending" ? "Sending…" : "Confirm Booking Request"}
            </button>
            {status === "sent" && (
              <p className="mt-4 text-green-600">
                Thanks! Your request is in. We'll call to confirm the slot.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600">
                Something went wrong. Please try again or call us.
              </p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
