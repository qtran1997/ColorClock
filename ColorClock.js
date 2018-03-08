window.onload = function startTime(){

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    if(h>12)
    {
        h=h-12;
    }
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    var timer = document.getElementsByClassName("time");
    timer[0].innerHTML = h;
    timer[1].innerHTML = ":" + m;
    timer[2].innerHTML = ":" + s;
    var hexColor = document.getElementsByTagName("body");
    var style = window.getComputedStyle(hexColor[0]);
    var top = style.getPropertyValue("background-color");
    //console.log(top);
    var values = top.substring(4,top.length-1).split(',');
    //console.log(values);
    for(var i =0;i<values.length;i++)
    {
        values[i] = parseInt(values[i]);
    }

    if(values[2]<255)
    {
        console.log(values[2]);
        values[2] = values[2] + 4;
    }
    else if(values[1]<255)
    {
        values[1] = values[1] + 1;
        values[2] = 0;
    }
    else if(values[0]<255)
    {
        values[0] = values[0] + 1;
        values[1] = 0;
    }
    else
    {
        values[0] = 0;
        values[1] = 0;
        values[2] = 0;
    }

    console.log(values);

    var hexNumber = "rgb("+ values[0] +"," + values[1] +"," + values[2]+ ")";
    console.log(hexNumber);
    document.body.style.backgroundColor = hexNumber;


    function checkTime(i) 
    {
        if (i < 10) {i = "0" + i};
        return i;
    }

    setTimeout(startTime,1000);
}