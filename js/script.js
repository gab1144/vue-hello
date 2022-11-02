const { createApp } = Vue;

createApp({

  data(){
    return {
      message: 'contenuto del messaggio',
      myClass: 'blu',
      imgName: "ac-dc.png",
      path: "img/",
      isImgShown: true,
      isTextShown: false,
      buttonToggleTextImg: "Nascondi l'immagine e mostra il testo",
    }
  },
  methods:{
    testoRosso(){
      this.myClass = 'rosso'
    },
    changeImg(newImgName){
      this.imgName = newImgName
    },
    toggleTextImg(){
      this.isTextShown = !this.isTextShown;
    }
  }
}).mount('#app')
