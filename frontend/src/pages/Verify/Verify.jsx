import React, { useContext, useEffect, useState } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url}= useContext(StoreContext);
    const navigate = useNavigate();
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const verifyPayment = async () => {
        try {
            const response = await axios.post(url+"/api/order/verify",{success,orderId});
            if (response.data.success) {
                setOrderConfirmed(true);
                setTimeout(() => {
                    navigate("/myorders")
                }, 2500);
            }
            else{
                navigate("/")
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            alert("Error verifying payment. Please contact support.");
            navigate("/")
        }
    }

    useEffect(() => {
        verifyPayment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(success,orderId);

  return (
    <div className='verify'>
        {orderConfirmed ? (
            <div className="order-confirmed">
                <div className="checkmark">✓</div>
                <h2>Your Order is Confirmed!</h2>
                <p>Thank you for your order. Redirecting to your orders...</p>
            </div>
        ) : (
            <div className="spinner"></div>
        )}
    </div>
  )
}

export default Verify