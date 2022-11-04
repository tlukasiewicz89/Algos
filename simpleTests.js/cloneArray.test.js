const cloneArray = require ('./cloneArray')

test('properly clones array', () => {
    const array = [1, 2, 3];

    //this will fail because they are not strictly equal
    // expect(
    //     cloneArray(array)
    // ).toBe(array)

    // instead use the toEqual function
    // 
    expect(cloneArray(array)).toEqual(array);
    // now this test passes

    //also create another test to make sure its not returning the same exact array
    expect(cloneArray(array)).not.toBe(array);
})