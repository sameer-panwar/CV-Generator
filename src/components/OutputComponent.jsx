const OutPutComponent = ({ formData, template = 1 }) => {
  const { 
    personal = {}, 
    summary = '',
    qualifications = [], 
    skills = [], 
    languages = [], 
    experience = [],
    projects = [],
    achievements = [],
    certifications = [],
    interests = [],
    references = []
  } = formData;

  const getPlatformIcon = (platform) => {
    const icons = {
      'github': '🐙',
      'linkedin': '💼',
      'leetcode': '💻',
      'portfolio': '🌐',
      'twitter': '🐦',
      'instagram': '📷',
      'facebook': '📘',
      'youtube': '📺',
      'other': '🔗'
    };
    return icons[platform] || '🔗';
  };

  // Template 1: Modern Professional (Original)
  const Template1 = () => (
    <div className="border-2 w-[210mm] h-[297mm] bg-white p-8 shadow-xl rounded-lg font-sans text-gray-900 transform scale-75 origin-top overflow-hidden" style={{ aspectRatio: '210/297' }}>
      {/* Header */}
      <div className="text-center border-gray-300 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 break-words">{personal.fullName || "Your Name"}</h1>
        <h2 className="text-lg text-blue-700 font-semibold mb-2 break-words">{personal.role || "Your Role"}</h2>
        
        {/* Contact Info */}
        <div className="flex justify-center items-center gap-6 text-sm text-gray-600 flex-wrap mb-3">
          {personal.email && (
            <div className="flex items-center gap-1 min-w-0">
              <span>📧</span>
              <span className="truncate">{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="flex items-center gap-1 min-w-0">
              <span>📞</span>
              <span className="truncate">{personal.phone}</span>
            </div>
          )}
          {personal.address && (
            <div className="flex items-center gap-1 min-w-0">
              <span>📍</span>
              <span className="truncate">{personal.address}</span>
            </div>
          )}
        </div>

        {/* Social Links with Emojis */}
        {/* {references.length > 0 && (
          <div className="flex justify-center items-center gap-4 text-sm">
            {references.map((ref) => (
              <a 
                key={ref.id}
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 font-medium text-lg hover:scale-110 transition-transform duration-200"
                title={ref.platform}
              >
                {getPlatformIcon(ref.platform)}
              </a>
            ))}
          </div>
        )} */}
      </div>

      {/* Summary/Bio */}
      {summary && (
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-800 mb-1 border-b border-gray-300 pb-1">Summary</h3>
          <p className="text-sm text-gray-700 leading-relaxed break-words">{summary}</p>
        </div>
      )}

      {/* Education */}
      {qualifications.length > 0 && (
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Education</h3>
          <div className="space-y-3">
            {qualifications.map((qual) => (
              <div key={qual.id} className="pl-4 border-l-4 border-blue-500">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="font-semibold text-base text-gray-900 break-words">{qual.degree}</div>
                    <div className="text-sm text-gray-700 break-words">{qual.institution}</div>
                  </div>
                  <div className="text-sm text-gray-500 font-medium flex-shrink-0 ml-4">{qual.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Professional Experience</h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="pl-4 border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <div className="font-semibold text-base text-gray-900 break-words flex-1">{exp.companyName}</div>
                  <div className="text-sm text-gray-500 font-medium flex-shrink-0">{exp.year}</div>
                </div>
                <div className="text-sm text-gray-700 leading-relaxed break-words">{exp.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-300 pb-1">Projects</h3>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="pl-4 border-l-4 border-purple-500">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <div className="font-semibold text-base text-gray-900 break-words flex-1">{project.name}</div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex-shrink-0"
                    >
                      🔗 View
                    </a>
                  )}
                </div>
                <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line break-words">{project.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Two Column Layout for remaining sections */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="min-w-0">
          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-2">
              <h3 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((item) => (
                  <span key={item.id} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium break-words">
                    {item.skills}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div className="mb-2">
              <h3 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((item) => (
                  <span key={item.id} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium break-words">
                    {item.language}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Interests */}
          {interests.length > 0 && (
            <div className="mb-2">
              <h3 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">Interests</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                {interests.map((item) => (
                  <li key={item.id} className="break-words">{item.interest}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="min-w-0">
          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="mb-2">
              <h3 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">Achievements</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                {achievements.map((item) => (
                  <li key={item.id} className="break-words pr-2">{item.achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="mb-2">
              <h3 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-300 pb-1">Certifications</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                {certifications.map((item) => (
                  <li key={item.id} className="break-words pr-2">{item.certification}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Template 2: Minimalist Clean
  const Template2 = () => (
    <div className="border w-[210mm] h-[297mm] bg-white p-6 shadow-lg font-sans text-gray-800 transform scale-75 origin-top overflow-hidden" style={{ aspectRatio: '210/297' }}>
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl font-light text-gray-900 mb-1 break-words">{personal.fullName || "Your Name"}</h1>
        <h2 className="text-base text-gray-600 mb-3 break-words">{personal.role || "Your Role"}</h2>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.address && <span>{personal.address}</span>}
        </div>

        {/* Social Links */}
        {references.length > 0 && (
          <div className="flex gap-3 text-sm">
            {references.map((ref) => (
              <a 
                key={ref.id}
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                title={ref.platform}
              >
                {getPlatformIcon(ref.platform)}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <p className="text-sm text-gray-700 leading-relaxed break-words italic">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-wide">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-medium text-gray-900 break-words">{exp.companyName}</div>
                  <div className="text-xs text-gray-500">{exp.year}</div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed break-words">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {qualifications.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3 uppercase tracking-wide">Education</h3>
          <div className="space-y-3">
            {qualifications.map((qual) => (
              <div key={qual.id} className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-gray-900 break-words">{qual.degree}</div>
                  <div className="text-sm text-gray-600 break-words">{qual.institution}</div>
                </div>
                <div className="text-xs text-gray-500">{qual.year}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills & Projects in two columns */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          {skills.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2 uppercase tracking-wide">Skills</h3>
              <div className="flex flex-wrap gap-1">
                {skills.map((item) => (
                  <span key={item.id} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {item.skills}
                  </span>
                ))}
              </div>
            </div>
          )}

          {languages.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2 uppercase tracking-wide">Languages</h3>
              <div className="text-sm text-gray-700">
                {languages.map((item, index) => (
                  <span key={item.id}>
                    {item.language}{index < languages.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          {projects.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2 uppercase tracking-wide">Projects</h3>
              <div className="space-y-2">
                {projects.map((project) => (
                  <div key={project.id}>
                    <div className="font-medium text-sm text-gray-900 break-words">{project.name}</div>
                    <p className="text-xs text-gray-600 break-words">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Template 3: Creative Colorful
  const Template3 = () => (
    <div className="border-2 w-[210mm] h-[297mm] bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-xl rounded-lg font-sans text-gray-900 transform scale-75 origin-top overflow-hidden" style={{ aspectRatio: '210/297' }}>
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold mb-2 break-words">{personal.fullName || "Your Name"}</h1>
        <h2 className="text-xl text-blue-100 mb-3 break-words">{personal.role || "Your Role"}</h2>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 text-sm text-blue-100 mb-3">
          {personal.email && <span>📧 {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.address && <span>📍 {personal.address}</span>}
        </div>

        {/* Social Links */}
        {references.length > 0 && (
          <div className="flex gap-3">
            {references.map((ref) => (
              <a 
                key={ref.id}
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-blue-200 text-lg transition-colors"
                title={ref.platform}
              >
                {getPlatformIcon(ref.platform)}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      {summary && (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-bold text-purple-700 mb-2">About Me</h3>
          <p className="text-sm text-gray-700 leading-relaxed break-words">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-bold text-purple-700 mb-3">Work Experience</h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-bold text-gray-900 break-words">{exp.companyName}</div>
                  <div className="text-sm text-blue-600 font-medium">{exp.year}</div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed break-words">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education & Skills in two columns */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-purple-700 mb-3">Education</h3>
          <div className="space-y-3">
            {qualifications.map((qual) => (
              <div key={qual.id} className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900 break-words">{qual.degree}</div>
                  <div className="text-sm text-gray-600 break-words">{qual.institution}</div>
                </div>
                <div className="text-sm text-blue-600 font-medium">{qual.year}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-bold text-purple-700 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((item) => (
              <span key={item.id} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {item.skills}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects & Achievements */}
      {projects.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
          <h3 className="text-lg font-bold text-purple-700 mb-3">Projects</h3>
          <div className="space-y-3">
            {projects.map((project) => (
              <div key={project.id} className="border-l-4 border-green-500 pl-4">
                <div className="flex justify-between items-start mb-1">
                  <div className="font-semibold text-gray-900 break-words">{project.name}</div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 text-sm">
                      🔗 View
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-700 break-words">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Template 4: Professional Dark
  const Template4 = () => (
    <div className="border w-[210mm] h-[297mm] bg-gray-900 text-white p-8 shadow-xl rounded-lg font-sans transform scale-75 origin-top overflow-hidden" style={{ aspectRatio: '210/297' }}>
      {/* Header */}
      <div className="border-b border-gray-700 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-white mb-2 break-words">{personal.fullName || "Your Name"}</h1>
        <h2 className="text-xl text-blue-400 mb-4 break-words">{personal.role || "Your Role"}</h2>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-4">
          {personal.email && <span>📧 {personal.email}</span>}
          {personal.phone && <span>📞 {personal.phone}</span>}
          {personal.address && <span>📍 {personal.address}</span>}
        </div>

        {/* Social Links */}
        {references.length > 0 && (
          <div className="flex gap-4">
            {references.map((ref) => (
              <a 
                key={ref.id}
                href={ref.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-400 text-lg transition-colors"
                title={ref.platform}
              >
                {getPlatformIcon(ref.platform)}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-400 mb-2">Professional Summary</h3>
          <p className="text-gray-300 leading-relaxed break-words">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-400 mb-3 border-b border-gray-700 pb-1">Professional Experience</h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-white break-words">{exp.companyName}</div>
                  <div className="text-sm text-gray-400">{exp.year}</div>
                </div>
                <p className="text-gray-300 leading-relaxed break-words">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {qualifications.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-blue-400 mb-3 border-b border-gray-700 pb-1">Education</h3>
          <div className="space-y-3">
            {qualifications.map((qual) => (
              <div key={qual.id} className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-white break-words">{qual.degree}</div>
                  <div className="text-sm text-gray-300 break-words">{qual.institution}</div>
                </div>
                <div className="text-sm text-gray-400">{qual.year}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          {skills.length > 0 && (
            <div className="mb-5">
              <h3 className="text-lg font-bold text-blue-400 mb-2 border-b border-gray-700 pb-1">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((item) => (
                  <span key={item.id} className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
                    {item.skills}
                  </span>
                ))}
              </div>
            </div>
          )}

          {projects.length > 0 && (
            <div className="mb-5">
              <h3 className="text-lg font-bold text-blue-400 mb-2 border-b border-gray-700 pb-1">Projects</h3>
              <div className="space-y-3">
                {projects.map((project) => (
                  <div key={project.id}>
                    <div className="font-semibold text-white break-words">{project.name}</div>
                    <p className="text-sm text-gray-300 break-words">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          {achievements.length > 0 && (
            <div className="mb-5">
              <h3 className="text-lg font-bold text-blue-400 mb-2 border-b border-gray-700 pb-1">Achievements</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                {achievements.map((item) => (
                  <li key={item.id} className="break-words">{item.achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {certifications.length > 0 && (
            <div className="mb-5">
              <h3 className="text-lg font-bold text-blue-400 mb-2 border-b border-gray-700 pb-1">Certifications</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                {certifications.map((item) => (
                  <li key={item.id} className="break-words">{item.certification}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Render the selected template
  switch (template) {
    case 1:
      return <Template1 />;
    case 2:
      return <Template2 />;
    case 3:
      return <Template3 />;
    case 4:
      return <Template4 />;
    default:
      return <Template1 />;
  }
};
export default OutPutComponent;