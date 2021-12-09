export default function (infos = [], action) {
  if (action.type === "saveInfos") {
    return { title: action.title, desc: action.desc, boardId: action.boardId };
  } else {
    return infos;
  }
}
