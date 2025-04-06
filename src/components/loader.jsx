import { CirclesWithBar } from "react-loader-spinner";

function Loader() {
  const mysticPlumColor = "#FFD1E3";
  return (
    <div className="animate-slideUp">
      <CirclesWithBar
        height="100"
        width="100"
        color={mysticPlumColor}
        outerCircleColor={mysticPlumColor}
        innerCircleColor={mysticPlumColor}
        barColor={mysticPlumColor}
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loader;
