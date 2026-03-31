const Logo = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 220 220">
    <circle
      cx="110"
      cy="110"
      r="62"
      fill="none"
      stroke="#C13584"
      strokeWidth="5"
    />
    <circle cx="110" cy="110" r="10" fill="#C13584" />
    <circle cx="110" cy="55" r="7" fill="#E1306C" />
    <circle cx="155" cy="82" r="7" fill="#F77737" />
    <circle cx="155" cy="138" r="7" fill="#FCAF45" />
    <circle cx="110" cy="165" r="7" fill="#833AB4" />
    <circle cx="65" cy="110" r="7" fill="#405DE6" />
  </svg>
);
export default Logo;
