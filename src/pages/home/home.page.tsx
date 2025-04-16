import logo from "../../assets/images/logo.png"
import { FaGoogle,FaFacebookF,FaPaperPlane  } from "react-icons/fa";

function HomePage() {
    return (
        <>
            <div className="flex justify-center h-screen  items-center bg-teal-100">
                <div className="flex overflow-hidden shadow-2xl shadow-teal-100 w-[750px] h-[500px] rounded-xl">
                    <div className="flex flex-col justify-center items-center gap-8 box-border text-white p-5 text-justify flex-1 bg-teal-900">
                        <img className="rounded-full h-35 w-35" src={logo} alt="hello" />
                        <h1 className="font-semibold text-3xl">Welcome to Ecommerce</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos at blanditiis, velit commodi mollitia, corrupti aspernatur consectetur aperiam autem expedita ipsum suscipit quos iusto quisquam, ullam doloribus inventore hic maxime! consectetur aperiam autem expedita ipsum suscipit quos iusto quisquam, ullam doloribus inventore hic maxime! </p>
                    </div>
                    <div className="flex-1 p-6 bg-white">
                        <h1 className="font-semibold text-center text-4xl mb-4">Login</h1>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-gray-300"></span>

                            <span className="shrink-0 ps-4 text-gray-900"></span>
                        </span>
                        <form action="" className=" flex flex-col gap-3 w-full">
                            <label htmlFor="email" ></label>
                            <input className="border border-teal-600 outline-none h-9 rounded p-1" type="email" name="email" placeholder="Email" />

                            <label htmlFor="password"></label>
                            <input className="border border-teal-600 h-9 outline-none rounded p-1" type="password" name="password" placeholder="Password" />
                            <p className="text-sm">By signing in, I agree with <a className="text-teal-700 mx-1 underline" href="/terms-and-conditions"> Terms and Conditions</a></p>
                            <p className="text-sm text-end"><a className="text-teal-700 mx-1" href="/forget-password">Forget Password?</a></p>

                            <button className="bg-teal-700 py-2 flex justify-center items-center gap-1 text-white rounded transition hover:scale-95 font-semibold cursor-pointer hover:bg-teal-800"><FaPaperPlane />Submit</button>
                            <span className="flex items-center">
                                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

                                <span className="shrink-0 px-4 text-gray-900">Or</span>

                                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300"></span>
                            </span>
                            <p className="text-sm">Don't Have an account?<a className="text-teal-700 mx-1 underline" href="/register"> Signup Now!</a></p>
                            <button className="bg-red-700 py-2 flex justify-center items-center gap-1 text-white rounded transition hover:scale-95 font-semibold cursor-pointer hover:bg-red-800">
                                <FaGoogle />
                            Login with Google</button>

                            <button className="bg-blue-700 py-2 flex justify-center items-center gap-1 text-white rounded transition hover:scale-95 font-semibold cursor-pointer hover:bg-blue-800"><FaFacebookF />Login with Facebook</button>


                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage