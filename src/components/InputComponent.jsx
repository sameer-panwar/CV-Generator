import React, { useState } from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="mb-6">
      {label && (
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
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
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
      />
    </div>
  );
};

// --- Add Label and Button components ---
const Label = ({ labelName, ...props }) => (
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    {labelName}
    <input 
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 mt-1" 
      {...props} 
    />
  </label>
);

const Button = ({ children, backgroundColor = 'bg-blue-500', ...props }) => (
  <button
    className={`${backgroundColor} text-white px-6 py-2 rounded-lg hover:shadow-md transition-all duration-200 font-medium ${backgroundColor === 'bg-blue-500' ? 'hover:bg-blue-600' : backgroundColor === 'bg-red-500' ? 'hover:bg-red-600' : backgroundColor === 'bg-green-500' ? 'hover:bg-green-600' : 'hover:opacity-90'}`}
    {...props}
  >
    {children}
  </button>
);


const InputComponent=({formData, setFormData})=>{
    const [currentStep, setCurrentStep] = useState(0);
    
    const steps = [
        { name: 'Personal Details', component: 'personal' },
        { name: 'Summary/Bio', component: 'summary' },
        { name: 'Qualifications', component: 'qualifications' },
        { name: 'Experience', component: 'experience' },
        { name: 'Skills & Languages', component: 'skills' },
        { name: 'Projects', component: 'projects' },
        { name: 'Achievements', component: 'achievements' },
        { name: 'Certifications', component: 'certifications' },
        { name: 'Interests', component: 'interests' },
        { name: 'References', component: 'references' }
    ];

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 0:
                return <PersonalDetails formData={formData} setFormData={setFormData} />;
            case 1:
                return <Summary formData={formData} setFormData={setFormData} />;
            case 2:
                return <Qualifications formData={formData} setFormData={setFormData} />;
            case 3:
                return <Experience formData={formData} setFormData={setFormData} />;
            case 4:
                return <SkillsNLang formData={formData} setFormData={setFormData} />;
            case 5:
                return <Projects formData={formData} setFormData={setFormData} />;
            case 6:
                return <Achievements formData={formData} setFormData={setFormData} />;
            case 7:
                return <Certifications formData={formData} setFormData={setFormData} />;
            case 8:
                return <Interests formData={formData} setFormData={setFormData} />;
            case 9:
                return <References formData={formData} setFormData={setFormData} />;
            default:
                return <PersonalDetails formData={formData} setFormData={setFormData} />;
        }
    };

    return(
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            {/* Header with progress */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6">
                <h2 className="text-2xl font-bold mb-2">CV Generator</h2>
                <p className="text-blue-100 mb-4">Step {currentStep + 1} of {steps.length}: {steps[currentStep].name}</p>
                
                {/* Progress bar */}
                <div className="w-full bg-blue-400 rounded-full h-3 mb-2">
                    <div 
                        className="bg-white h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-sm text-blue-100">
                    <span>0%</span>
                    <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                    <span>100%</span>
                </div>
            </div>

            {/* Form content */}
            <div className="px-8 py-8">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    {renderCurrentStep()}
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                            currentStep === 0 
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                : 'bg-gray-500 text-white hover:bg-gray-600 hover:shadow-md transform hover:-translate-y-0.5'
                        }`}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>
                    
                    <div className="flex gap-2">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    
                    <button
                        onClick={nextStep}
                        disabled={currentStep === steps.length - 1}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                            currentStep === steps.length - 1 
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5'
                        }`}
                    >
                        {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                        {currentStep !== steps.length - 1 && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
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

const Summary=({formData, setFormData})=>{
    const [summary, setSummary] = useState('');

    const handleSummaryChange = (e) => {
        setSummary(e.target.value);
    };

    const handleAddSummary = () => {
        if (!summary) return;
        setFormData(prev => ({
            ...prev,
            summary: summary
        }));
        setSummary('');
    };

    return(
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary/Bio</h3>
                <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 resize-none"
                    rows="4"
                    value={summary}
                    onChange={handleSummaryChange}
                    placeholder="Write a brief summary of your professional background and career goals."
                />
                <Button onClick={handleAddSummary}>Add Summary</Button>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Current Summary</h4>
                <p className="text-gray-700 whitespace-pre-line">{formData.summary}</p>
            </div>
        </div>
    );
};

const Qualifications=({formData, setFormData})=>{
    const [qualification, setQualification] = useState({
        degree: '',
        institution: '',
        year: ''
    });

    const handleQualificationChange = (e) => {
        const { name, value } = e.target;
        setQualification(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddQualification = () => {
        if (!qualification.degree || !qualification.institution || !qualification.year) return;
        
        setFormData(prev => ({
            ...prev,
            qualifications: [...prev.qualifications, { ...qualification, id: Date.now() }]
        }));
        
        setQualification({
            degree: '',
            institution: '',
            year: ''
        });
    };

    const handleRemoveQualification = (id) => {
        setFormData(prev => ({
            ...prev,
            qualifications: prev.qualifications.filter(qual => qual.id !== id)
        }));
    };

    return(
        <div className="space-y-6">
            {/* Add Qualification Form */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Qualification</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <InputField
                        label="Degree"
                        type="text"
                        name="degree"
                        placeholder="Bachelor of Science in Computer Science"
                        value={qualification.degree}
                        onChange={handleQualificationChange}
                    />
                    <InputField
                        label="Institution"
                        type="text"
                        name="institution"
                        placeholder="XYZ University"
                        value={qualification.institution}
                        onChange={handleQualificationChange}
                    />
                    <InputField
                        label="Year of Graduation"
                        type="text"
                        name="year"
                        placeholder="2023"
                        value={qualification.year}
                        onChange={handleQualificationChange}
                    />
                </div>
                <Button onClick={handleAddQualification}>Add Qualification</Button>
            </div>

            {/* Qualifications List */}
            <div className="space-y-4">
                {formData.qualifications.map(qual => (
                    <div key={qual.id} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">{qual.degree}</h4>
                                <p className="text-blue-600 font-medium">{qual.institution}</p>
                                <p className="text-gray-600">{qual.year}</p>
                            </div>
                            <Button
                                backgroundColor="bg-red-500"
                                onClick={() => handleRemoveQualification(qual.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

let skillsId = 2;
let langId = 1;

const SkillsNLang = ({ formData, setFormData }) => {
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
    <div className="space-y-8">
      {/* Skills Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills</h3>
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Add a skill"
            value={skills}
            onChange={e => setSkills(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAddSkill()}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
          />
          <button 
            onClick={handleAddSkill}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.skills.map(item => (
            <div key={item.id} className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-2 rounded-lg">
              <span className="font-medium">{item.skills}</span>
              <button 
                onClick={() => handleRemoveSkill(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Languages</h3>
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            placeholder="Add a language"
            value={language}
            onChange={e => setLanguage(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAddLanguage()}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
          />
          <button 
            onClick={handleAddLanguage}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-200 font-medium"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.languages.map(item => (
            <div key={item.id} className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-lg">
              <span className="font-medium">{item.language}</span>
              <button 
                onClick={() => handleRemoveLanguage(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Add Projects Section ---
const Projects = ({ formData, setFormData }) => {
  const [project, setProject] = useState({
    name: '',
    description: '',
    link: ''
  });

  function handleProjectChange(e) {
    const { name, value } = e.target;
    setProject(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleAddProject() {
    if (!project.name || !project.description) return;
    setFormData(prev => ({
      ...prev,
      projects: [...prev.projects, { ...project, id: Date.now() }],
    }));
    setProject({
      name: '',
      description: '',
      link: ''
    });
  }

  function handleRemoveProject(id) {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id),
    }));
  }

  return (
    <div className="space-y-6">
      {/* Add Project Form */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Project</h3>
        <div className="space-y-4">
          <InputField
            label="Project Name"
            type="text"
            name="name"
            placeholder="E-commerce Website"
            value={project.name}
            onChange={handleProjectChange}
          />
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description (use bullet points)
            </label>
            <textarea
              name="description"
              value={project.description}
              onChange={handleProjectChange}
              placeholder="• Built a responsive e-commerce website using React and Node.js&#10;• Implemented user authentication and payment processing&#10;• Integrated with MongoDB for data storage"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 resize-none"
              rows="4"
            />
          </div>
          <InputField
            label="Project Link (optional)"
            type="url"
            name="link"
            placeholder="https://github.com/username/project"
            value={project.link}
            onChange={handleProjectChange}
          />
        </div>
        <div className="mt-4">
          <Button onClick={handleAddProject}>Add Project</Button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {formData.projects.map(p => (
          <div key={p.id} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{p.name}</h4>
                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-3 inline-block"
                  >
                    🔗 View Project
                  </a>
                )}
                <div className="text-gray-700 whitespace-pre-line">
                  {p.description}
                </div>
              </div>
              <Button backgroundColor="bg-red-500" onClick={() => handleRemoveProject(p.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Add Achievements Section ---
const Achievements = ({ formData, setFormData }) => {
  const [achievement, setAchievement] = useState("");
  function handleAddAchievement() {
    if (!achievement) return;
    setFormData(prev => ({
      ...prev,
      achievements: [...prev.achievements, { achievement, id: Date.now() }],
    }));
    setAchievement("");
  }
  function handleRemoveAchievement(id) {
    setFormData(prev => ({
      ...prev,
      achievements: prev.achievements.filter(a => a.id !== id),
    }));
  }
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Add an achievement"
          value={achievement}
          onChange={e => setAchievement(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
          onKeyDown={e => e.key === 'Enter' && handleAddAchievement()}
        />
        <Button onClick={handleAddAchievement}>Add</Button>
      </div>
      <div className="space-y-3">
        {formData.achievements.map(a => (
          <div key={a.id} className="flex justify-between items-center bg-green-50 p-4 rounded-lg border border-green-200">
            <span className="font-medium text-gray-800">{a.achievement}</span>
            <Button backgroundColor="bg-red-500" onClick={() => handleRemoveAchievement(a.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Add Certifications Section ---
const Certifications = ({ formData, setFormData }) => {
  const [certification, setCertification] = useState("");
  function handleAddCertification() {
    if (!certification) return;
    setFormData(prev => ({
      ...prev,
      certifications: [...prev.certifications, { certification, id: Date.now() }],
    }));
    setCertification("");
  }
  function handleRemoveCertification(id) {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c.id !== id),
    }));
  }
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h3>
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Add a certification"
          value={certification}
          onChange={e => setCertification(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
          onKeyDown={e => e.key === 'Enter' && handleAddCertification()}
        />
        <Button onClick={handleAddCertification}>Add</Button>
      </div>
      <div className="space-y-3">
        {formData.certifications.map(c => (
          <div key={c.id} className="flex justify-between items-center bg-purple-50 p-4 rounded-lg border border-purple-200">
            <span className="font-medium text-gray-800">{c.certification}</span>
            <Button backgroundColor="bg-red-500" onClick={() => handleRemoveCertification(c.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Add Interests Section ---
const Interests = ({ formData, setFormData }) => {
  const [interest, setInterest] = useState("");
  function handleAddInterest() {
    if (!interest) return;
    setFormData(prev => ({
      ...prev,
      interests: [...prev.interests, { interest, id: Date.now() }],
    }));
    setInterest("");
  }
  function handleRemoveInterest(id) {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i.id !== id),
    }));
  }
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Interests</h3>
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Add an interest"
          value={interest}
          onChange={e => setInterest(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
          onKeyDown={e => e.key === 'Enter' && handleAddInterest()}
        />
        <Button onClick={handleAddInterest}>Add</Button>
      </div>
      <div className="space-y-3">
        {formData.interests.map(i => (
          <div key={i.id} className="flex justify-between items-center bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <span className="font-medium text-gray-800">{i.interest}</span>
            <Button backgroundColor="bg-red-500" onClick={() => handleRemoveInterest(i.id)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Add References Section ---
const References = ({ formData, setFormData }) => {
  const [socialLink, setSocialLink] = useState({
    platform: '',
    url: ''
  });

  const socialPlatforms = [
    { value: 'github', label: 'GitHub', icon: '🐙' },
    { value: 'linkedin', label: 'LinkedIn', icon: '💼' },
    { value: 'leetcode', label: 'LeetCode', icon: '💻' },
    { value: 'portfolio', label: 'Portfolio', icon: '🌐' },
    { value: 'twitter', label: 'Twitter/X', icon: '🐦' },
    { value: 'instagram', label: 'Instagram', icon: '📷' },
    { value: 'facebook', label: 'Facebook', icon: '📘' },
    { value: 'youtube', label: 'YouTube', icon: '📺' },
    { value: 'other', label: 'Other', icon: '🔗' }
  ];

  function handleSocialLinkChange(e) {
    const { name, value } = e.target;
    setSocialLink(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleAddSocialLink() {
    if (!socialLink.platform || !socialLink.url) return;
    setFormData(prev => ({
      ...prev,
      references: [...prev.references, { ...socialLink, id: Date.now() }],
    }));
    setSocialLink({
      platform: '',
      url: ''
    });
  }

  function handleRemoveSocialLink(id) {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter(r => r.id !== id),
    }));
  }

  const getPlatformIcon = (platform) => {
    const found = socialPlatforms.find(p => p.value === platform);
    return found ? found.icon : '🔗';
  };

  const getPlatformLabel = (platform) => {
    const found = socialPlatforms.find(p => p.value === platform);
    return found ? found.label : platform;
  };

  return (
    <div className="space-y-6">
      {/* Add Social Link Form */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Social Media Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Platform
            </label>
            <select
              name="platform"
              value={socialLink.platform}
              onChange={handleSocialLinkChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900"
            >
              <option value="">Select Platform</option>
              {socialPlatforms.map(platform => (
                <option key={platform.value} value={platform.value}>
                  {platform.icon} {platform.label}
                </option>
              ))}
            </select>
          </div>
          <InputField
            label="URL"
            type="url"
            name="url"
            placeholder="https://github.com/username"
            value={socialLink.url}
            onChange={handleSocialLinkChange}
          />
        </div>
        <Button onClick={handleAddSocialLink}>Add Link</Button>
      </div>

      {/* Social Links List */}
      <div className="space-y-4">
        {formData.references.map(r => (
          <div key={r.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getPlatformIcon(r.platform)}</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{getPlatformLabel(r.platform)}</h4>
                  <a 
                    href={r.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium break-all"
                  >
                    {r.url}
                  </a>
                </div>
              </div>
              <Button backgroundColor="bg-red-500" onClick={() => handleRemoveSocialLink(r.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


let nextId=1;

const Experience=({formData, setFormData})=>{

        const [status, setStatus]=useState(false);
        const [values, setValues]=useState( {id: 0, companyName: '', year: '', description: ''});

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
            setFormData(prev => ({
                ...prev,
                experience: [...prev.experience, { ...values, id: Date.now() }]
            }));
            setValues({
                id: 0,
                companyName: '',
                year: '',
                description: ''
              });
            setStatus(false);
        }

        function handleDelete(id) {
            setFormData(prev => ({
                ...prev,
                experience: prev.experience.filter(exp => exp.id !== id)
            }));
          }
        return(<>
            <div className="space-y-6">
                {/* Experience List */}
                <div className="space-y-4">
                    {formData.experience.map(exp=>
                        <div key={exp.id} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800">{exp.companyName}</h4>
                                    <p className="text-blue-600 font-medium">{exp.year}</p>
                                </div>
                                <Button
                                    backgroundColor="bg-red-500"
                                    onClick={() => handleDelete(exp.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                        </div>
                    )}
                </div>

                {/* Add Experience Button */}
                {!status && (
                    <Button 
                        backgroundColor="bg-blue-500" 
                        onClick={handleClick}
                        className="w-full"
                    >
                        Add Experience
                    </Button>
                )}

                {/* Add Experience Form */}
                {status && (
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Enter Experience Details</h3>
                        <form onSubmit={handleExperinceSubmit} className="space-y-4">
                            <Label
                                labelName="Company Name"
                                type="text"
                                name="companyName"
                                value={values.companyName}
                                onChange={handleAll}
                                placeholder="Amazon"
                            />
                            <Label
                                labelName="Year"
                                type="text"
                                name="year"
                                value={values.year}
                                onChange={handleAll}
                                placeholder="2021-2025"
                            />
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 resize-none"
                                    rows="4"
                                    name="description"
                                    value={values.description}
                                    onChange={handleAll}
                                    placeholder="Enter your job role and responsibilities..."
                                />
                            </div>
                            <div className="flex gap-3">
                                <Button backgroundColor="bg-green-500" type="submit">
                                    Submit
                                </Button>
                                <Button 
                                    backgroundColor="bg-gray-500" 
                                    type="button"
                                    onClick={() => setStatus(false)}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>);      
}

export default InputComponent