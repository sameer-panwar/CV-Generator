import { useState } from "react";
import { Label } from "../InputField";
import { Button } from "../InputField";

let skillsId=2;
let langId=1;

const SkillsNLanf=()=>{

    const [skills, setSkills]=useState('');
    const [array, setArray]=useState([{skills:'React.js', id: 0},{skills:'Node.js', id: 1}]);

    const [language, setLanguage]=useState('');
    const [list, setList]=useState([{language: 'English', id: 0}]);

    function handleEnter1(){
        setArray([
            ...array,
            {skills, id: skillsId++}
        ])
        setSkills('');
    }

    function handleRemove(id){
        setArray(array.filter(ev=>ev.id !==id))
    }

    function handleEnter2(){
        setList([
            ...list,
            {language, id: langId++}
        ])
        setLanguage('');
    }
    return(<>
        <Label
            
            placeholder="Showcase Your Skills"
            type="text"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
        />
        <Button backgroundColor="bg-blue-500" onClick={handleEnter1}>Enter</Button>
        <ul>
            {array.map(arr=>
            <li key={arr.id}>{arr.skills}
                <Button backgroundColor="bg-red-500" onClick={()=>setArray(array.filter(ev=>ev.id !==arr.id))}>Remove</Button>
            </li>
            )}
        </ul>
        <Label
        placeholder="Languages You know"
        type="text"
        value={language}
        onChange={(e)=>setLanguage(e.target.value)}
        />
         <Button backgroundColor="bg-blue-500" onClick={handleEnter2}>Enter</Button>
        <ul>
            {list.map(arr=>
            <li key={arr.id}>{arr.language}
                <Button backgroundColor="bg-red-500" onClick={()=>setList(list.filter(ev=>ev.id !==arr.id))}>Remove</Button>
            </li>
            )}
        </ul>
    </>);
}

export default SkillsNLanf