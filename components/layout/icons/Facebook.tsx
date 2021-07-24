interface Props {
  className?: string;
}

function Facebook({ className }: Props) {
  return (
    <div className={className}>
      <svg
        role="img"
        aria-label="Facebook"
        viewBox="0 0 42 42"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m37.8 0h-33.6c-2.31 0-4.2 1.89-4.2 4.2v33.6c0 2.31 1.89 4.2 4.2 4.2h33.6c2.31 0 4.2-1.89 4.2-4.2v-33.6c0-2.31-1.89-4.2-4.2-4.2zm-2.1 4.2v6.3h-4.2c-1.26 0-2.1.84-2.1 2.1v4.2h6.3v6.3h-6.3v14.7h-6.3v-14.7h-4.2v-6.3h4.2v-5.25c0-3.99 3.36-7.35 7.35-7.35z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}

export default Facebook;
