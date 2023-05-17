import './App.css';
import './index.js';

function App() {
  return (
    <div className="App">
      {/* <img src={require('./Assets/background_1.jpg')}></img> */}
      <header className="mysql.createConnectionApp-header">
        <a href="/" className='logo'>Steven</a>
        <div className="menu"></div>
        <nav className="navbar">
          <ul className="nav navbar-nav navbar">
            <li><a href='/#home'>Home</a></li>
            <li><a href='/#About'>About</a></li>
            <li><a href='/#Skills'>Skills</a></li>
            <li><a href='/#Contact'>Contact</a></li>
          </ul>
        </nav>
        <div className="hamburger">
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </header>
      <div className="little-bio">
        <h1 className='name'>
          Hi there,
          <br></br>
          I'm Steven Deffontaine
        </h1>
      </div>
      <div className='profil_picture'>
        <img src={require('./Assets/profile_picture.jpeg')} className='picture'></img>
      </div>
    </div>
  );
}

const navEL = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

// hamburgerEl.addEventListener('click', () => {
//   navEL.classList.toggle("nav--open");
//   hamburgerEl.classList.toggle("hamburger--open");
// });

export default App;
