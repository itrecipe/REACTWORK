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
}
