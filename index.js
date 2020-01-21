
  var utils = require('coloringautils');
  var write = require('coloringautils/writefile');
  var colorxjs = require('colorxjs');
  const openInChrome = require('open-in-chrome');

  //save phrase or anything here
  var file = require('./file.json')

  //iterate through the array to open in chrome
  colorxjs.intervalo(500, file.length).subscribe(res=>{
    var wordToSearch = file[res]['word_en'];
    var urlToOpen = 'url/'+wordToSearch;
    openInChrome(urlToOpen).then(res=>{
      console.log('done with '+wordToSearch);
  })

})