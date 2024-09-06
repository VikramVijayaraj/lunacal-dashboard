import { useState, useRef, useEffect } from "react";

import Card from "./Card";
import WidgetHeader from "./WidgetHeader";
import NavigateButton from "./NavigateButton";
import WidgetContainer from "./WidgetContainer";

export default function GalleryWidget() {
  const sliderRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsData, setCardsData] = useState([
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]);
  const elementsToShow = 3;

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.clientWidth;
        setCardWidth(sliderWidth / elementsToShow);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementsToShow]);

  const next = () => {
    if (currentPosition > -(cardsData.length - elementsToShow) * cardWidth) {
      setCurrentPosition(currentPosition - cardWidth);
    }
  };

  const prev = () => {
    if (currentPosition < 0) {
      setCurrentPosition(currentPosition + cardWidth);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCardsData((prevCards) => [...prevCards, reader.result]);
        setCurrentPosition(-(cardsData.length * cardWidth));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <WidgetContainer>
      <div className="flex justify-between items-center">
        {/* Header */}
        <WidgetHeader>Gallery</WidgetHeader>

        {/* Actions */}
        <div className="flex justify-between space-x-12">
          {/* Add Image */}
          <label className="flex items-center space-x-1 px-6 py-3 text-white bg-background-light font-bold rounded-full shadow-[6px_12px_8px_rgba(0,0,0,0.3),_-1px_-2px_8px_rgba(255,255,255,0.3)] transition cursor-pointer">
            <img src="/icons/plus.svg" />
            <p className="uppercase">add image</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <div className="space-x-[18px]">
            <NavigateButton action={prev}>
              <img src="/icons/left_arrow.svg" />
            </NavigateButton>

            <NavigateButton action={next}>
              <img src="/icons/right_arrow.svg" />
            </NavigateButton>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex items-center">
          <div ref={sliderRef} className="flex overflow-hidden w-full pt-14">
            <ul
              className="flex transition-margin duration-500 space-x-4"
              style={{
                marginLeft: `${currentPosition}px`,
                width: `${cardsData.length * cardWidth}px`,
              }}
            >
              {cardsData.map((image, index) => (
                <Card key={index} card={image} cardWidth={cardWidth} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </WidgetContainer>
  );
}
