function reverseString(str){
    var splitChar = str.split('');
    var reverseSplitChar = splitChar.reverse();
    var reverseStr = reverseSplitChar.join('');
    return reverseStr;
}

function isPalindrome(str){
    var reverseStr = reverseString(str);
    return str === reverseStr;
}

function convertDateToStr(date){
    var dateStr = { day: '', month: '', year: ''};
     if(date.day < 10){
        dateStr.day =  '0' + date.day;
       
         }
         else{
            dateStr.day= date.day.toString();
         }
       
         if (date.month < 10){
            dateStr.month =  '0' + date.month;
           
             }
             else{
                dateStr.month = date.month.toString();
             }
        dateStr.year = date.year.toString();
    
        return dateStr ;
}
function checkAllDateFormats(date){
    var datestrs = convertDateToStr(date);

    var ddmmyyyy = datestrs.day + datestrs.month + datestrs.year;
    var yyyymmdd =  datestrs.year + datestrs.month + datestrs.day;
    var mmddyyyy = datestrs.month + datestrs.day + datestrs.year;
    var ddmmyy = datestrs.day + datestrs.month + datestrs.year.slice(-2);
    var yymmdd = datestrs.year.slice(-2) + datestrs.month + datestrs.day;
    var mmddyy = datestrs.month + datestrs.day + datestrs.year.slice(-2);

    return [ddmmyyyy, yyyymmdd, mmddyyyy, ddmmyy, yymmdd, mmddyy];
}
function isPalindromeForAllDateFormat(date){
    var listOfPalindromeDate =  checkAllDateFormats(date);
    var flag = false;
    for (let i=0; i<listOfPalindromeDate.length;i++) {
        if(isPalindrome(listOfPalindromeDate[i])){
            flag = true;
        }
    }
      return flag;
}
function  checkifleapyear(year){
    if( year % 400 === 0){
        return true;
    }
    if( year % 4 === 0){
        return true;
    }
    if( year % 100 === 0){
       return false;
    }
    
return false;


}
function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysinmonths = ["31","28","31","30","31","30","31","31","30","31","30","31" ]


    if( month === 2){

        if(checkifleapyear(year)){
            if (day > 29){
                day =1 ;
                month++;
            }
             }
             else{
             if (day > 28){
                day =1 ;
                month++;
             }
    }
}
    
    else{
        if(day > daysinmonths[month-1]){
        day = 1;
        month++;
    }
}


    if(month > 12){
        day=1;
        month=1;
        year++;
    }

    return  {day: day,
    month: month ,
    year: year
}

}
function checkNextDatePalindrome(date){
    var ctr=0;
    var nextdate = getNextDate(date);
    while(1){
        ctr++;
        var isPalindrome = isPalindromeForAllDateFormat(nextdate)
            if(isPalindrome=== true){
                break;
            }
            
            var nextdate = getNextDate(nextdate);
            
        
    }
    return [ctr,nextdate];
    }

var date = {
    day: 28,
    month: 2 ,
    year: 2020
}




var inputdate = document.querySelector('#input-date');
var checkbutton = document.querySelector('#check-date');
var outputbox = document.querySelector('#output');

function checkDateifPalindrome() {
    var date = inputdate.value;
    var birtdatestr = date.split('-');
    var birthdate = {
        day: Number(birtdatestr[2]),
        month:Number(birtdatestr[1]),
        year: Number(birtdatestr[0])
    }
    var ispalindrome =  isPalindromeForAllDateFormat(birthdate)
        if(ispalindrome){
            outputbox.innerText="It's a Palindrome.Yayy!!!";
            console.log("It's a Palindrome.Yayy!!!");
        }
        else{
            var [ctr, nextdate]= checkNextDatePalindrome(birthdate);
            
                outputbox.innerText="It's a not Palindrome. The next date is" +nextdate.day+"-"+nextdate.month+"-"+nextdate.year+ ", you miss it by "+ctr+" days"
                console.log("It's a not Palindrome. The next date is ${nextdate.day}-${nextdate.day}-$(nextdate.year), you miss it by ${ctr} days"
                )
        }
    
   
       
    }
    

    



    


checkbutton.addEventListener("click", checkDateifPalindrome)  