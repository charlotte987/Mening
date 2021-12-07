export default function (IdeaContent = "", action) {
  if (action.type == "AddIdea") {
    return action.IdeaContent;
  } else {
    return IdeaContent;
  }
}
