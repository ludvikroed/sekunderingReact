import  { useState } from "react";
import Helmet from "react-helmet";

const LagreSekunderinger = ({ løpereData }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // Function to get all keys from localStorage
  const getAllKeysFromLocalStorage = () => {
    const keys = Object.keys(localStorage);
    return keys;
  };

  // Function to parse JSON values and filter keys with JSON values
  const parseJSONValues = (keys) => {
    const correctValues = [];

    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      const startsWithNumber = /^\d/.test(key); // Test if the key starts with a number using regex

      if (startsWithNumber) {
        const newKey = key.split("l");
        console.log(newKey);

        correctValues.push({ newKey, value });
      }
    });

    return correctValues;
  };

  // Get all keys when the component mounts
  const allKeys = getAllKeysFromLocalStorage();
  console.log(allKeys, "allKeys");

  // Get the array with parsed JSON values
  const parsedJSONArray = parseJSONValues(allKeys);
  console.log(parsedJSONArray, "her");

  /*
    const myArray = ["test", "test"];
    const jsonArrayOfMyArray = JSON.stringify(myArray);
    localStorage.setItem("test", jsonArrayOfMyArray);
  */
  return null;
};

export default LagreSekunderinger;
