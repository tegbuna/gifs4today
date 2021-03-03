


//IPO Pattern for program design - Input -> Process -> Input

// BASE_URL w/ Top 10 Endpoint: 'https://api.giphy.com/v1/gifs/trending?api_key=qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx&limit=10'

//BASE_URL2 w/ Trending Search Terms Endpoint: 'https://api.giphy.com/v1/trending/searches?api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS&limit=27'

//BASE_URL3 w/ Search Endpoint: 'https://api.giphy.com/v1/gifs/search?api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0'

// Top Ten Key: qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx

// Trending Searches Key: ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS

//Search Key: TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0


/*----- constants -----*/


/*----- app's state (variables) -----*/


/*----- cached element references -----*/
// const $toptrends = $('#toptrends');
// const $gifs = $('#gif');
// const $modal = $('modal');
// const $form = $('#form')

/*----- event listeners -----*/
// $('.btn-outline-success').click(function(e)


/*----- functions -----*/
//For Search Items (needs modal):
// $('.btn-outline-success').click(function(e) { 
//   e.preventDefault()
//       console.log("The button was clicked.")
  
//   $.ajax({
  
//       url: "http://api.giphy.com/v1/gifs/search?q=" + $('.form-control me-2').val() +  "&api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0",
//       type: "GET",
//       success: function(data) {
//           console.log("This works too")
//           debugger
//           console.log(response.data[0].bitly_url);
//       }
//   });
//   });

//Get Popular Search Key Terms List:    
function formatList(jsonObject) {
    let  keyTerm = jsonObject.data;

$.ajax({
    
        url: "http://api.giphy.com/v1/gifs/search?q="  +  "&api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS&limit=18",
        type: "GET",
        success: function (data) {
                $('.col-lg-4').text(`<p> ${keyTerm} </p>`);
            }        
        });