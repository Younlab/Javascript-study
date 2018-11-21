const addOneItem = (state, todoItem) => {
  const obj = {
    completed: false,
    item: todoItem
  };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
};

const toggleComplate = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index]
    .completed;
  // 로컬 스토리지에 데이터를 갱신하는 DOM
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};
const clearAll = state => {
  state.todoItems = [];
  localStorage.clear();
};

export { addOneItem, removeOneItem, toggleComplate, clearAll };
