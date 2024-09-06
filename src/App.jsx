import EmptyWidget from "./components/EmptyWidget";
import GalleryWidget from "./components/GalleryWidget";
import InfoWidget from "./components/InfoWidget";

export default function App() {
  return (
    <div className="px-10 h-screen flex items-center bg-gradient-to-b from-background-light to-background-dark text-white">
      <div className="w-1/2">
        <EmptyWidget />
      </div>
      <div className="w-1/2 space-y-4">
        <InfoWidget />
        <hr className="m-auto w-[90%] h-[4px] border-none bg-gradient-to-b from-[#282828] rounded-full drop-shadow-xl" />
        <GalleryWidget />
        <hr className="m-auto w-[90%] h-[4px] border-none bg-gradient-to-b from-[#282828] rounded-full drop-shadow-xl" />
      </div>
    </div>
  );
}
