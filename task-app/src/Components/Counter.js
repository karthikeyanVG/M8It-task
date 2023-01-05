import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions/actions";

const Counter = ({ count, onDecrement, onIncrement }) => (
  <div className="flex justify-center mt-20 ">
    <div className="w-full gap-5 h-40 flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <p className=" text-lg">Count: {count}</p>
      </div>
      <div className="space-x-4">
        <button
          className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onDecrement}
        >
          -
        </button>
        <button
          className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
