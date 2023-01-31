//React.Component specifies that it is a class based component and not a normal class
import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    //we will create state here
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/laskaramaan");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <>
        <div>
          <h1>This is a class compoent</h1>
          <h3>{this.state.userInfo.name}</h3>

          {/* to use the state */}

          <img src={this.state.userInfo.avatar_url} />
        </div>
      </>
    );
  }
}

export default Profile;
