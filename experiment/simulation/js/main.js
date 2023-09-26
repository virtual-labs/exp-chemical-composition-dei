
// step 2 button JS
function step2() {

    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("Step2").style.visibility = "visible";

}

// step 2 ends here


// step 3 starts here


// step 3 button JS
function step3() {

    document.getElementById("Step2").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("Step3").style.visibility = "visible";
    document.getElementById("arr3").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "hidden";
    document.getElementById("trans2").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("next2").style.visibility = "hidden";
    document.getElementById("arr2").style.visibility = "hidden";


    myTimeout = setTimeout(myGreeting3, 1000);


}

function myGreeting3() {
   

    document.getElementById("arr1").style.visibility = "visible";
   
    
    myStopFunction3();
}






function myStopFunction3() {
    clearTimeout(myTimeout);

}

// on clicking then cylinder animation
function movecylinder() {
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("gif2").style.visibility = "visible";
   
    
    myTimeout = setTimeout(myGreeting, 3000);

}

function myGreeting() {
   // document.getElementById("gif2").style.visibility = "hidden";

     document.getElementById("arr2").style.visibility = "visible";
    document.getElementById("trans2").style.visibility = "visible";
   // document.getElementById("gif3").style.visibility = "visible";



    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}

function movefunnel() {
    //document.getElementById("gif1").style.visibility = "visible";
    document.getElementById("arr2").style.visibility = "hidden";
    document.getElementById("trans2").style.visibility = "hidden";
    document.getElementById("gif3").style.visibility = "visible";

    myTimeout1 = setTimeout(myGreeting1, 2500);

}

function myGreeting1() {
   

    document.getElementById("arr3").style.visibility = "visible";
    document.getElementById("trans3").style.visibility = "visible";
   // document.getElementById("png3").style.visibility = "hidden";


    myStopFunction1();
}






function myStopFunction1() {
    clearTimeout(myTimeout);

}

function clicktofill() {
    document.getElementById("arr3").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "hidden";
    document.getElementById("gif4").style.visibility = "visible";

    myTimeout1 = setTimeout(myGreeting2, 6000);

}

function myGreeting2() {
    
    document.getElementById("next2").style.visibility = "visible";
 
 
     myStopFunction2();
 }

 function myStopFunction2() {
    clearTimeout(myTimeout);

}

function step4() {

    document.getElementById("Step3").style.visibility = "hidden";
    document.getElementById("Step3").querySelectorAll("*").forEach(function(element) {
        element.style.visibility = "hidden";
      });

    document.getElementById("Step4").style.visibility = "visible";  
    document.getElementById("arr5").style.visibility = "hidden";
    document.getElementById("trans5").style.visibility = "hidden";
    document.getElementById("next3").style.visibility = "hidden";
    }
    
// step 4 starts from here


function liftscale() {
    
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("trans4").style.visibility = "hidden";
    document.getElementById("arr4").style.visibility = "hidden";
    document.getElementById("gif5").style.visibility = "visible";
    

    myTimeout1 = setTimeout(myGreeting4, 3000);

}

function myGreeting4() {
    
     document.getElementById("arr5").style.visibility = "visible";
     document.getElementById("trans5").style.visibility = "visible";
 
 
     myStopFunction4();
 }

 function myStopFunction4() {
    clearTimeout(myTimeout);

}

function leveloff() {
    
    
    document.getElementById("trans5").style.visibility = "hidden";
    document.getElementById("arr5").style.visibility = "hidden";
    document.getElementById("gif6").style.visibility = "visible";

    myTimeout1 = setTimeout(myGreeting5, 3000);

}

function myGreeting5() {
    
     document.getElementById("next3").style.visibility = "visible";
    
 
 
     myStopFunction5();
 }

 function myStopFunction5() {
    clearTimeout(myTimeout);

}

// completed step 4





