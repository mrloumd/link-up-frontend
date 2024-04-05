import React from "react";
import { RootState } from "../../app/store"; // Assuming this is the path to your RootState
import { useSelector } from "react-redux";

function UserProfile() {
  const user = useSelector((state: RootState) => state.auth.user.data);

  const {
    firstName,
    lastName,
    username,
    profile_photo,
    background_photo,
    age,
    birthday,
    gender,
  } = user;
  return (
    <div className='w-full p-y border-solid border-x border-gray-600'>
      {/* <section className='border-solid border-b border-gray-600 p-5'>
        {" "}
        <div className='w-full'>
          <label className='input input-bordered custom-border flex items-center gap-2'>
            <input type='text' className='grow' placeholder='Search' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-4 h-4 opacity-70'
            >
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd'
              />
            </svg>
          </label>
        </div>
      </section> */}

      <section className='border-solid border-b border-gray-600 '>
        <div>
          <div>
            {!background_photo ? (
              <>
                <div className='bg-silver h-44'></div>
              </>
            ) : (
              <>
                <img />
              </>
            )}
          </div>

          <div className='h-[90px]'>
            {!profile_photo ? (
              <>
                <div className='translate-x-12 -translate-y-12 bg-gray h-32 w-32 rounded-full border-solid border border-gray-600'></div>
              </>
            ) : (
              <>
                {" "}
                <img
                  className='translate-x-12 -translate-y-12 w-32 rounded-full border-solid border border-gray-600'
                  src={profile_photo.file_path}
                  alt='Italian Trulli'
                />
              </>
            )}
          </div>
        </div>

        <div className='mx-10 mb-5 '>
          <div className='flex justify-between'>
            <div>
              <div>
                {firstName} {""}
                {lastName}
              </div>
              <div className='text-gray'>@{username}</div>
            </div>
            <div>
              {!age && !birthday && !gender ? (
                <button>Set up Profile</button>
              ) : (
                <button>Update Profile</button>
              )}
            </div>
          </div>

          <div className='flex gap-2 mt-5 '>
            <div>followers</div>
            <div>following</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
