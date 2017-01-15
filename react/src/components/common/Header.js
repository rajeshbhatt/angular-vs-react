import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';



const Header =() =>{
  return (
    <nav>
        <IndexLink to="/" activeClassNmae="active">Home</IndexLink>
        {" | "}
        <Link to="/about" activeClassNmae="active">About</Link>
        {" | "}
        <Link to="/courses" activeClassNmae="active">Courses</Link>
    </nav>
  );
};

export default Header;
