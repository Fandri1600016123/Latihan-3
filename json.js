Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        header: {},
        articles: []
      };
    },
    methods:{    
        getHeaderData()
        {
          axios
            .get(
              "https://raw.githubusercontent.com/Fandri1600016123/Latihan-2/main/Conten/header.json"
            )
            .then((res) => {              
              this.header = res.data;
              this.getArticles();
            })
            .catch((error) => {
              console.log(error);
            });
        },
        getArticles()
        {
            axios
            .get(
              "https://raw.githubusercontent.com/Fandri1600016123/Latihan-2/main/Conten/artikel.json"
            )
            .then((res) => {              
              this.articles = res.data;
            })
            .catch((error) => {
              console.log(error);
            });
        }
        
    },
    beforeMount() {
        this.getHeaderData()
    }
  }).mount("#app");
