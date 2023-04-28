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