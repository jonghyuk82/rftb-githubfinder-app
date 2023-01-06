import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

// REFACTOR
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // WITHOUT REDUCER
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  // WITH REDUCER
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // // GET INITIAL USERS (TESTING PURPOSE)
  // const fetchUsers = async () => {
  //   setLoading()
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const data = await response.json();

  //   // WITHOUT REDUCER
  //   // setUsers(data);
  //   // setLoading(false);

  //   // WITH REDUCER
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  // REFACTOR TO COMPONENT(ACTION FILE)
  // // Get search users
  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await response.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  // };

  // // Get single user
  // const getUser = async (login) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   if (response.status === 404) {
  //     window.location = "/notfound";
  //   } else {
  //     const data = await response.json();

  //     dispatch({
  //       type: "GET_USER",
  //       payload: data,
  //     });
  //   }
  // };

  // // Get user repos
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: "created",
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );

  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_REPOS",
  //     payload: data,
  //   });
  // };

  

  // // Clear users from state
  // const clearUsers = () => {
  //   dispatch({
  //     type: "CLEAR_USERS",
  //   });
  // };

  // // Set loading
  // const setLoading = () =>
  //   dispatch({
  //     type: "SET_LOADING",
  //   });

    // REFACTOR UP TO HERE

  return (
    <GithubContext.Provider
      value={{
        // WITHOUT REDUCER
        // users,
        // loading,

        // // WITH REDUCER
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,

        // REFACTOR
        ...state,
        dispatch,

        // fetchUsers,

        // REFACTOR
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
