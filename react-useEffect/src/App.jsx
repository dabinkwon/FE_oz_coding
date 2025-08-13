import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div>Data list</div>
      {data.map((el) => (
        <div key={el.id}>{el.content}</div>
      ))}
      {/* <MouseFollower /> */}
      <AlertTimer/>
    </>
  );
}

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log("mouseMoved!");
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: position.y,
        left: position.x,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "purple",
        transform: "translate(-50%,-50%)",
      }}
    ></div>
  );
};

const AlertTimer = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const setTimeId = setTimeout(() => {
      console.log(showAlert);
      showAlert === true ? alert("시간 초과") : null;
    }, 3000);
    return () => {
      clearTimeout(setTimeId);
    };
  });

  return <button onClick={()=>setShowAlert(false)}>빨리 클릭</button>

};

export default App;
