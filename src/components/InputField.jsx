import PersonalDetails from "./inputs/PersonalDetails";
import Qualifications from "./inputs/Qualification";
import Experience from "./inputs/Experience";
import SkillsNLanf from "./inputs/SkillsNLang";

export function Label({labelName, type, name, value, onChange, placeholder}){
    return(<>
        <label>
            {labelName} <input className="border-2 my-2" type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
        </label>
    </>);
}



export const Button=({children, backgroundColor, onClick})=>{
    return <button onClick={onClick} className={`max-w-fit px-4 h-8 text-white ${backgroundColor} font-bold  mx-6 mt-4 rounded-xl`}>{children}</button>
}

const Input=()=>{

    return(<>
    <div className="w-2/5 m-8 px-6 py-2 border-4 overflow-hidden">
        <h1 className="font-bold text-2xl my-4">Personal Details </h1>
        <PersonalDetails/>
        <h1 className="font-bold text-2xl my-4">Qualifications</h1>
        <Qualifications/>
        <h1 className="font-bold text-2xl my-4">Experience</h1>
        <Experience/>
        <h1 className="font-bold text-2xl my-4">Skills & Languages</h1>
        <SkillsNLanf/>
    </div>
    </>);
}

export default Input