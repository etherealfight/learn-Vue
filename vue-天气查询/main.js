let apps = new Vue({
    el: ".app",
    data() {
        return {
            city:'',
            messages: '',
        }
    },
    methods: {
        get(p1) {
            let that = this;
            this.city=p1;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city).then(function (response) {
                console.log(response.data.data.forecast);
                that.messages = response.data.data.forecast;
            }, function (err) {
                console.log(err);
            })
        }
    }
})