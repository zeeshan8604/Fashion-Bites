// import React, { useState, useEffect } from "react";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/getallorder", {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "auth-token": localStorage.getItem("auth-token"),
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         if (data.success) {
//           setOrders(data.orders);
//         } else {
//           throw new Error(data.message || "Failed to fetch orders");
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="orders-container">
//       <h1>Order History</h1>
//       {orders.length > 0 ? (
//         orders.map((order, index) => <OrderDetails key={index} order={order} />)
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// const OrderDetails = ({ order }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="order">
//       <div className="order-summary" onClick={toggleExpand}>
//         <p>Order ID: {order._id}</p>
//         <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
//         <p>
//           Status: {order.delivered ? "Delivered" : "Not Delivered"},{" "}
//           {order.cancel ? "Cancelled" : "Not Cancelled"}
//         </p>
//       </div>
//       {isExpanded && (
//         <div className="order-details">
//           <h3>Products</h3>
//           {order.products.length > 0 ? (
//             <ul>
//               {order.products.map((product, index) => (
//                 <li key={index}>{product.name}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>No products in this order.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Order.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getallorder", {
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data = response.data; // Fixed: No need to await here
        if (data.success) {
          setOrders(data.orders);
        } else {
          throw new Error(data.message || "Failed to fetch orders");
        }
      } catch (error) {
        setError(error.message || "An error occurred while fetching orders");
      }
    };

    fetchOrders();
  }, []);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="orders-container">
      <h1>Order History</h1>
      {orders.length > 0 ? (
        orders.map((order) => <OrderDetails key={order._id} order={order} />)
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

const OrderDetails = ({ order }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="order">
      <div className="order-summary" onClick={toggleExpand}>
        <p>
          Order ID: <span>{order._id}</span>
        </p>
        <p>
          Order Date:{" "}
          <span>{new Date(order.orderDate).toLocaleDateString()}</span>
        </p>
        <p>
          Status:{" "}
          <span
            className={`status ${
              order.delivered ? "delivered" : "not-delivered"
            }`}
          >
            {order.delivered ? "Delivered" : "Not Delivered"}
          </span>
          ,{" "}
          <span
            className={`status ${order.cancel ? "cancelled" : "not-cancelled"}`}
          >
            {order.cancel ? "Cancelled" : "Not Cancelled"}
          </span>
        </p>
      </div>
      {isExpanded && (
        <div className="order-details">
          <h3>Products</h3>
          {order.products && order.products.length > 0 ? (
            <ul>
              {order.products.map((product, index) => (
                <li key={index}>
                  <p>Product Name: {product.name}</p>
                  <p>Product ID: {product.id}</p>
                  <Link to={`/addreview/${product.id}`}>
                    {" "}
                    <button>ADD REVIEW</button>{" "}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products in this order.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
