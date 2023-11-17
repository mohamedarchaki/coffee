
    function increaseValue() {
        var resultaElement = document.getElementById("resulta");
        var currentValue = parseInt(resultaElement.innerText);
        resultaElement.innerText = currentValue + 1;
    }
    function descValue() {
        
        var resultaElement = document.getElementById("resulta");
        var currentValue = parseInt(resultaElement.innerText);
        if(currentValue>0){
        resultaElement.innerText = currentValue - 1;
    }
    }
