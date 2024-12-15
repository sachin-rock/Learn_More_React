import React, { useState } from "react";
import "./App.css";
import Toast from "./Toast";

const App = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const handleMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);

    setTimeout(() => {
      setToastMessage("");
      setToastType("");
    }, 3000);
  };

  return (
    <div>
      <button onClick={() => handleMessage("This is info Message", "Info")}>
        Info
      </button>
      <button
        onClick={() => handleMessage("This is Success Message", "Success")}
      >
        Success
      </button>
      <button onClick={() => handleMessage("This is Error Message", "Error")}>
        Error
      </button>
      <button
        onClick={() => handleMessage("This is Warning Message", "Warning")}
      >
        Warning
      </button>
      {setToastMessage && <Toast message={toastMessage} type={toastType} />}
    </div>
  );
};

export default App;
