export function BurgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 38"
      fill="none"
    >
      <rect width="8" height="8" fill="currentColor" />
      <rect y="30" width="8" height="8" fill="currentColor" />
      <rect y="15" width="8" height="8" fill="currentColor" />
      <rect x="15" width="8" height="8" fill="currentColor" />
      <rect x="15" y="30" width="8" height="8" fill="currentColor" />
      <rect x="15" y="15" width="8" height="8" fill="currentColor" />
      <rect x="30" y="30" width="8" height="8" fill="currentColor" />
      <rect x="30" y="15" width="8" height="8" fill="currentColor" />
      <rect x="30" width="8" height="8" fill="currentColor" />
    </svg>
  )
}
