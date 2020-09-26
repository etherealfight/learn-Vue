Vue.component('comments', {
    props: {
        userpic: String,
        username: String,
        usercomment: String,
    },
    template: ` <div class="componentMain" style="width: 100%; padding: 10px; border-bottom: 1px gray solid;">
    <div class="componentTop" style="display: flex; flex-direction: row;" >
      <img :src="userpic" style="border-radius: 25px; width: 50px;height: 50px; padding: 10px;">
      <span style="padding: 10px; align-items: center; justify-content: center;">{{username}}</span>
    </div>
    <div class="componentButton" style="padding: 10px; text-align: center;align-items: center; justify-content: center;">
      <div>{{usercomment}}</div>
    </div>
  </div>`,
    created() {
        //console.log(this.userpic, this.username, this.usercomment)
    }

})


let apps = new Vue({
    el: ".main",
    data() {
        return {
            musicName: '',
            musicList: [],
            isPlay: false,
            picUrl: '',
            musicUrl: '',
            commentList: [],
        }
    },
    methods: {
        getMusic(name) {
            this.musicList = [];
            let that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + name).then(
                function (response) {
                    //console.log(response.data.result.songs);
                    that.musicList = response.data.result.songs;
                },
                function (err) {
                    console.log(err);
                }
            )
        },
        playMusic(musicId) {
            console.log(musicId);
            let that = this;
            axios.get('http://47.102.212.191:3000/song/url?id=' + musicId).then(
                function (response) {
                    //console.log(response.data.data[0].url);
                    that.musicUrl = response.data.data[0].url;
                },
                function (err) {
                }
            )
            axios.get('http://47.102.212.191:3000/comment/hot?type=0&id=' + musicId).then(
                function (response) {
                    //console.log(response);
                    that.commentList=response.data.hotComments;
                    //console.log( that.commentList)
                },
                function (err) {
                }
            )
            axios.get('https://autumnfish.cn/album?id='+musicId).then(
                function (response) {
                    console.log(response.data.songs[0].al.picUrl);
                    that.picUrl=response.data.songs[0].al.picUrl;
                },
                function (err) {
                }
            )

        },
        play() {
            this.isPlay = true;
            console.log('play');
        },
        pause() {
            this.isPlay = false;
            console.log('pause');
        }
    }
})