function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if (i >= startIndex && i < endIndex){
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
const value = "Abhishek Rawat"
let ans2 = value.slice(3, 10)
console.log(ans2);
console.log(cutIt(value, 3, 10));
