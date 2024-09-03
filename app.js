const allBtn = document.getElementsByClassName('btn');

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.parentNode.childNodes[1].innerText

        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-players-container');

        const div = document.createElement('div');
        div.classList.add('selected-players');

        const p1 = document.createElement('p');
        p1.classList.add('font-semibold', 'text-2xl', 'text-pink-600');

        const p2 = document.createElement('p');
        p2.classList.add('font-semibold', 'text-2xl', 'text-pink-600');

        const p3 = document.createElement('p');
        p3.classList.add('font-semibold', 'text-2xl', 'text-pink-600');

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);
    });
}


function getConverteValue(id) {
    const price = document.getElementById(id).innerText;
    const convertePrice = parseInt(price);
    return convertePrice;
};