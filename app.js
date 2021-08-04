const inputDate = document.querySelector("#input-date");
const btnCheck = document.querySelector("#btn-check");
const msg = document.querySelector("#msg");
const working = document.querySelector(".working")

btnCheck.addEventListener("click",function (){
    btnCheck.style.display="none";
    working.style.display="block";
    working.style.textalign="center";
    msg.style.display="none";
    setTimeout(function (){
        btnCheck.style.display="block";
        working.style.display="none";
        var arrDate = inputDate.value.split("-");
        let sum = arrDate[2]+arrDate[1];
        let reverseSum = "";
        console.log(arrDate);
        console.log(sum);
        for(let i=sum.length-1 ;i>=0 ;i--){
            reverseSum += sum[i];
        }
        console.log(reverseSum);
        if(arrDate[0] == reverseSum){
            console.log("palindrome")
            msg.style.display ="block";
        }else{
            console.log("not palindrome")
        }
    },3000)
     
}) 
