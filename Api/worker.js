self.onmessage = function (event) {
  const result = event.data * 2; // convert the normalization

  //   computation
  self.postMessage(result);
};
