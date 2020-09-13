import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// RouterDemo2.propTypes = {
//   nature: PropTypes.string,
// };

// RouterDemo2.defaultProps = {
//   nature: "",
// };

function RouterDemo2(props) {
  const [Poke, setPoke] = useState([]);
  // const { nature } = props;

  useEffect(() => {
    async function fetchPoke() {
      const URL = `https://pokeapi.co/api/v2/pokemon/ditto`;
      const responseURL = await fetch(URL);
      const responseJson = await responseURL.json();
      console.log(responseJson.stats);
      setPoke(responseJson.stats);
    }
    fetchPoke();
  }, []);

  return (
    <div>
      {Poke.map((Pokemon) => (
        <p key={Pokemon.stat.name}>{Pokemon.stat.name}</p>
      ))}
    </div>
  );
}

export default RouterDemo2;
