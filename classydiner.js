const btn = document.querySelector('button')

 btn.addEventListener('click', () => {
     input = prompt("What's your Id?");
    console.log("Cooking meal for userID:" + input );
    
    const event = new CustomEvent("Meal is ready", {
        detail:{
            client : input 
        }
    });
   
        setTimeout(() => {
            document.dispatchEvent(event)
           }, 3000 );
    
    } 
 )
 document.addEventListener("Meal is ready", (e) => {
    console.log(`Serving a meal to client: ${e.detail.client}`)
    
});
 

 