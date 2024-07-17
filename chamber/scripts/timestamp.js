const dateTime = (currentdate.getMonth()+1) + "/" + currentdate.getDate() 
+ "/" + currentdate.getFullYear() + " | "  
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

document.querySelector('#timestamp').textContent = dateTime;