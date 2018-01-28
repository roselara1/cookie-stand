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
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerhour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustPerHour[a]);
    }
  },
  //method for cookies sold by hour
  calcCookieSoldPerHour: function() {
    for (var b = 0; b < hours.length; b++) {
      this.cookieSoldPerHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustPerHour[b]));
      console.log(this.cookieSoldPerHour[b]);
      this.totalCookies += this.cookieSoldPerHour[b];
    }
  },
  render: function(){
    var firstPike = document.getElementById('firstPike');
    var fandp = document.getElementById('fandp');
    //calling the methos in the object literal
    this.calcRandCustPerHour();
    this.calcCookieSoldPerHour();

    var h3El = document.createElement('h3');
    //give text to the new h3 element
    h3El.textContent = this.name;
    fandp.appendChild(h3El);

    for (var i = 0; i < hours.length; i++) {
      //stepping through the hours
      var liEl = document.createElement('li');
      //creating the li elements with text of the hours
      liEl.textContent = hours[i] + ': ' + this.calcCookieSoldPerHour[i] + ' cookies.';
      console.log(liEl);
      firstPike.appendChild(liEl);
    }
  }

//   var liToEl = document.createElement ('li');
//   console.log(this.totalCookies);
//   liToEl.textContent = 'total' + this.totalCookies + ' cookies sold.';
//   firstAndPike.appendChild(liToEl);
};
firstAndPike.render();

