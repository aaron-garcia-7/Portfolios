import styled from "styled-components"
import socialMediaData from "../../data/socialMediaData";


const SocialLinksAlt = () => {
   
    const socialMediaLinks = socialMediaData.map((obj) => (
        <li key={obj.id}>
          <a href={obj.src} target="_blank" rel="noreferrer">  
            <img src={obj.img} alt={obj.name} />
          </a>
        </li>
      ));

    return (
        <StyledSocialLinksAlt>
            {socialMediaLinks}
        </StyledSocialLinksAlt>
    )
}

const StyledSocialLinksAlt = styled('ul')`
    display: flex;
    justify-content: center;
    li {
      cursor: pointer;
      border-radius: 50%;
      transition: 0.3s ease;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2.8rem;
          height: 2.8rem;
          cursor: pointer;
          /* border: 1px solid var(--col2); */
          border: 1px solid white;
          border-radius: 50%;
          img {
            width: calc(0.8rem + 0.4vw);
            cursor: pointer;
          }
        }
        &:nth-child(1),
        &:nth-child(3){
          a {
            img {
              transform: scale(0.9);
            }
          }
        }
        &:nth-child(2){
          margin: 0 2vw;
        }
        &:hover {
          transform: scale(1.1);
          background: var(--col2);
        }
      }

      @media (max-width: 768px) {
        li {
          &:nth-child(2){
            margin: 0 4vw;
          }
        }
      }
`

export default SocialLinksAlt;