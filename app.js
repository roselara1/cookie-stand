'use strict';
//create an array of open store hours
var hours = ['6am', '7am', '8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm'];

//vars for locations' (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)
//data points ('First and Pike', 32, 65, 6.3);
var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookie: 0,

  calcRandCustPerHour: function() {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustPerHour[b]));
      console.log(this.cookieSoldPerHour[b]);
    }
  },

  displayValues: function() {
    var firstPike = document.getElementById('first and pike');
    var fpList = document.getElementById('fpli');
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();
    var firstEl = document.createElement('h2');
    firstEl.textContent = this.name;
    firstPike.appendChild(firstEl);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.cookieSoldPerHour[i] + ' cookies';
      console.log(liEl);
      fpList.appendChild(liEl);
    }
  }
};
firstAndPike.displayValues();

//data points ('SeaTac Airport', 3, 24, 1.2);
var seaTac = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookie: 0,

  calcRandCustPerHour: function() {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustPerHour[b]));
      console.log(this.cookieSoldPerHour[b]);
    }
  },

  displayValues: function() {
    var seaTac = document.getElementById('seaTac');
    var sTLi = document.getElementById('sTli');
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();

    var secondEl = document.createElement('h2');
    secondEl.textContent = this.name;
    seaTac.appendChild(secondEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.cookieSoldPerHour[i] + ' cookies';
      console.log(liEl);
      sTLi.appendChild(liEl);
    }
  }
};
seaTac.displayValues();

//data points ('Seattle Center', 11, 38, 3.7);
var seattle = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookie: 0,

  calcRandCustPerHour: function() {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustPerHour[b]));
      console.log(this.cookieSoldPerHour[b]);
    }
  },

  displayValues: function() {
    var seattleCenter = document.getElementById('seattle center');
    var sCLi = document.getElementById('sCli');
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();

    var thirdEl = document.createElement('h2');
    thirdEl.textContent = this.name;
    seattleCenter.appendChild(thirdEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.cookieSoldPerHour[i] + ' cookies';
      console.log(liEl);
      sCLi.appendChild(liEl);
    }
  }
};
seattle.displayValues();

//data points ('Capitol Hill', 20, 38, 2.3);
var capitol = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookie: 0,

  calcRandCustPerHour: function() {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustPerHour[b]));
      console.log(this.cookieSoldPerHour[b]);
    }
  },

  displayValues: function() {
    var capitolHill = document.getElementById('capitol hill');
    var cHLi = document.getElementById('cHli');
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();

    var fourthEl = document.createElement('h2');
    fourthEl.textContent = this.name;
    capitolHill.appendChild(fourthEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.cookieSoldPerHour[i] + ' cookies';
      console.log(liEl);
      cHLi.appendChild(liEl);
    }
  }
};
capitol.displayValues();

//data points ('Alki', 2, 16, 4.6);
var alki = {
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSoldPerHour: 4.6,
  randCustPerHour: [],
  cookieSoldPerHour: [],
  totalCookie: 0,

  calcRandCustPerHour: function() {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  },
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustPerHour[b]));
      console.log(this.cookieSoldPerHour[b]);
    }
  },

  displayValues: function() {
    var alkiStore = document.getElementById('alki');
    var aLi = document.getElementById('ali');
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();

    var firstEl = document.createElement('h2');
    firstEl.textContent = this.name;
    alkiStore.appendChild(firstEl);

    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ' : ' + this.cookieSoldPerHour[i] + ' cookies';
      console.log(liEl);
      aLi.appendChild(liEl);
    }
  }
};
alki.displayValues();