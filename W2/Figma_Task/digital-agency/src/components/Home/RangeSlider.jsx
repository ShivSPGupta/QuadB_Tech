import React, { useState, useRef, useEffect } from "react";

function RangeSlider() {
  const [range, setRange] = useState([1000, 5000]);
  const [isDragging, setIsDragging] = useState(null);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  // Update slider width dynamically
  useEffect(() => {
    if (sliderRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        setSliderWidth(sliderRef.current.offsetWidth);
      });
      resizeObserver.observe(sliderRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  // Unified position calculator for both mouse and touch
  const getPositionX = (e) => {
    if (e.touches) {
      return e.touches[0].clientX;
    } else {
      return e.clientX;
    }
  };

  const updateHandlePosition = (clientX) => {
    if (isDragging === null || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);
    const value = Math.round(percentage * 4000) + 1000;

    const newRange = [...range];
    newRange[isDragging] = value;

    if (isDragging === 0 && newRange[0] > newRange[1]) {
      newRange[0] = newRange[1];
    } else if (isDragging === 1 && newRange[1] < newRange[0]) {
      newRange[1] = newRange[0];
    }

    setRange(newRange);
  };

  // Start dragging (mouse or touch)
  const startDrag = (index) => (e) => {
    e.preventDefault();
    setIsDragging(index);

    if (e.type === "touchstart") {
      updateHandlePosition(getPositionX(e));
    }
  };

  // Move handle (mouse and touch)
  const moveHandle = (e) => {
    if (isDragging === null) return;
    updateHandlePosition(getPositionX(e));
  };

  // Stop dragging
  const stopDrag = () => {
    setIsDragging(null);
  };

  // Add global event listeners for drag
  useEffect(() => {
    if (isDragging !== null) {
      window.addEventListener("mousemove", moveHandle);
      window.addEventListener("mouseup", stopDrag);
      window.addEventListener("touchmove", moveHandle);
      window.addEventListener("touchend", stopDrag);
    }

    return () => {
      window.removeEventListener("mousemove", moveHandle);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", moveHandle);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [isDragging]);

  const minHandlePosition = ((range[0] - 1000) / 4000) * sliderWidth;
  const maxHandlePosition = ((range[1] - 1000) / 4000) * sliderWidth;

  return (
    <div className="relative w-full mt-8 px-4 py-7 text-sm font-medium text-white">
      {/* Background track */}
      <div className="w-full h-1 bg-zinc-800 rounded-full" />

      {/* Slider interactive area */}
      <div
        ref={sliderRef}
        className="absolute left-0 top-1/2 w-full -translate-y-1/2"
      >
        {/* Active range track */}
        <div
          className="absolute h-1 bg-lime-400"
          style={{
            left: `${minHandlePosition}px`,
            width: `${maxHandlePosition - minHandlePosition}px`,
          }}
        />

        {/* Min Handle */}
        <div
          className="absolute w-5 h-5 bg-neutral-600 rounded-full flex items-center justify-center cursor-pointer touch-none"
          style={{
            left: `${minHandlePosition}px`,
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={startDrag(0)}
          onTouchStart={startDrag(0)}
        >
          <div className="w-3 h-3 bg-lime-400 rounded-full" />
          <div className="absolute text-xs text-white -bottom-6 left-1/2 -translate-x-1/2">
            ${range[0]}
          </div>
        </div>

        {/* Max Handle */}
        <div
          className="absolute w-5 h-5 bg-neutral-600 rounded-full flex items-center justify-center cursor-pointer touch-none"
          style={{
            left: `${maxHandlePosition}px`,
            transform: "translate(-50%, -50%)",
          }}
          onMouseDown={startDrag(1)}
          onTouchStart={startDrag(1)}
        >
          <div className="w-3 h-3 bg-lime-400 rounded-full" />
          <div className="absolute text-xs text-white -bottom-6 left-1/2 -translate-x-1/2">
            ${range[1]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RangeSlider;
