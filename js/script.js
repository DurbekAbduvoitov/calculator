let value = document.querySelectorAll('.value'),
    clear = document.querySelector('.clear'),
    equal = document.querySelector('.equal'),
    display = document.querySelector('.display'),
    result;

    value.forEach(function(item, i){
        let numb = value[i].textContent;
        item.addEventListener('click', function(){
            display.innerHTML += numb;
        });
    });

    clear.addEventListener('click' , function(){
        display.innerHTML = '';
    });

    equal.addEventListener('click' , function(){
        result = eval(display.textContent);
        display.innerHTML = `${result}`;

    });

