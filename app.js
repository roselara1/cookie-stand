'use strict';
//create an array of open store hours
var hours = ['6am', '7am', '8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm'];
//define var that are dynamic depending on cookies
// var totalCookiePerHour = 0;
//total for all locations by hour
var netTotal = 0;
//define var for locations
var allLocations = [];
function MakeLocation (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)
{
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustPerHour = [];
  this.totalCookiePerHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  //method for random customers by hour
  this.calcRandCustPerHour= function() {
    for (var a = 0; a < hours.length; a++) {
      this.randCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };
  //method for cookies sold by hour
  this.calcCookieSoldPerHour= function() {
    for (var b = 0; b < hours.length; b++) {
      this.totalCookiePerHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustPerHour[b]));
      this.totalCookies += this.totalCookiePerHour[b];
      //console.log(this.totalCookiePerHour[b]);
    }
  };
  this.calcRandCustPerHour();
  this.calcCookieSoldPerHour();
}
//calling constructors
function makeStores () {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
}
makeStores();

//make header row
function makeHeader() {
  var thEl = document.getElementById('thead');
  var headerV = ['', '6am', '7am', '8am', '9am','10am', '11am','12pm', '1pm','2pm', '3pm','4pm', '5pm','6pm', '7pm', 'Location Totals'];
  var newHead;
  for (var i = 0; i < headerV.length; i++) {
    newHead = document.createElement('td');
    newHead.textContent = headerV[i];
    thEl.appendChild(newHead);
  }
}

makeHeader();

function makeDataRow () {
  for (var j = 0; j < allLocations.length; j++) {
    var cookiestores = document.getElementById('cookiestores');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].name;
    trEl.appendChild(tdEl);
    for (var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allLocations[j].totalCookiePerHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].totalCookies;
    trEl.appendChild(tdEl);
    cookiestores.appendChild(trEl);
    // console.log(makeDataRow);
  }
}
makeDataRow();

function displayFooterTotal() {
  netTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var cookiestores = document.getElementById('cookiestores');
    var trEl = document.createElement('tr');
    var footerTotal = document.createElement('td');
    footerTotal.textContent = 'Totals';
    trEl.appendChild(footerTotal);
    cookiestores.appendChild(trEl);
    console.log(cookiestores);
    //for loop for hours
    for (var h = 0; h < hours.length; h++) {
      var footerDataEl = document.createElement('td');
      for (var f = 0; f < allLocations.length; f++) {
        netTotal += allLocations[f].totalCookiePerHour[h];
      }
      footerDataEl.textContent = netTotal;
      netTotal += netTotal;
      trEl.appendChild(footerDataEl);
      // cookiestores.appendChild(footerDataEl);
      var tdFEl = document.createElement('td');
      tdFEl.textContent = netTotal;
      thEL.appendChild(tdFEl);
      cookiestores.appendChild(tr);
    }
  }
}

displayFooterTotal();

var storeSubmit = document.getElementById('store-submit');

function newSubmit () {
  var trEl = document.createElement('tr');
  trEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = storename;
  trEl.appendChild(tdEl);
  console.log(tdEl);
}

function newStore(event) {
  var newStoreName = event.target.storename.value;
  var newMinCust = parseInt(event.target.mincust.value);
  var newMaxCust = parseInt(event.target.maxcust.value);
  var newAvgCookie = parseInt(event.target.avgcookie.value);
  console.log(newStore);

  if(!storename || mincust || maxcust || avgcookie)
    return alert ('Missing Data Points');

  new MakeLocation(newStoreName, newMinCust, newMaxCust, newAvgCookie);
  storeSubmit.calcCookieSoldPerHour();

  for (var s = 0; s < hours.length; s++) {
    tdEl = document.createElement('td');
    tdEl.textContent = newStore.totalCookiePerHour[s];
    trEl.appendChild(tdEl);
  }

  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcookie.value = null;

  newStore.addEventListener('submit', newStore);
  makeDataRow();
}
newStore();
//MakeLocation();