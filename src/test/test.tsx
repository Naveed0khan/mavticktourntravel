import React from "react";

const array = [1, 2, 3, 4, 5, 6];

function Test() {
  const result = array.reduce((sum, num) => {
    return sum + num;
  }, 0);

  return (
    <div>
      <h2>Sum of All Numbers</h2>
      <p>Sum: {result}</p>
    </div>
  );
}

export default Test;
