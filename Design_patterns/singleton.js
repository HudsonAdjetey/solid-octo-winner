export function createInstance() {
  return {
    username: "Hudson",
    password: "God is great",
    versionControl: true,
  };
}

const AuthenticationConfig = (function () {
  let instance;

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return;
    },
  };
})();

function authentication() {
  const isLogin = () => {
    console.log("Logged in");
  };

  const isSignUp = () => {
    console.log("Sign up");
  };

  return {
    login: isLogin,
    signUp: isSignUp,
  };
}

authentication().login;
authentication().signUp;

/* const login = expressAsyncHandler(async (req, res, next) => {
  try {
    const body = req.body;
    const { name, username, password } = body;
    const db = {};
    //   lookup in the data base
    const isUserIn = db.find((name) => name == req.body.name);
    if (isUserIn) {
      res.status(200).json({
        message: "Completed",
      });
    }
    console.log("Outside ");
    function showInfo() {}
  } catch (error) {
    console.error(error?.message);
    throw new Error(500, "server ended with error");
  }
});
 */
