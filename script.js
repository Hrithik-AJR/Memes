let meme=document.getElementById("meme");
let title= document.getElementById("title");
let getMemeBtn=document.getElementById("get-meme");

let url="https://meme-api.com/gimme/";

let subreddits=["catmemes","dogmemes","wholesomememes"];

let getMeme = () => {
    let randomSubreddit = subreddits[Math.floor(Math.random()*subreddits.length)];
    
    fetch(url + randomSubreddit).then((resp) => resp.json()).then((data) => {
        let memeImg=new Image();
        memeImg.onload=()=>{
            meme.src=data.url;
            console.log(data);
            title.innerHTML=data.title;
        };
     memeImg.src=data.url;
    });
}

getMemeBtn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme);
