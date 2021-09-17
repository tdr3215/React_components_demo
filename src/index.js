// import { div } from "prelude-ls";
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        img={faker.image.avatar()}
        commentText="Awesome Job!"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00 AM"
        img={faker.image.avatar()}
        commentText="Cool Post!"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00 PM"
        img={faker.image.avatar()}
        commentText="What?!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
