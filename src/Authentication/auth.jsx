import '../App.css'
import './auth.css'
import { useState } from 'react'
import GoogleIcon from '../assets/google-icon.png'
import FaceBookIcon from '../assets/facebook-icon.png'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase-client';


const Authentication = () => {
    const navigate = useNavigate();

    const [action, setAction] = useState('login');

    //handle form data
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    //handle form errors
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    //creating input handler
    function inputHandler(e) {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));

        setFormErrors((prev) => ({
            ...prev,
            [id]: ''
        }));
    }

    const validateForm = () => {
        const newErrors = {};

        if (action === 'Register') {
            if (!formData.name.trim()) {
                newErrors.name = 'Name is required';
            }

            if (!formData.phone.trim()) {
                newErrors.phone = 'Phone number is required';
            }
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (action === 'Register') {
            if (!formData.confirmPassword.trim()) {
                newErrors.confirmPassword = 'Please confirm your password';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }

        return newErrors;
    }

    const saveProfile = (email, userMetadata) => {
        return supabase
            .from('tickethost')
            .upsert({
                name: userMetadata.name || '',
                phoneNumber: userMetadata.phoneNumber || '',
                email
            }, { onConflict: 'email' });
    };

    //create form submission handler
    const submitHandler = async (e) => {
        e.preventDefault();
        setSuccessMessage('');

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            if (action === 'Register') {
                const { data, error } = await supabase.auth.signUp({
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            name: formData.name,
                            phoneNumber: formData.phone
                        }
                    }
                });

                if (error) {
                    throw error;
                }

                if (!data.session) {
                    setSuccessMessage('Registration successful. Check your email to confirm your account, then log in.');
                    setAction('login');
                    return;
                }

                const { error: profileError } = await saveProfile(formData.email, {
                    name: formData.name,
                    phoneNumber: formData.phone
                });

                if (profileError) {
                    throw profileError;
                }

                navigate('/myDashboard');
            } else {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: formData.email,
                    password: formData.password
                });

                if (error) {
                    throw error;
                }

                const user = data.user;
                const userMetadata = user.user_metadata || {};
                const { error: profileError } = await saveProfile(user.email, userMetadata);

                if (profileError) {
                    throw profileError;
                }

                navigate('/myDashboard');
            }
        } catch (error) {
            console.error('Authentication error:', error);
            const message = error.message?.toLowerCase().includes('rate limit')
                ? 'Supabase email limit reached. Wait for the limit to reset, then register once or log in if this account already exists.'
                : error.message || 'Authentication failed. Please try again.';
            setFormErrors({ submit: message });
        } finally {
            setIsSubmitting(false);
        }
    }


  return (
        <>
            <section className='auth'>
                <form action="" className={action === 'forgotPassword' ? 'authform':'forgot-password' } onSubmit={submitHandler}>
                    <div>
                        <h2>{action === 'Register' ? 'Register with ReelWood' : 'Log in to ReelWood'}</h2>
                    </div>

                    <div>
                        {action === "login"? <div></div>:
                        <p><input type="name" value={formData.name} onChange={inputHandler} id='name' placeholder='Your Name' /> <br />{formErrors.name && <span className='error'>{formErrors.name}</span>}</p>
                        }
                        {action === "login"? <div></div>:
                        <p><input type="name" value={formData.phone} onChange={inputHandler} id='phone' placeholder='Phone Number' /> <br />{formErrors.phone && <span className='error'>{formErrors.phone}</span>}</p>
                        }
                        <p><input type="email" value={formData.email} onChange={inputHandler} id='email' placeholder='Email Address' /> <br />{formErrors.email && <span className='error'>{formErrors.email}</span>}</p>
                        <p><input type="password" value={formData.password} onChange={inputHandler} id='password' placeholder='Password' /> <br />{formErrors.password && <span className='error'>{formErrors.password}</span>}</p>
                        {action === "Register"? <div></div>:
                        <p className='forgotpass' onClick={() => setAction('forgotPassword')}>Forgot password?</p>
                        }
                        {action === "login"? <div></div>:
                        <p><input type="password" value={formData.confirmPassword} onChange={inputHandler} id='confirmPassword' placeholder='Confirm Password' /> <br />{formErrors.confirmPassword && <span className='error'>{formErrors.confirmPassword}</span>} </p>
                        }
                    </div>
                    <div>
                        <p><button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Please wait...' : action === 'Register' ? 'Register' : 'Log in'}</button></p>
                        {formErrors.submit && <span className='error'>{formErrors.submit}</span>}
                        {successMessage && <span className='success'>{successMessage}</span>}
                    </div>
                    {action === "login"? <div></div>:
                    <div className='or'><hr /><p className='ormain'>Or</p><hr /></div>
                    }
                    {action === "login"? <div></div>:
                    <div className='google'><p><img src={GoogleIcon} alt="GoogleIcon" />Sign Up with Google</p></div>
}
                    {action === "login"? <div></div>:
                    <div className='facebook'><p><img src={FaceBookIcon} alt="FaceBookIcon" />Sign Up with Facebook</p></div>
                    }
                    {action === "login"? <div></div>:
                    <div className='login'><p>Already have an account? <span  onClick={() => setAction('login')}>Log in</span></p></div>
                    }
                    {action === "Register"? <div></div>:
                    <div className='login'><p>Don't have an account? <span onClick={() => setAction('Register')}>Register Here</span></p></div>
                    }
                </form>
 
                <div className={action === 'forgotPassword' ? 'forgot-password' :'hideforgot-password' }>
                    <h2>Forgot Password</h2>
                    <p className="forgot-password-description">Resetting your password is easy!!Just type in the email address you registered to reelwood</p>
                    <form action="" className="forgot-password-form">
                    <p><input type="email" placeholder="Email Address" required /></p>
                    <p><button type="submit">Send</button></p>
                    <p className="forgot-password-link">Do you remember your password?<span onClick={() => setAction('login')}>Try logging in</span></p>
                    <p></p>
                    </form>
                </div>
            </section>
        </>
  )
}

export default Authentication;