export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-linear-to-br from-navy via-navy to-brand pb-14 pt-36 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="font-head text-3xl font-bold md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-slate-200">{subtitle}</p>}
      </div>
    </section>
  )
}