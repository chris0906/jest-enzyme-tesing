import React from "react";
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

function App({ fetchPosts, posts }) {
  const configButton = {
    buttonText: "Get posts",
    emitEvent: fetchPosts
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Headline
          tempArr={tempArr}
          header="Posts"
          desc="Click the button to render the posts!"
        />
        <SharedButton {...configButton} />
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

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
