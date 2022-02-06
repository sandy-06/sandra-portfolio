import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'About',
      description: 'Photo of Sandra Sander with daughter',
    },
    { name: 'Projects', description: 'projects' },
    { name: 'Contact', description: 'contact form' },
    { name: 'Resume', description: 'current resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            {/* <Projects currentCategory={currentCategory}></Projects> */}
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
