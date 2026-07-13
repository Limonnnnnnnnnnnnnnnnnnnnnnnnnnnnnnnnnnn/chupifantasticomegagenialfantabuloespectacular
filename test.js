range1.oninput = function() {
    meter1.value = range1.value*1 + range2.value*1 + range3.value*1 + range4.value*1;
    if (meter1.value == 100) {
        button1.innerHTML = '🍋';
        cdp.innerHTML = 'Central de poder limoníl:'+'<meter min=0 max=100 id=meter1></meter>'+' (on 🟢)';
    }
    else {
        button1.innerHTML = '🚫';
        cdp.innerHTML = 'Central de poder limoníl:'+'<meter min=0 max=100 id=meter1></meter>'+' (off 🔴)';
    }
    meter1.value = range1.value*1 + range2.value*1 + range3.value*1 + range4.value*1;
}
range2.oninput = function() {
    meter1.value = range1.value*1 + range2.value*1 + range3.value*1 + range4.value*1;
    if (meter1.value == 100) {
        button1.innerHTML = '🍋';
        cdp.innerHTML = 'Central de poder limoníl:'+'<meter min=0 max=100 id=meter1></meter>'+' (on 🟢)';
    }
    else {
        button1.innerHTML = '🚫';
        cdp.innerHTML = 'Central de poder limoníl:'+'<meter min=0 max=100 id=meter1></meter>'+' (off 🔴)';
    }
    meter1.value = range1.value*1 + range2.value*1 + range3.value*1 + range4.value*1;
}
range3.oninput = function() {
    meter1.value = range1.value*1 + range2.value*1 + range3.value*1 + range4.value*1;
    if (meter1.value == 100) {
        button1.innerHTML = '🍋';
        cdp.innerHTML = 'Central de poder limoníl:'+'<meter min=0 max=100 id=meter1></meter>'+' (on 🟢)';
    }
    else {
        button1.innerHTML = '🚫';
        cdp.innerHTML = 'Central de poder limoníl:'+'<meter min=0 max=100 id=meter1></meter>'+' (off 🔴)';
    }
    meter1.value = range1.value*1 + range2.value*1 + range3.value*1 + range4.value*1;
}
range4.oninput = function() {
    meter1.value = range1.value*1 + range2.value*1 + range3.value*1 + range4.value*1;
    if (meter1.value == 100) {
        button1.innerHTML = '🍋';
        cdp.innerHTML = 'Central de poder limoníl:'+'<meter min=0 max=100 id=meter1></meter>'+' (on 🟢)';
    }
    else {
        button1.innerHTML = '🚫';
        cdp.innerHTML = 'Central de poder limoníl:'+'<meter min=0 max=100 id=meter1></meter>'+' (off 🔴)';
    }
    meter1.value = range1.value*1 + range2.value*1 + range3.value*1 + range4.value*1;
}