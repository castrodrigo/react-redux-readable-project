let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const get = url => fetch(url, { headers });

export const post = (url, payload) =>
  fetch(url, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ payload })
  });

export const put = (url, payload) =>
  fetch(url, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ payload })
  });

export const remove = url =>
  fetch(url, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  });
