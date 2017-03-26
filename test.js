var things = [9, 6, 2, 5, 2, 8, 30, 4, 2]

function sortThis(arr){
	console.log(arr)
	if (arr.length < 2) return arr
	var pivot = arr[0]
	var left = []
	var right = []
	for (var i = 1; i < arr.length; i++){
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return [].concat(sortThis(left)).concat(pivot).concat(sortThis(right))
}

console.log(sortThis(things))
