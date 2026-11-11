import { brand } from "../data";

const ENDPOINT = "https://api.web3forms.com/submit";

export async function sendEmail(subject, fields) {
  const key = import.meta.env.VITE_WEB3FORMS_KEY;
  console.log("Access key loaded:", Boolean(key));

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      subject: `${subject} | ${brand.name}`,
      from_name: brand.name,
      ...fields,
    }),
  });

  const data = await res.json().catch(() => ({}));
  console.log("Web3Forms response:", res.status, data);

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Failed to send");
  }
}
