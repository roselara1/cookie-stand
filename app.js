'use strict';
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
  //method for random customers by hour
  calcRandCustPerHour: function () {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1)), + this.minCustPerHour);
      console.log(this.randCustPerHour[a]);
    }
  },

  //method for cookies sold by hour
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.random() * Math.round(this.avgcookieSoldPerHour * this.randCustPerHour[b]));
      this.totalCookies += this.cookieSoldPerHour[b];
      console.log(this.cookieSoldPerHour[b]);
    }
  },
  render: function(){
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();
    var firstPike = document.getElementById('firstPike');
    var fandp = document.getElementById('fandp');
    //calling the methods in the object literal


    var h2El = document.createElement('h2');
    //give text to the new h3 element
    h2El.textContent = this.name;
    fandp.appendChild(h2El);

    for (var i = 0; i < hours.length; i++) {
      //stepping through the hours
      var liEl = document.createElement('li');
      //creating the li elements with text of the hours
      liEl.textContent = hours[i] + ': ' + this.calcCookieSoldPerHour[i] + ' cookies.';
      console.log(liEl);
      firstPike.appendChild(liEl);
    }
  }
};
firstAndPike.render();

//SeaTac Airport Location

var seaTacAirport = {
  name: 'SeaTac Airport',
  //create  key value pairs inside. (properties)
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustPerHour: function () {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1)), + this.minCustPerHour);
      console.log(this.randCustPerHour[a]);
    }
  },

  //method for cookies sold by hour
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.random() * Math.round(this.avgcookieSoldPerHour * this.randCustPerHour[b]));
      this.totalCookies += this.cookieSoldPerHour[b];
      console.log(this.cookieSoldPerHour[b]);
    }
  },
  render: function(){
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();
    var seaTac = document.getElementById('seaTac');
    var sTAirport = document.getElementById('sTAirport');
    //calling the methods in the object literal


    var h3El = document.getElementById('h3');
    h3El.textContent = this.name;
    sTAirport.appendChild(h3El);

    for (var i = 0; i < hours.length; i++) {
      //stepping through the hours
      var liEl2 = document.createElement('li2');
      //creating the li elements with text of the hours
      liEl2.textContent = hours[i] + ': ' + this.calcCookieSoldPerHour[i] + ' cookies.';
      console.log(liEl2);
      seaTac.appendChild(liEl2);
    }
  }
};
seaTacAirport.render();

//Seattle Center Location

var seattleCenter = {
  name: 'Seattle Center',
  //create  key value pairs inside. (properties)
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustPerHour: function () {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1)), + this.minCustPerHour);
      console.log(this.randCustPerHour[a]);
    }
  },

  //method for cookies sold by hour
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.random() * Math.round(this.avgcookieSoldPerHour * this.randCustPerHour[b]));
      this.totalCookies += this.cookieSoldPerHour[b];
      console.log(this.cookieSoldPerHour[b]);
    }
  },
  render: function(){
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();
    var seattleCenter = document.getElementById('seattleCenter');
    var seattleC = document.getElementById('seattleC');
    //calling the methods in the object literal


    var h4El = document.createElement('h4');
    //give text to the new h3 element
    h4El.textContent = this.name;
    seattleC.appendChild(h4El);

    for (var i = 0; i < hours.length; i++) {
      //stepping through the hours
      var liEl = document.createElement('li3');
      //creating the li elements with text of the hours
      liEl.textContent = hours[i] + ': ' + this.calcCookieSoldPerHour[i] + ' cookies.';
      console.log(liEl);
      seattleCenter.appendChild(liEl);
    }
  }
};
seattleCenter.render();

//Capitol Hill Location

var capitolHill = {
  name: 'Capitol Hill',
  //create  key value pairs inside. (properties)
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustPerHour: function () {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1)), + this.minCustPerHour);
      console.log(this.randCustPerHour[a]);
    }
  },

  //method for cookies sold by hour
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.random() * Math.round(this.avgcookieSoldPerHour * this.randCustPerHour[b]));
      this.totalCookies += this.cookieSoldPerHour[b];
      console.log(this.cookieSoldPerHour[b]);
    }
  },
  render: function(){
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();
    var capitolHill = document.getElementById('capitolHill');
    var capitolH = document.getElementById('capitolH');
    //calling the methods in the object literal


    var h5El = document.createElement('h5');
    //give text to the new h3 element
    h5El.textContent = this.name;
    capitolH.appendChild(h5El);

    for (var i = 0; i < hours.length; i++) {
      //stepping through the hours
      var liEl = document.createElement('li4');
      //creating the li elements with text of the hours
      liEl.textContent = hours[i] + ': ' + this.calcCookieSoldPerHour[i] + ' cookies.';
      console.log(liEl);
      capitolHill.appendChild(liEl);
    }
  }
};
capitolHill.render();

//Alki Location

var alki = {
  name: 'Alki',
  //create  key value pairs inside. (properties)
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSoldPerHour: 4.6,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookies: 0,
  //method for random customers by hour
  calcRandCustPerHour: function () {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1)), + this.minCustPerHour);
      console.log(this.randCustPerHour[a]);
    }
  },

  //method for cookies sold by hour
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.random() * Math.round(this.avgcookieSoldPerHour * this.randCustPerHour[b]));
      this.totalCookies += this.cookieSoldPerHour[b];
      console.log(this.cookieSoldPerHour[b]);
    }
  },
  render: function(){
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();
    var alki = document.getElementById('alki');
    var al = document.getElementById('al');
    //calling the methods in the object literal


    var h6El = document.createElement('h6');
    //give text to the new h3 element
    h6El.textContent = this.name;
    al.appendChild(h6El);

    for (var i = 0; i < hours.length; i++) {
      //stepping through the hours
      var liEl = document.createElement('li5');
      //creating the li elements with text of the hours
      liEl.textContent = hours[i] + ': ' + this.calcCookieSoldPerHour[i] + ' cookies.';
      console.log(liEl);
      alki.appendChild(liEl);
    }
  }
};
alki.render();

var allLocations = [];

//define var that are dynamic depending on cookies
var totalCookiesPerHour = 0;
//total for all locations by hour

var netTotal = 0;

function MakeLocation(

    name,
    minCustPerHour,
    maxCustPerHour,
    avgCookieSoldPerHour
)   {

    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookieSoldPerHour = avgCookieSoldPerHour;
    this.randCustPerHour = [];
    this.totalCookiesPerHour = [];
    this.totalCookies = 0;
    allocations.push(this);

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

function makeStands () {

    new MakeLocation("First and Pike", 23, 65, 6.3);
    new MakeLocation("SeaTac Airport", 3, 24, 1.2)
    new MakeLocation("Seattle Center", 11, 38, 3.7);
    new MakeLocation("Capitol Hill", 20, 38, 2.3);
    new MakeLocation("Alki", 2, 16, 4.6);
}
makeStands();

//create the table in js



//make header row
function makeHeaderRow() {
    var cookiestands = document.getElementById('cookiestands');
    var trEL = document.createElement("tr");
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
}

//table needs an id in html