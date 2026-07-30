const Waves = () => (
  <div className="w-full absolute bottom-0">
    <svg
      className="relative w-full h-32 md:h-[30dvh] min-h-32 md:min-h-80 max-h-40"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g>
        <use
          className="animate-[wave_7s_cubic-bezier(0.55,0.5,0.45,0.5)_infinite_-2s]"
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.7)"
        />
        <use
          className="animate-[wave_10s_cubic-bezier(0.55,0.5,0.45,0.5)_infinite_-3s]"
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
        />
        <use
          className="animate-[wave_13s_cubic-bezier(0.55,0.5,0.45,0.5)_infinite_-4s]"
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
        />
        <use
          className="animate-[wave_20s_cubic-bezier(0.55,0.5,0.45,0.5)_infinite_-5s]"
          xlinkHref="#gentle-wave"
          x="48"
          y="7"
          fill="#fff"
        />
      </g>
    </svg>
  </div>
);

export default Waves;
