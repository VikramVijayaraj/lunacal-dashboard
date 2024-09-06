export default function WidgetContainer({ children }) {
  return (
    <div className="bg-widget-background px-10 py-6 rounded-3xl h-[316px] overflow-hidden">
      {children}
    </div>
  );
}
