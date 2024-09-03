const allBtn = document.getElementsByClassName('btn');

for(const btn of allBtn){
    btn.addEventListener('click', function(event){
        const name = event.target.parentNode.childNodes[1].innerText

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
  
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        console.log(category)
    })
}


function getConverteValue(id){
    const price = document.getElementById(id).innerText;
    const convertePrice = parseInt(price);
    return convertePrice;
};