'use client';

export function PixelatedTriangle() {
  return (
    <div className="absolute pointer-events-none opacity-40 hover:opacity-60 transition-opacity">
      {/* Pixelated triangle made with boxes */}
      <div className="flex flex-col gap-0">
        {/* Row 1 */}
        <div className="flex gap-0">
          <div className="w-2 h-2 bg-accent-purple/40"></div>
          <div className="w-2 h-2 bg-accent-purple/60"></div>
          <div className="w-2 h-2 bg-accent-purple/40"></div>
        </div>
        {/* Row 2 */}
        <div className="flex gap-0">
          <div className="w-2 h-2 bg-accent-purple/60"></div>
          <div className="w-2 h-2 bg-accent-purple"></div>
          <div className="w-2 h-2 bg-accent-purple/80"></div>
          <div className="w-2 h-2 bg-accent-purple/60"></div>
        </div>
        {/* Row 3 */}
        <div className="flex gap-0">
          <div className="w-2 h-2 bg-accent-purple/40"></div>
          <div className="w-2 h-2 bg-accent-purple/60"></div>
          <div className="w-2 h-2 bg-accent-purple/80"></div>
          <div className="w-2 h-2 bg-accent-purple/60"></div>
          <div className="w-2 h-2 bg-accent-purple/40"></div>
        </div>
      </div>
    </div>
  );
}

export function PixelatedDiamond() {
  return (
    <div className="absolute pointer-events-none opacity-30 hover:opacity-50 transition-opacity">
      {/* Pixelated diamond */}
      <div className="flex flex-col gap-0">
        {/* Row 1 */}
        <div className="flex gap-0 ml-2">
          <div className="w-2 h-2 bg-accent-purple/40"></div>
        </div>
        {/* Row 2 */}
        <div className="flex gap-0 ml-1">
          <div className="w-2 h-2 bg-accent-purple/50"></div>
          <div className="w-2 h-2 bg-accent-purple/60"></div>
        </div>
        {/* Row 3 */}
        <div className="flex gap-0">
          <div className="w-2 h-2 bg-accent-purple/60"></div>
          <div className="w-2 h-2 bg-accent-purple"></div>
          <div className="w-2 h-2 bg-accent-purple/60"></div>
        </div>
        {/* Row 4 */}
        <div className="flex gap-0 ml-1">
          <div className="w-2 h-2 bg-accent-purple/50"></div>
          <div className="w-2 h-2 bg-accent-purple/60"></div>
        </div>
        {/* Row 5 */}
        <div className="flex gap-0 ml-2">
          <div className="w-2 h-2 bg-accent-purple/40"></div>
        </div>
      </div>
    </div>
  );
}

export function PixelatedSquares() {
  return (
    <div className="absolute pointer-events-none opacity-25 hover:opacity-45 transition-opacity">
      {/* Random pixelated squares cluster */}
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-accent-purple/50"></div>
          <div className="w-3 h-3 bg-accent-purple/30"></div>
        </div>
        <div className="flex gap-1 ml-2">
          <div className="w-3 h-3 bg-accent-purple/40"></div>
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-accent-purple/35"></div>
          <div className="w-3 h-3 bg-accent-purple/50"></div>
          <div className="w-3 h-3 bg-accent-purple/30"></div>
        </div>
      </div>
    </div>
  );
}
