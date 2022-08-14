import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMediaData from "../../data/socialMediaData";


const SocialLinks = () => {
    const [fromTop, setFromTop] = useState(false);
    const [topDistance, setTopDistance] = useState(800);

    const checkWindowSize = () => {
      let width = window.innerWidth;
      return width > 1440 
        ? setTopDistance(800)
        : width <= 1440 && width > 768
        ? setTopDistance(580)
        : width <= 768 
        ? setTopDistance(360)
        : 0
    }

    const listenFromTop = () => {
        window.scrollY > topDistance ? setFromTop(true) : setFromTop(false);
      }

      useEffect(() => {
        window.addEventListener("scroll", listenFromTop);
        window.addEventListener("resize", checkWindowSize);
      
        return () => {
          window.removeEventListener("scroll", listenFromTop);
          window.removeEventListener("resize", checkWindowSize);
        };
      }, [fromTop, topDistance]);

      const { display } = useSelector((store) => store.hide);
      const [isHovering, setIsHovering] = useState(false);

      let hideStyle = {
        opacity: isHovering ? 1 : window.innerWidth > 480 ? "var(--opaque)" : 0,
        // transition: isHovering ? '0.6s ease' : '0.6s ease 1s',
        transition: '0.6s ease',
      }
      let showStyle = {
        opacity: 1,
        transition: '0.2s ease 0s',
      }

    const socialMediaLinks = socialMediaData.map((obj) => (
        <li key={obj.id}>
          <a href={obj.src} target="_blank" rel="noreferrer">  
            <img src={obj.img} alt={obj.name} />
            {/* <FontAwesomeIcon icon={obj.icon} className="faIcon"/> */}
          </a>
        </li>
      ));

    return (
        <StyledSocialLinks 
          style={fromTop && !display ? hideStyle : showStyle}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
            {socialMediaLinks}
        </StyledSocialLinks>
    )
}

const StyledSocialLinks = styled('ul')`
    position: fixed;
    bottom: 6%;
    left: var(--left);
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10rem;
    z-index: 2;
    transition: 0.6s ease;
    li {
        cursor: pointer;
        a {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.8rem;
            height: 2.8rem;
            cursor: pointer;
            &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 0rem;
                opacity: 0;
                border: 1px solid var(--col1);
                border-radius: 50%;
                transition: 0.3s ease;
            }
            img {
                width: calc(0.8rem + 0.4vw);
                cursor: pointer;
            }
            /* .faIcon {
                color: white;
                font-size: calc(1rem + 0.8vw);
                transition: 0.3s ease;
            } */
            &:hover {
                &::after {
                    padding: calc(0.6rem + 1vw);
                    opacity: 1;
                }
                /* .faIcon{
                    color: var(--col1);
                } */
            }

        }
    }

    @media (max-width: 768px){
        opacity: 0 !important;
        pointer-events: none !important;;
        user-select: none !important;
    }

    // Height
    @media(max-height: 600px) {
        display: none;
    }
`

export default SocialLinks;