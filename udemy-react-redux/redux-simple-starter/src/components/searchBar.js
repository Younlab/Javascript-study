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
        <input
          value={this.state.term}
          onChange={evt => this.onInputChange(evt.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTernChange(term);
  }
}

export default SearchBar;
