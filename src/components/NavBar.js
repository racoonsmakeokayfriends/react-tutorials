import '../styles/App.css';

function NavBar() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="icons">
            <img src={require('../images/darren.JPG')} className="App-logo" alt="darren" />
            <img src={require('../images/bananas.JPG')} className="App-logo" alt="bananas" />
            <img src={require('../images/darryl.JPG')} className="App-logo" alt="darryl" />
            <img src={require('../images/nickels.JPG')} className="App-logo" alt="nickels" />
        </div>
        <p>
          Knight Puppies
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default NavBar;


