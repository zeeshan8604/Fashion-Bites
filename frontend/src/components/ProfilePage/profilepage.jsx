// import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom"; // Use useHistory for redirection
// import "./profilepage.css"; // Import the CSS file

// const ProfileInfo = () => {
//   const [user, setUser] = useState(null); // Initialize state as null to indicate loading
//   const [error, setError] = useState(null); // Error handling state
//   const [loading, setLoading] = useState(true); // Loading state
//   const history = useHistory(); // History hook for navigation

//   // Fetch user data on component mount
//   useEffect(() => {
//     const fetchUserData = async () => {
//       const token = localStorage.getItem("auth-token"); // Retrieve token from localStorage

//       if (!token) {
//         setError("Authentication token not found.");
//         setLoading(false);
//         return;
//       }

//       try {
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
//         setUser(data.user); // Assuming the backend returns `user` data
//         setError(null);
//       } catch (err) {
//         setError(err.message); // Capture error message
//       } finally {
//         setLoading(false); // Set loading to false
//       }
//     };

//     fetchUserData();
//   }, []);

//   // Function to handle edit (redirect to edit profile page or open edit modal)
//   const handleEditProfile = () => {
//     console.log("Edit Profile clicked");
//     history.push("/editprofile"); // Use history.push to redirect to edit profile
//   };

//   // Show loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Show error state
//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="profile-container">
//       {/* User Avatar */}
//       <div className="avatar-container">
//         <img
//           src={user.avatar || "https://via.placeholder.com/150"}
//           alt="User Avatar"
//           className="avatar"
//         />
//       </div>

//       {/* User Information */}
//       <div className="info-container">
//         <div className="info-item">
//           <p className="info-label">Full Name:</p>
//           <p className="info-value">{user.username || "N/A"}</p>
//         </div>
//         <div className="info-item">
//           <p className="info-label">Email Address:</p>
//           <p className="info-value">{user.email || "N/A"}</p>
//         </div>
//         <div className="info-item">
//           <p className="info-label">Mobile Number:</p>
//           <p className="info-value">{user.phone || "N/A"}</p>
//         </div>
//         <div className="info-item">
//           <p className="info-label">Gender:</p>
//           <p className="info-value">{user.gender || "N/A"}</p>
//         </div>
//         <div className="info-item">
//           <p className="info-label">Date of Birth:</p>
//           <p className="info-value">{user.dob || "N/A"}</p>
//         </div>
//         <div className="info-item">
//           <p className="info-label">Location:</p>
//           <p className="info-value">{user.location || "N/A"}</p>
//         </div>
//         <div className="info-item">
//           <p className="info-label">Alternate Mobile:</p>
//           <p className="info-value">{user.alternatemobile || "N/A"}</p>
//         </div>
//         <div className="info-item info-item-btn">
//           <button onClick={handleEditProfile} className="edit-button">
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileInfo;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import "./profilepage.css"; // Import the CSS file

const ProfileInfo = () => {
  const [user, setUser] = useState(null); // Initialize state as null to indicate loading
  const [error, setError] = useState(null); // Error handling state
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate(); // Navigate hook for navigation

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      // Correct function name
      const token = localStorage.getItem("auth-token"); // Retrieve token from localStorage

      if (!token) {
        setError("Authentication token not found.");
        setLoading(false);
        return;
      }

      try {
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
        setUser(data.user); // Assuming the backend returns `user` data
        setError(null);
      } catch (err) {
        setError(err.message); // Capture error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchUserData(); // Correct function call
  }, []);

  // Function to handle edit (redirect to edit profile page or open edit modal)
  const handleEditProfile = () => {
    console.log("Edit Profile clicked");
    navigate("/editprofile"); // Use navigate to redirect to edit profile
  };

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error state
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="profile-container">
      {/* User Avatar */}
      <div className="avatar-container">
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="avatar"
        />
      </div>

      {/* User Information */}
      <div className="info-container">
        <div className="info-item">
          <p className="info-label">Full Name:</p>
          <p className="info-value">{user.username || "N/A"}</p>
        </div>
        <div className="info-item">
          <p className="info-label">Email Address:</p>
          <p className="info-value">{user.email || "N/A"}</p>
        </div>
        <div className="info-item">
          <p className="info-label">Mobile Number:</p>
          <p className="info-value">{user.phone || "N/A"}</p>
        </div>
        <div className="info-item">
          <p className="info-label">Gender:</p>
          <p className="info-value">{user.gender || "N/A"}</p>
        </div>
        <div className="info-item">
          <p className="info-label">Date of Birth:</p>
          <p className="info-value">{user.dob || "N/A"}</p>
        </div>
        <div className="info-item">
          <p className="info-label">Location:</p>
          <p className="info-value">{user.location || "N/A"}</p>
        </div>
        <div className="info-item">
          <p className="info-label">Alternate Mobile:</p>
          <p className="info-value">{user.alternatemobile || "N/A"}</p>
        </div>
        <div className="info-item info-item-btn">
          <button onClick={handleEditProfile} className="edit-button">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
