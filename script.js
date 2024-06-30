let currentSong= new Audio();
let songId;
let masterPlay=document.getElementById("masterPlay")
let playBar=document.getElementById("Playbar")
var songs=[
    {songName:"Mortals ", songAuthor:"Warrio", songPath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" You Did Me Wrong ", songAuthor:"Cajama", songPath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Hurt Me ", songAuthor:"Evanly", songPath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Alone ", songAuthor:"Cajama", songPath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Royalty", songAuthor:"Egzod, Maestro Chives", songPath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Heroes Tonight", songAuthor:"Janji", songPath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Sky High", songAuthor:"Elektronomia", songPath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"On & On", songAuthor:"Cartoon", songPath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Fearless ", songAuthor:"TULE", songPath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"Cradles", songAuthor:"Sub Urban", songPath:"songs/10.mp3", coverPath:"covers/10.jpg"}
]
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-pause")
    element.classList.add("fa-play")
})
}
 
 
Array.from(document.getElementsByClassName("songItem")).forEach((element, i)=>{
    element.getElementsByTagName("h3")[0].innerHTML=songs[i].songName
    element.getElementsByTagName("p")[0].innerHTML=songs[i].songAuthor
})
masterPlay.addEventListener('click',()=>{
    if(currentSong.paused||currentSong.currentTime<=0){
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        currentSong.play();
        document.getElementById("gifImage").style.opacity="60%"
        document.querySelectorAll(".songItemPlay")[songId-1].classList.remove("fa-play")
        document.querySelectorAll(".songItemPlay")[songId-1].classList.add("fa-ellipsis")
    }
    else{
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
        makeAllPlays();
        currentSong.pause();
        document.getElementById("gifImage").style.opacity="0%"
    }
})
currentSong.addEventListener("timeupdate",()=>{
    playBar.value=parseInt(currentSong.currentTime*100/currentSong.duration)
})
playBar.addEventListener("change",()=>{
    currentSong.currentTime=parseInt(playBar.value*currentSong.duration/100)
})

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        songId=index;
        currentSong.src="songs/"+index+".mp3";
        // if(currentSong.paused || currentSong.currentTime==0){
            e.target.classList.remove("fa-play");
            e.target.classList.add("fa-ellipsis");
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            currentSong.currentTime=0;
            currentSong.play();
            document.getElementById("gifImage").style.opacity="60%"
            document.getElementById("songPic").src="covers/"+index+".jpg";
            document.querySelector(".picName h2").innerHTML=songs[index-1].songName;
            document.querySelector(".picName p").innerHTML=songs[index-1].songAuthor;
            document.querySelector(".masterSongName p").innerHTML=songs[index-1].songName;
            
        
        // else {
        //     e.target.classList.remove("fa-pause");
        //     e.target.classList.add("fa-play");
        //     masterPlay.classList.add("fa-play");
        //     masterPlay.classList.remove("fa-pause");
        //     currentSong.pause();
        //     document.getElementById("gifImage").style.opacity="0%"
        // }
        
    })
})
document.getElementById("back").addEventListener("click",()=>{
    makeAllPlays();
    if(songId==1){
        songId=10;
    }
    else{
        songId=songId-1;
    }
    
    currentSong.src="songs/"+songId+".mp3";
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    currentSong.currentTime=0;
    currentSong.play();
    document.getElementById("gifImage").style.opacity="60%"
    document.getElementById("songPic").src="covers/"+songId+".jpg";
    document.querySelector(".picName h2").innerHTML=songs[songId-1].songName;
    document.querySelector(".picName p").innerHTML=songs[songId-1].songAuthor;
    document.querySelector(".masterSongName p").innerHTML=songs[songId-1].songName;
    document.querySelectorAll(".songItemPlay")[songId-1].classList.remove("fa-play")
    document.querySelectorAll(".songItemPlay")[songId-1].classList.add("fa-ellipsis")
})
document.getElementById("forward").addEventListener("click",()=>{
    makeAllPlays();
    if(songId==10){
        songId=1;
    }
    else{
        songId=songId+1;
    }
    
    currentSong.src="songs/"+songId+".mp3";
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    currentSong.currentTime=0;
    currentSong.play();
    document.getElementById("gifImage").style.opacity="60%"
    document.getElementById("songPic").src="covers/"+songId+".jpg";
    document.querySelector(".picName h2").innerHTML=songs[songId-1].songName;
    document.querySelector(".picName p").innerHTML=songs[songId-1].songAuthor;
    document.querySelector(".masterSongName p").innerHTML=songs[songId-1].songName;
    document.querySelectorAll(".songItemPlay")[songId-1].classList.remove("fa-play")
    document.querySelectorAll(".songItemPlay")[songId-1].classList.add("fa-ellipsis")
})