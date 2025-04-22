import { FaFacebookF, FaGoogle, FaPaperPlane } from "react-icons/fa6"
import { ICredentials } from "../../pages/home/home.contract"
import { EmailInputComponent, PasswordInputComponent } from "../form/input.component"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export const LoginForm = ()=>{
    const LoginDTO = z.object({
        email: z.string().email(),
        password: z.string()
    }).required()

    const{control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            email: "",
            password: ""
        }as ICredentials,
        resolver: zodResolver(LoginDTO)
    })

    

    const submitLogin = (data: ICredentials)=>{
        console.log(data)
        
    }

    return(
        <>
        <form onSubmit={handleSubmit(submitLogin)} className=" flex flex-col gap-3 w-full">
            
                            <EmailInputComponent
                            control={control}
                            name={"email"}
                            errMsg={errors?.email?.message}
                            />

                            <PasswordInputComponent
                            control={control}
                            name={"password"}
                            errMsg={errors?.password?.message}
                            />
                            
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
        </>
    )
}