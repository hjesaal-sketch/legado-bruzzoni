export function SectionTitle({ title, subtitle, align = 'left' }) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={alignClasses[align]}>
      <h2>{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-silver max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}