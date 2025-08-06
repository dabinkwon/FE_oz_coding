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

// map
// 과일 이름만 담겨있는 배열 만들기
console.log(
  fruits.map((fruit) => {
    return fruit.name;
  })
);

// filter
// 과일 이름에 '주스' 붙인 배열 만들기
console.log(fruits.map((fruit) => fruit.name + "주스"));

// filter
// 과일 색이 빨강인 과일만 남긴 배열 만들기
console.log(fruits.filter((fruit) => fruit.color === "빨강"));

// filter
// 과일 크기가 3 이상인 과일만 남긴 배열 만들기
console.log(fruits.filter((fruit) => fruit.size >= 3));

// filter & map
// 과일 색이 빨강이면서 크기가 3이상인 과일의 이름만 남긴 배열 만들기
console.log(
  fruits
    .filter((fruit) => fruit.color === "빨강" && fruit.size >= 3)
    .map((fruit) => fruit.name)
);
