import '../styles/footer.css'

export default function FooterDisplay() {
    return (
        <>
            <div className="container-footer">
                <div className="footer-section section-padding">
                    <div className="footer-layout">
                        <div className="social-links">
                            <div className="logo">
                                <img src="./src/assets/logo-tree.svg" alt="Logo" className="logo-image" />
                                <h2>BreatheForForests</h2>
                            </div>
                            <div className="social-icons">
                                <img src="./src/assets/facebook-logo.png" alt="Logo" />
                                <img src="./src/assets/instagram-logo.png" alt="Logo"  />
                                <img src="./src/assets/youtube-logo.png" alt="Logo" />
                            </div>
                            
                            <button className="secondary-button">Share this petition!</button>
                        </div>
                        
                        <div className="others-links">
                            <div className="learn-more">
                                <h2>Learn More</h2>
                                <div className='link'>About the petition</div>
                                <div className='link'>WWF on palm oil</div>
                                <div className='link'>RSPO certification</div>
                                <div className='link'>Sustainable shopping tips</div>
                                <div className='link'>Privacy Policy</div>
                            </div>

                            <div className="contact">
                                <h2>Contact us</h2>
                                <div className='link'>breatheforforests@info.com</div>
                            </div>
                        </div>
                        
                    </div>    

                    <div className="footer-line"/>
                    <div className="footer-copyright">
                        <p>© 2025 BreatheForForests | All Rights Reserved</p>
                    </div>

                </div>
            </div>



            <div className="footer-end"/>
        </>
    )
}