import React from "react";
import { IconButton } from "@chakra-ui/react";
import { FiArrowDown } from "react-icons/fi";
import { forwardRef } from 'react';
import { useState } from "react";
/* import { bgColor } from "../theme/theme"; */


const Landing = forwardRef(({formRef}: any, ref: any) => {

  //setMoving a moving pryc
  const [clicked, setClicked] = useState(false)
  
  

const onClickHandler = () => {
  setClicked(true)
  formRef.current?.scrollIntoView({behavior: "smooth"})
  setTimeout(()=> {setClicked(false)}, 1000)
}



  return (
    <div className={`flex flex-col justify-center items-center h-full bg-blue`} ref={ref}> {/*  ${bgColor.landing} */}
      <h1 className="text-4xl text-slate-300 md:text-6xl">Welcome to ATH calculator</h1>
      <div className={`mt-28  }`}>
        <IconButton
          colorScheme=/* "purple" */"teal"
          aria-label="arrow"
          icon={<FiArrowDown />}
          size="lg"
          onClick={onClickHandler}
          className={`${clicked ? "animate-spin" : "animate-bounce"}`}
     
        />
      </div>
    </div>
  );
});

export default Landing;