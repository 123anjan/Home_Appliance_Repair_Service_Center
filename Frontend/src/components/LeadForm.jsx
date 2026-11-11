import { serviceCards } from "../data";
import useForm from "../hooks/useForm";
import { sendEmail } from "../lib/sendEmail";

const initial = {
  name: "",
  phone: "",
  appliance: "",
  warranty: "Yes",
  info: "",
};

const send = (d) =>
  sendEmail("New quote request", {
    Name: d.name,
    Phone: d.phone,
    Appliance: d.appliance,
    "Warranty expired": d.warranty,
    "Additional info": d.info || "-",
  });

export default function LeadForm() {
  const { form, onChange, onSubmit, status } = useForm(initial, send);

  const label = "block text-[15px] font-semibold text-slate-700";
  const field =
    "mt-2 w-full px-3 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-brand/30";
  const input = `${field} border border-slate-200 bg-neutral-50`;
  const select = `${field} border border-slate-600 bg-white text-slate-600`;

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 bg-white p-8 text-slate-800 shadow-xl"
    >
      <h2 className="font-head text-2xl font-bold uppercase tracking-wide text-navy">
        Request a free quote
      </h2>

      <label className={label}>
        Your Name (required) <span className="text-red-600">*</span>
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
        Select Appliance <span className="text-red-600">*</span>
        <select
          className={select}
          name="appliance"
          required
          value={form.appliance}
          onChange={onChange}
        >
          <option value="">Select Appliance(s)</option>
          {serviceCards.map((s) => (
            <option key={s.short}>{s.short}</option>
          ))}
          <option>Other</option>
        </select>
      </label>

      <label className={label}>
        Warranty Expired?
        <select
          className={select}
          name="warranty"
          value={form.warranty}
          onChange={onChange}
        >
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
      </label>

      <label className={label}>
        Additional information
        <textarea
          className={input}
          name="info"
          rows="3"
          placeholder="Anything we should know"
          value={form.info}
          onChange={onChange}
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-brand px-7 py-4 text-sm font-bold uppercase text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request Callback"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-green-600">
          Thanks! We'll call you back shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or call us.
        </p>
      )}
    </form>
  );
}
