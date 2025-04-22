import { Controller, useController } from "react-hook-form"
import { IInputContract } from "./input.contract"


export const EmailInputComponent = ({control, name,value="", errMsg =''}: IInputContract) => {
    return (
        <>
        <Controller
        control={control}
        name={name}
        defaultValue={value}
        render={({field})=>(
           <>
            <label htmlFor="email" >
    <input className={` w-full border border-gray-200 ring-1 ring-gray-600 h-9 rounded p-1 ${errMsg ? 'outline outline-red-400': ''}`} id="email" type="email"{...field} placeholder="Email" />
            </label>
           {
            errMsg? <span className={` ${errMsg ? ' text-red-400': ''}`}>{errMsg}</span> : <></>
           }
           </>
        )}
        >
            
            </Controller>
        </>
    )
}
export const PasswordInputComponent = ({control, name,value="", errMsg =''}: IInputContract) => {

    const{field} = useController({
        control: control,
        name: name,
        defaultValue: value
    })
    return (
        <>
            
            <label htmlFor="password"></label>
            <input className={ `w-full border border-gray-200 ring-1 ring-gray-600 h-9 rounded p-1 ${errMsg ? 'outline outline-red-400': ''}`} type="password" 
            {...field} name="password" placeholder="Password" />
             {
            errMsg? <span className={` ${errMsg ? ' text-red-400': ''}`}>{errMsg}</span> : <></>
           }
        </>
    )
}