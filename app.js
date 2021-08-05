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
            nextPalindromeDate();
        }
    },3000)
     
}) 


function nextPalindromeDate(arrDate){
    let day = "";
    let month = "";
    let year = "";
    let reversedSumArr = "";
    day === arrDate[2];
    month === arrDate[1];
    year === arrDate[0];
    const monthDays =[31 ,28 ,31, 30, 31, 30, 31, 30, 31, 30, 31, 30]

    let nextSum = function (day,month,year){
        let sumArr = day + month;
        for(let i=sumArr.length-1 ;i>=0 ;i--){
            reversedSumArr += sumArr[i];
        }
    }
    do{
        for(let j=0; j>monthDays.length; j++){
            Number(day)++;
            if(day > monthDays[j]){
                month = Number(month) + 1;
            }
            console.log(month)
        }
    }
    while(year == reversedSumArr)
}