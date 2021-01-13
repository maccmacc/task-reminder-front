import {
  deleteMethod, getMethod, postMethod, putMethod,
} from '../api.service';

// Same as controller app.use('/users', userRoutes)
const userBaseUrl = () => '/users';

const getAllUsersUrl = () => userBaseUrl();
const getSingleUserUrl = (id) => `${userBaseUrl()}/${id}`;
const createUserUrl = () => userBaseUrl();
const updateUserUrl = (id) => `${userBaseUrl()}/${id}`;
const deleteUserUrl = (id) => `${userBaseUrl()}/${id}`;

export const getALlUsersRequest = async () => getMethod(getAllUsersUrl());
export const getSingleUserRequest = async (id) => getMethod(getSingleUserUrl(id));
export const createUserRequest = async (payload) => postMethod(createUserUrl(), payload);
export const updateUserRequest = async (id, payload) => putMethod(updateUserUrl(id), payload);
export const deleteUserRequest = async (id) => deleteMethod(deleteUserUrl(id));
