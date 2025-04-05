import { useEffect } from "react";

export default function CarbonBadge() {
  useEffect(() => {
    //Check if the script is already in the document
    const scriptAlreadyExists = document.querySelector(
      'script[src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"]'
    );

    const badgeContainer = document.getElementById("wcb");

    if (!scriptAlreadyExists && badgeContainer) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
      script.defer = true;
      badgeContainer.appendChild(script);
    }
  }, []);

  // we get a 503 = Service Unavailable, not our problem
  return <div id="wcb" className="carbonbadge wcb-d floating-badge"></div>;
}
