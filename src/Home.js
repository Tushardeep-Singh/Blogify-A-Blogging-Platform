// Author: Tushardeep Singh

// Import statements
import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./Home.css";

export const Home = () => {
  return (
    <Fragment>
      <section className="homePage">
        <section className="homePage-topSection">
          <h3>Publish your unique stories...</h3>
          <p>Create a blog post</p>
          <Link to="/NewPost.js" className="topSection-link">
            CREATE YOUR BLOG
          </Link>
        </section>

        <section className="homePage-dummyBlog">
          <section className="dummyBlog">
            <input
              type="text"
              placeholder="C++: The Quest for the Missing Semicolon"
              onChange={(e) => e.preventDefault()}
              className="dummyBlog-input"
              disabled
            />
            <textarea
              cols="100"
              rows="13"
              onChange={(e) => e.preventDefault()}
              className="dummyBlog-textArea"
              placeholder="In the world of C++, a brave programmer had a mission: to make their code work without errors. With a keyboard and lots of hope, they faced tricky pointers and memory problems. Hours went by as they fought the scary 'segmentation fault' and searched for the 'missing semicolon.' Just when it seemed impossible, they realized the semicolon was right there, hiding in plain sight. With one quick press of a key, the code finally worked, and the C++ world was safe again. The lesson? In C++, a single semicolon can be the hero that saves your code."
              disabled
            ></textarea>
          </section>
        </section>
      </section>
    </Fragment>
  );
};
