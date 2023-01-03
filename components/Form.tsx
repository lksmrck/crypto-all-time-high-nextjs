import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import CryptoSelect from "./CryptoSelect";
import { forwardRef, useState, useEffect, useContext } from "react";
/* import { bgColor } from "../theme/theme"; */

import CryptoContext from "../state/CryptoContext";

const Form = forwardRef(({ landingRef, resultRef }: any, ref: any) => {
  const [clicked, setClicked] = useState(false);
  const [selectedCryptoImg, setSelectedCryptoImg] = useState<string | null>(
    null
  );

  const cryptoContext = useContext(CryptoContext);
  const { getDashboardData } = cryptoContext;

  useEffect(() => {
    getDashboardData();
  }, []);

  const clickBackHandler = () => {
    setClicked(true);
    landingRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  const submitFormHandler = (e: any) => {
    e.preventDefault();
    setClicked(true);
    resultRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <div
      className={`h-screen w-1/2 flex justify-center items-center bg-white`} /*${bgColor.form}   */
      ref={ref}
    >
      <div className=" w-72 h-72 bg-stone-800 flex flex-col justify-center items-center rounded-lg shadow-md shadow-teal-500">
        <h1 className="text-slate-300 text-xl mb-6 font-bold">
          Insert your Crypto holdings
        </h1>
        <form className="animate-floatUp w-48" onSubmit={submitFormHandler}>
          <section className="[&>*]:mt-2">
            <CryptoSelect imgURL={setSelectedCryptoImg} />
            <Input
              color="teal"
              placeholder="Insert amount"
              _placeholder={{ color: "inherit" }}
              style={{ backgroundColor: "#cbd5e1" }}
            />
          </section>
          <section className="[&>*]:m-1 mt-2">
            <Button
              colorScheme="teal"
              size="md"
              type="submit"
              className={`mt-28 ${clicked ? "animate-spin" : ""} 
            `}
            >
              Calculate
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              size="md"
              onClick={clickBackHandler}
              className={`mt-28 ${clicked ? "animate-spin" : ""} 
            `}
            >
              Back
            </Button>
          </section>
        </form>
      </div>
      <div className="ml-8 mt-4 w-48 h-40 flex justify-center items-center ">
        {selectedCryptoImg && (
          <img
            src={selectedCryptoImg}
            width="130px"
            height="130px"
            className="animate-floatUp"
          />
        )}
      </div>
    </div>
  );
});

export default Form;
