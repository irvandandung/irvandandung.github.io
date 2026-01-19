'use client';

export function PixelatedTriangle() {
  return (
    <div className="absolute pointer-events-none opacity-50 hover:opacity-70 transition-opacity animate-float">
      {/* Pixelated triangle made with boxes - MUCH LARGER */}
      <div className="flex flex-col gap-1">
        {/* Row 1 */}
        <div className="flex gap-1">
          <div className="w-5 h-5 bg-accent-purple/40"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
          <div className="w-5 h-5 bg-accent-purple/40"></div>
        </div>
        {/* Row 2 */}
        <div className="flex gap-1">
          <div className="w-5 h-5 bg-accent-purple/60"></div>
          <div className="w-5 h-5 bg-accent-purple"></div>
          <div className="w-5 h-5 bg-accent-purple/80"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
        </div>
        {/* Row 3 */}
        <div className="flex gap-1">
          <div className="w-5 h-5 bg-accent-purple/40"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
          <div className="w-5 h-5 bg-accent-purple/80"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
          <div className="w-5 h-5 bg-accent-purple/40"></div>
        </div>
        {/* Row 4 - Extra row for more height */}
        <div className="flex gap-1">
          <div className="w-5 h-5 bg-accent-purple/50"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
          <div className="w-5 h-5 bg-accent-purple/70"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
          <div className="w-5 h-5 bg-accent-purple/50"></div>
          <div className="w-5 h-5 bg-accent-purple/40"></div>
        </div>
      </div>
    </div>
  );
}

export function PixelatedDiamond() {
  return (
    <div className="absolute pointer-events-none opacity-40 hover:opacity-60 transition-opacity animate-pulse-slow">
      {/* Pixelated diamond - MUCH LARGER */}
      <div className="flex flex-col gap-1">
        {/* Row 1 */}
        <div className="flex gap-1 ml-5">
          <div className="w-5 h-5 bg-accent-purple/40"></div>
        </div>
        {/* Row 2 */}
        <div className="flex gap-1 ml-3">
          <div className="w-5 h-5 bg-accent-purple/50"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
        </div>
        {/* Row 3 */}
        <div className="flex gap-1 ml-1">
          <div className="w-5 h-5 bg-accent-purple/60"></div>
          <div className="w-5 h-5 bg-accent-purple"></div>
          <div className="w-5 h-5 bg-accent-purple/80"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
        </div>
        {/* Row 4 */}
        <div className="flex gap-1 ml-3">
          <div className="w-5 h-5 bg-accent-purple/50"></div>
          <div className="w-5 h-5 bg-accent-purple/60"></div>
        </div>
        {/* Row 5 */}
        <div className="flex gap-1 ml-5">
          <div className="w-5 h-5 bg-accent-purple/40"></div>
        </div>
      </div>
    </div>
  );
}

export function PixelatedSquares() {
  return (
    <div className="absolute pointer-events-none opacity-35 hover:opacity-55 transition-opacity animate-float-reverse">
      {/* Random pixelated squares cluster - MUCH LARGER */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="w-5 h-5 bg-accent-purple/50"></div>
          <div className="w-5 h-5 bg-accent-purple/30"></div>
          <div className="w-5 h-5 bg-accent-purple/40"></div>
        </div>
        <div className="flex gap-2 ml-4">
          <div className="w-5 h-5 bg-accent-purple/40"></div>
          <div className="w-5 h-5 bg-accent-purple/50"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-5 h-5 bg-accent-purple/35"></div>
          <div className="w-5 h-5 bg-accent-purple/50"></div>
          <div className="w-5 h-5 bg-accent-purple/30"></div>
          <div className="w-5 h-5 bg-accent-purple/45"></div>
        </div>
      </div>
    </div>
  );
}
