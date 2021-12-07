export default function (ideaContent = null, action) {
  if (action.type == "addIdea") {
    return { idea: action.idea, ideaDescription: action.ideaDescription };
  } else {
    return ideaContent;
  }
}
