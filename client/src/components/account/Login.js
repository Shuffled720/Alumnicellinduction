import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';


import { API } from '../../services/api';
import { DataContext } from '../../context/DataProvider';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};
export const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [errorMessage, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);
    // useEffect(() => {
    //     showError(false);
    // }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });

            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/personal');
        } else {
            showError('Something went wrong! please try again later');
            console.log('eooro to dikha diya');

        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setSignup(signupInitialValues);
            
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
            console.log('eooro to dikha diya');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }




    return (
        <>
            <div className='login-div'>


                {
                    (account === 'login') ?
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter User name</Form.Label>
                                <Form.Control placeholder="Username"  name='username' onChange={(e) => onValueChange(e)} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"  name='password' onChange={(e) => onValueChange(e)} />
                            </Form.Group>

                            <Button variant="primary" onClick={() => loginUser()}>
                                Login
                            </Button>
                            <Button className='mx-3' variant="primary" onClick={() => toggleSignup()}>
                                Create account
                            </Button>
                        </Form>



                        :

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter Name</Form.Label>
                                <Form.Control placeholder="Name"  onChange={(e) => onInputChange(e)} name='name' />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter User name</Form.Label>
                                <Form.Control placeholder="Username"  name='username' onChange={(e) => onInputChange(e)} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"  name='password' onChange={(e) => onInputChange(e)} />
                            </Form.Group>

                            <Button variant="primary" onClick={() => signupUser()}>
                                Submit
                            </Button>
                            <Button className='mx-3' variant="primary" onClick={() => toggleSignup()}>
                                Already have account
                            </Button>

                        </Form>

                }
                

                {errorMessage && <p>{errorMessage}</p>}
                


            </div>

        </>
    )
}
