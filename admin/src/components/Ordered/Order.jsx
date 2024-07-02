import React, { Component } from "react";
import "./Order.css";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders() {
    fetch("http://localhost:4000/allordertoadmin")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
      })
      .then((data) => {
        this.setState({ orders: data.allorder, loading: false });
      })
      .catch((error) => {
        this.setState({
          error: error.message || "Error fetching orders!",
          loading: false,
        });
      });
  }

  toggleDelivered = async (orderId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/updateorder/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ delivered: true }),
        }
      );

      if (response.ok) {
        this.fetchOrders();
      } else {
        throw new Error(`Failed to update order: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  toggleCancelled = async (orderId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/updateorder/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cancel: true }), // Update cancel status to true
        }
      );

      if (response.ok) {
        // If the update was successful, fetch orders again to update UI
        this.fetchOrders();
      } else {
        throw new Error(`Failed to update order: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  render() {
    const { orders, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!orders || orders.length === 0) {
      return <div>No orders found</div>;
    }

    // Calculate total price for each order is separate not in schema
    orders.forEach((order) => {
      order.total = order.products.reduce(
        (acc, product) => acc + product.price,
        0
      );
    });

    return (
      <div className="order-list">
        <h1>Order List</h1>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Buyer</th>
              <th>Delivered</th>
              <th>Cancelled</th>
              <th>Products Id</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.orderDate}</td>
                <td>{order.buyer}</td>
                <td>
                  {order.delivered ? (
                    "Yes"
                  ) : (
                    <button
                      className={`button ${order.delivered ? "clicked" : ""}`}
                      onClick={() => this.toggleDelivered(order._id)}
                    >
                      Deliver
                    </button>
                  )}
                </td>
                <td>
                  {order.cancel ? (
                    "Yes"
                  ) : (
                    <button
                      className={`button ${order.cancel ? "clicked" : ""}`}
                      onClick={() => this.toggleCancelled(order._id)}
                    >
                      Cancel
                    </button>
                  )}
                </td>
                <td>
                  <ul>
                    {order.products.map((product) => (
                      <li key={product._id}>{product.id}</li>
                    ))}
                  </ul>
                </td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderList;
