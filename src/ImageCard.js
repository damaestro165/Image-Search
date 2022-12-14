import React from "react";

export class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans} ` }}>
        <img
          className="w-[250px] "
          ref={this.imageRef}
          alt=""
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
