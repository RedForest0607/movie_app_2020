import React from 'react';
import {Component} from 'react';
//렌더링할 컴포넌트에 다른 컴포넌트 가져와서 렌더링

//인수로 받은 오브젝트에서 Fav라는 이름의 value를 꺼내옴
/*
function Food({name}){
  foodILike.map(current =>{
  return <h1>{foodILike.name}</h1>
  })
}
*/
class App extends Component{
  //import 컴포넌트를 헤더에서 안해줬다면, react.Component
  state = {
    count:0
  };

  //function 선언
  add = () => {
    this.setState(current => ({count: current.count+1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count-1}));
  };
  render(){
    return <div>
      <h1>the number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      {/*add.eventListener */}
      <button onClick={this.minus}>Minus</button>
      </div>;
  }
}



export default App;
