import React from "react";
import "./App.css";
import Unsplash from "./Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: (await response).data.results });
  };

  render() {
    return (
      <div className="w-full h-full p-4 ">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
