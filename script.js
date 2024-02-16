// function displayTime()  {

//     let dt = new Date();
//     let hr = (dt.getHours())%12;
//     let mn = dt.getMinutes();
//     let sc = dt.getSeconds();
//     let tm = document.getElementById("tm");
//     tm.innerHTML = (hr+":"+mn+":"+sc);
// }
// setInterval(displayTime,1000)

setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
        day_night = "PM";
        hours = hours - 12;   
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + "  " + day_night; 
});