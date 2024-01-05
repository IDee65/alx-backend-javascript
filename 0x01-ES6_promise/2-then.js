export default function handleResponseFromAPI(resolvedPromise) {
    const newPromise = resolvedPromise
      .then(() => ({ status: 200, body: 'success' }))
      .catch(() => Error())
      .finally(() => {
        console.log('Got a response from the API');
      });
    return newPromise;
  }
