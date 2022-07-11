class ApiCall {
  static call(apiPayload) {
    const { url } = apiPayload;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}

export default ApiCall;
