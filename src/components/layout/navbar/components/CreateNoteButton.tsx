import Button from "@/components/ui/Button";
import { FilePlus } from "lucide-react";

const CreateNoteButton = () => {

    return (
        <Button 
            icon={<FilePlus/>} 
            title={"Create new memo"} 
            color={"primary"}
            disable={false} 
        />
    );
}

export default CreateNoteButton;