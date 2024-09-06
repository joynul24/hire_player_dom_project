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

        updateTotalCost(price);
        updateGrandTotal();
    });
};


function updateGrandTotal(status) {
    const totalCost = getConverteValue('total-cost');
    if (status === undefined) {
        document.getElementById('grand-total').innerText = totalCost;
    }
    else {
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode === 'love24') {
            const discounted = totalCost * 0.2;
            document.getElementById('grand-total').innerText = totalCost - discounted;
        }
        else (
            alert("Please enter valid coupon coede!")
        )
    }
};


function updateTotalCost(value) {
    const totalCost = getConverteValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
};


function getConverteValue(id) {
    const price = document.getElementById(id).innerText;
    const convertePrice = parseInt(price);
    return convertePrice;
};