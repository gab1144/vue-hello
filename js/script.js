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
      clicked: true
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
      if(this.clicked){
        this.buttonToggleTextImg = "Nascondi il testo e mostra l'immagine";
        this.clicked = !this.clicked;
      } else {
        this.buttonToggleTextImg = "Nascondi l'immagine e mostra il testo";
        this.clicked = !this.clicked;
      }
    }
  }
}).mount('#app')
