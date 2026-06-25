// Generic 8-bit alien sprites as a decorative background layer.
// Three sprite variants, tiled in a faint grid — completely non-interactive.

const INVADER_A = () => (
  // Classic wide-body alien (11×8 px)
  <svg width="33" height="24" viewBox="0 0 11 8" style={{ imageRendering: 'pixelated', display: 'block' }}>
    <rect x="1" y="0" width="1" height="1" fill="currentColor" />
    <rect x="9" y="0" width="1" height="1" fill="currentColor" />
    <rect x="2" y="1" width="1" height="1" fill="currentColor" />
    <rect x="8" y="1" width="1" height="1" fill="currentColor" />
    <rect x="1" y="2" width="9" height="1" fill="currentColor" />
    <rect x="0" y="3" width="2" height="1" fill="currentColor" />
    <rect x="3" y="3" width="5" height="1" fill="currentColor" />
    <rect x="9" y="3" width="2" height="1" fill="currentColor" />
    <rect x="0" y="4" width="11" height="2" fill="currentColor" />
    <rect x="2" y="6" width="2" height="1" fill="currentColor" />
    <rect x="7" y="6" width="2" height="1" fill="currentColor" />
    <rect x="1" y="7" width="2" height="1" fill="currentColor" />
    <rect x="8" y="7" width="2" height="1" fill="currentColor" />
  </svg>
);

const INVADER_B = () => (
  // Narrow crab-style alien (9×7 px)
  <svg width="27" height="21" viewBox="0 0 9 7" style={{ imageRendering: 'pixelated', display: 'block' }}>
    <rect x="4" y="0" width="1" height="1" fill="currentColor" />
    <rect x="2" y="1" width="5" height="1" fill="currentColor" />
    <rect x="1" y="2" width="7" height="1" fill="currentColor" />
    <rect x="0" y="3" width="9" height="2" fill="currentColor" />
    <rect x="0" y="5" width="3" height="1" fill="currentColor" />
    <rect x="6" y="5" width="3" height="1" fill="currentColor" />
    <rect x="0" y="6" width="2" height="1" fill="currentColor" />
    <rect x="7" y="6" width="2" height="1" fill="currentColor" />
  </svg>
);

const INVADER_C = () => (
  // Tall bug alien (7×8 px)
  <svg width="21" height="24" viewBox="0 0 7 8" style={{ imageRendering: 'pixelated', display: 'block' }}>
    <rect x="3" y="0" width="1" height="1" fill="currentColor" />
    <rect x="2" y="1" width="3" height="1" fill="currentColor" />
    <rect x="1" y="2" width="5" height="4" fill="currentColor" />
    <rect x="0" y="3" width="1" height="2" fill="currentColor" />
    <rect x="6" y="3" width="1" height="2" fill="currentColor" />
    <rect x="1" y="6" width="2" height="1" fill="currentColor" />
    <rect x="4" y="6" width="2" height="1" fill="currentColor" />
    <rect x="0" y="7" width="2" height="1" fill="currentColor" />
    <rect x="5" y="7" width="2" height="1" fill="currentColor" />
  </svg>
);

const SPRITES = [INVADER_A, INVADER_B, INVADER_C];
const COLS = 8;
const ROWS = 4;

export default function PixelInvadersBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ color: 'var(--magenta)', opacity: 0.055, zIndex: 0 }}
    >
      <div
        className="w-full h-full"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {Array.from({ length: COLS * ROWS }, (_, i) => {
          const Sprite = SPRITES[i % SPRITES.length];
          return (
            <div key={i} style={{ transform: `rotate(${(i % 3) * 0}deg)` }}>
              <Sprite />
            </div>
          );
        })}
      </div>
    </div>
  );
}
