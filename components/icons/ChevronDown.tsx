interface Props {
  up?: boolean;
  className?: string;
}

function ChevronDown({ up, className }: Props) {
  return (
    <div
      className={`transition-transform ${className} ${
        up ? "transform rotate-180" : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default ChevronDown;
