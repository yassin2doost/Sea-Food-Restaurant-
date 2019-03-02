import React from "react";
import PropTypes from 'prop-types';


const Login = props => (
  <nav className="login">
    <h2>ورود</h2>
    <p> برای مدیریت انبار خود وارد شوید </p>
    <button className="github" onClick={() => props.authenticate('Github')}> با اکانت گیت هاب وارد شوید</button>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}> با اکانت فیسبوک وارد شوید</button>
  </nav>
);

Login.prototype = {
    authenticate: PropTypes.func.isRequired
}

export default Login;
