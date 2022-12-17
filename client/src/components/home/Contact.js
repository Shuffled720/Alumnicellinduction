import React from 'react'

const Contact = () => {
    return (
        <>
            <section id='contact'>
                <div className='upper-div'>
                    <h3>Contact</h3>
                </div>
                <div className='contact-section'>
                    <div className='contact-info'>
                        <h5>
                            Contact Info
                        </h5>
                        <p>
                            Alumni and Corporate Relations Office,
                            7th floor, Abhinandan Bhavan,
                            Indian Institute of Technology Indore,
                            Khandwa Road, Simrol,
                            Indore-453552
                            India
                            <br />
                            <i class="fa-solid fa-phone"></i>
                            <p>+91-731-6603122/+91-731-6603555</p>
                            <i class="fa-solid fa-envelope"></i>
                            <p>alumnicell@iiti.ac.in acroffice@iiti.ac.in</p>
                            <a href=''>
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href=''>
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </p>
                    </div>
                    <div className='map'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.568567930703!2d75.91853441444258!3d22.520364640562455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962efcccbce7145%3A0x784e8cb69818596b!2sIndian%20Institute%20Of%20Technology%E2%80%93Indore%20(IIT%E2%80%93Indore)!5e0!3m2!1sen!2sin!4v1671288626695!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact