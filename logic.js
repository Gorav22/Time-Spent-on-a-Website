let timeSpent = 0;  
let timer;  

function updateTimer() {  
  timeSpent += 1;
  const hours = Math.floor(timeSpent / 3600);  
  const minutes = Math.floor((timeSpent % 3600) / 60);  
  const seconds = timeSpent % 60;  

  document.getElementById('time-tracker-label').innerText = `Time spent: ${hours.toString().padStart(2, '0')} hrs:${minutes.toString().padStart(2, '0')} min:${seconds.toString().padStart(2, '0')} sec`;  
}   
const label = document.createElement('div');  
label.id = 'time-tracker-label';  
label.style.position = 'fixed';  
label.style.top = '10px';  
label.style.right = '10px';  
label.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';  
label.style.color = 'white';  
label.style.padding = '10px';  
label.style.zIndex = '10000';  
label.style.borderRadius = '5px';  
label.style.fontSize = '14px';  
label.innerText='Time spent: 00 hrs:00 min:00 sec';  
document.body.appendChild(label);  

timer = setInterval(updateTimer, 1000);  
window.addEventListener('beforeunload', () => {  
  clearInterval(timer);  
});