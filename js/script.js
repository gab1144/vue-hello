const { createApp } = Vue;

createApp({

  data(){
    return {
      message: 'contenuto del messaggio',
      myClass: 'blu'
    }
  },
  methods:{
    testoRosso(){
      this.myClass = 'rosso'
    }
  }
}).mount('#app')
