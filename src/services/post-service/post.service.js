import {
  getMethod, deleteMethod, postMethod, putMethod,
} from '../api.service';

const postBaseUrl = () => '/posts';

const getAllPostsUrl = () => postBaseUrl();
const getSinglePostUrl = (id) => `${postBaseUrl()}/${id}`;
const createPost = () => postBaseUrl();
const updatePost = (id) => `${postBaseUrl()}/${id}`;
const deletePost = (id) => `${postBaseUrl()}/${id}`;

export const getALlPostsRequest = async () => getMethod(getAllPostsUrl());
export const getSinglePostRequest = async (id) => getMethod(getSinglePostUrl(id));
export const createPostRequest = async (payload) => postMethod(createPost(), payload);
export const updatePostRequest = async (id, payload) => putMethod(updatePost(id), payload);
export const deletePostRequest = async (id) => deleteMethod(deletePost(id));
