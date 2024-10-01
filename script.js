
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("container");


yesBtn.addEventListener("click", function() {
    
    window.location.href = "https://www.youtube.com/watch?v=0CdMqJ9Lidg"; 
});


noBtn.addEventListener("mouseover", function() {
   
    const x = Math.random() * (window.innerWidth - container.offsetWidth); 
    const y = Math.random() * (window.innerHeight - container.offsetHeight); 

   
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
});
