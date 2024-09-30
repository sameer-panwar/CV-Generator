import { useState } from "react";
import { Label } from "../InputField";
import { Button } from "../InputField";

const PersonalDetails=()=>{

        const [values, setValues]=useState({firstName:'', lastName:'',role:'', address:'', email:'', contact:'', placeholder:''})

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
                    labelName="Full Name"
                    type="text"
                    name='firstName'
                    value={values.firstName}
                    onChange={handleAll}
                    placeholder="First Name"
                />  
                <Label
                    
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleAll}
                    placeholder="Last Name"
                /><br/>
                <Label
                    labelName="Role"
                    type="text"
                    name="role"
                    value={values.role}
                    onChange={handleAll}
                    placeholder="Role"
                /><br/>
                <Label
                    labelName="Address"
                    type='text'
                    name="address"
                    value={values.address}
                    onChange={handleAll}
                    placeholder="Address"
                /><br/>
                <Label
                    labelName="Contact"
                    type="number"
                    name="contact"
                    value={values.contact}
                    onChange={handleAll}
                    placeholder="Contact"
                /><br/>

            
            <Button backgroundColor="bg-red-500">Reset</Button>
            <Button backgroundColor="bg-green-500">Submit</Button>
        </form>
    </>);
}



export default PersonalDetails