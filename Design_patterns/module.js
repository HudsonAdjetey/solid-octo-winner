const Module = (function () {
  // private variable
  let privateVariable = "I am a private variable";
  function privateMethod() {
    console.log(privateVariable);
  }

  return {
    publicMethod: function () {
      console.log("This is a public key function");
      privateMethod();
    },
  };
})();

Module.publicMethod();
