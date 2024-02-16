
function isLeapYear(year){
    if((year%4 == 0 && year%100 !== 0 ) || (year%400 ===0)){
        return true;
    }
    else{
        return false;
    }
}

export default isLeapYear

export {isLeapYear}
// export {isLeapYear};
// console.log(isLeapYear(2024));
