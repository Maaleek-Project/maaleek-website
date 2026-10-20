import { useMemo } from "react";

interface QrPatternProps {
  seed?: number;
  className?: string;
  color?: string;
}

const SIZE = 25;

// QR code décoratif (motif déterministe avec les trois repères d'angle).
const QrPattern = ({ seed = 7, className, color = "currentColor" }: QrPatternProps) => {
  const cells = useMemo(() => {
    let state = seed * 9301 + 49297;
    const random = () => {
      state = (state * 9301 + 49297) % 233280;
      return state / 233280;
    };
    const inFinder = (x: number, y: number) =>
      (x < 8 && y < 8) || (x > SIZE - 9 && y < 8) || (x < 8 && y > SIZE - 9);

    const result: [number, number][] = [];
    for (let y = 0; y < SIZE; y++) {
      for (let x = 0; x < SIZE; x++) {
        if (!inFinder(x, y) && random() > 0.52) result.push([x, y]);
      }
    }
    return result;
  }, [seed]);

  const finders = [
    [0, 0],
    [SIZE - 7, 0],
    [0, SIZE - 7],
  ];

  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} shapeRendering="crispEdges" aria-hidden="true">
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} />
      ))}
      {finders.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={7} height={7} rx={1.6} fill={color} />
          <rect x={x + 1} y={y + 1} width={5} height={5} rx={1.1} fill="white" />
          <rect x={x + 2} y={y + 2} width={3} height={3} rx={0.7} fill={color} />
        </g>
      ))}
    </svg>
  );
};

export default QrPattern;
