let currentSong= new Audio();
let songs;
let currFolder;
function secondToMinutesSecond (second){
    if(isNaN(second)|| second < 0){
        return "00:00";
    }
   const minutes=Math.floor(second/60)
   const remainSecond=Math.floor(second % 60)
   const formateMinutes=String(minutes).padStart(2,'0');
   const formattedSecond=String(remainSecond).padStart(2,'0')
   return `${formateMinutes}:${formattedSecond}`;
}
async function getsongs(folder) {
    currFolder=folder
    //     const response = await fetch("http://127.0.0.1:5500/songs/");
    //     if (!response.ok) {
    //         console.log(`Failed to fetch songs. Status: ${response.status}`);
    //     }
    //     const data = await response.text();    
    //     const songs = data.split('\n').filter(song => song.trim() !== '');  
    //     let div = document.createElement('div')

    //     div.innerHTML=songs
    //     let as=div.getElementsByTagName('a')
    //     let songsList=[]
    //     for (let index = 0; index < as.length; index++) {
    //         const element = as[index];
    //         if(element.href.endsWith(".mp3")){
    //             songsList.push(element.href.split("/songs/")[1] )
    //         }            
    //     }    
    //    return songsList

    let a = await fetch(`http://127.0.0.1:5500/${folder}/`);
    let response=await a.text()
    let div=document.createElement("div")
    div.innerHTML=response
    let as=div.getElementsByTagName("a")

        
     songs=[]
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if(element.href.endsWith(".mp3")){
                songs.push(element.href.split(`/${folder}/`)[1] )
            }
            
        }

        // show all song is list
    let songUl=document.querySelector('.songList').getElementsByTagName('ul')[0]
    songUl.innerHTML=""
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

            
            playMusic(e.querySelector('.info>div').innerHTML)

        })
    });
        
     

  
};
const playMusic=(track , paused=false)=>{
    currentSong.src=`/${currFolder}/`+track
    // let audio= new Audio(/songs/+track)
    // audio.play()

    if(!paused){
       
        currentSong.play()
        play.src="/img/pause.svg"
    }

    document.querySelector('.songInfo').innerHTML=`${decodeURI(track)}`
    document.querySelector('.songTime').innerHTML="00:00:00:00"
}

async   function displayAlbums(){
   
    let a = await fetch(`http://127.0.0.1:5500/songs/`);
    let response=await a.text()
    let div=document.createElement("div")
    div.innerHTML=response
    let anchors=div.getElementsByTagName("a")
    let cardContainer=document.querySelector('.cardContainer')
    
    Array.from(anchors).forEach( async e=>{
        if(e.href.includes("/songs")){
            // console.log(e.href.slice[-2]);
            let folder =e.href.split("/").slice(-1)[0];
            //  get the meta data of the folder 
            let a = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`);
            let response=await a.json()
            console.log(response);
            cardContainer.innerHTML=cardContainer.innerHTML + ` <div data-folder="cs" class="card" >
            <div class="play" >
                <img src="/img/play2.svg" alt="">
            </div>
            <img src="/songs/${folder}/cover.jpg" alt="" >
            <h3>${response.title}</h3>
            <p>${response.description}</p>
        </div>`

        }
    })
     // load the playlist whenever card clcik
     Array.from(document.getElementsByClassName('card')).forEach(e=>{
     
        e.addEventListener('click', async item=>{
          
            songs= await getsongs(`songs/${item.currentTarget.dataset.folder}`)

        })
    })

    // console.log(anchors);
}
async function main(){
    // get the list of all the song
     await getsongs("songs/ncs");
     playMusic(songs[0], true )
 
//    display all the album on the page
    displayAlbums()
  

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
      
        document.querySelector('.songTime').innerHTML=`${secondToMinutesSecond(currentSong.currentTime)}:${secondToMinutesSecond(currentSong.duration)}`
        document.querySelector('.circle').style.left=(currentSong.currentTime/currentSong.duration)*100+"%"
    })

    // add Event listener seekbar touch to song go ahead
    document.querySelector(".seekbar").addEventListener('click',(e)=>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100
     
        document.querySelector('.circle').style.left=percent+"%";
        currentSong.currentTime=(currentSong.duration)*percent/100
    })

    // add eventlistener at hamburger
    document.querySelector('.hamburger').addEventListener('click', ()=>{
        document.querySelector('.left').style.left="0"
    })
    document.querySelector(".close").addEventListener('click',()=>{
        document.querySelector('.left').style.left="-100%"
    })

    // previous and next add Evenet Listener
    previous.addEventListener('click',()=>{
        currentSong.pause()
        let index=songs.indexOf(currentSong.src.split('/').slice(-1)[0])
        if((index-1) >= 0){

            playMusic(songs[index-1])
        }
      
    })
    next.addEventListener('click',()=>{
        currentSong.pause()
        
        let index=songs.indexOf(currentSong.src.split('/').slice(-1)[0])
        if((index+1)<songs.length){
            playMusic(songs[index+1])
        }
       
       

    })

    // control volume 
    document.querySelector('.volume').getElementsByTagName('input')[0].addEventListener('change', (e)=>{
       
        currentSong.volume=e.target.value/100
        
    })
   
 };

main()

