export function Cube3({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 179 153"
      fill="none"
    >
      <path
        fill="url(#a)"
        d="m178.355 65.958-42.074 83.455-79.496 2.95L98.86 68.928z"
      />
      <path
        fill="url(#b)"
        d="m98.86 68.928-42.074 83.436L0 86.387 42.074 2.95z"
      />
      <path
        fill="url(#c)"
        d="m121.57 0 56.786 65.958-79.496 2.97L42.074 2.95z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="141.997"
          x2="105.093"
          y1="63.912"
          y2="153.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#722DAE" />
          <stop offset="1" stopColor="#4B0E80" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="18.73"
          x2="88.661"
          y1="49.746"
          y2="92.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A14DE9" />
          <stop offset="1" stopColor="#5C1B94" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="100.794"
          x2="124.384"
          y1="-4.278"
          y2="65.947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C187F3" />
          <stop offset="1" stopColor="#C27CFE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
