
import { ADD_NEW_TODO, ChangeNewTodo } from "./actonType";
let state = {
  list: [
    { id: 1, title: "今天周一.。。", isFinished: true },
    { id: 2, title: "明天周二", isFinished: false },
  ],
};

const reducer = (prevState = state, action) => {
  let newState = { ...prevState };
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_NEW_TODO:
      newState.list.push({
        id: handler.getId(newState.list),
        title: action.title,
        isFinished: false
      });
      break;
    case ChangeNewTodo:
      newState.list = handler.change(newState.list, action.id);
      break;
    case "removeNewTodo":
      newState.list = handler.remove(newState.list, action.id);
      break;
  }

  return newState;
};

const handler = {
  getId(list) {
    list = list.slice();
    if (list.length === 0) return 1;
    return (
      list.sort((a, b) => {
        return b.id - a.id;
      })[0].id + 1
    );
  },
  change(list, id) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list[i].isFinished = !list[i].isFinished;
      }
    }
    return list;
  },
  remove(list, id) {
    list = list.slice();
    return list.filter((item) => {
      if (item.id === id) return false;
      return true;
    });
  },
};

export default reducer;
