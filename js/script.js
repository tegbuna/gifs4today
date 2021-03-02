// BASE_URL w/ Top 10 Endpoint: 'https://api.giphy.com/v1/gifs/trending?api_key=qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx'

//BASE_URL2 w/ Trending Search Terms Endpoint: 'https://api.giphy.com/v1/trending/searches?api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS'

//BASE_URL3 w/ Search Endpoint: 'https://api.giphy.com/v1/gifs/search?api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0'

// Top Ten Key: qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx

// Trending Searches Key: ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS

//Search Key: TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0

//API Top 10 Endpiont Test:
const top10 = $.get("http://api.giphy.com/v1/gifs/search?q=&api_key=qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx");
top10.done(function(data) { console.log("success got data", data); 
}, (error) =>{
  console.log('bad request', error);
});

//API Trending Searches Endpiont Test:
const trends = $.get("http://api.giphy.com/v1/gifs/search?q=&api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS");
trends.done(function(data) { console.log("success got data", data); 
}, (error) =>{
  console.log('bad request', error);
});

//API Search Endpiont Test:
const srch = $.get("http://api.giphy.com/v1/gifs/search?q=&api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0&limit=5");
srch.done(function(data) { console.log("success got data", data); 
}, (error) =>{
  console.log('bad request', error);
});




