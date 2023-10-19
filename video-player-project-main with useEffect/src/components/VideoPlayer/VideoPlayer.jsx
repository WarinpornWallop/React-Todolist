import {useEffect, useRef} from "react";
export function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
  // ref.current.play();
  // ref.current.pause();
  useEffect(() => {
    console.log("useEffect");
    if (isPlaying){
        ref.current.play();
    } else{
        ref.current.pause();
    }
  },[isPlaying]);
  console.log("Render");
  return <video ref={ref} src={src} loop playsInline muted />;
}
export default VideoPlayer;