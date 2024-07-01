// Author: Tushardeep Singh

import { Fragment, useState } from "react";
import "./Header.css";

export const Header = ({ title, contactEmail }) => {
  // use state to change the header title
  const [newTitle, setNewTitle] = useState(title);

  // handle hover over header
  const handleMouseEnter = () => setNewTitle("Hire MEEE.....");
  const handleMouseLeave = () => setNewTitle(title);
  const handleClick = () => (window.location.href = `mailto:${contactEmail}`); // opens the default e-mail window on user's screen

  return (
    <Fragment>
      <header
        className="header"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <h1>{newTitle}</h1>
      </header>
    </Fragment>
  );
};
