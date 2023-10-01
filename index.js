let inputElements=document.getElementsByClassName("code");

for(let i=0;i<inputElements.length;i++)
{
    inputElements[i].addEventListener("keyup",(event)=>{

        let currElement=event.target;
        let value=event.key;
        if(value=="Backspace")
        {
            let preElement=currElement.previousElementSibling;
            if(preElement)
            {
                preElement.focus();
            }
        }
        else if( value>="0" && value <="9")
        {
            let nextElement=currElement.nextElementSibling;
            if(nextElement)
            {
                nextElement.focus()
            }
        }
        else{
            event.target.value="";
        }
    })
}