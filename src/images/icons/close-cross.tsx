export function CloseCrossIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L27 27" stroke="currentColor" strokeLinecap="round" />
      <path d="M27 1L1 27" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
