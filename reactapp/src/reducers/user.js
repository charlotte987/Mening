export default function (user = {}, action) {
  if (action.type === "userInfo") {
    console.log("user:", action.user);
    return action.user;
  } else {
    return user;
  }
}