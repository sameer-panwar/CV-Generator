const OutPutComponent=({formData})=>{
    return(
        <div className="border-2 w-[794px] h-[1123px] bg-white p-10">
            <div id="header">{formData.personal.fullName}</div>
            <div>{formData.personal.role}</div>
            <div id="user-info">
                <div id="contact">
                    <h2>CONTACT</h2>
                    <ul>
                        <li>{formData.personal.email}</li>
                        <li>{formData.personal.phone}</li>
                        <li>{formData.personal.address}</li>
                    </ul>
                </div>
                <div id="profile">
                    <h2>PROFILE</h2>
                    <div>   </div>
                </div>
            </div>
            <div id="main">
                <div>
                    <div id="skills">
                        <h2>SKILLS</h2>
                        <ul>

                        </ul>
                    </div>
                    <div id="education">
                        <h2>EDUCATION</h2>
                        <ul>

                        </ul>
                    </div>
                </div>
                <div>
                    <div id="experience">
                        <h2>EXPERIENCE</h2>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
                  
        </div>
       );
}
export default OutPutComponent