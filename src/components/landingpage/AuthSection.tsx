import React from "react";
import { Link } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

function AuthSection() {
  return (
    <div className='flex-[0.95] flex flex-col items-center justify-start px-5 box-border gap-[50px_0px] min-w-[520px] max-w-full text-left text-13xl text-black font-lato mq750:gap-[50px_0px] mq750:pt-[130px] mq750:pb-[130px] mq750:box-border mq750:min-w-full mq1275:flex-1'>
      <div className='w-[600px] flex flex-row items-center justify-center max-w-full text-center'>
        <h1 className='m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq750:text-7xl mq450:text-lgi'>
          Lorem Ipsum
        </h1>
      </div>
      <div className='w-[600px] flex flex-row items-center justify-start max-w-full text-9xl'>
        <h1 className='m-0 h-[68px] flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-3xl'>
          Neque porro quisquam est qui dolorem, Neque porro quisquam est qui
          dolorem
        </h1>
      </div>
      <div className='w-[600px] flex flex-col items-start justify-center py-0 pr-[100px] pl-0 box-border gap-[20px_0px] max-w-full text-lg text-darkslategray mq750:pr-[50px] mq750:box-border mq450:pr-5 mq450:box-border'>
        <div className='self-stretch rounded-81xl overflow-hidden flex flex-row items-center justify-center max-w-full'>
          <div className='flex-1 relative inline-block max-w-full'>
            Join now
          </div>
        </div>
        <button
          className='btn w-[250px] cursor-pointer [border:none] py-2.5 px-0 bg-cornflowerblue rounded-81xl overflow-hidden flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-dimgray'
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_1"
            ) as HTMLDialogElement | null;
            if (modal) {
              modal.showModal();
            }
          }}
        >
          Create Account
        </button>
        <Signup />
        <div className='self-stretch rounded-81xl overflow-hidden flex flex-row items-center justify-center max-w-full'>
          <div className='flex-1 relative inline-block max-w-full'>
            Already have an account?
          </div>
        </div>
        <button
          className='btn w-[250px] text-sm text-bold font-lato text-white cursor-pointer [border:none] py-2.5 px-0 bg-darkslategray rounded-81xl overflow-hidden flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-dimgray'
          onClick={() => {
            const modal = document.getElementById(
              "my_modal_2"
            ) as HTMLDialogElement | null;
            if (modal) {
              modal.showModal();
            }
          }}
        >
          Login
        </button>
        <Login />
      </div>
    </div>
  );
}

export default AuthSection;
