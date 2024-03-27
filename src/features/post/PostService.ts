//** the service is strictly for just making the http request */
//** sending the data  back and setting any the data in local storage */

//** axios is for http request */
import axios from "axios";
import { PostData } from "../types";

const API_URL = process.env.REACT_APP_API_URL + "/api/post/";

// Create new post
const createPost = async (postData: PostData, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, postData, config);

  return response.data;
};

// Get user posts
const getPosts = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user post
const deletePost = async (postId: string | number, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + postId, config);

  return response.data;
};

// Update post
const updatePost = async (postData: PostData, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + postData._id, postData, config);

  return response.data;
};

const postService = {
  createPost,
  getPosts,
  deletePost,
  updatePost,
};

export default postService;
