import Form from "../components/Form";
import { useRef, useState, forwardRef } from "react";
import Landing from "../components/Landing";
import Result from "../components/Result";

export default function Home() {
  const formRef = useRef(null);
  const landingRef = useRef(null);
  const resultRef = useRef(null);

  return (
    <div className={`h-screen overflow-hidden `}>
      <Landing ref={landingRef} formRef={formRef} />
      <section className="flex w-2X">
        <Form ref={formRef} landingRef={landingRef} resultRef={resultRef} />
        <Result ref={resultRef} formRef={formRef} />
      </section>
    </div>
  );
}
