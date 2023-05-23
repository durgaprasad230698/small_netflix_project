import React from "react";

const App = () => {
  return <Movie />;
};

const Movie = () => {
  return (
    <article>
      <ImageComponent />
      <TitleComponent />
    </article>
  );
};

const ImageComponent = () => {
  return (
    <img
    src="https://occ-0-4829-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-iJOnLkBO7tPRFS6VNfDmHioAqvaD630vP1dKmMVTLPoz5MXFFzAxb0sqmjdUj_Q246W9vT5GIdKZym5fWiVZcFR3ldA1WfvsZiRyYSgENJ3uggxsaDGLEnJWbvhrwtXvC.jpg?r=326"
    alt="netflix image show"
    />
  );
};

const TitleComponent = () => {
  return <h1>Money Heist web series</h1>
};

export default App;