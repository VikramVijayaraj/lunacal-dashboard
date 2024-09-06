export default function TabButton({ label, isActive, onClick }) {
  return (
    <button
      className={`h-[49px] rounded-xl w-[195px] ${
        isActive ? "bg-[#28292F] scale-105 shadow-2xl" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
