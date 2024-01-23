// 0.React = 엔진 -> 데이터변경을 감지하여 UI를 그려주는 엔진
// 1.실행과정 (index.html) - SPA(Single page application)
// 2.JSX문법
// 3.바벨(자바스크립트 ES5) -> ES6

// (1) return시 1개의 DOM만 리턴 가능하다.
// (2) 변수선언은 let or const로만 해야한다. (JavaScript는 타입이 없음)
// (3) if 사용 불가 (x) -> 삼항연산자 (O) (조건 ? 값(true) : 값(false))
// (4) 조건부 렌더링 (조건 && 값(true)) flase는 없음
// (5) css 디자인
// - 내부에 적는 방법
// - 외부 파일에 적는 방법
// - 라이브러리 사용 (부트스트랩, componet-styled)

/**

let a = 10; // 변수
const b = 20; // 상수

function App() {
  let c;
  //let d = undefined;

  console.log(1, c);

  const mystyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={{ mystyle }}>
        Test {a === 10 ? '10 입니다.' : '10이 아닙니다.'}
      </div>
      {<h1 className="box-style">중입니다. {b === 20 && '20 입니다'} </h1>}
      <hr />
    </div>
  );
*/

/** useState
 
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

  function App() {
    //let number = 1; //상태 값 아님
    const [number, setNumber] = useState(2); //React안에 외부 라이브러리 hooks 라이브러리 상태값이 됨.(상태를 변경하는 함수)

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
  }
  */

/** useState - 1
  import { useState } from 'react';
import './App.css';

function App() {
  //다운로드 받음
  console.log('app 실행 됨');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '이순신' },
  ];

  const [users, setUsers] = useState(sample); //레퍼런스가 변경되어야 동작한다!

  const download = () => {
    //fetch().then().then()
    //기존 데이터 세팅

    //const a = sample.concat({ id: 5, name: '장비' });

    setUsers([...sample, { id: num, name: '장비' }]); //기존 데이터가 있다면 손대지 말고 추가하라는 의미
    //전개연산자로 깊은 복사를 쓰면 레퍼런스가 변경되기 때문에 리렌더링이 가능
    setNum(num + 1);
  };

  //렌더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>

      {users.map((u) => (
        <h1>
          {u.id}, {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
*/
