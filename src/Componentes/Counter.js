import { useEffect, useState } from "react";
const Parent = () => {
  const [state, setState] = useState({
    value: 0,
  });

  const incrementNumber = () => {
    setState({ value: state.value + 1 });
  };

  const printName = () => {
    console.log("Rodrigo");
  };

  return state === 0 ? (
    <Counter
      state={state}
      printName={printName}
      incrementNumber={incrementNumber}
    />
  ) : null;
};

const Counter = ({ printName, incrementNumber, state }) => {
  useEffect(() => {
    // printName();
    console.log(state)
  }, [state]);

  return (
    <div>
      {/* <p>{state.value}</p> */}
      <button onClick={incrementNumber}>Increment</button>
    </div>
  );
};

export default Counter;
