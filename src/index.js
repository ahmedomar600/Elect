import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import RootLayout from "./pages/RootLayout";
import store from "./store/store";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import More from "./pages/More";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import RestPassword from "./pages/RestPassword";
import Wishlist from "./pages/Wishlist";
import Prodect from "./pages/Prodect";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home/Catalog", element: <Catalog /> },
      { path: "home/More", element: <More /> },
      { path: "home/Offesrs", element: <Offers /> },
      { path: "home/Contact", element: <Contact /> },
      { path: "account/login", element: <Login /> },
      { path: "home/Profile", element: <Profile /> },
      { path: "account/register", element: <CreateAccount /> },
      { path: "/RestPassword", element: <RestPassword /> },
      { path: "/home/Wishlist", element: <Wishlist /> },
      { path: "/Prodect/:id", element: <Prodect /> },
      { path: "Cart", element: <Cart /> }
    ]
  }
]);
// ahmed mohamed goda

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
