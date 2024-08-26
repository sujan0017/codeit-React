import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counter/counterSlice";

function About() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  function incrementCounterValue() {
    dispatch(increment());
  }
  function decrementCounterValue() {
    dispatch(decrement());
  }
  function resetCounterValue() {
    dispatch(reset());
  }

  return (
    <>
      <div className="w-full h-[80vh] bg-green-300 flex justify-center items-center">
        <h1 className="text-3xl text-white font-bold">AboutPage</h1>
        <div className="flex gap-5">
          <h2>{count}</h2>
          <button
            onClick={incrementCounterValue}
            className="bg-blue-500 text-white rounded px-3 oy-1 w-max"
          >
            ADD
          </button>
          <button
            onClick={decrementCounterValue}
            className="bg-blue-500 text-white rounded px-3 oy-1 w-max"
          >
            Subtract
          </button>
          <button
            onClick={resetCounterValue}
            className="bg-blue-500 text-white rounded px-3 oy-1 w-max"
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
