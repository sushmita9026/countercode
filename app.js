// 
let count = 0;
const countSpan = document.getElementById("count");

document.getElementById("decrease").addEventListener("click", function() {
    count--;
    countSpan.textContent = count;
});
document.getElementById("reset").addEventListener("click", function() {
   count=0;
   countSpan.textContent = count;
});

document.getElementById("increase").addEventListener("click", function() {
    count++;
    countSpan.textContent = count;
});


