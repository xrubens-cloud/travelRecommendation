const searchResult = document.getElementById("searchResult");
const btnSearch = document.getElementById('btnSearch');





function searchDestination(){
  
    const input = document.getElementById('searchKeyword').value.toLowerCase();

    fetch('travel_recommendation.json')
        .then(response => response.json())
        .then(data => {
            return data[input];
        })
        .then(destinations => {
            console.log(destinations);
            if(destinations == undefined){
                noResult();
            }else{
          
                populateResult(destinations);
             
            }
    
        })
        .catch(error => console.error('Error:', error));
}


function populateResult(destinations){
    const resultDiv = document.getElementById('searchResult');
    resultDiv.innerHTML = '';
    destinations.forEach(destination => {
        if(destination.cities === undefined){
            const newDiv = document.createElement("div");
            newDiv.innerHTML += `<img src="${destination.imageUrl}" alt="nopic">`;
            newDiv.innerHTML += `<h3>${destination.name}</h3>`;
            newDiv.innerHTML += `<p>${destination.description}</p>`;
            resultDiv.appendChild(newDiv);
            console.log(resultDiv);
        }else if (destination.cities.length>0){
            destination.cities.forEach(city => {
                const newDiv = document.createElement("div");
                newDiv.innerHTML += `<div>`;
                newDiv.innerHTML += `<img src="${city.imageUrl}" alt="nopic">`;
                newDiv.innerHTML += `<h3>${city.name}</h3>`;
                newDiv.innerHTML += `<p>${city.description}</p>`;
          
                resultDiv.appendChild(newDiv);
            })
        }else{
            const newDiv = document.createElement("div");
            resultDiv.newDiv += `<h3>No result found</h3>`;
            resultDiv.appendChild(newDiv);
        }
    })

   
 //   console.log(destination);
}

function noResult(){
    const resultDiv = document.getElementById('searchResult');
    resultDiv.innerHTML = '';
    const newDiv = document.createElement("div");
    resultDiv.newDiv += `<h3>No result found</h3>`;
    resultDiv.appendChild(newDiv);
}

function clearSearch(){
    destinations.splice(0,destinations.length);
}


btnSearch.addEventListener('click', searchDestination);
