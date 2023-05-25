const {createApp} = Vue;

createApp({
   data(){
      
      return{
         contador: 0
      }  
   },
   methods:{
      incrementar(){
         console.log("entro  incrementa")
         this.contador = this.contador +1
      },
      decrementar(){
         this.contador = this.contador - 1
         if (this.contador <= 0) {
            //  block of code to be executed if the condition is true
            this.contador=0
          } else {
            //  block of code to be executed if the condition is false
            this.contador -1
          }
      }
   }

}).mount("#app")