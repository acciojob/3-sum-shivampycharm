function threeSum(arr, target) {
	//your code here
	
	arr.sort((a, b) => a - b);  // sort the input array
	let closestSum = Infinity;  // initialize closestSum to infinity
	
	for (let i = 0; i < arr.length - 2; i++) {
		let j = i + 1;
		let k = arr.length - 1;
		
		while (j < k) {
			let currSum = arr[i] + arr[j] + arr[k];
			
			if (currSum === target) {
				return target;
			} 
			else if (Math.abs(currSum - target) < Math.abs(closestSum - target)) {
				closestSum = currSum;
			}
			
			if (currSum < target) {
				j++;
			}
			else {
				k--;
			}
		}
	}
	return closestSum;
}

module.exports = threeSum;
