import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "../pages/home/home.page"
import NotFound from "../pages/error/not-found.page"
import RegisterPage from "../pages/auth/register/register.page"
import ForgetPasswordPage from "../pages/auth/forget password/froget-password.page"

const router = createBrowserRouter([
    {
        path:"/",
        Component: HomePage
    },
    {
        path: "/register",
        Component: RegisterPage
    },
    {
        path: "/forget-password",
        Component: ForgetPasswordPage
    },
    {
        path: "*",
        Component: NotFound
    }

])

const RouterConfig = ()=>{
    return(
        <>
        <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default RouterConfig