const currentdate = new Date();
const dateTime = (currentdate.getMonth()+1) + "/" + currentdate.getDate() 
+ "/" + currentdate.getFullYear() + " | "  
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

document.querySelector('#year').textContent = currentdate.getFullYear();
document.querySelector('#lastModified').textContent =  document.lastModified;
document.querySelector('#timestamp').textContent = dateTime;
