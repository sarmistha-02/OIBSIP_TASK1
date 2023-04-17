let st="";
let display=document.querySelector("input");
let buttons=Array.from(document.getElementsByTagName("button")); //array of buttons
buttons.forEach((button)=>{ //extracting each button
    button.addEventListener("click",()=>{ //adding eventListener to each button
        st=button.innerHTML;
        if(st=="DEL")
            display.value=display.value.slice(0,-1);
        else if(st=="CLR")
            display.value="";
        else if(st=="ENTER")
            try{
                display.value=eval(display.value);
            }
            catch{
                display.value="ERROR!!!";
            }
        else
            display.value+=st;
    })
})