import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./pages/products/List";
import ProductDetails from "./pages/products/Details";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./layouts/AuthLayout";
import UnAuthLayout from "./layouts/UnAuthLayout";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route element={<AuthLayout user={user} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path="auth" element={<UnAuthLayout user={user} />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
