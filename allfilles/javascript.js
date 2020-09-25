console.log('jes')
const link=document.getElementById('link')
let full=document.getElementById('all')

let goOn=true     ;
let count=5;

const ApiKey='rBMjQLP2v3Frfn1jLUEw2U-iNqT4DbMUlCjkob2Dv1s';
const proxy='https://shrouded-temple-39982.herokuapp.com/';

async function getPhotos(){
        let  json=await fetch(`${proxy}https://api.unsplash.com/photos/random/?client_id=${ApiKey}&count=${count}`)
        let detailed=await json.json();
        console.log(detailed)
        detailed.forEach((element)=>{
            console.log('e')
            //making new element for each of array element
            let bu=document.createElement("a");
            let image=document.createElement("img");
        image.src=element.urls.regular;
        bu.title=element.alt_description;
        bu.appendChild(image)
        full.appendChild(bu)
        })
        goOn=false;
    }

window.addEventListener('scroll',()=>{
    console.log(window.scrollY + window.innerHeight)
    console.log(full.offsetHeight - 1000)
    if (window.scrollY + window.innerHeight >= full.offsetHeight - 1000 && goOn==false )
    { 
    count=7;
    getPhotos()
       return goOn=true
    }
})
getPhotos()