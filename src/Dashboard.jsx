import Nav from './components/Navbar'
import OutPutComponent from './components/OutputComponent'
import InputComponent from './components/InputComponent'
import { useState } from 'react';


const Dashboard=()=>{
    const [formData, setFormData] = useState({
        personal: {},
        qualifications: [],
        skills: [],
        experience: [],
        projects: [],
        achievements: [],
        certifications: [],
        languages: [],
        interests: [],
        references: []
    });


    return(
        <div className='h-full w-screen flex flex-col bg-gray-100'>
            <Nav/>
            <div className='grid grid-cols-[40%_60%] gap-10 mx-20 my-8'>
                <InputComponent formData={formData} setFormData={setFormData}/>
                <OutPutComponent formData={formData}/>
            </div>
        </div>
    );
}
export default Dashboard