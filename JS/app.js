const endDate = "14 October 2023 12:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end-now) / 1000;
    if (diff < 0 ) return;
    // console.log(diff);
    //convert into days;
    // console.log(Math.floor(diff / 3600 / 24));
    inputs[0].value = Math.floor(diff / 3600 / 24);

    //convert into remaining Hours;
    // console.log(Math.floor(diff / 3600) % 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    
    //convert into mins;
    // console.log(Math.floor(diff / 60) % 60);
    inputs[2].value = Math.floor(diff / 60) % 60;

    
    //convert into sec;
    // console.log(Math.floor(diff) % 60);
    inputs[3].value = Math.floor(diff) % 60;

}
//invoke
clock()

/*
* 1 day = 24 hrs;
* 1 hrs = 60 min;
* 60 min = 3600 sec 
*/

setInterval(
    ()=> {
        clock()
    },
    1000
)