import React, { useEffect, useState } from "react";
import "./Colors.css";
import axios from "axios";
import Box from "../../Features/Box/Box";

function Colors() {
  const [colors, setColors] = useState(null);
  const [colorsFromStorage, setColorsFromStorage] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);
  const [max, setMax] = useState(0);

  const updateData = () => {
    setIsUpdated((prev) => !prev);
  };

  const incrementVotes = async (colorId) => {
    try {
      await axios.put("http://localhost:8000/colors", { id: colorId });
      updateData();
    } catch (error) {
      console.log(error);
    }
  };

  const setToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  const getFromLocalStorage = () => {
    const data = localStorage.getItem("data");
    const dataOfColors = JSON.parse(data);
    setColorsFromStorage(dataOfColors);
    console.log(dataOfColors);
  };

  const getColorWithMaxVotes = (array) => {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      if (max < array[i].votes) {
        max = array[i].votes;
      }
    }
    return max;
  };

  useEffect(() => {
    getFromLocalStorage();
    setMax(getColorWithMaxVotes(colorsFromStorage));

    const getColors = async () => {
      try {
        const res = await axios.get("http://localhost:8000/colors");
        setColors(res.data);
        setMax(getColorWithMaxVotes(res.data));
        setToLocalStorage(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getColors();
  }, [isUpdated]);

  return (
    <div className="container">
      {colors
        ? colors.map((color) => {
            return (
              <Box
                color={color.name}
                numberOfVotes={color.votes}
                progressWidth={
                  color.votes === max ? "200px" : 200 * (color.votes / 74)
                }
                handleClick={async () => await incrementVotes(color._id)}
              />
            );
          })
        : colorsFromStorage.map((color) => {
            return (
              <Box
                color={color.name}
                numberOfVotes={color.votes}
                progressWidth={
                  color.votes === max ? "200px" : 200 * (color.votes / 74)
                }
                handleClick={async () => await incrementVotes(color._id)}
              />
            );
          })}
    </div>
  );
}

export default Colors;
