import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

function App() {
  //let number = 1; //상태 값 아님
  const [number, setNumber] = useState(2); //React안에 외부 라이브러리 hooks 라이브러리 상태값이 됨.

  const add = () => {
    setNumber(number + 1); //리엑트한테 number 값을 변경한다고 요청
    console.log('add', number);
  };

  //렌더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자 : {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
    </div>
  );
}

export default App;
