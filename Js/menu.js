const d = document;


export const menu = ($menu,$iconbar,$iconclose)=>{
    
    const $main = d.querySelector($menu); 

    d.addEventListener('click', e=>{
         if(e.target.matches($iconbar)){
            $main.classList.add('mostrar');
         }

         if(e.target.matches($iconclose)){
             $main.classList.remove('mostrar');
         }
    });

}