import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "../pages/home/home.page"
import NotFound from "../pages/error/not-found.page"
import RegisterPage from "../pages/auth/register/register.page"
import ForgetPasswordPage from "../pages/auth/forget password/froget-password.page"
import UserLayout from "../pages/layout/user-layout"
import UserDashboard from "../pages/user/dashboard.page"
import BannerCreate from "../pages/banner/banner-create.page"

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
        path: "/admin",
        Component: UserLayout,
        children: [ 
        {
            path: "",
            Component: UserDashboard   
        },
        {
            path: "banner",
            Component: BannerCreate
        },
        {
            path: '*',
            Component: NotFound
        }
    ],
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