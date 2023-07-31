export function dataForSekunderingslagring() {
  const getAllKeysFromLocalStorage = () => {
    const keys = Object.keys(localStorage);
    return keys;
  };

  // Function to parse JSON values and filter keys with JSON values
  const parseJSONValues = (keys) => {
    const correctValues = [];

    keys.forEach((key) => {
      const startsWithNumber = /^\d/.test(key); // Test if the key starts with a number using regex

      if (startsWithNumber) {
        const numericValue = parseInt(key, 10);
        correctValues.push(numericValue);
      }
    });

    return correctValues;
  };


  // Get all keys when the component mounts
  const allKeys = getAllKeysFromLocalStorage();

  // Get the array with parsed JSON values
  const parsedJSONArray = parseJSONValues(allKeys);

  let lowestNumber = 1; // Starting from 1, you can change this if needed

  while (parsedJSONArray.includes(lowestNumber)) {
    lowestNumber++;
  }
  return lowestNumber
}
