export function BadgeDevelopment({ text = 'En desarrollo' }) {
  return (
    <span className="bg-black/80 text-cream text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
      {text}
    </span>
  );
}