const { createApp } = Vue;

createApp({

  data(){
    return {
      message: 'contenuto del messaggio',
      myClass: 'blu',
      imgName: "ac-dc.png",
      path: "img/"
    }
  },
  methods:{
    testoRosso(){
      this.myClass = 'rosso'
    },
    changeImg(newImgName){
      this.imgName = newImgName
    }
  }
}).mount('#app')
