let devotionalSong=document.getElementById("lordSiva");
let vikrmSong=document.getElementById("vikramSong");
let NatuSong=document.getElementById("NatuNatu");




function PlayDevotionlaSong(){
    
    NatuSong.pause();
    vikrmSong.pause();
    devotionalSong.play();
}

function pauseDevotionalSong(){
    devotionalSong.pause()
}




function PlayVikramSong(){
    NatuSong.pause();
    devotionalSong.pause()
    vikrmSong.play();
}

function pauseVikramSong(){
    vikrmSong.pause()
}


function PlayNatuSong(){
    devotionalSong.pause();
    vikrmSong.pause()
    NatuSong.play();
}

function pauseNatuSong(){
    NatuSong.pause()
}