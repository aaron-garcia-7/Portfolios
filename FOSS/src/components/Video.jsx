import styled from "styled-components";
import video from "../images/videoComp.mov";

const Video = () => {
    return  <StyledVideo
    src={video}
    className="HeroBg"
    autoPlay
    loop
    muted
    playsInline
    // style={style}
  />
}

const StyledVideo = styled('video')`
        position: fixed;
        pointer-events: none;
        user-select: none;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;

        @media (max-width: 480px) {
            height: 52rem;
        }
`

export default Video;