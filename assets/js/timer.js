    var days =document.getElementById("day");
    var hours =document.getElementById("hour");
    var min =document.getElementById("minute");
    var sec =document.getElementById("second");
    setInterval(function(){ 
        var toDate=new Date();
        var tomorrow=new Date();
        tomorrow.setHours(24,0,0,0);
        /*var diffD=tomorrow.getTime()/24-toDate.getTime()/24;*/
        var diffMS=tomorrow.getTime()/1000-toDate.getTime()/1000;
        var diffHr=Math.floor(diffMS/3600);
        diffMS=diffMS-diffHr*3600;
        var diffMi=Math.floor(diffMS/60);
        diffMS=diffMS-diffMi*60;
        var diffS=Math.floor(diffMS);
        /*var resultD =((diffD<10)?"0"+diffD:diffD);*/
        var result=((diffHr<10)?"0"+diffHr:diffHr);
        result+=":"+((diffMi<10)?"0"+diffMi:diffMi);
        result+=":"+((diffS<10)?"0"+diffS:diffS);
        var resultH=((diffHr<10)?"0"+diffHr:diffHr);
        var resultM=((diffMi<10)?"0"+diffMi:diffMi);
        var resultS=((diffS<10)?"0"+diffS:diffS);
        /*days.innerHTML=resultD;*/
        hours.innerHTML=resultH;
        min.innerHTML=resultM;
        sec.innerHTML=resultS;
    },1000);