import { useEffect, useRef } from "react";
import "../../../App.css";
import { getAllData, saveItem } from "../../../firebase/function/function";

function List() {
  const fname = useRef();
  const lname = useRef();

  const save = () => {
    const data = {
      fname: fname.current.value,
      lname: lname.current.value,
    };

    saveItem(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="App">
      <div>
        <input type="text" ref={fname} placeholder="first name"/>
        <input type="text" ref={lname} placeholder="last name"/>
        <button onClick={save}>save</button>
      </div>
    </div>
  );
}

export default List;
