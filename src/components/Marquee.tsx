const items = [
  'Individual Training',
  'Group Training',
  'Team Training',
  'Football Camps',
  'Goalkeeping',
  'Strength & Conditioning',
  'Video Analysis',
  'Player Development',
];

export function Marquee() {
  return (
    <div className="bg-accent py-4 overflow-hidden border-y-2 border-black/10">
      <div className="marquee-track items-center">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-display text-black font-semibold text-lg uppercase tracking-wider px-6">
              {item}
            </span>
            <span className="text-black/30 text-2xl">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
