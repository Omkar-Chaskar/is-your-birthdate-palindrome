const inputDate = document.querySelector("#input-date");
const btnCheck = document.querySelector("#btn-check");
const msg = document.querySelector("#msg");
const working = document.querySelector(".working")

btnCheck.addEventListener("click", function () {
    btnCheck.style.display = "none";
    working.style.display = "block";
    working.style.textalign = "center";
    msg.style.display = "none";

    setTimeout(function () {
        btnCheck.style.display = "block";
        working.style.display = "none";
        const arrDate = inputDate.value.split("-");
        let palindromList = [];

        var date = {
            inputDay: arrDate[2],
            inputMonth: arrDate[1],
            inputYear: arrDate[0]
        };
        var ddmmyyyy = date.inputDay + date.inputMonth + date.inputYear;
        var mmddyyyy = date.inputMonth + date.inputDay + date.inputYear;
        var yyyymmdd = date.inputYear + date.inputMonth + date.inputDay;
        var ddmmyy = date.inputDay + date.inputMonth + date.inputYear.toString().slice(-2);
        var mmddyy = date.inputMonth + date.inputDay + date.inputYear.toString().slice(-2);
        var yyddmm = date.inputYear.toString().slice(-2) + date.inputDay + date.inputMonth;

        let dateFormat = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];

        for (let a = 0; a < dateFormat.length; a++) {
            console.log(dateFormat[a]);
            let reverseSum

            for (let i = dateFormat[a].length - 1; i >= 0; i--) {
                let reverse
                reverseSum =dateFormat[a].split('').reverse().join('');
            }
            console.log(reverseSum);

            if (dateFormat[a] == reverseSum) {
                console.log("palindrome")
                msg.style.display = "block";
            } 
            else {

                console.log("not palindrome")

                msg.style.display = "block";
                let dd, mm, yy;
                let day = date.inputDay;
                let month = date.inputMonth;
                let year = date.inputYear;
                let revSum = "";
                let differenceAssending = 1;
                let differenceDesending = 0;
                const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 31, 30, 31, 30]
                console.log(day, month, year)
                let m = Number(month) - 1;
                let sum = revSum - year;
                // for(let diff=1; sum !== 0 ; diff++){

                while (sum !== 0) {
                    differenceAssending++;
                    day++;
                    //  console.log("days : ", day)
                    if (day > monthDays[m]) {
                        m++;
                        day = 1;
                        month = Number(month) + 1;
                        // console.log("months : ", month)
                        if (month > 12) {
                            month = 1;
                            year = Number(year) + 1;
                            m = 0;
                            // console.log("years : ", year)
                        }
                    }

                    day = day.toString();
                    if (day.length == 1) {
                        day = 0 + day;
                    }

                    month = month.toString();
                    if (month.length == 1) {
                        month = 0 + month;
                    }

                    let revSum = "";
                    let sum = day + month;
                    // console.log(sum, " day : ", day, "months : ", month, "year : ", year,"differnce :",differenceAssending)

                    for (let j = sum.length - 1; j >= 0; j--) {
                        revSum = revSum + sum[j];
                    }
                    // console.log("revSum :", revSum)

                    if (Number(revSum) === Number(year)) {
                        console.log("revSum :", revSum, "year : ", year, "differnce :", differenceAssending);
                        break;
                    }
                }

                let days = arrDate[2];
                let months = arrDate[1];
                let years = arrDate[0];

                while (sum !== 0) {
                    differenceDesending++
                    days = days - 1;
                    if (days < 1) {
                        m--;
                        months = months - 1;
                        if (months < 1) {
                            m = 11;
                            months = 12;
                            years = years - 1;
                            days = monthDays[12 - 1];
                        }
                        days = monthDays[m];

                    }
                    days = days.toString();
                    if (days.length == 1) {
                        days = 0 + days;
                    }
                    months = months.toString();
                    if (months.length == 1) {
                        months = 0 + months;
                    }
                    let revSums = "";
                    let sums = days + months;
                    // console.log(sums, " day : ", days, "months : ", months, "year : ", year,"differnce :",differenceDesending)
                    for (let j = sums.length - 1; j >= 0; j--) {
                        revSums = revSums + sums[j];
                    }

                    if (Number(revSums) === Number(years)) {
                        console.log("revSum :", revSums, "year : ", years, "differnce :", differenceDesending);
                        break;
                    }
                }

                if (differenceAssending >= differenceDesending) {
                    diff = differenceDesending;
                    dd = days;
                    mm = months;
                    yy = years;
                    console.log(" day : ", days, "months : ", months, "year : ", years, "differnce :", differenceDesending)

                } else {
                    diff = differenceAssending;
                    dd = day;
                    mm = month;
                    yy = year;
                    console.log(" day : ", day, "months : ", month, "year : ", year, "differnce :", differenceAssending)

                }

                let SysPrint = `
            <h2>Nearest palindrome Date is "${dd}-${mm}-${yy}". You miss it by ${diff} days. </h2>
            `
                msg.innerHTML = SysPrint;
            }
        }
    }, 0)

})
