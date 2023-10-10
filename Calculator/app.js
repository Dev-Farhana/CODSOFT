let input = document.getElementById('text');
let str="" ;
let buttons = document.querySelectorAll('td');
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target.innerHTML === "="){
            str = eval(str);
            input.value= str;
        }
        else if(e.target.innerHTML === "C"){
            str="";
            input.value= str;
        }
        else{
            console.log(e.target);
        str = str + e.target.innerHTML;
        input.value = str;
        }
    })
})

