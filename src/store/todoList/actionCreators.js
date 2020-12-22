import store from '../index'
import { ADD_NEW_TODO, ChangeNewTodo } from "./actonType";

 const  addNewTodo = (title) =>{
      let action = {
        type: ADD_NEW_TODO,
        title,
      };
      store.dispatch(action)
    }
    const changeNewTodo = (id) => {
     let action = {
       type: ChangeNewTodo,
       id,
     };
     store.dispatch(action);
   };
   const removeTodo=(id)=>{
 let action = {
   type: "removeNewTodo",
   id,
 };
 store.dispatch(action);
   }

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addNewTodo,
  changeNewTodo,
  removeTodo,
};