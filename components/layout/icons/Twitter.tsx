interface Props {
  className?: string;
}

function Twitter({ className }: Props) {
  return (
    <div className={className}>
      <svg
        role="img"
        aria-label="Twitter"
        viewBox="0 0 42 42"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m113.647 2.308c-1.537-1.539-3.39-2.308-5.557-2.308h-26.223c-2.167 0-4.02.77-5.559 2.308-1.538 1.539-2.308 3.392-2.308 5.559v26.222c0 2.166.77 4.02 2.308 5.559 1.539 1.538 3.392 2.308 5.559 2.308h26.222c2.167 0 4.02-.77 5.558-2.308 1.539-1.54 2.308-3.392 2.308-5.56v-26.22c0-2.167-.77-4.02-2.308-5.56zm-7.552 13.835c.018.164.028.41.028.738 0 1.53-.224 3.064-.67 4.602-.445 1.54-1.128 3.014-2.048 4.425s-2.017 2.66-3.291 3.742c-1.275 1.083-2.804 1.949-4.59 2.595-1.783.647-3.696.97-5.735.97-3.168 0-6.1-.856-8.795-2.567.437.054.892.082 1.365.082 2.64 0 5.017-.82 7.13-2.46-1.238-.017-2.345-.399-3.319-1.146s-1.652-1.694-2.035-2.841c.473.073.828.109 1.065.109.4 0 .865-.073 1.393-.218-1.33-.256-2.449-.915-3.36-1.98-.91-1.066-1.365-2.281-1.365-3.647v-.054c.964.454 1.875.691 2.73.71-1.656-1.111-2.485-2.705-2.485-4.78 0-1.02.264-1.985.792-2.896 1.439 1.767 3.187 3.178 5.245 4.234 2.057 1.056 4.26 1.648 6.61 1.775-.091-.346-.137-.783-.137-1.31 0-1.585.56-2.937 1.68-4.057s2.472-1.68 4.056-1.68c1.676 0 3.07.6 4.18 1.803 1.256-.237 2.477-.702 3.66-1.393-.455 1.402-1.302 2.467-2.54 3.195 1.183-.164 2.285-.473 3.304-.928-.764 1.165-1.72 2.157-2.868 2.977z"
          fill="#fff"
          transform="translate(-74)"
        />
      </svg>
    </div>
  );
}

export default Twitter;