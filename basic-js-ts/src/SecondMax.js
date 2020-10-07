const SecondMax = (array) => {
    let myArr = []
    if (array.length < 1) {
        console.log('Error')
    } else {

        array.forEach(item => {
            if (myArr.indexOf(item) === -1) {
                myArr.push(item)
                myArr.sort((a, b) => {
                    return a - b;
                })
              
            }

        });

        console.log(myArr[myArr.length > 1 ? myArr.length-2 : 0])
    }

}


module.exports = SecondMax