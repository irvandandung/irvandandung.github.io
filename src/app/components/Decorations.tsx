'use client';

export function PixelatedTriangle() {
  return (
    <div className="absolute pointer-events-none opacity-50 hover:opacity-70 transition-opacity animate-float">
      {/* Pixelated triangle made with boxes - LARGER */}
      <div className="flex flex-col gap-0">
        {/* Row 1 */}
        <div className="flex gap-0">
          <div className="w-4 h-4 bg-accent-purple/40"></div>
          <div className="w-4 h-4 bg-accent-purple/60"></div>
          <div className="w-4 h-4 bg-accent-purple/40"></div>
        </div>
        {/* Row 2 */}
        <div className="flex gap-0">
          <div className="w-4 h-4 bg-accent-purple/60"></div>
          <div className="w-4 h-4 bg-accent-purple"></div>
          <div className="w-4 h-4 bg-accent-purple/80"></div>
          <div className="w-4 h-4 bg-accent-purple/60"></div>
        </div>
        {/* Row 3 */}
        <div className="flex gap-0">
          <div className="w-4 h-4 bg-accent-purple/40"></div>
          <div className="w-4 h-4 bg-accent-purple/60"></div>
          <div className="w-4 h-4 bg-accent-purple/80"></div>
          <div className="w-4 h-4 bg-accent-purple/60"></div>
          <div className="w-4 h-4 bg-accent-purple/40"></div>
        </div>
      </div>
    </div>
  );
}

export function PixelatedDiamond() {
  return (
    <div className="absolute pointer-events-none opacity-40 hover:opacity-60 transition-opacity animate-pulse-slow">
      {/* Pixelated diamond - LARGER */}
      <div className="flex flex-col gap-0">
        {/* Row 1 */}
        <div className="flex gap-0 ml-3">
          <div className="w-4 h-4 bg-accent-purple/40"></div>
        </div>
        {/* Row 2 */}
        <div className="flex gap-0 ml-1.5">
          <div className="w-4 h-4 bg-accent-purple/50"></div>
          <div className="w-4 h-4 bg-accent-purple/60"></div>
        </div>
        {/* Row 3 */}
        <div className="flex gap-0">
          <div className="w-4 h-4 bg-accent-purple/60"></div>
          <div className="w-4 h-4 bg-accent-purple"></div>
          <div className="w-4 h-4 bg-accent-purple/60"></div>
        </div>
        {/* Row 4 */}
        <div className="flex gap-0 ml-1.5">
          <div className="w-4 h-4 bg-accent-purple/50"></div>
          <div className="w-4 h-4 bg-accent-purple/60"></div>
        </div>
        {/* Row 5 */}
        <div className="flex gap-0 ml-3">
          <div className="w-4 h-4 bg-accent-purple/40"></div>
        </div>
      </div>
    </div>
  );
}

export function PixelatedSquares() {
  return (
    <div className="absolute pointer-events-none opacity-35 hover:opacity-55 transition-opacity animate-float-reverse">
      {/* Random pixelated squares cluster - LARGER */}
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-1.5">
          <div className="w-4 h-4 bg-accent-purple/50"></div>
          <div className="w-4 h-4 bg-accent-purple/30"></div>
        </div>
        <div className="flex gap-1.5 ml-3">
          <div className="w-4 h-4 bg-accent-purple/40"></div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 bg-accent-purple/35"></div>
          <div className="w-4 h-4 bg-accent-purple/50"></div>
          <div className="w-4 h-4 bg-accent-purple/30"></div>
        </div>
      </div>
    </div>
  );
}
