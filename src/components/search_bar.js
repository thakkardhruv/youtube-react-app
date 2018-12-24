import React,{Component} from 'react';

// const SearchBar = () =>{
//   return <input/>;
// };

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term : ''
    };
  }
  render() {
    return (
      <div className="search-bar">
      <input
        value={this.state.term}
        onChange={(event) => this.onInputChange(event.target.value)}/>
        <button className="btn btn-success" value='Search' onClick={this.searchResult}>Search</button>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
  }
  searchResult = (e) =>{
    this.props.onSearchTermChange(this.state.term);
    e.preventDefault();
  }
}

export default SearchBar;
