// BASE_URL w/ Top 10 Endpoint: 'https://api.giphy.com/v1/gifs/trending?api_key=qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx'

//BASE_URL2 w/ Trending Search Terms Endpoint: 'https://api.giphy.com/v1/trending/searches?api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS'

//BASE_URL3 w/ Search Endpoint: 'https://api.giphy.com/v1/gifs/search?api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0'

// Key one: qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx

// Key two: ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS

//Key three: TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0

var top10 = $.get("http://api.giphy.com/v1/gifs/search?q=&api_key=qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx");
top10.done(function(data) { console.log("success got data", data); });

var trends = $.get("http://api.giphy.com/v1/gifs/search?q=&api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS");
trends.done(function(data) { console.log("success got data", data); });


var srch = $.get("http://api.giphy.com/v1/gifs/search?q=&api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0&limit=5");
srch.done(function(data) { console.log("success got data", data); });


