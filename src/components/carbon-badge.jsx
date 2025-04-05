import { useEffect } from "react";
import "../styles/carbon-badge.css"; // we’ll create this next

export default function CarbonBadge() {
  useEffect(() => {
    const existing = document.getElementById("wcb");
    if (existing) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";
      script.defer = true;
      existing.appendChild(script);
    }
  }, []);

  return <div id="wcb" className="carbonbadge wcb-d floating-badge"></div>;
}
