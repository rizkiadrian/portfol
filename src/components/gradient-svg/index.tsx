'use client';
import { twMerge } from 'tailwind-merge';

function GradientSVG({
  percentage,
  numberStyle = '',
}: {
  percentage: number;
  numberStyle?: string;
  size?: undefined | number;
}) {
  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      {' '}
      {/* Added relative for positioning */}
      <svg
        className="h-full w-full rotate-[180deg] transform"
        id="main-svg"
        viewBox="0 0 36 36"
        preserveAspectRatio="xMidYMid meet" // This keeps the aspect ratio intact
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: '#FA709A', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#FEE140', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="transparent"
          stroke="transparent"
          strokeWidth="4"
        />
        <circle
          cx="18"
          cy="18"
          r={radius}
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span
        className={twMerge(
          'absolute text-xl font-medium leading-9 text-white',
          numberStyle,
        )}
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} // Center the text
      >
        {percentage}%
      </span>
    </div>
  );
}

export default GradientSVG;
