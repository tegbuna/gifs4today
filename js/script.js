


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
$(document).ready(formatList);
function formatList(e) {

    $.ajax('https://api.giphy.com/v1/trending/searches?api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS&limit=27').then(function(data1){
        $('#key-term-1').text(data1.data[0])
        $('#key-term-2').text(data1.data[1])
        $('#key-term-3').text(data1.data[2])
        $('#key-term-4').text(data1.data[3])
        $('#key-term-5').text(data1.data[4])
        $('#key-term-6').text(data1.data[5])
        $('#key-term-7').text(data1.data[6])
        $('#key-term-8').text(data1.data[7])
        $('#key-term-9').text(data1.data[8])
        $('#key-term-10').text(data1.data[9])
        $('#key-term-11').text(data1.data[10])
        $('#key-term-12').text(data1.data[11])
        $('#key-term-13').text(data1.data[12])
        $('#key-term-14').text(data1.data[13])
        $('#key-term-15').text(data1.data[14])
        $('#key-term-16').text(data1.data[15])
        $('#key-term-17').text(data1.data[16])
        $('#key-term-18').text(data1.data[17])
    })
    $.ajax('https://api.giphy.com/v1/gifs/trending?api_key=qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx&limit=10').then (function(data2){
        $('#gif10').attr('src', data2.data[0].images.original.url);
        $('#gif9').attr('src', data2.data[1].images.original.url);
        $('#gif8').attr('src', data2.data[2].images.original.url);
        $('#gif7').attr('src', data2.data[3].images.original.url);
        $('#gif6').attr('src', data2.data[4].images.original.url);
        $('#gif5').attr('src', data2.data[5].images.original.url);
        $('#gif4').attr('src', data2.data[6].images.original.url);
        $('#gif3').attr('src', data2.data[7].images.original.url);
        $('#gif2').attr('src', data2.data[8].images.original.url);
        $('#gif1').attr('src', data2.data[9].images.original.url);
    })
}