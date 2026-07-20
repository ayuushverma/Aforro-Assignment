const DashboardIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
    >
      <path
        d="M50 10
           A40 40 0 1 0 90 50
           H60
           C56 50 54 48 54 44
           V10
           Z"
        fill="currentColor"
      />

      <path
        d="M54 10
           A40 40 0 0 1 90 46
           C90 48 88 50 86 50
           H60
           C56 50 54 48 54 44
           Z"
        fill="currentColor"
        opacity=".35"
      />
    </svg>
  );
};

export default DashboardIcon;
