import { Elements } from '@stripe/react-stripe-js';
import { loadStripe} from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from "./CheckoutForm";



const stripePromise = loadStripe(`pk_test_51JwhnBFfzVOp9dnfTsg0wQjdQOYGJMnQVxSCkipIAQxx99ScjIiHRK4XgCvCdAtYezrmhNRq5pSdGOOv7QZOYFWp000jcxICZs`)

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data=>{
            setAppointment(data);
        });
    },[appointmentId]) 
    return (
        <div>
            <h2>Please pay for : {appointmentId}</h2>
            <h4>Pay : ${appointment.price}</h4>
            { appointment?.price &&
            <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment}></CheckoutForm>
            </Elements>}
        </div>
    );
};

export default Payment;

/*
1. Install Stripe and Stripe-react
2. Set publishable key
3. Elements 
4. Checkout Form
------------------------------------------------------
5. Create Payment Method
6. Server Create Payment  Intent API
7.Load Client Secret
8. ConfirmCard Payment 
9. Handle User Error
*/