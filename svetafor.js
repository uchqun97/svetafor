function TrafficLight(){
    constred=document.getElementById('red');
    constyellow=document.getElementById('yellow');
    constgreen=document.getElementById('green');


    function Red(){
        red.style.backgroundColor='red';
        yellow.style.backgroundColor='rgb(131,131,2)';
        green.style.backgroundColor='green';
        setTimeout(yellow,4000)
    }
 

    function Yellow(){
        red.style.backgroundColor=' rgb(118,3,3)';
        yellow.style.backgroundColor='yellow';
        green.style.backgroundColor='green';
        setTimeout(green,2000)
    }
   
    function Green(){
        red.style.backgroundColor=' rgb(118,3,3)';
        yellow.style.backgroundColor='rgb(131,131,2)';
        green.style.backgroundColor='greenYellow';
        setTimeout(red,4000)
    }
  Red();
}
TrafficLight()