export default function (infos = null, action) {
  if (action.type == "saveInfos") {
    return { title: action.title, desc: action.desc };
  } else {
    return infos;
  }
}
