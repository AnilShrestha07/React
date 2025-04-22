
import logo from "../../assets/images/logo.png"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { LoginForm } from "../../components/auth/login-form.components";




function HomePage() {

  


    const {control,handleSubmit, formState: {errors}} =useForm({
        defaultValues: {}
    })

    

   

    
    
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
                        <LoginForm />
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-gray-300"></span>

                            <span className="shrink-0 ps-4 text-gray-900"></span>
                        </span>
                        

                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage