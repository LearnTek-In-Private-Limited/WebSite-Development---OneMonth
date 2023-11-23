let count=0;
    document.getElementById("decreasebutton").onclick=function(){
        count -=1;
        document.getElementById("countlabel").innerHTML=count;
    }
    document.getElementById("Increasebutton").onclick=function(){
        count +=1;
        document.getElementById("countlabel").innerHTML=count;
    }
    
    document.getElementById("Resetbtn").onclick=function(){
        count =0;
        document.getElementById("countlabel").innerHTML=count;
    }
