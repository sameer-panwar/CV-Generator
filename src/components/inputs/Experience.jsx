import { useState } from "react";
import { Label } from "../InputField";
import { Button } from "../InputField";

let nextId=1;

const Experience=()=>{

        const [status, setStatus]=useState(false);
        const [values, setValues]=useState( {id: 0, companyName: 'Xyz company', year: 2024, description: "lorefjasjfldslnadsko;vnok;dsnvlk;dsanvlkdsnlkfdsnlkvndsklvndsklnvvlkdnvldskldsnvkldsjbnvjkdsnjkdsbvjkdsbvdsbvjkbdsajk"});
        const [experience, setExperience]=useState([]);



        function handleClick(){
            setStatus(true);
        }
        
        function handleAll(e){
            const {name, value}=e.target;
            setValues({
                ...values,
                [name]: value
        })
        }

        function handleExperinceSubmit(e){
            e.preventDefault();
            setExperience([
                ...experience,
                {...values, id: nextId++}
            ])
            setValues({
                id: 0,
                companyName: '',
                year: '',
                description: ''
              });
            setStatus(false);
        }

        function handleDelete(id) {
            setExperience(experience.filter(exp => exp.id !== id));
          }
        return(<>
            <ul className="break-words">{experience.map(exp=>
                <li key={exp.id}>
                    {exp.companyName}<br/>
                    {exp.year}<br/>
                    {exp.description}<br></br>
                    <Button
                        backgroundColor="bg-red-500"
                        onClick={() => handleDelete(exp.id)}
                        >
                        Delete
                    </Button>
                </li>
            )}</ul>
                {!status && <Button backgroundColor="bg-blue-500" onClick={handleClick}>Add Experience</Button>}

            {status && <div className="bg-slate-400 overflow-hidden">
                <h1 className="font-bold text-xl">Enter the details:</h1>
                <Label
                    labelName="Company Name"
                    type="text"
                    name="companyName"
                    value={values.companyName}
                    onChange={handleAll}
                    placeholder="Amazon"
                /><br/>
                <Label
                    labelName="Year"
                    type="number"
                    name="year"
                    value={values.year}
                    onChange={handleAll}
                    placeholder="2021-2025"
                /><br/>
                <label>Description<br/>
                <textarea className="border-4 w-3/4 h-28 mx-8"
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleAll}
                    placeholder="Enter your Job Role and work"
                /></label><br/>
                <Button backgroundColor="bg-green-500" onClick={handleExperinceSubmit}>Submit</Button>
                </div>}
            </>
            
        );      
}

export default Experience