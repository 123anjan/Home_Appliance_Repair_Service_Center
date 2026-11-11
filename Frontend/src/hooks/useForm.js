import { useState } from "react";

// send(form) should return a promise. Throw to show the error message.
export default function useForm(initial, send) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await send(form);
      setStatus("sent");
      setForm(initial);
    } catch (err) {
      console.error("Form send failed:", err);
      setStatus("error");
    }
  };

  return { form, onChange, onSubmit, status };
}
