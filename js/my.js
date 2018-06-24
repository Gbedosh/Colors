var Cuser1 = document.querySelector(".input1");
var Cuser2 = document.querySelector(".input2");
var in1 = document.querySelector("#in1");
var in2 = document.querySelector("#in2");




in1.addEventListener("input", function(){
    document.querySelector("#demo").innerHTML = in1.value;
    document.querySelector("#demo2").innerHTML = in2.value;
}

)

in2.addEventListener("input", function(){
    document.querySelector("#demo").innerHTML = in1.value;
    document.querySelector("#demo2").innerHTML = in2.value;
}

)


Cuser1.addEventListener("input", function(){
document.querySelector("body").style.background = 
    "linear-gradient(to right , "
    +Cuser1.value
    +" ,"
    +Cuser2.value
    +")";
})
    
Cuser2.addEventListener("input", function(){
document.querySelector("body").style.background = 
    "linear-gradient(to right , "
    +Cuser1.value
    +" ,"
    +Cuser2.value
    +")";
})
    

function myanim(){
    
    document.querySelector(":hover").classList.add("flash");
    
}

function finish(){
    
    document.querySelector(":hover").classList.remove("flash");
    
}



function myfun(){
   var f = document.querySelector("#myfin");
    var s = document.querySelector("#mysin");
    
    document.querySelector("#demo").innerHTML = f.value;
    document.querySelector("#demo2").innerHTML = s.value;
    
    f.addEventListener("input", function(){
document.querySelector("body").style.background = 
    "linear-gradient(to right , "
    +f.value
    +" ,"
    +s.value
    +")";
})
    
        s.addEventListener("input", function(){
document.querySelector("body").style.background = 
    "linear-gradient(to right , "
    +f.value
    +" ,"
    +s.value
    +")";
})
}

