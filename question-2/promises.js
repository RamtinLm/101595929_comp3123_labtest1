// same as delayedSuccess but returns a promise
// resolves the message after 500ms
const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = { message: 'delayed success!' };
      resolve(success)
    }, 500)
  })
}

// same as delayedException but returns a promise
// rejects with an error after 500ms as requested by description
const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('delayed exception!'))
    }, 500)
  })
};


// call each promise separately
// then handles success, catch handles the error
resolvedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error({ error: error.message }))

rejectedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error({ error: error.message }))
