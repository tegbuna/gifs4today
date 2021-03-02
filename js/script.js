


//IPO Pattern for program design - Input -> Process -> Input

// BASE_URL w/ Top 10 Endpoint: 'https://api.giphy.com/v1/gifs/trending?api_key=qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx'

//BASE_URL2 w/ Trending Search Terms Endpoint: 'https://api.giphy.com/v1/trending/searches?api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS'

//BASE_URL3 w/ Search Endpoint: 'https://api.giphy.com/v1/gifs/search?api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0'

// Top Ten Key: qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx

// Trending Searches Key: ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS

//Search Key: TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0


/*----- constants -----*/


/*----- app's state (variables) -----*/
// let name;
// let preview;
// let looping

/*----- cached element references -----*/
// const $toptrends = $('#toptrends');
// const $gifs = $('#gif');
// const $modal = $('modal');
// const $form = $('#form')

/*----- event listeners -----*/
// $form.on('click','#form.submit', handleClick);
// $gifs.on('click','#gifs.gif', handleClick);
/*----- functions -----*/

$('.searchbtn').click(function(e) { 
  e.preventDefault()
      console.log("click noticed")
  
  $.ajax({
  
      url: "http://api.giphy.com/v1/gifs/search?q=" + $('.searcchtext').val() +  "&api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0",
      type: "GET",
      success: function(data) {
          console.log("This works too")
          //debugger
          console.log(response.data[0].bitly_url);
  
      }
  });
  });