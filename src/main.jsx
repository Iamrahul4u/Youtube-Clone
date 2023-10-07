import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchBar from "./components/Header/SearchBar.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";
import WatchPage from "./components/WatchPage/WatchPage.jsx";
import SearchList from "./components/SearchResults/SearchList.jsx";
import SearchResults from "./components/SearchResults/SearchResults.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
