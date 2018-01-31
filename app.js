'use strict'
//create an array of open store hours

var hours = ['6am', '7am', '8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm'];


//First and Pike Location

var firstAndPike = {
  name: 'First and Pike',
  //create  key value pairs inside. (properties)
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookies: 0,

//define var that are dynamic depending on cookies
var totalCookiesPerHour = 0;
//total for all locations by hour
var netTotal = 0;
//define var for locations
var allLocations = [];

function MakeLocation (

    name,
    minCustPerHour,
    maxCustPerHour,
    avgCookieSoldPerHour) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookieSoldPerHour = avgCookieSoldPerHour;
    this.randCustPerHour = [];
    this.totalCookiesPerHour = [];
    this.totalCookies = 0;
    allLocations.push(this);

    //method for random customers by hour
  calcRandCustPerHour: function() {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1)), + this.minCustPerHour);
      console.log(this.randCustPerHour[a]);
    }
  };

  //method for cookies sold by hour
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.random() * Math.round(this.avgcookieSoldPerHour * this.randCustPerHour[b]));
      this.totalCookies += this.cookieSoldPerHour[b];
      console.log(this.cookieSoldPerHour[b]);
    }
  };
}

//calling constructors
function makeStores () {

    new MakeLocation("First and Pike", 23, 65, 6.3);
    new MakeLocation("SeaTac Airport", 3, 24, 1.2)
    new MakeLocation("Seattle Center", 11, 38, 3.7);
    new MakeLocation("Capitol Hill", 20, 38, 2.3);
    new MakeLocation("Alki", 2, 16, 4.6);
}
makeStores();

//create the table
//make header row
function headerRow() {
    var cookiestands = document.getElementById('cookiestands');
    var trEL = document.createElement("tr");
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
}
//for loop for hours
for (var h = 0; h < hours.length; h++) {
    tdEl = document.createElement("td"); 
    tdEL.textcontent = hours[h] + ":" + this.cookieSoldPerHour[h];
    trEL.appendChild(tdEL);
}
var tdTotal = document.createElement("tdTotal");
tdTotal.textContent = "Total Sales " + this.calcCookieSoldPerHour;
trEL.appendChild(tdTotal);
tableEl.appendChild(trEL);

};
headerRow();

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();