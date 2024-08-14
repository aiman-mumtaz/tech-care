function getDataJessica() {
    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${auth}`);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions)
    .then(response => response.text())
    .then(result => {
            resArr = JSON.parse(result);
            // console.log(resArr.filter((item)=>item.name == "Jessica Taylor")[0]);
            return resArr.filter((item)=>item.name == "Jessica Taylor")[0];
        })
    .catch(error => console.log('error', error));

}

document.addEventListener("DOMContentLoaded", function(event){
    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${auth}`);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", requestOptions)
    .then(response => response.text())
    .then(result => {
            resArr = JSON.parse(result);
            // console.log(resArr.filter((item)=>item.name == "Jessica Taylor")[0]);
            // return resArr.filter((item)=>item.name == "Jessica Taylor")[0];
            document.getElementById('jessica').innerHTML = resArr.filter((item)=>item.name == "Jessica Taylor")[0]['name'];
        })
    .catch(error => console.log('error', error));
  });