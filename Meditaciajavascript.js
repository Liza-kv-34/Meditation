"use script"

let col_vo_minutes2 = document.querySelector(".Minutes2");
let col_vo_minutes5 = document.querySelector(".Minutes5");
let col_vo_minutes10 = document.querySelector(".Minutes10");
let col_vo_minutes_znachok = document.querySelector(".white");
let col_vo_minutes_golyboe_znahok = document.querySelector(".blue circle");
let outlines = col_vo_minutes_golyboe_znahok.getTotalLength();
let col_vo_minutes_knopka = document.querySelector(".play");
let col_vo_minutes_chisla = document.querySelector(".chisla");
let weather_sun= document.querySelector(".sun_button");
let weather_rain = document.querySelector(".rain_button");
let real_time = 600;
let fon = document.querySelector(".fon");
let song = document.querySelector(".song");
col_vo_minutes_golyboe_znahok.style.strokeDashoffset = outlines;
col_vo_minutes_golyboe_znahok.style.strokeDasharray = outlines;

col_vo_minutes2.addEventListener('click', function(){
    real_time = 12;
    col_vo_minutes_chisla.textContent = "02:00";
});

col_vo_minutes5.addEventListener('click', function(){
    real_time = 300;
    col_vo_minutes_chisla.textContent = "05:00";
});

col_vo_minutes10.addEventListener('click', function(){
    real_time = 600;
    col_vo_minutes_chisla.textContent = "10:00";
});

weather_sun.addEventListener('click', function(){
    fon.src="beach.mp4";
    song.src="beach.mp3";
});

weather_rain.addEventListener('click', function(){
    fon.src="rain.mp4";
    song.src="rain.mp3";
});

col_vo_minutes_knopka.addEventListener('click', function(){
    if(song.paused){
        col_vo_minutes_knopka.src="pause.svg";
        song.play();
        fon.play();
    }
    else{
        col_vo_minutes_knopka.src="play.svg";
        song.pause();
        fon.pause();
    }
});

song.ontimeupdate = function(){
    let currenttime = song.currentTime;
    let elapset = real_time - currenttime;
    let minuties = (Math.floor(elapset / 60));
    let seconds = (Math.floor(elapset % 60));
    col_vo_minutes_chisla.textContent = ("0" + minuties + ":" + seconds);
    let progres = outlines-(currenttime / real_time)*outlines;
    col_vo_minutes_golyboe_znahok.style.strokeDashoffset = progres;
    console.log(progres)
    if(elapset <= 0){
        song.pause()
        fon.pause()
       
    };
    if(seconds < 10){
        col_vo_minutes_chisla.textContent = ("00:0" + seconds); 
    }
    if(seconds <= 0){
        col_vo_minutes_chisla.textContent = ("00:00");
        col_vo_minutes_knopka.src="play.svg"; 
    }
};



