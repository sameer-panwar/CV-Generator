import React, { useState } from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block font-medium mb-2 pl-2 focus:border-blue-500">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="border px-2 py-2 rounded w-full"
      />
    </div>
  );
};



const InputComponent=({formData, setFormData})=>{
    const [showSections, setShowSections] = useState({
    personal: true,             
    qualifications: false,
    experience: false,
    skills: false,
    });

    const toggleSection = (section) => {
        setShowSections((prev) => ({
        ...prev,
        [section]: !prev[section],
        }));
    };


    return(<>
    <div className="w-full px-10 py-2 border-4 overflow-hidden">
        <h1 className="section-header" onClick={() => toggleSection('personal')}>Personal Details </h1>
        {showSections.personal && <PersonalDetails formData={formData} setFormData={setFormData}/>}
        <h1 className="section-header" onClick={() => toggleSection('qualifications')}>Qualifications</h1>
        {showSections.qualifications && <Qualifications formData={formData} setFormData={setFormData}/>}
        <h1 className="section-header" onClick={() => toggleSection('experience')}>Experience</h1>
        {showSections.experience  && <Experience formData={formData} setFormData={setFormData}/>}
        <h1 className="section-header" onClick={() => toggleSection('skills')}>Skills & Languages</h1>
        {showSections.skills && <SkillsNLanf formData={formData} setFormData={setFormData}/>}
    </div>
    </>);
}

const PersonalDetails=({formData, setFormData})=>{

    const handlePersonalChange = (e) => {
    const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            personal: {
                ...prevData.personal,
                [name]: value,
            },
        }));
    };

        return(<>
            <form>
                <InputField
                    label="Full Name"
                    type="text"
                    name='fullName'
                    value={formData.personal.fullName}
                    onChange={handlePersonalChange}
                    placeholder="John"
                />
            
                <InputField
                    label="Role"
                    type="text"
                    name='role'
                    value={formData.personal.role}
                    onChange={handlePersonalChange}
                    placeholder="Software Engineer"
                />
                <InputField
                    label="Address"
                    type="text"
                    name='address'
                    value={formData.personal.address}
                    onChange={handlePersonalChange}
                    placeholder="123 Main St, City, Country"
                />
                <InputField
                    label="Email"
                    type="email"
                    name='email'
                    value={formData.personal.email}
                    onChange={handlePersonalChange}
                    placeholder="john.doe@example.com"
                />
                <InputField
                    label="Phone"
                    type="tel"
                    name='phone'
                    value={formData.personal.phone}
                    onChange={handlePersonalChange}
                    placeholder="+1 (555) 123-4567"
                />
                <button 
                    type="reset"
                    className='bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600'
                    >Reset
                </button>
            </form>
        </>);
}

const Qualifications=({formData, setFormData})=>{

        const handleQualificationChange = (e) => {
            const { name, value } = e.target;
                setFormData((prevData) => ({
                    ...prevData,
                    qualifications: {
                        ...prevData.qualifications,
                        [name]: value,
                    },
                }));
            };
    
        return(<>
            <form>
                <InputField
                    label="Degree"
                    type="text"
                    name='degree'
                    placeholder="Bachelor of Science in Computer Science"
                    value={formData.qualifications.degree}
                    onChange={handleQualificationChange}
                />
                <InputField
                    label="Institution"
                    type="text"
                    name='institution'
                    placeholder="XYZ University"
                    value={formData.qualifications.institution}
                    onChange={handleQualificationChange}
                />
                <InputField
                    label="Year of Graduation"
                    type="number"
                    name='year'
                    placeholder="2023"
                    value={formData.qualifications.year}
                    onChange={handleQualificationChange}
                />
                
                
                <button type='reset'>Reset</button>
                
            </form> 
    </>
    );
}

let skillsId = 2;
let langId = 1;

const SkillsNLanf = ({ formData, setFormData }) => {
  const [skills, setSkills] = useState('');
  const [language, setLanguage] = useState('');

  function handleAddSkill() {
    const newSkill = { skills, id: skillsId++ };
    setFormData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
    setSkills('');
  }

  function handleRemoveSkill(id) {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id),
    }));
  }

  function handleAddLanguage() {
    const newLanguage = { language, id: langId++ };
    setFormData(prev => ({
      ...prev,
      languages: [...prev.languages, newLanguage],
    }));
    setLanguage('');
  }

  function handleRemoveLanguage(id) {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang.id !== id),
    }));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add a skill"
        value={skills}
        onChange={e => setSkills(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAddSkill()}
      />
      <div>
        {formData.skills.map(item => (
          <div key={item.id}>
            {item.skills}
            <button className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 my-2 ml-4' onClick={() => handleRemoveSkill(item.id)}>Delete</button>
          </div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Add a language"
        value={language}
        onChange={e => setLanguage(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAddLanguage()}
      />
      <div>
        {formData.languages.map(item => (
          <div key={item.id}>
            {item.language}
            <button onClick={() => handleRemoveLanguage(item.id)}>❌</button>
          </div>
        ))}
      </div>
    </>
  );
};


let nextId=1;

const Experience=({formData, setFormData})=>{

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

export default InputComponent