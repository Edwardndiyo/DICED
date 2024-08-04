// src/pages/RedirectToHome.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the homepage
    navigate('/');
  }, [navigate]);

  return null; // This component does not render anything
};

export default RedirectToHome;
