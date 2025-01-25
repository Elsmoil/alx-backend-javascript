function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
    // If success is false, we do nothing (implicitly returning a pending promise)
  });
}

module.exports = getPaymentTokenFromAPI;
