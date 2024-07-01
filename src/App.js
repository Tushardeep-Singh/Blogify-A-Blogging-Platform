// Author: Tushardeep Singh

// Import Statements
import "./App.css";
import { Header } from "./Header";
import { Nav } from "./Nav.js";
import { NewPost } from "./NewPost";
import { Home } from "./Home.js";
import { About } from "./About.js";
import { PostPage } from "./PostPage.js";
import { Missing } from "./Missing.js";
import { Footer } from "./Footer.js";
import { useState, useEffect, Fragment } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import { fakePostApi } from "./API/fakePosts.js";

// Main Render Component
export const App = () => {
  // Use States defined below
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Get the values saved in local storage
  const [userPosts, setUserPosts] = useState(
    JSON.parse(localStorage.getItem("user-posts")) || []
  );
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEdtiTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  // Used to re-direct
  const navigate = useNavigate();

  // handles the saving of the post
  const handleSave = (str = "") => {
    if (str === "new post") {
      // create a new array before setting state
      const newPosts = [
        ...userPosts,
        {
          id: crypto.randomUUID(),
          title: editTitle,
          body: editBody,
          fetched: false,
        },
      ];
      setEditId(newPosts[newPosts.length - 1].id);
      setUserPosts(newPosts.reverse());
      localStorage.setItem("user-posts", JSON.stringify(newPosts));
      return;
    }

    if (!isFetched) {
      const newPosts = userPosts.map((post) => {
        if (JSON.stringify(post.id) === editId) {
          console.log("entered right");
          return {
            ...post,
            title: editTitle,
            body: editBody,
          };
        }
        return post;
      });
      setUserPosts(newPosts);
      localStorage.setItem("user-posts", JSON.stringify(newPosts));
    }

    if (isFetched) {
      const newPosts = fetchedPosts.map((post) => {
        if (JSON.stringify(post.id) === editId)
          return {
            ...post,
            title: editTitle,
            body: editBody,
          };
        return post;
      });
      setFetchedPosts(newPosts);
    }
    // Back to default state
    setEdit(false);
    setEdtiTitle("");
    setEditBody("");
  };

  // Handles the deletion of a post
  const handleDelete = (e, id, fetched) => {
    e.preventDefault();
    if (fetched === "true") {
      const newPosts = fetchedPosts.filter(
        (post) => JSON.stringify(post.id) !== id
      );
      setFetchedPosts(newPosts);
    }
    if (fetched === "false") {
      const newPosts = userPosts.filter(
        (post) => JSON.stringify(post.id) !== id
      );
      setUserPosts(newPosts);
      localStorage.setItem("user-posts", JSON.stringify(newPosts));
    }
  };

  // Fetching posts from API and setting the state, during the first render
  useEffect(() => {
    // To prevent memory leaks
    let isMounted = true;
    const fetchingPosts = async () => {
      setLoading(true);

      const jsonData = await fakePostApi.get();
      let posts = jsonData.data.map((post) => {
        return {
          id: crypto.randomUUID(),
          title: post.title,
          body: post.body,
          fetched: true,
        };
      });

      const nPosts = Math.floor(Math.random() * 15) + 1;
      posts.splice(nPosts);

      if (isMounted) {
        setFetchedPosts(posts);
        setLoading(false);
      }
    };
    fetchingPosts();

    return () => (isMounted = false);
  }, []);

  // Titles
  const appName = "Let's Blog Together...";
  const contactEmail = "tushar.mars1@gmail.com";
  const footerTitle = "Tushardeep Singh.. Looking for a 12-month internship...";

  return (
    <Fragment>
      <Header title={appName} contactEmail={contactEmail}></Header>
      <Nav></Nav>

      {/* routes to different pages */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/about.js"
          element={<About contactEmail={contactEmail}></About>}
        ></Route>
        <Route
          path="/postPage.js"
          element={
            <PostPage
              loading={loading}
              fetchedPosts={fetchedPosts}
              handleDelete={handleDelete}
              edit={edit}
              setEdit={setEdit}
              setEditId={setEditId}
              setEdtiTitle={setEdtiTitle}
              setEditBody={setEditBody}
              editTitle={editTitle}
              editBody={editBody}
              handleSave={handleSave}
              setIsFetched={setIsFetched}
              userPosts={userPosts}
              isFetched={isFetched}
            ></PostPage>
          }
        ></Route>
        <Route
          path="/newPost.js"
          element={
            <NewPost
              setEdtiTitle={setEdtiTitle}
              setEditBody={setEditBody}
              handleSave={handleSave}
              editTitle={editTitle}
              editBody={editBody}
              setIsFetched={setIsFetched}
              navigate={navigate}
            ></NewPost>
          }
        ></Route>
        <Route path="*" element={<Missing></Missing>}></Route>
      </Routes>

      <Footer title={footerTitle}></Footer>
    </Fragment>
  );
};
