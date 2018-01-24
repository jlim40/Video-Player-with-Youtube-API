import React from 'react';
import ReactDOM from 'react-dom'

const API_KEY = 'AIzaSyC6Wd2pRuKprb9RmEPGTRyglYu8HbAElnI';


// Create a new component. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}
// think of App as a factory (class)
// To make an instance of it, make it JSX -> <App />

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
