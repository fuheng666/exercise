import { CHANGE_NUMBER, COMPUTE } from "./actionType";

const state = {
    prevNumber:0,//一个输入框的值
    operator:'+',//操作符
    nextNumber:0,//第一个操作符的值
    result:0//结果
}


const reducer = (prevState=state,action) =>{
  let newState = {...prevState}
  switch(action.type){
    case CHANGE_NUMBER:
    newState[action.payload.numType] = action.payload.num  
    break;
    case COMPUTE:
    newState["result"] =
      Number(newState.prevNumber) + Number(newState.nextNumber);
    console.log(newState["result"]);
    break;
    
    default:
      break;
  }
  return newState
}
export default reducer;