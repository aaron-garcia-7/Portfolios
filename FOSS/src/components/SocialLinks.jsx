import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialMediaData from "../data/socialMediaData";


const SocialLinks = () => {
    const socialMediaLinks = socialMediaData.map((obj) => (
        <li key={obj.id}>
          <a href={obj.src} target="_blank" rel="noreferrer">  
            <img src={obj.img} alt={obj.name} />
            {/* <FontAwesomeIcon icon={obj.icon} className="faIcon"/> */}
          </a>
        </li>
      ));

    return (
        <StyledSocialLinks>
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
                border: 1px solid white;
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
        opacity: 0;
        pointer-events: none;
        user-select: none;
    }

    // Height
    @media(max-height: 600px) {
        display: none;
    }
`

export default SocialLinks;