/**
 * Audio Player Component
 * HTML5 based audio player with Axiom01 styling
 * Features: play/pause, progress, volume, speed, queue
 */

export default {
    init(element) {
        const src = element.getAttribute('data-src');
        const title = element.getAttribute('data-title') || 'Audio Track';
        const artist = element.getAttribute('data-artist') || 'Unknown Artist';
        const cover = element.getAttribute('data-cover');
        const autoplay = element.getAttribute('data-autoplay') !== null;

        let currentTime = 0;
        let duration = 0;
        let isPlaying = false;

        // Create player structure
        const player = document.createElement('div');
        player.className = 'audio-player';

        const audioEl = document.createElement('audio');
        audioEl.preload = 'metadata';
        if (autoplay) audioEl.autoplay = true;

        const source = document.createElement('source');
        source.src = src;
        source.type = 'audio/mpeg';
        audioEl.appendChild(source);

        // Cover art
        const coverDiv = document.createElement('div');
        coverDiv.className = 'audio-cover';
        if (cover) {
            const img = document.createElement('img');
            img.src = cover;
            img.alt = title;
            coverDiv.appendChild(img);
        } else {
            coverDiv.innerHTML = '<i class="fas fa-music"></i>';
        }

        // Info section
        const infoDiv = document.createElement('div');
        infoDiv.className = 'audio-info';
        infoDiv.innerHTML = `
            <h3 class="audio-title">${title}</h3>
            <p class="audio-artist">${artist}</p>
        `;

        // Controls
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'audio-controls';

        // Play button
        const playBtn = document.createElement('button');
        playBtn.className = 'audio-btn play-btn';
        playBtn.setAttribute('aria-label', 'Play');
        playBtn.innerHTML = '<i class="fas fa-play"></i>';

        // Progress
        const progressDiv = document.createElement('div');
        progressDiv.className = 'audio-progress-section';

        const progressBar = document.createElement('div');
        progressBar.className = 'audio-progress-bar';

        const progress = document.createElement('div');
        progress.className = 'audio-progress';

        const handle = document.createElement('div');
        handle.className = 'audio-progress-handle';

        progress.appendChild(handle);
        progressBar.appendChild(progress);
        progressDiv.appendChild(progressBar);

        // Time display
        const timeDisplay = document.createElement('span');
        timeDisplay.className = 'audio-time';
        timeDisplay.textContent = '00:00 / 00:00';
        progressDiv.appendChild(timeDisplay);

        // Volume control
        const volumeBtn = document.createElement('button');
        volumeBtn.className = 'audio-btn volume-btn';
        volumeBtn.setAttribute('aria-label', 'Volume');
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';

        const volumeSlider = document.createElement('input');
        volumeSlider.type = 'range';
        volumeSlider.className = 'audio-volume-slider';
        volumeSlider.min = '0';
        volumeSlider.max = '100';
        volumeSlider.value = '100';

        // Speed control
        const speedBtn = document.createElement('button');
        speedBtn.className = 'audio-btn speed-btn';
        speedBtn.setAttribute('aria-label', 'Speed');
        speedBtn.textContent = '1x';

        const speedMenu = document.createElement('div');
        speedMenu.className = 'audio-speed-menu hidden';
        [0.5, 0.75, 1, 1.25, 1.5, 2].forEach(speed => {
            const option = document.createElement('button');
            option.className = 'audio-speed-option' + (speed === 1 ? ' active' : '');
            option.textContent = speed + 'x';
            option.addEventListener('click', () => {
                audioEl.playbackRate = speed;
                speedBtn.textContent = speed + 'x';
                document.querySelectorAll('.audio-speed-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                speedMenu.classList.add('hidden');
            });
            speedMenu.appendChild(option);
        });

        speedBtn.addEventListener('click', () => {
            speedMenu.classList.toggle('hidden');
        });

        // Playlist/Queue button
        const queueBtn = document.createElement('button');
        queueBtn.className = 'audio-btn queue-btn';
        queueBtn.setAttribute('aria-label', 'Queue');
        queueBtn.innerHTML = '<i class="fas fa-list"></i>';

        // Download button
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'audio-btn download-btn';
        if (!src) downloadBtn.style.display = 'none';
        downloadBtn.setAttribute('aria-label', 'Download');
        downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
        downloadBtn.addEventListener('click', () => {
            const a = document.createElement('a');
            a.href = src;
            a.download = title;
            a.click();
        });

        // Assemble controls
        controlsDiv.appendChild(playBtn);
        controlsDiv.appendChild(progressDiv);
        controlsDiv.appendChild(volumeBtn);
        controlsDiv.appendChild(volumeSlider);
        controlsDiv.appendChild(speedBtn);
        controlsDiv.appendChild(speedMenu);
        controlsDiv.appendChild(queueBtn);
        controlsDiv.appendChild(downloadBtn);

        player.appendChild(coverDiv);
        player.appendChild(infoDiv);
        player.appendChild(controlsDiv);
        element.appendChild(player);

        // Event handlers
        playBtn.addEventListener('click', () => {
            if (audioEl.paused) {
                audioEl.play();
            } else {
                audioEl.pause();
            }
        });

        audioEl.addEventListener('play', () => {
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playBtn.setAttribute('aria-label', 'Pause');
            player.classList.add('playing');
        });

        audioEl.addEventListener('pause', () => {
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            playBtn.setAttribute('aria-label', 'Play');
            player.classList.remove('playing');
        });

        audioEl.addEventListener('loadedmetadata', () => {
            duration = audioEl.duration;
            updateTimeDisplay();
        });

        audioEl.addEventListener('timeupdate', () => {
            currentTime = audioEl.currentTime;
            updateProgress();
            updateTimeDisplay();
        });

        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audioEl.currentTime = percent * duration;
        });

        volumeSlider.addEventListener('input', (e) => {
            audioEl.volume = e.target.value / 100;
            updateVolumeIcon();
        });

        const formatTime = (seconds) => {
            if (isNaN(seconds)) return '00:00';
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        };

        const updateProgress = () => {
            const percent = (currentTime / duration) * 100;
            progress.style.width = percent + '%';
        };

        const updateTimeDisplay = () => {
            timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
        };

        const updateVolumeIcon = () => {
            const volume = audioEl.volume;
            if (volume === 0) {
                volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else if (volume < 0.5) {
                volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
            } else {
                volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        };

        return {
            destroy() {
                player.remove();
            },

            play() {
                audioEl.play();
            },

            pause() {
                audioEl.pause();
            },

            setSource(newSrc, newTitle = title, newArtist = artist) {
                source.src = newSrc;
                audioEl.load();
                document.querySelector('.audio-title').textContent = newTitle;
                document.querySelector('.audio-artist').textContent = newArtist;
                element.dispatchEvent(new CustomEvent('audio-changed', {
                    detail: { src: newSrc, title: newTitle, artist: newArtist }
                }));
            },

            seek(time) {
                audioEl.currentTime = time;
            },

            setVolume(vol) {
                audioEl.volume = Math.max(0, Math.min(1, vol));
                volumeSlider.value = audioEl.volume * 100;
                updateVolumeIcon();
            },

            getCurrentTime() {
                return audioEl.currentTime;
            },

            getDuration() {
                return audioEl.duration;
            }
        };
    }
};

