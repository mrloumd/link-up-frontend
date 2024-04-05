import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { PostData } from "../../features/types";
import { createPost } from "../../features/post/postSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faImage,
  faLock,
  faSmile,
  faI,
} from "@fortawesome/free-solid-svg-icons";

function CreatePost() {
  const [formData, setFormData] = useState({
    description: "",
  });

  //** Destructure the fields */
  const { description } = formData;

  const dispatch = useDispatch();

  const { posts, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.post
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData: PostData = {
      description,
    };
    try {
      //** Dispatch the createPost action */
      await dispatch(createPost(postData) as any);

      //** Check if registration was successful */
      if (!isError) {
        //** Reset the form fields */
        setFormData({
          description: "",
        });

        //** Perform any other actions after successful registration */
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prevState) => ({
      //** spread across the prev state */
      ...prevState,
      //** get the key whatever the name value is */
      [e.target.name]: e.target.value,
    }));
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <div className='border-solid border-b border-gray-600 p-5 '>
      <form onSubmit={onSubmit}>
        <section className='flex p-2'>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className='me-3 py-2 bg-gray rounded-box p-2'
            />
          </div>
          <div className='w-full'>
            <textarea
              ref={textareaRef}
              className='w-full p-2 border-b border-gray-600 resize-none font-lato'
              style={{
                minHeight: "20px",
                overflowY: "hidden",
                outline: "none",
              }}
              onInput={handleTextareaInput}
              placeholder='Write something ...'
              name='description'
              value={description}
              onChange={onChange}
            />
          </div>
        </section>
        <section className='flex flex-wrap justify-around  mt-5'>
          <button className='flex items-center border-none bg-transparent cursor-pointer'>
            <FontAwesomeIcon
              icon={faImage}
              className='me-1 py-2 rounded-box p-2'
            />
            <span className=' text-sm'>Image</span>
          </button>
          <button className='flex items-center border-none bg-transparent cursor-pointer'>
            <FontAwesomeIcon
              icon={faSmile}
              className='me-1 py-2 rounded-box p-2'
            />
            <span className=' text-sm'>Feeling</span>
          </button>
          <button className='flex items-center border-none bg-transparent cursor-pointer'>
            <FontAwesomeIcon
              icon={faLock}
              className='me-1 py-2 rounded-box p-2'
            />
            <span className=' text-sm'>Privacy</span>
          </button>
          <div className='flex items-center'>
            <button
              type='submit'
              className='px-5 py-2 rounded-box cursor-pointer bg-cornflowerblue text-sm text-bold text-white'
            >
              Post
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default CreatePost;
