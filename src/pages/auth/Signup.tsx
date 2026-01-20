import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { LogOut } from "lucide-react";
import { Link } from "react-router";

const Signup = () => {
    return (
        
        <form className="space-y-5">

            <LogOut />
            
            <div className="space-x-2">
                <h1 className="text-2xl text-black/90 font-bold">Sign Up</h1>
                <p className="text-base text-black/70">Please enter your details.</p>
            </div>

            <Input type={"text"} label="Username"/>
            <Input type={"password"} label="Password"/>
            <Input type={"password"} label="Repeat Password"/>


            <Button title={"Sign In"} variant={"PRIMARY"} isLoading={false} />
            <p className="text-center text-sm text-black/70">Already have an account? <Link to={'/signin'} className="underline text-black/90">Sign In</Link></p>

        </form>
    );
}

export default Signup;