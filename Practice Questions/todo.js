let click = document.querySelector("#abc");
    click.addEventListener("click",function(){
       if(click.textContent === "CLICK HERE !!")
       {
            click.textContent = "HEHEHEHE";
       }
       else{
        click.textContent = "CLICK HERE !!";
       }
    });