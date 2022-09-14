import styled from "styled-components";

const CaseStudy = ({index, img, title, roles, isOpen, setIsOpen}) => {

    const openProject = (i) => {
        if (isOpen === i){
            return setIsOpen(null);
        }
        setIsOpen(i);
    };

      const active = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        height: "100vh",
        background: '#313131',
        transition: '0.6s',
        borderRadius: 0,
        zIndex: 5,
      }

    return (
        <StyledCaseStudy style={isOpen === index ? active : null} onClick={() => openProject(index)} className={`caseStudy caseStudy${index + 1}`}>
            <p className="structureText">[ image here ]</p>
            <div className="projectDetails">
                <h4>{title}</h4>
                <p>{roles}</p>
            </div>
        </StyledCaseStudy>
    )
}

const StyledCaseStudy = styled('div')`
    width: 31vw;
    height: 20rem;
    position: relative;
    top: 20%;
    /* background: #31313190; */
    border: var(--test);
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    transition: 0.6s ease, width 0s;
    .structureText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    opacity: 0.4;
    }
    .projectDetails {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.8rem;
    background: #31313190;
    transform: translate(0, 100%);
    transition: 0.3s ease;
    h4 {
        font-size: 1rem;
        font-weight: 200;
    }
    p {
        font-size: 0.7rem;
        font-weight: 300;
    }
    }
    &:hover {
        .projectDetails {
            transform: translate(0, 0);
        }
    }
`

export default CaseStudy;