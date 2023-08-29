import React from "react";
import { json } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "Dummy",
      id: "Dummy",
      noOfRepos: "dummy",
      avatar_url: "dummy",
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
      avatar_url: data.avatar_url,
    });
  }

  render() {
    return (
      <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-9/12  h-[350px] m-36  ">
        <div className="m-4  relative overflow-hidden bg-cover bg-no-repeat ">
          <img
            className=" mt-4 rounded-t-lg w-[600px] h-[300px]"
            src={this.state.avatar_url}
          ></img>
        </div>
        <div className="mt-6 flex-col justify-start p-8">
          <h1 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Name : {this.state.login}
          </h1>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            ID : {this.state.id}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            Repos : {this.state.noOfRepos}
          </p>
        </div>
      </div>
    );
  }
}

export default User;
