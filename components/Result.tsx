import React from "react";
import { forwardRef } from "react";

const Result = forwardRef(({ formRef }: any, ref: any) => {
  return (
    <div className="w-1/2 flex justify-center items-center" ref={ref}>
      <div className="border rounded-lg shadow-lg p-5">
        <p>The value in current prices is:</p>
        <p>The value in ALL TIME HIGH prices is:</p>
        <p>This crypto is 55% under its ATH value. Hodl strong!</p>
      </div>
    </div>
  );
});

export default Result;
