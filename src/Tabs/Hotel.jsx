import React from 'react';
import './Style/Hotel.css';
function Hotel() {
    function getformdata(e){
        e.preventDefault();
        const firstName=document.getElementById('firstname').value;
        const lastName=document.getElementById('lastname').value;
        const inDate=document.getElementById('checkin').value;
        const outDate=document.getElementById('checkout').value;
        const numPeople=document.getElementById('people').value;
        const main=document.querySelector("main");
        var date1 = new Date(inDate);
        var date2 = new Date(outDate);
        var Differencetintimes = date2.getTime()-date1.getTime();
        var Differenceindays = Differencetintimes/(1000*3600*24);
        if(Differenceindays<=0){
            alert('please enter correct dates');
            window.location.href="localhoast:3000/hotel"
        }else{
        var Total = 100+50*(numPeople-1);
        const mainContent=`
            <div style="width:40%;margin:50px auto;background-color:black;color:white;text-align:center;padding:30px;">
                <h3>Name: ${firstName}&nbsp${lastName}</h3>
                <h3>CheckIN:${inDate}</h3>
                <h3>CheckOut: ${outDate}</h3>
                <h3>Guests: ${numPeople}</h3>
                <h3>Stay: ${Differenceindays}</h3>
                <h3>Total Cost: ${Total}</h3>
            </div>
        `;
        main.innerHTML=mainContent;
        }
    }
    return (
        <main>
        <form action="Hotel" method="get" id = "lang">
            <table  style={{"margin-top":"200px"}}>
                <tr>
                    <td>Check In: <input id="checkin" type="date" name="checkin"/></td>
                    <td>Check Out: <input id="checkout" type="date" name="checkout"/></td>
                    <td>People: <input id="people" type="text" name="people"/></td>
                    <td>$100 Per night<input type="submit" value="CheckPrice" onClick={getformdata}/></td>
		        </tr>
	        </table><br/>
            <table>
                <tr>
                    <td>First Name: <input id="firstname" type="text" name="firstname"/></td>
                    <td>Last Name: <input id="lastname" type="text" name="lastname"/></td>
		        </tr>
	        </table>
        </form>
        </main>
    );
};                 
export default Hotel;