function add (a, b) {
    return a + b;
}
// this function is not being tested
// the --coverage feature tells us what percentage of code in the file is being tested
function helper() {
    console.log('i am not tested')
}

module.exports = add;