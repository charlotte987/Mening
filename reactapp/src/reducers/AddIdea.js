export default function (IdeaContent = null, action) {
  if (action.type == "AddIdea") {
    return { idea: action.idea, ideaDescription: action.ideaDescription };
  } else {
    return IdeaContent;
  }
}
