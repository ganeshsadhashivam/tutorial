import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <>
      <h1>MyFirst component</h1>
      <ul>
        <li>
          <a>hello world</a>
        </li>
      </ul>
      <Person />
      <Message />
    </>
  );
};

//nesting componenets
const Person = () => <h2>john</h2>;

const Message = () => <h2>hi hello</h2>;

//we can create react element like this also
// const Greeting = () => {
//   return React.createElement("h2", {}, "hello World");
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
