


  class Temperature {
    doC;
    doF;
    doK;


      constructor(doC, doF, doK) {
          this.doC = doC;
          this.doF = doF;
          this.doK = doK;
      }
      setDoC(doC){
          this.doC=doC;
      }
      getDoC(){
          return this.doC;
      }
      setDoF(doF){
          this.doF=doF
      }
      getDoF(){
          return 9/5+this.doC*32
      }
      setDoK(doK){
          this.doK=doK
      }
      getDoK(){
          return this.doC+273.15
      }
  };