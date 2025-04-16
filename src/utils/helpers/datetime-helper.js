function compareTime(dateTimeOne, dateTimeTwo) {
    return dateTimeOne.getTime() > dateTimeTwo.getTime();
}

module.exports = {
    compareTime
}

