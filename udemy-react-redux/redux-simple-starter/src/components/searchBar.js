import React, { Component } from "react";

// 함수형 컴포넌트
// const SearchBar = () => {
//   return <input />;
// };

// 클래스 컴포넌트
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={evt => this.onSubmit(evt)}>
          <input
            value={this.state.term}
            onChange={term => this.setState({ term: term.target.value })}
            // onChange={evt => this.onInputChange(evt.target.value)}
          />
        </form>
      </div>
    );
  }
  onSubmit(evt) {
    console.log(evt);
    evt.preventDefault();
    this.props.onSearchTernChange(this.state.term);
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTernChange(term);
  }
}

export default SearchBar;
