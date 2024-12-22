// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Search.css";

// // const SearchProducts = () => {
// //   const [query, setQuery] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSearch = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch(
// //         `http://localhost:4000/searchproducts?query=${query}`
// //       );

// //       if (!response.ok) {
// //         if (response.status === 404) {
// //           setError("No products found");
// //           navigate("/results/", { state: { products: [] } });
// //         } else {
// //           setError("Server error");
// //         }
// //         return;
// //       }

// //       const data = await response.json();
// //       navigate("/results", { state: { products: data.products } });
// //     } catch (err) {
// //       console.error(err);
// //       setError("Server error");
// //     }
// //   };

// //   return (
// //     <div>
// //       <form className="search-container" onSubmit={handleSearch}>
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Search products..."
// //           required
// //         />
// //         <button type="submit">Search</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default SearchProducts;
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Search.css";

// // const SearchProducts = () => {
// //   const [query, setQuery] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   // Retrieve JWT token from local storage (or context, depending on your implementation)
// //   // const token = localStorage.getItem("jwtToken");

// //   const handleSearch = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Make a POST request to /searchhistory to log the search query
// //       await fetch("http://localhost:4000/searchhistory", {
// //         method: "POST",
// //         headers: {
// //           Accept: "application/json",
// //           "auth-token": localStorage.getItem("auth-token"),
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ query }),
// //       });

// //       // Make the GET request to search for products
// //       const response = await fetch(
// //         `http://localhost:4000/searchproducts?query=${query}`
// //       );

// //       if (!response.ok) {
// //         if (response.status === 404) {
// //           setError("No products found");
// //           navigate("/results/", { state: { products: [] } });
// //         } else {
// //           setError("Server error");
// //         }
// //         return;
// //       }

// //       const data = await response.json();
// //       navigate("/results", { state: { products: data.products } });
// //     } catch (err) {
// //       console.error(err);
// //       setError("Server error");
// //     }
// //   };

// //   return (
// //     <div>
// //       <form className="search-container" onSubmit={handleSearch}>
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Search products..."
// //           required
// //         />
// //         <button type="submit">Search</button>
// //       </form>
// //       {error && <p>{error}</p>}
// //     </div>
// //   );
// // };

// // export default SearchProducts;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Search.css";

// const SearchProducts = () => {
//   const [query, setQuery] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       // Log the search query
//       await fetch("http://localhost:4000/searchhistory", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "auth-token": localStorage.getItem("auth-token"),
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ query }),
//       });

//       // Search for products
//       const response = await fetch(
//         `http://localhost:4000/searchproducts?query=${query}`
//       );

//       if (!response.ok) {
//         if (response.status === 404) {
//           setError("No products found");
//           navigate("/results", { state: { products: [] } });
//         } else {
//           setError("Server error");
//         }
//         return;
//       }

//       const data = await response.json();
//       navigate("/results", { state: { products: data.products } });
//     } catch (err) {
//       console.error(err);
//       setError("Server error");
//     } finally {
//       setLoading(false); // Stop loading regardless of the outcome
//     }
//   };

//   return (
//     <div>
//       <form className="search-container" onSubmit={handleSearch}>
//         <div class="dropdown-s">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search products..."
//             required
//           />
//           <ul class="dropdown-menu-s">
//             <li>
//               <p>My Profile</p>
//             </li>
//             <li>
//               <p>Orders</p>
//             </li>
//             <li>
//               <p>HelpDesk</p>
//             </li>
//             <li>
//               <p>Feedback</p>
//             </li>
//             <li>
//               <p>Logout</p>
//             </li>
//           </ul>
//         </div>

//         <button type="submit">Search</button>
//       </form>
//       {loading && (
//         <div className="spinner-container">
//           <div className="spinner"></div>
//         </div>
//       )}
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// };

// export default SearchProducts;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const SearchProducts = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const navigate = useNavigate();

  const fetchSearchHistory = async () => {
    try {
      const response = await fetch("http://localhost:4000/getsearchhistory", {
        headers: {
          "auth-token": localStorage.getItem("auth-token"), // Add the auth token in headers
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("Received search history data:", data);

      if (Array.isArray(data)) {
        console.log("Data is an array, setting searchHistory");
        setSearchHistory(data);
      } else {
        console.log(
          "Data is not an array, setting searchHistory to empty array"
        );
        setSearchHistory([]);
      }
    } catch (err) {
      console.error("Error fetching search history:", err);
      setSearchHistory([]);
    }
  };

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Log the search query
      await fetch("http://localhost:4000/searchhistory", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      // Search for products
      const response = await fetch(
        `http://localhost:4000/searchproducts?query=${query}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError("No products found");
          navigate("/results", { state: { products: [] } });
        } else {
          setError("Server error");
        }
        return;
      }

      const data = await response.json();
      navigate("/results", { state: { products: data.products } });
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false); // Stop loading regardless of the outcome
    }
  };

  return (
    <div>
      <form className="search-container" onSubmit={handleSearch}>
        <div class="dropdown-s">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            required
            onClick={() => fetchSearchHistory()} // Now it should work!
          />
          <ul class="dropdown-menu-s">
            {console.log("searchHistory:", searchHistory)}
            {Array.isArray(searchHistory) &&
              searchHistory.map((item, index) => (
                <li key={index}>
                  <p>{item.query}</p>
                </li>
              ))}
          </ul>
        </div>

        <button type="submit">Search</button>
      </form>
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SearchProducts;
