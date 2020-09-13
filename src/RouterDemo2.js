import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// RouterDemo2.propTypes = {
//   Pok: PropTypes.array,
// };

// RouterDemo2.defaultProps = {
//   Pok: [],
// };

function RouterDemo2() {
  const [Poke, setPoke] = useState([]);

  useEffect(() => {
    async function fetchPoke() {
      try {
        const URL = " https://pokeapi.co/api/v2/pokemon/ditto";
        const responseURL = await fetch(URL);
        const responseJson = await responseURL.json();
        console.log(responseJson.stats);
        setPoke(responseJson.stats);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPoke();
  }, []);

  return (
    <ul>
      {Poke.map((Pokemon) => (
        <li key={Pokemon.stat.name}>
          <Link to={`/routerDemo2/${Pokemon.stat.name}`}>
            {Pokemon.stat.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default RouterDemo2;
