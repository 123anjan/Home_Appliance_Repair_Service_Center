export default function Photo({ src, icon, label, className = "" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className={`aspect-4/3 w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex aspect-4/3 w-full items-center justify-center bg-linear-to-br from-slate-200 to-slate-400 ${className}`}
    >
      <span className="text-7xl">{icon}</span>
    </div>
  );
}
