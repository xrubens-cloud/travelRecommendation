const searchResult = document.getElementById("searchResult");
const btnSearch = document.getElementById('btnSearch');
const destinations = [];




function searchDestination(){
  
    const input = document.getElementById('searchKeyword').value.toLowerCase();

   

    fetch('travel_recommendation.json')
        .then(response => response.json())
        .then(data => {
            populateResult(data[input]);
        })
        .catch(error => console.error('Error:', error));
}


function populateResult(destination){
    const resultDiv = document.getElementById('result');
    console.log(destination);
}

function clearSearch(){
    destinations.splice(0,destinations.length);
}


btnSearch.addEventListener('click', searchDestination);
