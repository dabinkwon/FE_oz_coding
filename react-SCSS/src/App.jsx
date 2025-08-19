import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="test">This is a test div</div>
      <h2>Practice SCSS variables</h2>
      <ul>
        <li>hi</li>
        <li>I'm learning React</li>
        <li>It's so good to see you</li>
        <li>Let's get started with SCSS</li>
      </ul>
      <section>
        <article>SCSS syntax includes</article>
        <article>the use of variables,</article>
        <article>nested syntax</article>
        <article>and minxins.</article>
      </section>
    </>
  );
}

export default App;
