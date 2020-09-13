import React from "react";
import { Link } from "react-router-dom";
function navRouter() {
  return (
    <nav>
      <ul>
        <Link to="/routerDemo">
          <li>Route</li>
        </Link>
        <Link to="/routerDemo2">
          <li>Route 2</li>
        </Link>
      </ul>
    </nav>
  );
}

export default navRouter;
