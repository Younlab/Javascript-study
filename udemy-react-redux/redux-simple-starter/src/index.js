import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";
import _ from "lodash";
import APIKEY from "../.secret";
const API_KEY = APIKEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({
        videos: [...data],
        selectedVideo: data[0]
      });
      console.log(this.state.videos);
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTernChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
