import { useState } from "react";
import pictureList from "../data/pictures.json";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const Pictures = () => {
  const [pictureUrl, setPictureUrl] = useState(
    pictureList[getRandomInt(8)].url
  );

  return (
    <img className="max-w-xl w-full" src={pictureUrl} alt="random picture" />
  );
};
