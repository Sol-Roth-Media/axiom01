/**
 * Video Player Component
 * HTML5 based with custom controls styled with Axiom01
 * Features: play/pause, progress, volume, fullscreen, speed, captions
 */

export default {
    init(element) {
        const src = element.getAttribute('data-src');
        const poster = element.getAttribute('data-poster');
        const type = element.getAttribute('data-type') || 'video/mp4';
        const autoplay = element.getAttribute('data-autoplay') !== null;
        const loop = element.getAttribute('data-loop') !== null;

        let currentTime = 0;
        let duration = 0;
        let isPlaying = false;
        let volume = 1;
        let playbackRate = 1;

        // Create player structure
        const player = document.createElement('div');
        player.className = 'video-player';

        const videoEl = document.createElement('video');
        videoEl.className = 'video-element';
        if (poster) videoEl.poster = poster;
        if (autoplay) videoEl.autoplay = true;
        if (loop) videoEl.loop = true;
        videoEl.preload = 'metadata';

        const source = document.createElement('source');
        source.src = src;
        source.type = type;
        videoEl.appendChild(source);

        // Create custom controls
        const controls = document.createElement('div');
        controls.className = 'video-controls';

        // Play/pause button
        const playBtn = document.createElement('button');
        playBtn.className = 'player-btn play-btn';
        playBtn.setAttribute('aria-label', 'Play');
        playBtn.innerHTML = '<i class="fas fa-play"></i>';

        // Progress bar
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';

        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';

        const progress = document.createElement('div');
        progress.className = 'progress';

        const handle = document.createElement('div');
        handle.className = 'progress-handle';

        progress.appendChild(handle);
        progressBar.appendChild(progress);
        progressContainer.appendChild(progressBar);

        // Time display
        const timeDisplay = document.createElement('span');
        timeDisplay.className = 'time-display';
        timeDisplay.textContent = '00:00 / 00:00';

        // Volume control
        const volumeContainer = document.createElement('div');
        volumeContainer.className = 'volume-container';

        const volumeBtn = document.createElement('button');
        volumeBtn.className = 'player-btn volume-btn';
        volumeBtn.setAttribute('aria-label', 'Volume');
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';

        const volumeSlider = document.createElement('input');
        volumeSlider.type = 'range';
        volumeSlider.className = 'volume-slider';
        volumeSlider.min = '0';
        volumeSlider.max = '100';
        volumeSlider.value = '100';

        volumeContainer.appendChild(volumeBtn);
        volumeContainer.appendChild(volumeSlider);

        // Speed control
        const speedBtn = document.createElement('button');
        speedBtn.className = 'player-btn speed-btn';
        speedBtn.setAttribute('aria-label', 'Speed');
        speedBtn.textContent = '1x';

        const speedMenu = document.createElement('div');
        speedMenu.className = 'speed-menu hidden';
        [0.5, 0.75, 1, 1.25, 1.5, 2].forEach(speed => {
            const option = document.createElement('button');
            option.className = 'speed-option' + (speed === 1 ? ' active' : '');
            option.textContent = speed + 'x';
            option.addEventListener('click', () => {
                videoEl.playbackRate = speed;
                playbackRate = speed;
                speedBtn.textContent = speed + 'x';
                document.querySelectorAll('.speed-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                speedMenu.classList.add('hidden');
            });
            speedMenu.appendChild(option);
        });

        speedBtn.addEventListener('click', () => {
            speedMenu.classList.toggle('hidden');
        });

        // Fullscreen button
        const fullscreenBtn = document.createElement('button');
        fullscreenBtn.className = 'player-btn fullscreen-btn';
        fullscreenBtn.setAttribute('aria-label', 'Fullscreen');
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';

        // Settings button
        const settingsBtn = document.createElement('button');
        settingsBtn.className = 'player-btn settings-btn';
        settingsBtn.setAttribute('aria-label', 'Settings');
        settingsBtn.innerHTML = '<i class="fas fa-cog"></i>';

        // Assemble controls
        controls.appendChild(playBtn);
        controls.appendChild(progressContainer);
        controls.appendChild(timeDisplay);
        controls.appendChild(volumeContainer);
        controls.appendChild(speedBtn);
        controls.appendChild(speedMenu);
        controls.appendChild(settingsBtn);
        controls.appendChild(fullscreenBtn);

        player.appendChild(videoEl);
        player.appendChild(controls);
        element.appendChild(player);

        // Event handlers
        playBtn.addEventListener('click', () => {
            if (videoEl.paused) {
                videoEl.play();
            } else {
                videoEl.pause();
            }
        });

        videoEl.addEventListener('play', () => {
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playBtn.setAttribute('aria-label', 'Pause');
        });

        videoEl.addEventListener('pause', () => {
            isPlaying = false;
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            playBtn.setAttribute('aria-label', 'Play');
        });

        videoEl.addEventListener('loadedmetadata', () => {
            duration = videoEl.duration;
            updateTimeDisplay();
        });

        videoEl.addEventListener('timeupdate', () => {
            currentTime = videoEl.currentTime;
            updateProgress();
            updateTimeDisplay();
        });

        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            videoEl.currentTime = percent * duration;
        });

        volumeSlider.addEventListener('input', (e) => {
            volume = e.target.value / 100;
            videoEl.volume = volume;
            updateVolumeIcon();
        });

        fullscreenBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                player.requestFullscreen().catch(err => console.log('Fullscreen error:', err));
            } else {
                document.exitFullscreen();
            }
        });

        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement === player) {
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
                fullscreenBtn.setAttribute('aria-label', 'Exit fullscreen');
            } else {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
                fullscreenBtn.setAttribute('aria-label', 'Fullscreen');
            }
        });

        const updateProgress = () => {
            const percent = (currentTime / duration) * 100;
            progress.style.width = percent + '%';
        };

        const updateTimeDisplay = () => {
            const formatTime = (seconds) => {
                if (isNaN(seconds)) return '00:00';
                const hours = Math.floor(seconds / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const secs = Math.floor(seconds % 60);
                if (hours > 0) {
                    return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
                }
                return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            };
            timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
        };

        const updateVolumeIcon = () => {
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
                videoEl.play();
            },

            pause() {
                videoEl.pause();
            },

            setSource(newSrc, newType = 'video/mp4') {
                source.src = newSrc;
                source.type = newType;
                videoEl.load();
            },

            seek(time) {
                videoEl.currentTime = time;
            },

            setVolume(vol) {
                volume = Math.max(0, Math.min(1, vol));
                videoEl.volume = volume;
                volumeSlider.value = volume * 100;
                updateVolumeIcon();
            },

            setPlaybackRate(rate) {
                videoEl.playbackRate = rate;
                playbackRate = rate;
                speedBtn.textContent = rate + 'x';
            },

            getCurrentTime() {
                return videoEl.currentTime;
            },

            getDuration() {
                return videoEl.duration;
            }
        };
    }
};

