let currentSong= new Audio();

function secondToMinutesSecond(second){
    if(isNaN(second)|| second < 0){
        return "invalid input"
    }
   const minutes=Math.floor(second/60)
   const remainSecond=Math.floor(second % 60)
   const formateMinutes=String(minutes).padStart(2,'0');
   const formattedSecond=String(remainSecond).padStart(2,'0')
   return `${formateMinutes}:${formattedSecond}`;
}
async function getsongs() {
 
        const response = await fetch("http://127.0.0.1:5500/songs/");

        if (!response.ok) {
            console.log(`Failed to fetch songs. Status: ${response.status}`);
        }

        const data = await response.text();

       
        const songs = data.split('\n').filter(song => song.trim() !== '');
        

       
        
        let div = document.createElement('div')

        div.innerHTML=songs
        let as=div.getElementsByTagName('a')
        let songsList=[]
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if(element.href.endsWith(".mp3")){
                songsList.push(element.href.split("/songs/")[1] )
            }
            
        }
        
       return songsList

  
};
const playMusic=(track , paused=false)=>{
    currentSong.src=`${/songs/+track}`
    // let audio= new Audio(/songs/+track)
    // audio.play()

    if(!paused){
       
        currentSong.play()
        play.src="/img/pause.svg"
    }

    document.querySelector('.songInfo').innerHTML=`${decodeURI(track)}`
    document.querySelector('.songTime').innerHTML="00:00:00:00"
}
async function main(){
    // get the list of all the song
     let songs= await getsongs();
     playMusic(songs[7], true )
 
     console.log(songs);
    //   play the first song
//     var audio = new Audio(songs[0]);
//     audio.play();
    // let aud = new Audio(songs[9])
   
    // audio.play()
    let songUl=document.querySelector('.songList').getElementsByTagName('ul')[0]
    for (const song of songs) {
        songUl.innerHTML=songUl.innerHTML+`<li name="1st"><img class="invert " src="/img/music.svg" alt="">
        <div class="info">
            <div id="songName">${song}</div>
            <div>Arjit Singh</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="/img/play.svg" alt="">
        </div>
        
        </li>`
    }
 

    //  attach an Event listener at each song

    Array.from(document.querySelector(".songList").getElementsByTagName('li')).forEach((e)=>{
        e.addEventListener('click', ()=>{

            console.log(e.querySelector('.info>div').innerHTML);
            playMusic(e.querySelector('.info>div').innerHTML)

        })
    });

    //  attach an EventListerner at prevoious and next
    // document.getElementById('play').addEventListener('click', ()=>{
        //  can be used dairect if  we give a id 
        play.addEventListener('click', ()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src="/img/pause.svg"
        }
        else{
            currentSong.pause()
            play.src='/img/play.svg'
        }
    })


    // time update function
    currentSong.addEventListener("timeupdate", ()=>{
        console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector('.songTime').innerHTML=`${secondToMinutesSecond(currentSong.currentTime)}:${secondToMinutesSecond(currentSong.duration)}`
        document.querySelector('.circle').style.left=(currentSong.currentTime/currentSong.duration)*100+"%"
    })

    // add Event listener seekbar touch to song go ahead
    document.querySelector(".seekbar").addEventListener('click',(e)=>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100
        console.log((e.offsetX/e.target.getBoundingClientRect().width)*100);
        document.querySelector('.circle').style.left=percent+"%";
        currentSong.currentTime=(currentSong.duration)*percent/100
    })

    // add eventlistener at hamburger
    document.querySelector('.hamburger').addEventListener('click', ()=>{
        document.querySelector('.left').style.left="0"
    })

 };

main()

