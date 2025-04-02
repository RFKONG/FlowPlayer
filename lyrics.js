class LyricsManager {
    constructor() {
        this.lyricsData = [];
        this.currentIndex = 0;
        this.wrapper = document.querySelector('.lyrics-wrapper');
    }

    // 加载歌词数据
    loadLyrics(lyricsText) {
        // 解析LRC格式歌词
        const lyrics = [];
        const lines = lyricsText.split('\n');
        
        lines.forEach(line => {
            const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/);
            if (match) {
                const minutes = parseInt(match[1]);
                const seconds = parseInt(match[2]);
                const milliseconds = parseInt(match[3]);
                const text = match[4].trim();
                const time = minutes * 60 + seconds + milliseconds / 1000;
                
                lyrics.push({ time, text });
            }
        });
        
        return lyrics;
    }

    createLyrics(lyrics) {
        this.wrapper.innerHTML = lyrics.map(item =>
            `<div class="lyric-line" data-time="${item.time}">${item.text}</div>`
        ).join('');
    }

    updateLyric(currentTime) {
        const lines = Array.from(this.wrapper.children);
        let activeIndex = -1;

        for (let i = lines.length - 1; i >= 0; i--) {
            if (currentTime >= parseFloat(lines[i].dataset.time)) {
                activeIndex = i;
                break;
            }
        }

        if (activeIndex !== -1 && activeIndex !== this.currentIndex) {
            lines.forEach(line => line.classList.remove('active'));
            lines[activeIndex].classList.add('active');
            this.currentIndex = activeIndex;
            this.scrollToActive(lines[activeIndex]);
        }
    }

    scrollToActive(activeLine) {
        const container = document.querySelector('.lyrics-container');
        const wrapper = this.wrapper;
        const lineHeight = activeLine.offsetHeight;
        const containerHeight = container.offsetHeight;

        const scrollPosition = activeLine.offsetTop - containerHeight / 2 + lineHeight / 2;
        wrapper.style.transform = `translateY(-${scrollPosition}px)`;
        wrapper.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    changeSong(songIndex) {
        const songData = songs[songIndex];
        if (songData && songData.lyrics) {
            const parsedLyrics = this.loadLyrics(songData.lyrics);
            this.createLyrics(parsedLyrics);
        } else {
            this.wrapper.innerHTML = '<div class="lyric-line">暂无歌词</div>';
        }
        this.currentIndex = -1;
    }
}