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
  cookiesSoldPerHour: [],
  totalCookies: 0,
  