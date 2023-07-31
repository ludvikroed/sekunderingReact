export function getLagretData() {
  const getAllKeysFromLocalStorage = () => {
    const keys = Object.keys(localStorage);
    return keys;
  };

  // Function to parse JSON values and filter keys with JSON values
  const parseJSONValues = (keys) => {
    const correctValues = [];

    keys.forEach((key) => {
      const value = JSON.parse(localStorage.getItem(key));
      const startsWithNumber = /^\d/.test(key); // Test if the key starts with a number using regex

      if (startsWithNumber) {
        const newKey = key.split("l");
        const copyValue = { ...value };
        copyValue["key"] = key;
        correctValues.push({ newKey, copyValue });
      }
    });
    return correctValues;
  };

  // Get all keys when the component mounts
  const allKeys = getAllKeysFromLocalStorage();
  const data = parseJSONValues(allKeys);

  const newData = data.map((data, index) => {
    return data["copyValue"];
  });


  return newData;
}
