const container = document.querySelector('.container');
container.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    function toBinary(decimal) {
        let binary = "";
        while (decimal > 0) {
            if (decimal & 1) {
                binary = "1" + binary;
            } else {
                binary = "0" + binary;
            }
            decimal = decimal >> 1;
        }
        return binary;
    }

    let decimal = document.querySelector('#decimal').value;
    const result = document.querySelector('.result');
    result.textContent = `Binary Number : ${toBinary(decimal)}`
});