// import React, { useState, useEffect } from "react";
// import "./editprofilepage.css";

// const EditProfile = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     alternatemobile: "",
//     gender: "",
//     dob: "",
//     location: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // Fetch user profile on component mount
//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("auth-token");
//       if (!token) {
//         setError("Authentication token not found!");
//         return;
//       }

//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:4000/userprofiledata", {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "auth-token": token,
//             "Content-Type": "application/json",
//           },
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch user data");
//         }

//         const data = await response.json();
//         setUserData(data); // Assuming the API returns user details as JSON
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Submit updated profile
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccessMessage("");

//     const token = localStorage.getItem("auth-token");

//     if (!token) {
//       setError("Authentication token not found!");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await fetch("http://localhost:4000/updateuser", {
//         method: "PUT",
//         headers: {
//           Accept: "application/json",
//           "auth-token": token,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update profile");
//       }

//       const data = await response.json();
//       setSuccessMessage("Profile updated successfully!");
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="edit-profile-container">
//       <h1>Edit Profile</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <label className="from-label">
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={userData.username || ""}
//             onChange={handleChange}
//             placeholder="Enter your username"
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={userData.email || ""}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//         </label>
//         <br />
//         <label>
//           Phone:
//           <input
//             type="tel"
//             name="phone"
//             value={userData.phone || ""}
//             onChange={handleChange}
//             placeholder="Enter your phone number"
//           />
//         </label>
//         <br />
//         <label>
//           Alternate Mobile:
//           <input
//             type="tel"
//             name="alternatemobile"
//             value={userData.alternatemobile || ""}
//             onChange={handleChange}
//             placeholder="Enter your alternate mobile number"
//           />
//         </label>
//         <br />
//         <label>
//           Gender:
//           <select
//             name="gender"
//             value={userData.gender || ""}
//             onChange={handleChange}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </label>
//         <br />
//         <label>
//           Date of Birth:
//           <input
//             type="date"
//             name="dob"
//             value={userData.dob ? userData.dob.split("T")[0] : ""}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Location:
//           <input
//             type="text"
//             name="location"
//             value={userData.location || ""}
//             onChange={handleChange}
//             placeholder="Enter your location"
//           />
//         </label>
//         <br />
//         <button type="submit" disabled={loading}>
//           {loading ? "Saving..." : "Save Changes"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;
import React, { useState, useEffect } from "react";
import "./editprofilepage.css";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    alternatemobile: "",
    gender: "",
    dob: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("auth-token");
      if (!token) {
        setError("Authentication token not found!");
        return;
      }

      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/userprofiledata", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "auth-token": token,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data); // Assuming the API returns user details as JSON
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const token = localStorage.getItem("auth-token");

    if (!token) {
      setError("Authentication token not found!");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/updateuser", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      setSuccessMessage("Profile updated successfully!");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <h1>Edit Profile</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={userData.username || ""}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userData.email || ""}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={userData.phone || ""}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label>Alternate Mobile:</label>
            <input
              type="tel"
              name="alternatemobile"
              value={userData.alternatemobile || ""}
              onChange={handleChange}
              placeholder="Enter your alternate mobile number"
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              value={userData.gender || ""}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={userData.dob ? userData.dob.split("T")[0] : ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={userData.location || ""}
              onChange={handleChange}
              placeholder="Enter your location"
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
