import { 
    passwordIndicatorLevel, 
    passwordColorLevel, 
    MAX_LEVEL 
} from "@/feature/auth/utils/passwordStrengthIndicator"; 

type PasswordIndicatorProps = {
    password: string;
}

const PasswordStrenghtIndicator = ({
    password
}: PasswordIndicatorProps) => {
    
    const level = passwordIndicatorLevel(password);
    const color =passwordColorLevel(level);
    
    return(
        <div className="space-y-2">
            <div className="flex gap-2">
                {
                    Array.from({length: MAX_LEVEL}).map((_, i) => {
                        
                        const active = i < level;

                        return (
                            <div key={i} className={`${active ? color : "bg-slate-200" } h-2 flex-1 rounded-md`}></div>
                        );
                    })

                }
            </div>
            <p className="text-sm text-black/70">
                {
                   level === 1 ? "Weak" : level === 2 ? "Meh" : level === 3 ? "Strong" : "Enter password" 
                }
            </p>
            <div className="bg-slate-200 p-4 rounded-md">
                <p className="text-sm font-medium text-slate-700">
                    To create a strong password, we recommend:
                </p>

                <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
                    <li>At least <span className="font-semibold">6 characters</span></li>
                    <li>Include at least <span className="font-semibold">one number</span> (0–9)</li>
                    <li>Include at least <span className="font-semibold">one uppercase letter</span> (A–Z)</li>
                </ul>
            </div>
        </div>
    )
}

export default PasswordStrenghtIndicator;