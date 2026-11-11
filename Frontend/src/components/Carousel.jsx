import { Children, useEffect, useRef, useState } from "react";

export default function Carousel({
  children,
  itemClass = "basis-full md:basis-1/3",
  interval = 4000,
  fade = false
}) {
  const ref = useRef(null);
  const hover = useRef(false);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = () => {
    const el = ref.current;
    if (!el) return;
    setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  const go = (i) =>
    ref.current?.scrollTo({
      left: i * ref.current.clientWidth,
      behavior: "smooth",
    });

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!hover.current) go((page + 1) % pages);
    }, interval);
    return () => clearInterval(id);
  }, [page, pages, interval]);

  return (
    <div
      onMouseEnter={() => (hover.current = true)}
      onMouseLeave={() => (hover.current = false)}
    >
      <div
        ref={ref}
        onScroll={measure}
        className={`flex snap-x snap-mandatory overflow-x-auto scrollbar-width:none [&::-webkit-scrollbar]:hidden" ${
  fade ? 'mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)' : ''
}`}
      >
        {Children.map(children, (child) => (
          <div className={`shrink-0 snap-start px-2 ${itemClass}`}>{child}</div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2.5 rounded-full transition-all ${i === page ? "w-6 bg-brand" : "w-2.5 bg-slate-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
