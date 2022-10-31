var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        console.log(left, right, mid)
        if (nums[mid] === target) return mid;
        if(target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};


console.log(search([5 ,6 ,7, 7], 5))