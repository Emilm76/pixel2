export function Cube2({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 109 93"
      fill="none"
    >
      <path
        fill="url(#a)"
        d="m108.467 60.264-37.555 25.1-49.373 7.207 37.555-25.12z"
      />
      <path
        fill="url(#b)"
        d="m59.093 67.452-37.555 25.12L0 32.307l37.536-25.12z"
      />
      <path
        fill="url(#c)"
        d="m86.908 0 21.557 60.264-49.373 7.188L37.535 7.188z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="82.469"
          x2="74.41"
          y1="59.499"
          y2="97.068"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#722DAE" />
          <stop offset="1" stopColor="#4B0E80" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="11.196"
          x2="51.961"
          y1="33.929"
          y2="59.858"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A14DE9" />
          <stop offset="1" stopColor="#5C1B94" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="68.097"
          x2="102.626"
          y1="-4.187"
          y2="50.481"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C187F3" />
          <stop offset="1" stopColor="#C27CFE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
