const Shift = (array, direction, index) => {

    let result = []

    switch (direction) {
        case 'left':
            const left = array.splice(0, index % array.length)
            result = [...array, ...left]
            break;

        case 'right':
            const right = array.splice(array.length - (index % array.length), array.length)
            result = [...right, ...array]
            break;

        default:
            break;
    }

    console.log(result)

}


module.exports = Shift