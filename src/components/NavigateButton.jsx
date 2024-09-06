import { useState } from "react";

export default function NavigateButton({ children, action }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 100);

    action();
  }

  return (
    <button
      className={`p-4 rounded-full shadow-[2px_2px_8px_rgba(255,255,255,0.1),-2px_-2px_8px_rgba(255,255,255,0.1)] ${
        isActive
          ? "bg-gradient-to-br from-[#95BCE9] to-[#161718]"
          : "bg-gradient-to-br from-background-light to-background-dark hover:from-[#1E252D] hover:to-[#161718]"
      }`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
