document.getElementById('submit').addEventListener('click', function() {
    let price = 100;

    
    const education = document.getElementById('education').value;
    switch (education) {
        case 'bachelor': price *= 1.5; break;
        case 'college': price *= 1.2; break;
        case 'high_school': price *= 1.05; break;
        case 'middle_school': price *= 0.9; break;
    }

    
    const networth = document.getElementById('networth').value;
    switch (networth) {
        case 'upper_class': price *= 2; break;
        case 'middle_class': price *= 1.5; break;
        case 'lower_class': price *= 1.2; break;
    }

    
    const caste = document.getElementById('caste').value;
    switch (caste) {
        case 'brahmin': price += 100; break;
        case 'kshatriya': price += 50; break;
        case 'vaishya': price += 20; break;
        case 'shudra': price += 10; break;
        case 'varna': price -= 50; break;
    }

    
    if (document.getElementById('music').checked) price += 10;
    if (document.getElementById('cook').checked) price += 20;
    if (document.getElementById('character').checked) price += 15;
    if (document.getElementById('sing').checked) price += 10;

    
    const age = document.querySelector('input[name="age"]:checked');
    if (age) {
        switch (age.value) {
            case '18-23': price *= 1.5; break;
            case '24-27': price *= 1.2; break;
            case '28+': price *= 0.95; break;
        }
    }

    
    if (document.getElementById('gossip_parents').checked) price *= 0.85;
    if (document.getElementById('gossip_character').checked) price *= 0.9;
    if (document.getElementById('general_gossip').checked) price -= 20;

    
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Final dowry price: $${price.toFixed(2)}`;
    resultElement.style.color = price >= 100 ? 'green' : 'red';
});