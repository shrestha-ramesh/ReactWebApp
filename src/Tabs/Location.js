import React from 'react';
function Location(){
    return(
        <div style={{"width":"fit-content","margin":"20px auto"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5916384201005!2d-87.6552863124289!3d41.98757664961575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd17655220de5%3A0x3f00335b2d807160!2s5800%20N%20Sheridan%20Rd%2C%20Chicago%2C%20IL%2060660!5e0!3m2!1sen!2sus!4v1574621260332!5m2!1sen!2sus" style={{"width":"700px","height":"700px","frameborder":"0","border":"solid black"}}></iframe>
        </div>
    );
};
export default Location;