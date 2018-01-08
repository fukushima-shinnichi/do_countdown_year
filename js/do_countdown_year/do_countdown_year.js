window.onload = function(){
  
  /////   dispaly Number random function   ///////
  
  
  var dispaly_number = Math.floor(Math.random()*3)+1;
  console.log(dispaly_number);
  
  
  //var dispaly_number = 1;
  
  //////   get year information   /////////////
  
  setInterval(function(){
    var now = new Date();
    var year = now.getFullYear();
    //console.log(now);
    //console.log(year);
    //year = year+1;
    
    if(year===2017) {
      console.log("2017 OK");
      var dispaly_2017 = document.getElementById("c2017_"+dispaly_number);
      dispaly_2017.style.display = "block";
    }else if(year===2018){
      console.log("2018 OK");
      var dispaly_2018 = document.getElementById("d2018_"+dispaly_number);
      dispaly_2018.style.display = "block";
      
    };
    
  },1000);
  
  
  
  
  //////   sounds control   /////////////
  
  ////////   audio control   ////////////////////
  var audioControl1 = document.getElementById("songs1");
  var audioControl2 = document.getElementById("songs2");
  var audioControl3 = document.getElementById("songs3");
  var soundUP = document.getElementById("up");
  var soundDOWN = document.getElementById("down");
  var soundMUTE = document.getElementById("mute");
  var songsNumber = Math.floor(Math.random()*3)+1;
  
  ///////   suond up button   /////////////////
  soundUP.addEventListener("click",function(){
    audioControl1.volume += 0.05;
    audioControl2.volume += 0.05;
    audioControl3.volume += 0.05;
  });
  
  ///////   suond down button   /////////////////
  soundDOWN.addEventListener("click",function(){
    audioControl1.volume -= 0.05;
    audioControl2.volume -= 0.05;
    audioControl3.volume -= 0.05;
  });
  
  ///////   suond mute button   /////////////////
  soundMUTE.addEventListener("click",function(){
    audioControl1.volume = 0;
    audioControl2.volume = 0;
    audioControl3.volume = 0;
  });
  
  
  ////////   audio play control   ///////////////
  if(songsNumber===1){
    audioControl1.play();
    audioControl1.addEventListener("ended",function(){
      audioControl2.play();
      audioControl2.addEventListener("ended",function(){
        audioControl3.play();
      });
    });
  }else if(songsNumber===2){
    audioControl2.play();
    audioControl2.addEventListener("ended",function(){
      audioControl3.play();
      audioControl3.addEventListener("ended",function(){
        audioControl1.play();
      });
    });
  }else if(songsNumber===3){
    audioControl3.play();
    audioControl3.addEventListener("ended",function(){
      audioControl1.play();
      audioControl1.addEventListener("ended",function(){
        audioControl2.play();
      });
    });
  };
  
  
  
  
  
  
};


