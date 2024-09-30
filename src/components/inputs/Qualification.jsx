import { useState } from "react";
import { Label } from "../InputField";
import { Button } from "../InputField";

const Qualifications=()=>{

        const [values, setValues]=useState([{highSchool: '', year1:null},{graduation:'', year2:null}])

        function handleAll(e){
            const {name, value}=e.target;
            setValues({
                ...values,
                [name]: value
            })
        }
    
        return(<>
            <form>
                <Label
                    labelName="High School"
                    type="text"
                    name='highSchool'
                    value={values.highSchool}
                    onChange={handleAll}
                    placeholder="xyz School"
                />
                <Label
                    type="number"
                    name='year1'
                    value={values.year}
                    onChange={handleAll}
                    placeholder="2020"
                /><br/>
                <Label
                    labelName="Graduation"
                    type="text"
                    name='graduation'
                    value={values.graduation}
                    onChange={handleAll}
                    placeholder="GB Pant college"
                />
                <Label
                    type="number"
                    name='year2'
                    value={values.year}
                    onChange={handleAll}
                    placeholder="2024"
                />
                
                <Button backgroundColor="bg-red-500">Reset</Button>
                <Button backgroundColor="bg-green-500">Submit</Button>
            </form> 
    </>
    );
}

export default Qualifications