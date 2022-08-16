import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-white text-2xl font-extrabold my-5">
            Image Search
          </h1>
        </div>
        <form className="w-3/4" onSubmit={this.handleSubmit}>
          <input
            type="search"
            onChange={(e) => this.setState({ term: e.target.value })}
            value={this.state.term}
            className="p-2 w-full text-sm border-none my-2 rounded-full "
            placeholder="Search Image"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
