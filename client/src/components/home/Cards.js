import Card from 'react-bootstrap/Card';

function Cards() {
    return (


        <>
            <section id='cards'>


                <h3>IIT INDORE ALUMNI PLATFORM</h3>
                

                <div className='cards-section'>
                <div className='parda'>

                    <Card style={{ width: '18rem' , border:'none', background:'transparent'}}>
                        <i class="fa-solid fa-folder fa-3x"></i>
                        <Card.Body>
                            <Card.Title><h5>ALUMNI DIRECTORY</h5></Card.Title>
                            <Card.Text>
                            <p>Explore IIT Indore Complete Alumni Directory & connect with alumni with your Interests & Domain</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', border:'none', background:'transparent'}}>
                        <i class="fa-solid fa-user-group fa-3x"></i>
                        <Card.Body>
                            <Card.Title><h5>YOUR BATCHMATES</h5></Card.Title>
                            <Card.Text>
                            <p>View Our Exclusive Batchmates Directory to know about whereabouts of your batchmates</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', border:'none',background:'transparent' }}>
                        <i class="fa-solid fa-location-pin fa-3x"></i>
                        <Card.Body>
                            <Card.Title><h5>ALUMNI IN YOUR CITY</h5></Card.Title>
                            <Card.Text>
                            <p>Find Aumni living in your city & be a part of IIT Indore meetups in your cities</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', border:'none' ,background:'transparent'}}>
                        <i class="fa-solid fa-user fa-3x"></i>
                        <Card.Body>
                            <Card.Title><h5>YOUR ALUMNI PROFILE</h5></Card.Title>
                            <Card.Text>
                            <p>Create & Complete your Alumni Profile & remain connected with with all opportunities matching your interest</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </div>
                
            </section>

        </>
    );
}

export default Cards;