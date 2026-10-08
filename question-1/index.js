// takes mixed array and returns a promise

const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    
    // rejects if the input is not an array
    if (!Array.isArray(mixedArray)) {
      reject(new Error("input must be an array - please try again"))
      return
    }
    // keep only the strings and make them lowercase
    const words = mixedArray
      .filter((item) => typeof item === "string")
      .map((word) => word.toLowerCase());
    resolve(words)
  })
}


const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

// valid input, this one resolves

lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message))


// not an array, this one rejects
lowerCaseWords("not an array")
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message))