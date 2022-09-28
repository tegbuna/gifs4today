



/*----- API KEYS -----*/
// BASE_URL w/ Top 10 Endpoint: 'https://api.giphy.com/v1/gifs/trending?api_key=qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx&limit=10'
// Top Ten Key: qb1xRZmU2B2eMGsiO78pCPnk1XOM0Rgx

//BASE_URL2 w/ Trending Search Terms Endpoint: 'https://api.giphy.com/v1/trending/searches?api_key=ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS&limit=27'
// Trending Searches Key: ca1ep15FwAhmLD1t2cAUus1ubyOp2IsS

//BASE_URL3 w/ Search Endpoint: 'https://api.giphy.com/v1/gifs/search?api_key=TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0'
//Search Key: TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0
// q : q=ryan+gosling


/*----- FUNCTIONS -----*/

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

// Hide Search Results Heading:
    // $(document).ready(function(){
    //       $("#hidesearch").hide();
    // })

// Get Top 10 GIFs of the day:

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

// Get Search Results:
const apikey = 'TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0';

const q = $('#search-input').val();
const path = `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${apikey}&fmt=html`;
// const submit  = ('#submit-button');

$.ajax({
    url:`${path}`
}).then(  
    (data3) => {
        // $("#searchgifs").click((json) => {
        // $("#hidesearch").show();
        
        $('#srch1').attr('src', data3.data[0].images.original.url);
        $('#srch2').attr('src', data3.data[1].images.original.url);
        $('#srch3').attr('src', data3.data[2].images.original.url);
    },
(error) => {
    console.log('bad request:', error);
})

// })
}








// ***************
// //For Search Items:
//     // const searchForm = document.getElementById('search-form')
//     // const searchInput = document.getElementById('gifsearch')
//     // const resultsEl = document.getElementById('results')

//     // searchForm.addEventListener('submit', function(e) {
//     //     e.preventDefault()
//     //     const q = searchInput.value 
//     //     search(q)
//     // })

//     function search (q) {
//         const apikey = 'TtNU4DZGqrYC7rkkWQckj4PC8tlwv2z0'
//         const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`
        

//         fetch(path).then(function(res) {
//             return res.json()
//         }).then(function() {
//             $("#searchgifs").click(function(json){
//                 $("#hidesearch").show();
//                 $('#srch1').attr('src', json.data[0].images.original.url);
//                 $('#srch1').attr('src', data[1].images.original.url);
//                 $('#srch1').attr('src', data[2].images.original.url);
//             // console.log(json.data[0].images.fixed_width.url);
//             // console.log(json.data[1].images.fixed_width.url);
//             // console.log(json.data[2].images.fixed_width.url);

//             // json.data.forEach(function(obj) {
//             })
//         })
//         }
        
//     }
