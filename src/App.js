import React from "react";

import "./App.css";
import Clock from "./clock";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: [],
    };
  }

  // componentDidMount() {
  //   fetch("https://images-api.nasa.gov/search?q=Sun")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       users.collection.items.map((datas) =>
  //         datas.data.map((titles) =>
  //           this.setState({ title: [...this.state.title, titles] })
  //         )
  //       );
  //     });
  // {this.state.title.map((title) => (
  //   <h3 key={title.nasa_id}>{title.title}</h3>
  // ))}
  // }
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
