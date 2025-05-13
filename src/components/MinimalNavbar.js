import { Link } from "react-router-dom";
import { auth } from "../firebase"; // Import Firebase auth
import { signOut } from "firebase/auth"; // Import signOut method from Firebase

export default function MinimalNavbar() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Logout successful");
        // Redirect to the login page after logout
        window.location.href = "/login"; 
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
        alert("An error occurred while logging out. Please try again.");
      });
  };

  return ( 
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side - SnehAm Logo */}
        <Link to="/" className="text-xl font-bold">SnehAm</Link>

        {/* Right Side - Dashboard & Logout */}
        <div className="space-x-4">
          <Link to="/dashboard" className="bg-purple-600 px-4 py-2 rounded">Dashboard</Link>
          <button className="bg-red-600 px-4 py-2 rounded" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
