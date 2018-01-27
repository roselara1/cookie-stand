'use strict'
//create an array of open store hours

var hours = ['6am', '7am', '8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm']

//First and Pike Location

var firstAndPike = {
     name: 'First and Pike',
     //create  key value pairs inside of the called. They are called properties
     minCustPerHour: 15,
     maxCustPerHour: 75,
     avgCookieSoldByHour: 40,
     randCustPerHour: [],
     cookiesSoldPerHour: [],
     totalCookies: 0,
     //method for random customers by hour
     calcRandCustByHour: function () {
         for var a = 0; a < hours.length; a++) {
             this.randCustPerHour(Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1);
             console.log(this.randCustPerHour[a]);
     }
//method for cookies sold by hour

calcCookieSoldPerHour: functions() {
for (var j = 0; j < hours.length; j++) {
    this.CookieSoldPerHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustPerHour[j]);
    console.log(this.cookiesSoldPerHour[j]);
}
},
render: function(){
    var firstAndPike = document.getElementById('firstAndPike');
    var fandp = document.getElementById('fandp');
    //calling the methos in the object literal
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();
    
    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3EL.textContent = this.name;
    fandp.appendChild(h3EL);

    for var(k = 0; k < hours.length; k++) {
        //stepping through the hours aria-readonly="
        var liEl = document.createElement('li');
        //creating the li elements with text of the hours
        liEl.textContent = hours[k] + ': ' + this.cookieSoldPerHour[k] + 'cookies';
        console.log(liEl);
        firstAndPike.appendChild(liEl)
    }
}
}
firstAndPike.render();