function dateMethods(){
    const currentDate = new Date();
    console.log("Current Date:", currentDate);
    console.log("Date:", currentDate.getDate());
    console.log("Month:",currentDate.getMonth()+1);
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:",currentDate.getHours());
    console.log("Minuits:",currentDate.getMinutes());
    console.log("Seconds:",currentDate.getSeconds());
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);
    currentDate.setMonth(5);
    console.log("After setMonth:", currentDate);
}
const dateInfo = dateMethods();
console.log(dateInfo);
