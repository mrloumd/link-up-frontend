import React from "react";
import AuthSection from "./AuthSection";

function LandingPage() {
  return (
    <main className='w-screen h-screen flex flex-wrap justify-center items-center '>
      <section className='flex-1 flex flex-col text-center  text-black font-macondo-swash-caps min-w-[520px] min-[784px] max-w-full mq750:min-w-full mq1275:flex-1'>
        <h1 className='m-0 text-[300px] max-w-full box-border pl-5 pr-5 mq750:text-[120px] mq450:text-[75px] mq750:mt-[120px] mq450:mt-[75px]'>
          {" "}
          LU
        </h1>
      </section>
      {/* <section className='w-[400px] text-center'>LU</section> */}
      <AuthSection />
    </main>
  );
}

export default LandingPage;
