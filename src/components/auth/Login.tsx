import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import { RootState } from "../../app/store";
import { UserData } from "../../features/types";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData: UserData = {
      username,
      password,
    };

    try {
      //** Dispatch the login action */
      await dispatch(login(userData) as any);

      //** Check if login was successful */
      if (!isError) {
        //** Reset the form fields */
        setFormData({
          username: "",
          password: "",
        });

        //** Redirect to the homepage */
        navigate("/home");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <dialog id='my_modal_2' className='modal '>
        <div className='modal-box mq750:w-[300px]'>
          <div className='modal-action flex items-center justify-center'>
            <form
              onSubmit={onSubmit}
              className='m-0 w-full px-20 mq450:px-[5px] gap-[20px_0px] max-w-full border-[1px] mq675:w-[calc(100%_-_40px)] mq450:pt-[26px] mq450:pb-[26px] mq450:box-border'
            >
              {/* if there is a button in form, it will close the modal */}
              <button
                className='m-3 cursor-pointer bg-white absolute top-0 right-0 '
                onClick={(event) => {
                  event.preventDefault();
                  const loginModal = document.getElementById(
                    "my_modal_2"
                  ) as HTMLDialogElement | null;
                  if (loginModal) {
                    loginModal.close();
                  }
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  // viewBox="0 0 24 24"
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>

              <div className='cursor-pointer [border:none] mb-10 p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center max-w-full'>
                <h1 className='m-0 flex-1 relative text-13xl text-black text-center inline-block max-w-full mq450:text-lgi mq750:text-7xl'>
                  Sign in to your account
                </h1>
              </div>
              <div className='self-stretch flex flex-col items-center justify-center gap-[40px_0px] min-h-[262px] max-w-full'>
                <div className='w-full'>
                  <label className='input input-bordered custom-border flex items-center gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      className='w-4 h-4 opacity-70'
                    >
                      <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
                    </svg>
                    <input
                      type='text'
                      className='grow'
                      placeholder='Username'
                      name='username'
                      value={username}
                      onChange={onChange}
                    />
                  </label>
                </div>

                <div className='w-full'>
                  <label className='input input-bordered custom-border flex items-center gap-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      className='w-4 h-4 opacity-70'
                    >
                      <path
                        fillRule='evenodd'
                        d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <input
                      type='password'
                      className='grow'
                      placeholder='Password'
                      name='password'
                      value={password}
                      onChange={onChange}
                    />
                  </label>
                </div>

                <button
                  type='submit'
                  className='cursor-pointer self-stretch rounded-81xl bg-darkslategray overflow-hidden flex flex-row items-center justify-center py-2.5 px-0 box-border max-w-full whitespace-nowrap'
                >
                  <b className='flex-1 relative text-sm font-lato text-white text-center inline-block max-w-full'>
                    Log in
                  </b>
                </button>
              </div>
              <div className='flex flex-col gap-2'>
                <Link
                  to={"/"}
                  className=' w-full relative text-bold text-sm no-underline text-cornflowerblue text-left'
                >
                  Forgot password?
                </Link>
                {/* <Link
                  to={"/"}
                  className=' w-full relative text-bold text-sm no-underline text-cornflowerblue text-left'
                >
                  Don't have an account?
                </Link> */}
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
export default Login;
