// Author: Tushardeep Singh

// Import statements
import { Fragment } from "react";
import "./NewPost.css";

// Component that handles user adding a new post
export const NewPost = ({
  setEdtiTitle,
  setEditBody,
  handleSave,
  editTitle,
  editBody,
  navigate
}) => {
  return (
    <Fragment>
      <section className="newPost-window">
        <section className="newPost">
          <input
            type="text"
            placeholder="Your Title"
            className="newPost-input"
            value={editTitle}
            onChange={(e) => setEdtiTitle(e.target.value)}
          />
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Your Unique Story"
            className="newPost-textArea"
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="newPost-button"
            onClick={() => {
              if (editBody.trim() !== "" && editTitle.trim() !== "") {
                handleSave("new post");
                alert("New Blog successfully posted...");
                setEdtiTitle("");
                setEditBody("");
                navigate("/PostPage.js");
              } else {
                alert("Please fill both fields, thankYou!");
              }
            }}
          >
            Post
          </button>
        </section>
      </section>
    </Fragment>
  );
};
