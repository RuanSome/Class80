name_array=[]
di_array=[]

function Submit(){
    for (var j=1;j<=4;j++){
        n=document.getElementById("name"+j).value;
        name_array.push(n)  
    }
   for (var k=0;k<name_array.length;k++){
     di_array.push(name_array[k])
   } 
    document.getElementById("displayname").innerHTML=di_array
    document.getElementById("displayname1").innerHTML=di_array.join(" ")
    document.getElementById("bt").style.display="none"
    document.getElementById("btt").style.display="inline-block"

}
function Sort(){
    di_array.sort()
    document.getElementById("displayname1").innerHTML=di_array.join(" ")
}
