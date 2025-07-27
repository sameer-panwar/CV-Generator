import Nav from './components/Navbar'
import OutPutComponent from './components/OutputComponent'
import InputComponent from './components/InputComponent'
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Dashboard=()=>{
    const [formData, setFormData] = useState({
        personal: {},
        summary: '',
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

    const [showSample, setShowSample] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(1);
    const resumeRef = useRef(null);

    // Sample resume data
    const sampleResume = {
        personal: {
            fullName: "Sumit Chandel",
            role: "Full Stack Developer",
            email: "sumitchandal009@email.com",
            phone: "+91 9876543210",
            address: "Rishikesh, India"
        },
        summary: "Passionate Full Stack Developer with 3+ years of experience building scalable web applications. Proficient in React, Node.js, and cloud technologies. Committed to writing clean, maintainable code and delivering exceptional user experiences.",
        qualifications: [
            {
                id: 1,
                degree: "Bachelor of Science in Computer Science",
                institution: "Graphic Era Hill University",
                year: "2020"
            },
            {
                id: 2,
                degree: "Masters in Computer Application",
                institution: "National Institute of Technology",
                year: "2022"
            }
        ],
        skills: [
            { id: 1, skills: "React" },
            { id: 2, skills: "Node.js" },
            { id: 3, skills: "Python" },
            { id: 4, skills: "AWS" },
            { id: 5, skills: "MongoDB" },
            { id: 6, skills: "Docker" }
        ],
        experience: [
            {
                id: 1,
                companyName: "TechCorp Inc.",
                year: "2022-Present",
                description: "Led development of microservices architecture, improved application performance by 40%, and mentored junior developers."
            },
            {
                id: 2,
                companyName: "StartupXYZ",
                year: "2020-2022",
                description: "Built full-stack web applications using React and Node.js, collaborated with cross-functional teams."
            }
        ],
        projects: [
            {
                id: 1,
                name: "E-commerce Platform",
                description: "• Built a responsive e-commerce website using React and Node.js\n• Implemented user authentication and payment processing\n• Integrated with MongoDB for data storage",
                link: "https://github.com/sarah/ecommerce"
            },
            {
                id: 2,
                name: "Task Management App",
                description: "• Developed a real-time task management application\n• Used WebSocket for live updates\n• Deployed on AWS with CI/CD pipeline",
                link: "https://github.com/sarah/taskapp"
            }
        ],
        achievements: [
            { id: 1, achievement: "Employee of the Year 2023" },
            { id: 2, achievement: "Best Technical Innovation Award" },
            { id: 3, achievement: "Led team of 5 developers successfully" }
        ],
        certifications: [
            { id: 1, certification: "AWS Certified Developer" },
            { id: 2, certification: "MongoDB Certified Developer" },
            { id: 3, certification: "React Developer Certification" }
        ],
        languages: [
            { id: 1, language: "English" },
            { id: 2, language: "Hindi" },
            { id: 3, language: "Japanese" }
        ],
        interests: [
            { id: 1, interest: "Open Source Contribution" },
        ],
        references: [
            {
                id: 1,
                platform: "github",
                url: "https://github.com/sarahjohnson"
            },
            {
                id: 2,
                platform: "linkedin",
                url: "https://linkedin.com/in/sarahjohnson"
            },
            {
                id: 3,
                platform: "portfolio",
                url: "https://sarahjohnson.dev"
            }
        ]
    };

    const currentData = showSample ? sampleResume : formData;

    const handleDownload = async () => {
        if (!resumeRef.current) return;

        // Save original style
        const resumeEl = resumeRef.current.firstChild;
        const originalTransform = resumeEl.style.transform;
        const originalScale = resumeEl.className;

        try {
            // Remove scaling and transforms for true A4 capture
            resumeEl.style.transform = 'none';
            resumeEl.className = resumeEl.className.replace(/scale-75/g, '');

            // Show loading state
            const downloadBtn = document.querySelector('.download-btn');
            if (downloadBtn) {
                downloadBtn.textContent = 'Generating PDF...';
                downloadBtn.disabled = true;
            }

            // Capture the resume element
            const canvas = await html2canvas(resumeEl, {
                scale: 2, // Higher quality
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                width: 210 * 3.7795275591, // 210mm to px at 96dpi
                height: 297 * 3.7795275591, // 297mm to px at 96dpi
                windowWidth: 210 * 3.7795275591,
                windowHeight: 297 * 3.7795275591,
            });

            // Restore original style
            resumeEl.style.transform = originalTransform;
            resumeEl.className = originalScale;

            // Create PDF
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            // Calculate dimensions to fit A4
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            let heightLeft = imgHeight;
            let position = 0;

            // Add first page
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // Add additional pages if needed
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // Generate filename
            const name = currentData.personal.fullName || 'resume';
            const filename = `${name.replace(/\s+/g, '_')}_resume.pdf`;

            // Download the PDF
            pdf.save(filename);

            // Reset button state
            if (downloadBtn) {
                downloadBtn.textContent = 'Download';
                downloadBtn.disabled = false;
            }

        } catch (error) {
            // Restore original style on error
            resumeEl.style.transform = originalTransform;
            resumeEl.className = originalScale;

            console.error('Error generating PDF:', error);
            
            // Reset button state on error
            const downloadBtn = document.querySelector('.download-btn');
            if (downloadBtn) {
                downloadBtn.textContent = 'Download';
                downloadBtn.disabled = false;
            }
            
            alert('Error generating PDF. Please try again.');
        }
    };

    return(
        <div className='min-h-screen w-full flex flex-col bg-gray-100'>
            <Nav onDownload={handleDownload}/>
            
            {/* Template Selection and Sample Toggle */}
            <div className="bg-white border-b border-gray-200 px-8 py-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowSample(!showSample)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                                showSample
                                    ? 'bg-green-500 text-white hover:bg-green-600'
                                    : 'bg-purple-500 text-white hover:bg-purple-600'
                            }`}
                        >
                            {showSample ? 'Hide Sample' : 'View Sample'}
                        </button>
                        {showSample && (
                            <span className="text-sm text-gray-600 bg-yellow-100 px-3 py-1 rounded-full">
                                Sample Mode
                            </span>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold text-gray-800">Resume Templates:</h3>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4].map((template) => (
                                <button
                                    key={template}
                                    onClick={() => setSelectedTemplate(template)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                        selectedTemplate === template
                                            ? 'bg-blue-500 text-white shadow-md'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    Template {template}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto'>
                <div className="w-full">
                    <InputComponent formData={formData} setFormData={setFormData}/>
                </div>
                <div className="w-full flex justify-center">
                    <div ref={resumeRef}>
                        <OutPutComponent 
                            formData={currentData} 
                            template={selectedTemplate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard