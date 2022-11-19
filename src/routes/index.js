import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"))
const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))
const Cart = lazy(() => import('../pages/Cart'))
const Phone = lazy(() => import("../pages/Phone"))

const elements = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/手機及周邊',
    element: <Phone />
  },
]

export default elements