import { useRef, useEffect } from "react";

const FormChild = ({ formSubmit }) => {
  const nameref = useRef();
  const numberref = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    const details = {
      name: event.target.elements.name.value,
      number: event.target.elements.number.value
    };
    formSubmit(details);
    nameref.current.value=""
    numberref.current.value=""
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          Name: <input type="text" name="name" ref={nameref} />
        </p>
        <p>
          Number: <input type="number" name="number" ref={numberref} />
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FormChild;
