import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  state = {
    hideBtn: false
  };
  exampleMethod_updatesState = () => {
    const { hideBtn } = this.state;
    this.setState({ hideBtn: !hideBtn });
  };

  exampleMethod_returnAValue = number => {
    return number + 1;
  };

  fetch = () => {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  };

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    };
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <div className="main">
          <Headline
            tempArr={tempArr}
            header="Posts"
            desc="Click the button to render the posts!"
          />
          {!this.state.hideBtn && <SharedButton {...configButton} />}
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
