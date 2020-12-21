let state ={
    list:[
      {id:1,title:'今天周一.。。'},
      {id:2,title:'明天周二'}
    ]
}

const reducer = (prevState=state,action)=>{
  let newState = {...prevState}
  return newState
}
export default reducer;