import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase"; // adjust path if needed
import { collection, query, where, getDocs } from "firebase/firestore";

const ProtectedVolunteerRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null); // null = loading
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkVolunteer = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, "volunteers"),
          where("email", "==", user.email),
          where("approved", "==", true)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } else {
        setIsAuthorized(false);
      }
      setChecking(false);
    };

    checkVolunteer();
  }, []);

  if (checking) {
    return <div className="text-center p-8">Checking permissions...</div>;
  }

  return isAuthorized ? children : <Navigate to="/volunteer-login" />;
};

export default ProtectedVolunteerRoute;
