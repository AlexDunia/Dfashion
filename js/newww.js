  function menutoggle(){
      	const menuu = document.getElementById("newdiv");
          const fix = document.getElementById("fixximage");
	      const mainmenu = document.querySelector(".menuicon");
         const spot = document.querySelector(".menuiconnn");

   	if (menuu.style.visibility === "visible")
   		{
   		menuu.style.visibility = "hidden";
      mainmenu.src = "images/menu.png"; 
     
   		}
   		else 
   		{
   			menuu.style.visibility = "visible";
      mainmenu.src = "images/x.png"; 
        
   		}

    }



       

    