window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl = 'https://azurefuncresumecounter.azurewebsites.net/api/GetResumeCounter?code=js0DHEO4Qhq49j2CP6LhGRy4U3WCdUeB4hJZJtcg5ovoDILRcvJyhg==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {      
        return response.json()   
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}