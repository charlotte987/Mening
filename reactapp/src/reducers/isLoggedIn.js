export default function (isLoggedIn = false, action) {
  if (action.type === "setIsLoggedIn") {
    return true;
  } else {
    return isLoggedIn;
  }
}
