export const MAX_LEVEL = 3;

export const passwordIndicatorLevel = (
    password : string
) : number =>  {
    
    let level: number = 0;

    if(/[A-Z]/.test(password)) level++;
    if(/[0-9]/.test(password)) level++;
    if(/[\w{6,}]/.test(password)) level++;

    return level;
}

export const passwordColorLevel = (
    level: number
) : string => {

    let color = "bg-slate-200";

    if(level === 1) {
        color = "bg-red-500";
    }
    else if (level === 2) {
        color = "bg-amber-500";
    }
    else if (level === 3) {
        color = "bg-green-500";
    }

    return color;
}