import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";
import { Link } from "react-router";
import { LogIn } from "lucide-react";


const Login = () => {
    

    return (

        <form className="space-y-5">

            <LogIn />
            
            <div className="space-x-2">
                <h1 className="text-2xl text-black/90 font-bold">Sign In</h1>
                <p className="text-sm text-black/70">Please enter your details.</p>
            </div>

            <Input type={"text"} label="Username"/>
            <Input type={"password"} label="Password"/>

            <div className="flex justify-between">
                <Checkbox label="Remember me"/>
                <Link to={"/forgetpassword"} className="text-sm text-black/90 underline">Forget Password</Link>            
            </div>

            <Button title={"Sign In"} variant={"PRIMARY"} isLoading={false} />
            <p className="text-center text-sm text-black/70">Dont't have account? <Link to={'/signup'} className="underline text-black/90">Sign Up</Link></p>

        </form>

    );
}

export default Login;