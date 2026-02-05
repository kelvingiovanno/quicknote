import { Link } from "react-router";
import { LogIn } from "lucide-react";

import Button from "@/shared/components/Button";
import Checkbox from "@/shared/components/Checkbox";
import Input from "@/shared/components/Input";

const Signin = () => {
    
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

            <Button title={"Sign In"} variant={"PRIMARY"} isLoading={false} className="w-full"/>
            <p className="text-center text-sm text-black/70">Dont't have account? <Link to={'/auth/signup'} className="underline text-black/90">Sign Up</Link></p>

        </form>

    );
}

export default Signin;