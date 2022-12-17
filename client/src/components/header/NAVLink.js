import React from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
const NAVLink = () => {
    const navigate = useNavigate();
    const logout = async () => navigate('/account');

  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/dskj'>Home</Link>
        <Link to='/fkshf'>Home</Link>
        <Link to='/kjfbdsk'>Home</Link>
    </div>
  )
}

export default NAVLink