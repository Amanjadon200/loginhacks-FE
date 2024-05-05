import { CustomForm}  from "../../shared/customForm"
interface HeadingProps{
    heading:String,
}
export const LogInAndRegister:React.FC<HeadingProps>=({heading })=>{
    return(
        <div className="flex flex-col justify-center h-[100vh] items-center">
           <p className="text-center"> {heading} </p>
        <div className="flex justify-center items-center ">
        <CustomForm className="flex flex-col"/>
        </div>
        </div>
    )
}