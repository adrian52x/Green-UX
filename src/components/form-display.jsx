import '../styles/form.css'

export default function FormDisplay() {
    return (
        <div className="container-form">
            <div className="form-section section-padding">
                <h2 className="form-title">Help us make a change!</h2>

                {/* Sentence with icons and text */}
                <p className="form-sentence">Every day, Danish consumers unknowingly support deforestation through products containing unsustainable palm oil. By signing this petition, you're urging the Danish Ministry of Environment to:</p>
                <div className="wrapper">
                    <div className="form-checklist">
                        <div className="form-check-item">
                            <img src="./src/assets/check.svg" alt="Check" className="form-check-icon" />
                            <span>Enforce clear palm oil labeling</span>
                        </div>
                        <div className="form-check-item">
                            <img src="./src/assets/check.svg" alt="Check" className="form-check-icon" />
                            <span>Demand full supply chain transparency</span>
                        </div>
                        <div className="form-check-item">
                            <img src="./src/assets/check.svg" alt="Check" className="form-check-icon" />
                            <span>Ensure products sold in Denmark are deforestation-free</span>
                        </div>
                    </div>

                    {/* Form fields */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-input" placeholder='E.g. John Doe' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-input" placeholder='E.g. john.doe@gmail.com' />
                    </div>

                    <div className="form-group form-checkbox">
                        <input type="checkbox" id="updates" />
                        <label htmlFor="updates">Receive updates</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" className="form-input" placeholder='E.g. Aarhus' />
                        <p className="form-note">We collect this information to illustrate the diverse support from across the country 🌱 </p>
                    </div>
                </div>

                <button className="primary-button">Make a change</button>
            </div>
        </div>
    )
}