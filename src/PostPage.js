// Author: Tushardeep Singh

// Import statements
import { Fragment } from "react";
import "./PostPage.css";

// This component represents a single post in the stories
const Post = ({
  id,
  title,
  body,
  handleDelete,
  fetched,
  setEdit,
  setEditId,
  setEdtiTitle,
  setEditBody,
  setIsFetched,
}) => {
  return (
    <Fragment>
      <section className="post">
        <section className="post-title">
          <h1>{title}</h1>
        </section>
        <section className="post-body">
          <p>{body}</p>
        </section>

        <section className="post-buttons">
          <button
            className="delete-button button"
            onClick={(e) => handleDelete(e, id, JSON.stringify(fetched))}
          >
            Delete
          </button>
          <button
            className="edit-button button"
            onClick={() => {
              setEdit(true);
              setEditId(id);
              setEdtiTitle(title);
              setEditBody(body);
              setIsFetched(fetched);
            }}
          >
            Edit
          </button>
        </section>
      </section>
    </Fragment>
  );
};

export const PostPage = ({
  loading,
  fetchedPosts,
  handleDelete,
  edit,
  setEdit,
  setEditId,
  setEdtiTitle,
  setEditBody,
  editTitle,
  editBody,
  handleSave,
  setIsFetched,
  userPosts,
  isFetched
}) => {
  return (
    <Fragment>
      <section className="PostPage">
        <section className="loading">
          {/* Displays when fetching is going onn */}
          <h1>{!edit && loading && "--------Fetching Posts--------"}</h1>
        </section>

        <section className="userPosts">
          {!edit &&
            userPosts.length > 0 &&
            // Display posts entered by user
            userPosts.map((post) => (
              <Post
                id={JSON.stringify(post.id)}
                title={JSON.stringify(post.title)}
                body={JSON.stringify(post.body)}
                handleDelete={handleDelete}
                fetched={post.fetched}
                setEdit={setEdit}
                setEditId={setEditId}
                setEdtiTitle={setEdtiTitle}
                setEditBody={setEditBody}
                setIsFetched={setIsFetched}
                key={crypto.randomUUID()}
              ></Post>
            ))}
        </section>

        <section className="posts">
          {/* Display Posts stored in fetchedPosts and only display when loading is false */}
          {!edit &&
            !loading &&
            fetchedPosts.map((post) => (
              <Post
                id={JSON.stringify(post.id)}
                title={JSON.stringify(post.title)}
                body={JSON.stringify(post.body)}
                handleDelete={handleDelete}
                fetched={post.fetched}
                setEdit={setEdit}
                setEditId={setEditId}
                setEdtiTitle={setEdtiTitle}
                setEditBody={setEditBody}
                setIsFetched={setIsFetched}
                key={crypto.randomUUID()}
              ></Post>
            ))}
        </section>
      </section>

      {/* Edit window displays when user clicks the edit button. */}
      {edit && (
        <section className="editWindow">
          <input
            type="text"
            placeholder="Your Title"
            className="editWindow-input"
            value={editTitle}
            onChange={(e) => setEdtiTitle(e.target.value)}
          />
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Your Unique Story"
            className="editWindow-textArea"
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="editWindow-button"
            onClick={() => handleSave()}
          >
            Save
          </button>
        </section>
      )}
    </Fragment>
  );
};
