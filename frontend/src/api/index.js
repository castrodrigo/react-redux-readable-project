import { get, post, put, remove } from "./protocol";

const api = "http://localhost:3001";

// Categories
export const getCategories = () =>
  get(`${api}/categories`)
    .then(res => res.json())
    .then(data => data.categories);

// Posts
export const getPosts = () => get(`${api}/posts`).then(res => res.json());

export const getCategoryPosts = category =>
  get(`${api}/${category}/posts`).then(res => res.json());

export const getPost = id => get(`${api}/posts/${id}`).then(res => res.json());

export const addPost = payload =>
  post(`${api}/posts`, payload).then(res => res.json());

export const updatePost = (id, { title, body }) =>
  put(`${api}/posts/${id}`, { title, body }).then(res => res.json());

export const votePost = (id, option) =>
  post(`${api}/posts/${id}`, { option }).then(res => res.json());

export const removePost = id =>
  remove(`${api}/posts/${id}`).then(res => res.json());

// Comments
export const getComments = post =>
  get(`${api}/posts/${post}/comments`).then(res => res.json());

export const getComment = id =>
  get(`${api}/comments/${id}`).then(res => res.json());

export const addComment = payload =>
  post(`${api}/comments`, payload).then(res => res.json());

export const voteComment = (id, option) =>
  post(`${api}/comments/${id}`, { option }).then(res => res.json());

export const updateComment = (id, { timestamp, body }) =>
  put(`${api}/comments/${id}`, { timestamp, body }).then(res => res.json());

export const removeComment = id =>
  remove(`${api}/comments/${id}`).then(res => res.json());
