import "./App.css";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  function key(event) {
    if (event.key === "Enter") {
      newpara();
      setData("");
    }
  }
function clear(index) {
  toast.success("Successfully Cleared", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  const updatedList = [...list];
  updatedList[index].cleared = true; // Add a property to mark the item as cleared
  setList(updatedList);
}

  function remove(index) {
    toast.error("Successfully Removed", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

 const updatedList = list.map((item, i) =>
   i === index ? { ...item, cleared: true } : item
 );
    setList(updatedList);
  }

  function newpara() {
    setList([...list, data].reverse());
  }

  return (
    <div className="App d-flex justify-content-center">
      <div>
        <div className="d-flex gap-5">
          <FormControl
            className="w-75"
            onChange={(e) => setData(e.target.value)}
            value={data}
            type="text"
            onKeyPress={key}
          />
          <Button onClick={newpara}>Add</Button>
        </div>
        {list.map((item, index) => (
          <div
            key={index}
            className={`d-flex gap-4 w-75 main rounded-3 d-flex mt-2 align-items-center ${
              item.cleared ? "bg-success" : ""
            }`}
          >
            <p className=" text-wrap">{item}</p>
            <p
              className="ms-auto border border-2  border-danger d-flex justify-content-center"
              style={{ borderRadius: "50%", width: "2rem", height: "2rem" }}
              onClick={() => remove(index)}
            >
              x
            </p>
            <p
              className="ok border border-2  border-danger d-flex justify-content-center"
              style={{ borderRadius: "50%", width: "2rem", height: "2rem" }}
              onClick={() => clear(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"
                />
              </svg>
            </p>
          </div>
        ))}

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
