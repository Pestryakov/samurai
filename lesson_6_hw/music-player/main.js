import { play, pause, stop } from './player.js';
import { showSong, showPlaylist } from './display.js';
import { songs } from './songs.js';
import './theme.js';

console.log('🎶 Добро пожаловать в музыкальный плеер!');

// Показываем весь плейлист
showPlaylist(songs);

// Включаем первую песню
showSong(songs[0]);
play();

// Пауза
pause();

// Включаем вторую песню
showSong(songs[1]);
play();

// Останавливаем
stop();
