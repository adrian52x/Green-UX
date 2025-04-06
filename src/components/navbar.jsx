import '../styles/navbar.css'
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPopupVisible) {
                setIsPopupVisible(true);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [isPopupVisible]);

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    const handleAcceptPopup = () => {
        setIsPopupVisible(false);
        window.location.href = '#form';
    };
    
    return (
        <>
            <div className="container-navbar">
                <div className="navbar section-padding">
                    <div className="logo">
                        <img src="/assets/logo-tree.svg" alt="Logo" className="logo-image" />
                        <span className="logo-text">BreatheForForests</span>
                    </div>
                    <div className="items">
                        <div className="link">Palm oil costs</div>
                        <div className="link">How To Help</div>
                        <button className="secondary-button">Sign our petition!</button>
                    </div>
                    <div className="burger-menu">
                        <img src="/assets/menu.png" alt="menu" className="menu-image" />
                    </div>
                </div>
            </div>

            <div className="banner">
                Share this petition!
            </div>

            {/* Popup */}
            {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-header">
                            <h2 className="popup-title">Still haven’t signed?</h2>
                            <button className="popup-close" onClick={handleClosePopup}>
                                X
                            </button>
                        </div>

                        {/* Body text */}
                        <p className="popup-body">
                            You scrolled, you read… but you didn’t act. <br />
                            Silence = consent to deforestation.
                        </p>

                        {/* Close button */}
                        <button className="primary-button" onClick={handleAcceptPopup}>
                            Okay, okay — I’ll sign now
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}