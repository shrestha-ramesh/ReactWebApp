import React from 'react';
import './Style/Reviews.css';
function Reviews() {
    return (
        <div id="review-div">
            <form action="Reviews" method="get" style={{"width":"fit-content"}}>
            <div style={{"marginLeft":"100px"}}>
                <p>First Name<br/><input type="text" name="firstname" placeholder="Exampe: John Miller"/></p>
                <p>Last Name<br/><input type="text" name="lastname" /></p>
                <p>Email Address<br/><input type="text" name="emailaddress" /></p>
                <p>Comment<br/><textarea rows="7" cols="40" name="comment"></textarea></p>
                <p><input type="submit" value="Submit"/></p>
            </div>
        </form>
            <div style={{"width":"fit-content","margin":"0px 0px 0px 400px"}}>
                <p>Ramesh Shrestha<br />Awesome hotel. Well stay</p>
                <p>Michael Garavto<br />Fantastic experience</p>
                <p>Vladimir Amador<br />This is the best hotel. I ever had.</p>
            </div>
        </div>
    );
}
export default Reviews;