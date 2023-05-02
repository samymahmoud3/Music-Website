
const music = new Audio('audio/1.mp3');
const songs = [
    {
        id: 1,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpg"
    },
    {
        id: 2,
        songName: `Alan Walker-Fade<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/2.jpg"
    },
    {
        id: 3,
        songName: `Cartoon-On&On<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/3.jpg"
    },
    {
        id: 4,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/4.jpg"
    },
    {
        id: 5,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/5.jpg"
    },
    {
        id: 6,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/6.jpg"
    },
    {
        id: 7,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/7.jpg"
    },
    {
        id: 8,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/8.jpg"
    },
    {
        id: 9,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/9.jpg"
    },
    {
        id: 10,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/10.jpg"
    },
    {
        id: 11,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/11.jpg"
    },
    {
        id: 12,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/12.jpg"
    },
    {
        id: 13,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/13.jpg"
    },
    {
        id: 14,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/14.jpg"
    },
    {
        id: 15,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/15.jpg"
    },
    {
        id: 16,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/16.jpg"
    },
    {
        id: 17,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/17.jpg"
    },
    {
        id: 18,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/18.jpg"
    },
    {
        id: 19,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/19.jpg"
    },
    {
        id: 20,
        songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.jpg"
    }
];

//add posters&songNames to the Songs
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});



//play&pause masterPlay music
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () =>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

//link songs name&poster with master play
let index = 0;
let poster_master_play = document.getElementById('poster-master-play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `images/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });
    });
});


//============scroll popular-songs============================
let pop_song_right = document.getElementById('pop_song_right');
let pop_song_left = document.getElementById('pop_song_left');
let pop_song = document.getElementsByClassName('pop-song')[0];
//scroll popular-songs right
pop_song_right.addEventListener('click' , () => {
    pop_song.scrollLeft += 300;
});
//scroll popular-songs left
pop_song_left.addEventListener('click' , () => {
    pop_song.scrollLeft -= 300;
});



//==========scroll popular-artists==========================
let pop_art_right = document.getElementById('pop_art_right');
let pop_art_left = document.getElementById('pop_art_left');
let item = document.getElementsByClassName('item')[0];
//scroll popular-artists right
pop_art_right.addEventListener('click' , () => {
    item.scrollLeft += 300;
});
//scroll popular-artists left
pop_art_left.addEventListener('click' , () => {
    item.scrollLeft -= 300;
});