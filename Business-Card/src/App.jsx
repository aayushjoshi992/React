export default function App(){
    return(
    <div>
        <div className="main-container">
            <div className="container">
                <div className="picture">
                    <img src="/Aayush Joshi.png" alt="profile-pic"></img>
                </div>
                <div className="description">
                    <h1 className="info">Aayush Joshi</h1>
                    <p className="info developer">Frontend Developer</p>
                    <p className="info mail"><a>aayushjoshi.website</a></p>
                    <div className="buttons">
                        <div className="btn email"><i className="fa-regular fa-envelope"><span style={{ color: "#1A1B21" }}>Email</span></i></div>
                        <div className="btn linkedin"><i className="fa-brands fa-linkedin-in"><span>LinkedIn</span></i></div>
                    </div>
                    <div className="about">
                        <h1>About</h1>
                        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <h1>Interests</h1>
                        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>

                    </div>
                    <div className="footer">
                        <div className="icons">
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-github"></i>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>
    )
}