import '../styles/navbar.css'

export default function Navbar() {
    return (
        <div className="container-navbar">
            <div className="navbar section-padding">
                <div className="logo">
                    <img src="./src/assets/logo-tree.svg" alt="Logo" className="logo-image" />
                    <span className="logo-text">BreatheForForests</span>
                </div>
                <div className="items">
                    <div className="link">Palm oil costs</div>
                    <div className="link">How To Help</div>
                    <button className="secondary-button">Make a change!</button>
                </div>
            </div>
        </div>
    )
}