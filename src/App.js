import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [rotate, setRotate] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setRotate(rotate + 5);
  }, [scrollPosition]);

  console.log(scrollPosition);

  let windmillStyles = {
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <div className="App">
      <div className="windmill" style={windmillStyles}></div>
    </div>
  );
}

export default App;
