const d = document;
export const slider = ()=>{
    const images = [
       '../img/image1.jpg',
       '../img/image2.jpg',
       '../img/image3.jpg',
       '../img/image4.jpg',
    ];

    const title = [
        'Lorem ipsum dolor sit amet consectetur adipisicing',
        'Lorem ipsum dolor sit amet consectetur adipisicing',
        'Lorem ipsum dolor sit amet consectetur adipisicing',
        'Lorem ipsum dolor sit amet consectetur adipisicing'
    ];

    const image = d.querySelector('.slider-img');
    const $parrafo = d.querySelector('.fondo-parrafo');
    const arrowr = d.querySelector('.arrow-right');
    const arrowl = d.querySelector('.arrow-left');
    let i = 0;

    image.src = images[i];
    $parrafo.textContent = title[i];
    arrowl.classList.add('desvanecer');

    d.addEventListener('click', e=>{
        if(e.target.matches('.arrow-right')){
            i++;
            image.src = images[i];
            $parrafo.textContent = title[i];
            console.log(i);
            arrowl.classList.remove('desvanecer');

            if(i === images.length-1){
                arrowr.classList.add('desvanecer');
            }

        } 

        if(e.target.matches('.arrow-left')){
            i--;
            image.src = images[i];
            $parrafo.textContent = title[i];
            arrowr.classList.remove('desvanecer');

            console.log(i);
           
            if(i === 0){
                arrowl.classList.add('desvanecer');
                arrowr.classList.remove('desvanecer');
            }
        } 

    });
}