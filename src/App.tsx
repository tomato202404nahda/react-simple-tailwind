import React from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="App w-full max-w-full">
        <h1 className="text-3xl font-bold underline nanum">Hello world!</h1>
        <div className="flex flex-col md:flex-row w-full justify-evenly">
          <img
            className=" w-[30vw] h-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Irbis4.JPG"
            alt=""
          />
          <img
            className="w-[30vw] h-auto aspect-auto"
            src="https://i0.wp.com/snowleopard.org/wp-content/uploads/2023/10/SnowLeopardTrust_Mongolia-6.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
