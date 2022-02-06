import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";


function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);





  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"><i class="fas fa-laptop"></i></span> Sandra Sanders Portfolio!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contactForm" onClick={() => setContactSelected(false)}>
             Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="projects" href="#projects" onClick={() => setContactSelected(false)}>
             Projects
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
             Resume
            </a>
          </li>      
        
        </ul>
      </nav>
    </header>
  );
}




export default Nav;
