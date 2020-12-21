import React, { Component,useContext } from 'react'
import moneyContext from "./moneyContext";

let { Provider, Consumer } = moneyContext;
// export default class ContextChild extends Component {
//   render() {
//     return (
//       <Consumer>
//         {
//           value=>{
//             console.log(value);
//             return <p>{value.money} </p>;
//           }
//         }
//       </Consumer>
//     )
//   }
// }

// export default class ContextChild extends Component {
  
//   static contextType = moneyContext
  
//   render() {
       
//     return (
//       <div>
//       {
//         this.context.money
//       }
//       </div>
//     )
//   }
// }
console.log(Component, Provider,Consumer);
 
//eslint-disable-next-line
export default ()=>{

  const value = useContext(moneyContext);
  return (
    <div>
      {
        value.money
      }
    </div>
  );
}