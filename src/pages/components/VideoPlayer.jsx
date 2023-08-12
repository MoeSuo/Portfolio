import React, { useEffect, useRef, useState } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import { useInView } from "react-intersection-observer";

const VidPlayer = React.memo(({ videoRef, playVideo }) => {
  return (
    <CloudinaryContext cloud_name="codedog">
      <div>
        <Video
          publicId="videoplayer-demo"
          width="100%"
          controls
          innerRef={videoRef}
        />
        {playVideo && (
          <button onClick={() => videoRef.current.play()}>Play</button>
        )}
      </div>
    </CloudinaryContext>
  );
});

const VideoPlayer = () => {
  const videoRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0
  });

  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (inView === true) {
      setPlayVideo(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <VidPlayer videoRef={videoRef} playVideo={playVideo} />
    </div>
  );
};

export default VideoPlayer;
