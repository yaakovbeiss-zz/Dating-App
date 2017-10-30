import React from 'react';
import Dropzone from 'react-dropzone';

class AddPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      imageUrl: null,
      errors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    let file = e[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ image: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.image) {
      const user_profile = this.state;
      const image = this.state.image;
      let formData = new FormData();

      formData.append("user_profile[image]", this.state.image);
      this.props.createUserProfile(formData)
    } else {
      this.setState({ errors: "Please choose an image to upload."})
    }
  }

  imageDisplay() {
    if ( !this.state.image ) {
      return <img src={window.images.cloud_icon} />
    } else {
      return <img className="upload-image-display" src={this.state.imageUrl} />
    }
  }

  errors() {
    if ( !this.state.image ) {
      return <error>{this.state.errors}</error>
    }
  }

  render() {
    return (
        <addPic className="modal">
          <form>
            Add Pic
            {this.errors()}
            <Dropzone
              onDrop={this.updateFile}
              className='dropzone'>
              {this.imageDisplay()}
            </Dropzone>Click above to browse or drag and drop images inside

            <button onClick={this.handleSubmit}>Upload</button>
        </form>

        <button onClick={this.props.nextScreen}>Skip</button>

        </addPic>
    )
  }
}

export default AddPic;
