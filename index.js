/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// Your code here
function createEmployeeRecord (stringStringStringNumberArr) {
    const employee = {}
    employee.firstName = stringStringStringNumberArr[0]
    employee.familyName = stringStringStringNumberArr[1]
    employee.title = stringStringStringNumberArr[2]
    employee.payPerHour = stringStringStringNumberArr[3]
    employee.timeInEvents = []
    employee.timeOutEvents = []
    return employee
}

function createEmployeeRecords (arrOfArr) {
    const records = []
    arrOfArr.map((elementArr) => {
        records.push(createEmployeeRecord(elementArr))
    })
    return records
}

function createTimeInEvent (dateStamp) {
    this.timeInEvents.push({type: "TimeIn", hour : parseInt(dateStamp.slice(dateStamp.indexOf(' ')+1)), date : dateStamp.slice(0,dateStamp.indexOf(' '))})
    return this
}

function createTimeOutEvent (dateStamp) {
    this.timeOutEvents.push({type: "TimeOut", hour : parseInt(dateStamp.slice(dateStamp.indexOf(' ')+1)), date : dateStamp.slice(0,dateStamp.indexOf(' '))})
    return this
}

function hoursWorkedOnDate (dateStamp) {
    // const currentDateTimeInArr = this.timeInEvents.filter((element) => {
    //     return element.date === dateStamp.slice(0,dateStamp.indexOf(' ')+1||dateStamp.length)
    // })

    // const currentDateTimeOutArr = this.timeOutEvents.filter((element) => {
    //     return element.date === dateStamp.slice(0,dateStamp.indexOf(' ')+1||dateStamp.length)
    // })

    // let i=0    
    // const hoursWorkedArr = currentDateTimeInArr.map((element) => {
    //     i++ 
        // return (currentDateTimeOutArr[i-1].hour - element.hour) / 100
       // })
    //const hoursWorkedInt = hoursWorkedArr.reduce((accum, element) => parseInt(element) + accum, 0)
    debugger
    const hoursWorkedInt = (parseInt(this.timeOutEvents[0].hour) - parseInt(this.timeInEvents[0].hour)) / 100
    
    return hoursWorkedInt
}

function wagesEarnedOnDate(dateStamp) {
    let i = 0
    const dates = this.timeInEvents.map(element => {
        i++
        //const date = [{}] 
        return {timeInEvents : [this.timeInEvents[i-1]], timeOutEvents : [this.timeOutEvents[i-1]]}
    })
    debugger
    //const amountOwedArr = dates.map((element) => {
        
         return hoursWorkedOnDate.call(dates[i-1], dates[i-1].timeInEvents[0].date) * this.payPerHour
    //})
    //const amountOwed = amountOwedArr[0]+amountOwedArr[1]||amountOwedArr[0]
    //return amountOwed
}

// function allWagesFor (employeeObj) {
//     const dates = employeeObj.timeInEvents.map((element) => {
//         return element.date
//     })
//     const totalPerEmployeeArr = dates.map(element => {
//         return wagesEarnedOnDate(employeeObj, element)
//     })

//     const totalPerEmployeeInt = totalPerEmployeeArr.reduce((accum, totalPerEmployeeElement) => totalPerEmployeeElement + accum, 0)
//     return totalPerEmployeeInt
// }
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        debugger
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
debugger
    return payable
}

function findEmployeeByFirstName(srcArray,firstName) {
    return srcArray.find(element => element.firstName === firstName)
}

function calculatePayroll(srcArray) {
    //debugger
    const wagesArray = srcArray.map(element => allWagesFor.call(element))
    debugger
    return wagesArray.reduce((accum, wageElement) => wageElement + accum, 0)
}