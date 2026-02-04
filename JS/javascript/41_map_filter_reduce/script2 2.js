const nums = [1, 2, 3, 4, 5]

//using .reduce()
const sum = nums.reduce((accumulator, current, i) => {
    // console.log(i, current);
    // console.log(accumulator);
    return accumulator * current
}, 0)

// accumulator : brings values together
// current: current value
// i: index, which is third value in parameters of reduce
// 0: is the starting value, it could be any number or string