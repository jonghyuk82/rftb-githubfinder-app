import axios from "axios";
import GithubContext from "./GithubContext";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// IMPLEMENT AXIOS
const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// Get search users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  // IMPLEMENT AXIOS
  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await response.json();

  //   return items;
 
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// GET USER AND REPOS
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// // Get single user
// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();

//     return data;
//   }
// };

// // Get user repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   const data = await response.json();

//   return data;
// };
