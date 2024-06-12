let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    input.addEventListener('keypress',(e)=>{ 
        if(e.key=="Enter"){
            input.value=eval(input.value);
        }})
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            input.focus();
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            input.focus();
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
            input.focus();
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
            input.focus();
        } 
    })
})