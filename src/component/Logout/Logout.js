import React from 'react'
import { useContext } from 'react';
import TokenContext from '../../contect/context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Logout() {
  const { token } = useContext(TokenContext);
  const navigate =  useNavigate();
  const { setToken } = useContext(TokenContext);
  useEffect(() => {
    // Clear token from context and navigate to login page
    setToken(null);
    navigate('/login');
  }, [setToken, navigate]);

    
  return (
    <div>



      
    </div>
  )
}

export default Logout
