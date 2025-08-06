import "./App.css";

const fruits = [
  { name: "딸기", color: "빨강", size: 2 },
  { name: "바나나", color: "노랑", size: 5 },
  { name: "키위", color: "초록", size: 3 },
  { name: "사과", color: "빨강", size: 4 },
  { name: "블루베리", color: "파랑", size: 1 },
  { name: "오렌지", color: "주황", size: 4 },
  { name: "포도", color: "보라", size: 2 },
  { name: "레몬", color: "노랑", size: 3 },
  { name: "체리", color: "빨강", size: 2 },
  { name: "수박", color: "초록", size: 8 },
];

function App() {
  return (
    <>
      {fruits
        .filter((fruit) => fruit.color === "빨강")
        .map((fruit) => (
          <div key={fruit.name}>
            이름 : {fruit.name}, 색깔 : {fruit.color}, 크기 :{fruit.size}
          </div>
        ))}
    </>
  );
}

export default App;
