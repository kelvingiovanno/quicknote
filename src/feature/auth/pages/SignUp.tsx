import PasswordStrenghtIndicator from "../components/PasswordStrengthIndicator";
import Button from "@/shared/components/Button";
import Input from "@/shared/components/Input";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";



const SignUp = () => {

    const [password, setPassword] = useState<string>("");

    return (
        
        <form className="space-y-5">

            <LogOut />
            
            <div className="space-x-2">
                <h1 className="text-2xl text-black/90 font-bold">Sign Up</h1>
                <p className="text-sm text-black/70">Please enter your details.</p>
            </div>

            <Input type={"text"} label="Fullname"/>
            <Input type={"text"} label="Username"/>
            <Input type={"password"} label="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            <PasswordStrenghtIndicator password={password}/>
            <Input type={"password"} label="Repeat Password"/>


            <Button title={"Register"} variant={"PRIMARY"} isLoading={false} className="w-full"/>
            <p className="text-center text-sm text-black/70">Already have an account? <Link to={'/auth/signin'} className="underline text-black/90">Sign In</Link></p>

        </form>
    );
}

export default SignUp;