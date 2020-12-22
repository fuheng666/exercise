/* 
@numType  代表第几个输入框
@num //输入的值
*/
import { CHANGE_NUMBER, COMPUTE } from "./actionType";
import store from '../index'


export const changeNumber = (numType, num) => {
  let action = {
    type: CHANGE_NUMBER,
    payload: {numType
,num},
  };
  store.dispatch(action)
};

export const compute = () => {
  let action = {
    type: COMPUTE,
  };
  store.dispatch(action);
};