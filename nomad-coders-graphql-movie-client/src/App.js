import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">Learn React</header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
