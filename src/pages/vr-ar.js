// import VideoPlayer from "./components/VideoPlayer";


import React, { useEffect } from "react";

export default function VrAr() {
  useEffect(() => {
    // Get all video elements
    const videos = document.querySelectorAll("video");

    // Add event listeners to show controls on hover and keep them always visible
    videos.forEach((video) => {
      video.addEventListener("mouseenter", () => {
        video.controls = true;
      });

      video.addEventListener("mouseleave", () => {
        video.controls = false;
      });

      video.addEventListener("play", () => {
        video.controls = true;
      });

      video.addEventListener("pause", () => {
        video.controls = true;
      });
    });
  }, []);

  return (
    <>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="w-full items-center flex-wrap md:-m-2 flex flex-col md:flex-row">

          <div className="flex w-full flex-wrap">
            <div className="w-full p-1 md:p-2">
              <video
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/videos/b&a.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>

          <div className="flex w-full flex-wrap">
            <div className="w-full p-1 md:p-2">
              <video
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="/videos/p_v.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
