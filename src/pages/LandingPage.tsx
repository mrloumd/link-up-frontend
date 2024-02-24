import React from "react";

function LandingPage() {
  return (
    <main className='w-full relative bg-white overflow-hidden flex flex-row items-start justify-start [row-gap:20px] tracking-[normal] text-center text-[300px] text-black font-macondo-swash-caps mq1525:flex-wrap'>
      <section className='flex-1 flex flex-col items-center justify-center min-w-[624px] min-h-[1080px] max-w-full mq850:min-w-full mq1525:flex-1'>
        <h1 className='m-0 w-[388px] h-[354px] relative text-inherit font-normal font-inherit inline-block max-w-full box-border pl-5 pr-5 mq850:text-[120px] mq450:text-[75px]'>
          LU
        </h1>
      </section>

      <section className='flex-[0.9583] flex flex-col items-center justify-start py-[200px] px-5 box-border gap-[50px_0px] min-w-[624px] min-h-[1080px] max-w-full text-left text-51xl text-black font-lato mq850:min-w-full mq1525:flex-1 mq1525:min-h-[auto] mq450:gap-[50px_0px] mq450:pt-[84px] mq450:pb-[84px] mq450:box-border mq1225:pt-[130px] mq1225:pb-[130px] mq1225:box-border'>
        <div className='w-[760px] flex flex-row items-center justify-center max-w-full text-center'>
          <h1 className='m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq850:text-37xl mq450:text-23xl'>
            Lorem Ipsum
          </h1>
        </div>
        <div className='w-[760px] flex flex-row items-center justify-start max-w-full text-17xl'>
          <h3 className='m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq850:text-10xl mq450:text-3xl'>
            Neque porro quisquam est qui dolorem, Neque porro quisquam est qui
            dolorem
          </h3>
        </div>
        <div className='w-[760px] flex flex-col items-center justify-start py-0 pr-[100px] pl-0 box-border gap-[20px_0px] max-w-full text-5xl text-darkslategray mq850:pr-[50px] mq850:box-border mq450:pr-5 mq450:box-border'>
          <div className='self-stretch rounded-81xl overflow-hidden flex flex-row items-center justify-center max-w-full'>
            <div className='flex-1 relative inline-block max-w-full mq450:text-lgi'>
              Join now
            </div>
          </div>
          <button className='cursor-pointer [border:none] p-0 bg-cornflowerblue-100 self-stretch rounded-81xl overflow-hidden flex flex-row items-center justify-center min-h-[60px] max-w-full hover:bg-cornflowerblue-200'>
            <b className='flex-1 relative text-5xl inline-block font-lato text-darkslategray text-center max-w-full mq450:text-lgi'>
              Create Account
            </b>
          </button>
          <div className='self-stretch rounded-81xl overflow-hidden flex flex-row items-center justify-center max-w-full'>
            <div className='flex-1 relative inline-block max-w-full mq450:text-lgi'>
              Already have an account?
            </div>
          </div>
          <button className='cursor-pointer [border:none] p-0 bg-darkslategray self-stretch rounded-81xl overflow-hidden flex flex-row items-center justify-center min-h-[60px] max-w-full hover:bg-dimgray'>
            <b className='flex-1 relative text-5xl inline-block font-lato text-cornflowerblue-100 text-center max-w-full whitespace-nowrap mq450:text-lgi'>
              Log in
            </b>
          </button>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
