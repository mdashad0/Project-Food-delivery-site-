import React, { useEffect, useState } from 'react'
import "./Orders.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const Orders = ({ url }) => {

  const [orders, setOrders] = useState([]);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Network error");
      console.log(error);
    }
  }

  const statusHandler = async (event, orderId) => {
    const newStatus = event.target.value;
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: newStatus
      });
      if (response.data.success) {
        await fetchAllOrders();
        
        if (newStatus === "Delivered") {
          setConfirmedOrder(orderId);
          toast.success("🎉 Order Delivered Successfully!");
          
          // Hide confirmation after 3 seconds
          setTimeout(() => {
            setConfirmedOrder(null);
          }, 3000);
        } else {
          toast.success("Status updated successfully");
        }
      } else {
        toast.error("Error updating status");
      }
    } catch (error) {
      toast.error("Network error");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='orders add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.length > 0 ? orders.map((order, index) => (
          <div key={index} className={`order-item ${confirmedOrder === order._id ? 'order-confirmed' : ''} ${order.status === 'Delivered' ? 'delivered' : ''}`}>
            {confirmedOrder === order._id && (
              <div className="order-confirmed-badge">
                <span>✓</span> Order Confirmed!
              </div>
            )}
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  } else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className={order.status === 'Delivered' ? 'status-delivered' : ''}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        )) : <p className='no-orders'>No orders yet!</p>}
      </div>
    </div>
  )
}

export default Orders