export default function ReviewCta() {
  return (
    <section className="bg-navy py-16 text-center text-white">
      <h2 className="font-head text-3xl font-bold uppercase">
        Leave us a review!
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-slate-300">
        Happy with our service? Tell others about your experience.
      </p>
      {/* Replace # with your Google review link */}
      <a
        href="#"
        className="mt-6 inline-block rounded bg-blue-700 px-6 py-3 font-bold hover:bg-blue-800"
      >
        ⭐ Review us on Google
      </a>
    </section>
  );
}
