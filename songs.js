// 歌曲数据示例
const songs = [
    {
        url: './music/As Long As It Leads To Me.flac',
        cover: './img/aslongas.jpg',
        title: 'As Long As It Leads To Me',
        artist: 'Fly by midnight',
        lyrics: `[00:00.000]作词 : Justin Breit/Justin Slaven/Michael Kamerman
[00:01.000]作曲 : Justin Breit/Justin Slaven/Michael Kamerman
[00:05.000]I don’t know what you saw in me (我实在不明白 你为何钟情于我)
[00:08.000]Through your phone across this dead end city (隔着屏幕 在喧嚣都市的一隅)
[00:12.000]And who am I to steal a night from someone so pretty (我何德何能 竟敢窃取你的时光)
[00:19.000]Caught up in the dichotomy (在这爱恨交织的矛盾中)
[00:22.000]Of what I want and what’s it’s supposed to be (我迷失了自我)
[00:25.000]You said it won't matter when you’re holding me (你说 当你拥我入怀时 一切都不重要)
[00:32.000]Sweet like you lingers all night (你的甜蜜萦绕整夜 挥之不去)
[00:33.000]Can’t see straight can’t say I mind (目眩神迷 心甘情愿)
[00:35.000]S'il vous plaît then it’s on sight (请留在我身边 我愿倾心相许)
[00:37.000]I-I-I want you (我-我-我渴望你)
[00:39.000]Please don’t lie is that how you feel? (请不要欺骗 这就是你的真实感受吗？)
[00:41.000]Say you might maybe I will (你说也许吧 我便义无反顾)
[00:42.000]Put both hands over the wheel and start (双手紧握方向盘)
[00:46.000]Taking my heart on the road (载着我的心飞驰而去)
[00:49.000]There’s no other cars on the street (空无一人的街道 只有彼此)
[00:52.000]She said leave it on drive (她说 就这样直行)
[00:56.000]As long as it leads to me, it leads to me (只要那条路通往我的心 我的心)
[01:00.000]Straight to your door like before (回到你家门前)
[01:04.000]And under your mat is a key (钥匙已为你备好)
[01:07.000]She said I’ll leave it outside (她说 我会把钥匙放在门外)
[01:10.000]As long it needs to be (只要那条路通往我的心)
[01:12.000]As long as it leads to me (只要那条路通往我的心)
[01:30.000]I don’t know how it got to this (我不知缘何至此 情深意重)
[01:34.000]Try to navigate my digital limit (欲越过数字鸿沟 探寻你的心)
[01:38.000]Who am I to wonder why or just how you did it (我何德何能 竟敢质疑你的选择)
[01:45.000]I wanna disassociate (只想与你心灵相通 撇开世俗羁绊)
[01:48.000]The one you want from who’s a mile away (纵然相隔千里 见到你的那一刻)
[01:52.000]Won’t make a difference when I see your face (一切纷扰都将烟消云散)
[01:57.000]Sweet like you lingers all night (你的甜蜜萦绕整夜 挥之不去)
[01:59.000]Can’t see straight can’t say I mind (目眩神迷 心甘情愿)
[02:01.000]S'il vous plaît then it’s on sight (请留在我身边 我愿倾心相许)
[02:03.000]I-I-I want you (我-我-我渴望你)
[02:05.000]Please don’t lie is that how you feel? (请不要欺骗 这就是你的真实感受吗？)
[02:06.000]Say you might maybe I will (你说也许吧 我便义无反顾)
[02:08.000]Put both hands over the wheel, won’t stop (双手紧握方向盘)
[02:12.000]Taking my heart on the road (载着我的心飞驰而去)
[02:15.000]There’s no other cars on the street (空无一人的街道 只有彼此)
[02:18.000]She said leave it on drive (她说 就这样直行)
[02:21.000]As long as it leads to me, it leads to me (只要那条路通往我的心 我的心)
[02:26.000]Straight to your door like before (回到你家门前)
[02:30.000]And under your mat is a key (钥匙已为你备好)
[02:33.000]She said I’ll leave it outside (她说 我会把钥匙放在门外)
[02:36.000]As long it needs to be (只要那条路通往我的心)
[02:38.000]As long as it leads to me (只要那条路通往我的心)
[02:42.000]Girls say boy stay the night (女孩们邀我共度良宵)
[02:45.000]Girls say boy do it right (她们劝我别再犹豫)
[02:49.000]I probably shouldn’t anyway (可理智让我清醒)
[02:53.000]I probably wouldn’t anyway (难以放纵这一回)
[02:56.000]Girls say boy take your time (女孩们说 慢慢来 不着急)
[03:00.000]It’s so late leave on a light (良辰美景 可时候也不早了)
[03:04.000]I probably couldn’t anyway (恐怕难以如愿)
[03:07.000]You probably shouldn't anyway (难以放纵这一回)`,
        index: 0
    },
    {
        url: './music/Revive.flac',
        cover: './img/revive.jpg',
        title: 'Revive',
        artist: 'LIONE',
        lyrics: `[00:00.000]作词 : Erich Yeung
[00:01.000]作曲 : Erich Yeung
[00:39.000]Can you hear me? (你能听见我的呼唤吗)
[00:41.000]Do you feel alive? (你能感受到脉搏和心跳吗)
[00:44.000]Because we're always searching for (因为我们总想去追寻)
[00:46.000]Something not easy to revive (那些不会轻易复苏的绚烂)
[00:48.000]In the moment (当下的瞬间)
[00:51.000]Yes it's true (于我真切无比)
[00:53.000]And although I'm not next to you (尽管不在你身边)
[00:56.000]Just know that I can feel it too (我也确信我能够感同身受)
[00:58.000]Even if you no longer remember my name (即使你再也记不起我姓名)
[01:03.000]I know we'll still hang on to these feelings the same (我相信我们仍能牢牢抓住最初的悸动)
[01:08.000]And when the voices call to you from below (当求告的声音从深谷不断传出)
[01:13.000]Wherever you may go (无论你去到哪里)
[01:16.000]In the end I know we'll meet again (我深信我们终会重逢)
[01:21.000]In the end I know we'll meet again (最后我们总会回到原点)
[01:26.000]Cause in the end I know we'll meet again (meet again) (因为最终我们总会重逢(重逢))
[01:33.000]Wherever you may go (无论你去到哪里)
[01:36.000]In the end I know we'll meet again (我相信我们终究会重逢)
[01:56.000]In the end I know we'll meet again (我相信我们终究会重逢)
[02:16.000]In the end I know we'll meet again (meet again) (最终我们总会重逢(重逢))
[02:22.000]Oh we'll meet again, meet again (我们总会再次相遇)
[02:28.000]Can you hear me? (你能听见我的呼唤吗)
[02:30.000]Do you feel alive? (你能感受到脉搏和心跳吗)
[02:32.000]Because we're always searching for (因为我们总想去追寻)
[02:35.000]Something not easy to revive (那些不会轻易复苏的绚烂)
[02:37.000]Even if you no longer remember my name (即使你再也记不起我姓名)
[02:42.000]I know we'll still hang on to these feelings the same (我相信我们仍能牢牢抓住最初的悸动)
[02:47.000]And when the voices call to you from below (当求告的声音从深谷不断传出)
[02:52.000]Wherever you may go (无论你去到哪里)
[02:55.000]In the end I know we'll meet again (我深信我们终会重逢)
[03:00.000]In the end I know we'll meet again (最后我们总会回到原点)
[03:05.000]Cause in the end I know we'll meet again (meet again) (因为最终我们总会重逢(重逢))
[03:12.000]Wherever you may go (无论你去到哪里)
[03:15.000]In the end I know we'll meet again (我相信我们终究会重逢)
[03:35.000]In the end I know we'll meet again (我相信我们终究会重逢)
[03:52.000]Wherever you may go (无论你去到哪里)
[03:54.000]In the end I know we'll meet again (我相信我们终究会重逢)`,
        index: 1
    },
    {
        url: './music/In The Night.mp3',
        cover: './img/Inthenight.jpg',
        title: 'In The Night',
        artist: 'Fly by midnight',
        lyrics: `[00:00.000]作词 : Justin Breit/Zac Lawson/Justin Slaven
[00:01.000]作曲 : Justin Breit/Zac Lawson/Justin Slaven
[00:20.000]Not really sure but man it feels like the first (不敢确定是否为初来乍到)
[00:24.000]A conversation where we don't need the words (我们不需要用语言来描述)
[00:28.000]It's picture perfect when it all starts to blur (当一切渐远模糊， 才是最美好的时候)
[00:31.000]The focus stays on the way you lay (只是在于你如何看待)
[00:34.000]
[00:36.000]Under the stars is when I'm over the moon (星空之下我感到无比快乐)
[00:40.000]Your body shines the darker it's in the room (你总是能将黑暗驱逐)
[00:44.000]I count the hours till the sky fades to blue (我计数着天空变蓝需要的时间)
[00:47.000]Cause the heart in me's (因为我所向往的美好)
[00:49.000]Only on my sleeve (已被我尽数珍藏)
[00:51.000]
[00:53.000]In the night (即使在夜色中)
[00:55.000]When it's just us here (如果当只有我们共处)
[00:57.000]In the night (就算周围很暗)
[00:59.000]I can see so clear (我仍能清晰地看见你)
[01:01.000]Every time (在你离去之前的)
[01:02.000]Until you disappear in the light (整个夜晚)
[01:07.000]We only make sense in the night (我们只有在晚上才能演绎出真谛)
[01:09.000]
[01:10.000]Your shadow's dancing as the cities asleep (当城市沉睡时，你的影子仍在舞动)
[01:14.000]I pull the shades and pull you closer to me (我拉上窗帘，并把你拉得离我更近)
[01:18.000]This love gets harder when the day starts to breathe (当一切苏醒，我们的求爱之路将更加艰险)
[01:21.000]And all I know is the world moves slow (不过我知道，时间将会很慢的流逝)
[01:25.000]
[01:26.000]With every morning that you're far away I'm not okay (每早我都希望你能在我身边)
[01:30.000]Cause I wanna wake up with you by my side and feel alright (原因多到难以计数)
[01:34.000]There's a hundred reasons why it's (比如早上看到你将会令我一整天高兴)
[01:36.000]It's never easy unless (可这从来都不容易，除非....)
[01:38.000]Unless it's you and me yeah (除非只有你和我共处)
[01:40.000]It's you and me (是的, 只有你和我)
[01:41.000]
[01:41.000]In the night (即使在夜色中)
[01:43.000]When it's just us here (如果当只有我们共处)
[01:45.000]In the night (就算周围很暗)
[01:47.000]I can see so clear (我仍能清晰地看见你)
[01:49.000]Every time (在你离去之前的)
[01:50.000]Until you disappear in the light (整个夜晚)
[01:55.000]We only make sense in the night (我们只有在晚上才能演绎出真谛)
[01:56.000]
[01:57.000]In the night (即使在夜色中)
[01:59.000]When it's just us here (如果当只有我们共处)
[02:01.000]In the night (就算周围很暗)
[02:03.000]I can see so clear (我仍能清晰地看见你)
[02:05.000]Every time (在你离去之前的)
[02:06.000]Until you disappear in the light (整个夜晚)
[02:11.000]We only make sense in the night (我们只有在晚上才能演绎出真谛)
[02:20.000]
[02:29.000]In the night (即使在夜色中)
[02:31.000]When it's just us here (如果当只有我们共处)
[02:33.000]In the night (就算周围很暗)
[02:35.000]I can see so clear (我仍能清晰地看见你)
[02:37.000]Every time (在你离去之前的)
[02:38.000]Until you disappear in the light (整个夜晚)
[02:41.000]
[02:45.000]In the night (即使在夜色中)
[02:47.000]When it's just us here (如果当只有我们共处)
[02:49.000]In the night (就算周围很暗)
[02:51.000]I can see so clear (我仍能清晰地看见你)
[02:53.000]Every time (在你离去之前的)
[02:54.000]Until you disappear in the light (整个夜晚)
[02:59.000]We only make sense in the night (我们只有在晚上才能演绎出真谛)`,
        index: 2
    },
    {
        url: './music/Tomorrow.mp3',
        cover: './img/tomorrow.jpg',
        title: 'Tomorrow',
        artist: 'Fly by midnight',
        lyrics: `[00:00.000]作词 : Justin Breit/Justin Slaven/Brett Truitt
[00:00.000]作曲 : Justin Breit/Justin Slaven/Brett Truitt
[00:01.000]lt's a cold world (这是一个寒冷的世界)
[00:03.000]But l'm all right (但是我感觉没什么)
[00:04.000]I got you (因为我有你呀)
[00:05.000]I got you (我有你)
[00:06.000]To keep me warm like (来让我保持温暖)
[00:08.000](Ah) (（啊）)
[00:14.000]Like a long drag (像吸完了)
[00:15.000]Off the last hit (那最后一口)
[00:17.000]If you're the new pack (如果你是那新的一包)
[00:19.000]Then I just can't quit (我无法戒掉你)
[00:21.000](Ah) (（啊）)
[00:26.000]Yeah I spend too much time (我花费了太多时间)
[00:29.000]Yeah all my time (我所有的时间)
[00:30.000]Worrying about yesterday and (都在为昨日担忧)
[00:33.000]l've spent all my life (我这一生)
[00:35.000]Hoping things would stay the same (都希望事情可以原封不动，停滞不前)
[00:38.000]Baby everything could change (宝贝所有事情都会变化)
[00:41.000]In the middle of the night so (午夜时分)
[00:45.000]If we make it through today (如果我们能挺过今天)
[00:48.000]Say you'll stay with me tomorrow (告诉我，你明天也会伴我左右)
[00:51.000]Knowing you could slip away (知道你会溜走)
[00:54.000]ls the hardest pill to swallow (这让我如鲠在喉)
[00:57.000]So if we make it through today (所以，如果我们能挺过今天)
[01:00.000]Say you'll stay with me tomorrow (告诉我，你明天也会伴我左右)
[01:03.000]Tomorrow (明日)
[01:18.000]It's that old car (是那辆老旧的汽车)
[01:19.000]lt's that dark drive (是那黑暗的车道)
[01:21.000]Looking back (回顾过去)
[01:22.000]Back on you (我看着你)
[01:23.000]You're the street lights (你是那一盏盏街灯)
[01:25.000](Ah) (（啊）)
[01:31.000]And if the hands turn (如果双手转动)
[01:32.000]If they don't wait (如果它们没有等待)
[01:34.000]Tell me this won't burn out (告诉我在月光隐没的时候)
[01:35.000]When the moon fades (灯光不会燃尽)
[01:38.000](Ah) (（啊）)
[01:43.000]Yeah I spend too much time (花费了太多的时间)
[01:45.000]Yeah all my time (我所有的时间)
[01:47.000]Worrying about yesterday and (都在担忧昨日)
[01:50.000]l've spent all my life (我这一生)
[01:52.000]Hoping things would stay the same (都希望事情保持原状)
[01:55.000]Baby everything could change (宝贝所有事情都会变化)
[01:58.000]In the middle of the night so (午夜时分)
[02:01.000]If we make it through today (如果我们能挺过今天)
[02:04.000]Say you'll stay with me tomorrow (告诉我你明日仍会伴我左右)
[02:08.000]Knowing you could slip away (知道你会溜走)
[02:11.000]ls the hardest pill to swallow (这让我如鲠在喉)
[02:14.000]So if we make it through today (所以如果我们能挺过今天)
[02:17.000]Say you'll stay with me tomorrow (告诉我明日你仍会伴我左右)
[02:19.000]Tomorrow (明日)
[02:34.000]Baby everything could change (宝贝什么事情都会变化)
[02:37.000]In the middle of the night so (午夜时分)
[02:40.000]If we make it through today (如果我们能挺过今天)
[02:43.000]Say you'll stay with me tomorrow (告诉我你明日仍会伴我左右)
[02:46.000]Knowing you could slip away (知道你会溜走)
[02:49.000]Is the hardest pill to swallow (这让我如鲠在喉)
[02:52.000]So if we make it through today (所以如果我们能挺过今天)
[02:55.000]Say you'll stay with me tomorrow (告诉我你明日仍会伴我左右)
[02:58.000]Tomorrow (明日)`,
        index: 3
    },
    {
        url: './music/Miss You.flac',
        cover: './img/miss.jpg',
        title: 'Miss You',
        artist: 'VZEUS',
        lyrics: `[00:00.000]纯音乐，请欣赏`,
        index: 4
    },
];

// 当前播放索引
let currentSongIndex = 0;

// 加载下一首歌
function loadNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
}

// 加载上一首歌
function loadPrevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
}

// 随机加载歌曲
function loadRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    currentSongIndex = randomIndex;
    loadSong(songs[randomIndex]);
}

// 初始化播放器
document.addEventListener('DOMContentLoaded', () => {
    // 加载第一首歌
    loadSong(songs[0]);

    // 绑定按钮事件
    document.getElementById('next-btn').addEventListener('click', loadNextSong);
    document.getElementById('prev-btn').addEventListener('click', loadPrevSong);
    document.getElementById('shuffle-btn').addEventListener('click', loadRandomSong);
});

function loadSong(songData) {
    audioPlayer.src = songData.url;
    document.getElementById('cover-image').src = songData.cover;
    document.querySelector('.song-title').textContent = songData.title;
    document.querySelector('.song-artist').textContent = songData.artist;
    lyricsManager.changeSong(songData.index);
}