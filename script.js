const key='ciANcspREIxZzirwUEtt_gbSmwGzYUCokAzbsp2Q3Qk';
const searchInp = document.querySelector("#searchInput");
const formEle = document.querySelector("form");
const cont= document.querySelector("#container");
const sh_btn = document.querySelector("#sh-btn")

let inputData = ""
let page =1;


async function Search(){
    inputData=searchInp.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`
     let res = await fetch(url)
     let data = await res.json()
     let result=data.results
     
    if(page===1){
        cont.innerHTML=""
    }
     result.map((val)=>{
         const allImages = document.createElement('div')
         allImages.className="image"
         const image = document.createElement('img')
         image.className="upper"
         image.src=val.urls.small
         allImages.appendChild(image)
         const upper= document.createElement('div')
         upper.appendChild(allImages)
         cont.appendChild(upper)
         const lower =document.createElement('div')
         lower.className="lower"
         const link =document.createElement('a')
         link.href=val.links.download
         link.target="_blank"
         link.innerHTML=val.alt_description
         lower.appendChild(link)
         allImages.appendChild(lower)
    });

    page++;
    sh_btn.style.display="block"
}

formEle.addEventListener("submit",(event)=>{
    event.preventDefault();
    Search()
    page=1;
})

document.querySelector("#sh-btn").addEventListener("click",()=>{
  Search()
})





