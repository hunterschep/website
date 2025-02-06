import React from "react";

// List of photo paths (adjust the paths as needed)
const photos = [
  "/companies/ai4commscipng.png",
  "/companies/Deloitte.png",
  "/companies/liberty.png",
  "/companies/nsf.png",
];

const InfiniteCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* The inner container is duplicated (photos + photos) so the scroll loops seamlessly */}
      <div className="flex animate-marquee">
        {[...photos, ...photos].map((src, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <img
              src={process.env.PUBLIC_URL + src}
              alt={`Company ${index}`}
              className="h-20 w-auto object-contain" // Adjust height as needed
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
