let hoursAttend;
let hoursOccured;
let percentage;
function less(y){
    let i=0;
    let sum = 0;
    let bum = 0;
    while(y<75){
        i++;
        sum = (hoursOccured*1) + (i*1);
        bum =  (hoursAttend*1) + (i*1);
        y = (bum/ sum) * 100;
    }
    alert("Your Attendance percentage is: "+percentage+"\n You still have to attend "+i+" classes to get an attendance above or equal to 75%");
    
}
function higher(z){
    let i=0;
    let sum = 0;
    while(z>=75){
        i++;
        sum = (hoursOccured*1) + (i*1);
        z = ( hoursAttend / sum  ) * 100;
    }
    i--;
    alert("Your Attendance percentage is: "+percentage+"\n You can bunk "+i+" classes and still have an attendance percentage above or equal to 75%");
    return false;
}
function calculate(){
    document.getElementById("form1").submit();
    document.getElementById("form2").submit();
    hoursAttend = document.querySelector("#hoursA").value;
    hoursOccured = document.querySelector("#totalHours").value;
    percentage =( hoursAttend / hoursOccured ) * 100;
    if(percentage<75){
        less(percentage);
    }
    else if(percentage>=75){
        higher(percentage);
    }
}