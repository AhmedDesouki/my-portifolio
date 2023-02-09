import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Cursor } from "react-simple-typewriter";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,The Name's Ahmed Desouki",
      "Where I offer you an offer you can't refuse ",
      "<SomeKickAssCode />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Hero;