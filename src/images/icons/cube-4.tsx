export function Cube4({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 132 129"
      fill="none"
    >
      <path
        fill="url(#a)"
        d="m106.253 107.136-50.81 21.053L0 81.657l50.81-21.052z"
      />
      <path fill="url(#b)" d="M50.81 60.605 0 81.658l24.942-60.605L75.733 0z" />
      <path
        fill="url(#c)"
        d="m131.194 46.532-24.942 60.605-55.443-46.532L75.732 0z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="74.476"
          x2="47.88"
          y1="59.004"
          y2="131.449"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#722DAE" />
          <stop offset="1" stopColor="#4B0E80" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="14.349"
          x2="56.851"
          y1="25.575"
          y2="61.802"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A14DE9" />
          <stop offset="1" stopColor="#5C1B94" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="85.444"
          x2="145.731"
          y1="-6.65"
          y2="61.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C187F3" />
          <stop offset="1" stopColor="#C27CFE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
