const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
        name: "kun-faya-kun",
        artist: "Hurrain Fatima",
        title: "Kun Faya Kun | Femail version",
    },
    {
        name: "Ye-Jo-Halka-Halka",
        artist: "UmrEOz",
        title: "Ye Jo Halka Halka",
    },
    {
        name: "Bhar-Do-Jhooli",
        artist: "Adnan Sami",
        title: "Bhar Do Jhooli Mere",
    },
    {
        name: "Arziyan",
        artist: "AR Rahman",
        title: "Arziyan",
    },
    {
        name: "Kun-Faya-Kun-Faya",
        artist: "AR Rahman",
        title: "Kun Faya Kun ",
    },
];

let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};


const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

// changing all music 

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "audio/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
};

songIndex = 0;
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);