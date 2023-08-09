import React from "react";
import { json } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "Dummy",
      id: "Dummy",
      noOfRepos: "dummy",
    };
  }
  async componentDidMount() {
    const user = await fetch(" https://api.github.com/users/vaishnavimysore");
    const data = await user.json();
    console.log(data);
    this.setState({
      login: data.login,
      id: data.id,
      noOfRepos: data.public_repos,
    });
  }

  render() {
    return (
      <div>
        <h1> Name = {this.state.login}</h1>
        <h2> ID = {this.state.id}</h2>
        <h2> Repos = {this.state.noOfRepos}</h2>
      </div>
    );
  }
}

export default User;
