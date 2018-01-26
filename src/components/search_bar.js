import React, { Component } from 'react';


// const SearchBar = () => {
//   return <input />;
// }

//let's make it a class based components
class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
          // It gets rendered, everytime setState is run
      </div>
    )
  }


  // onInputChange(event) { //event Object
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
