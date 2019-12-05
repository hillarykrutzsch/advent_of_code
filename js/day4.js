const min = 137683;
const max = 596253;

var countPasswords = 0;

for (let pw = min; pw <= max; pw++){
	var pwArr =convertIntToArray(pw);
	if(isPassword(pwArr)){
		countPasswords++;
	}
}

console.log('count Passwords: ' + countPasswords);

function convertIntToArray(int){
	let arr = [];
	while(int > 0){
		arr.push(int % 10);
		int = Math.floor(int / 10);
	}
	arr = arr.reverse();
	return arr;
}

function isPassword(arr){
	let prevNum = 0;
	let foundDouble = false;
	let hashMap = {};
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < prevNum){
			return false;
		}
		//check if numbers are the same and if the number has NOT already been saved as a double
		if(arr[i] == prevNum && !hashMap[arr[i]] && hashMap[arr[i]] !== 'multiple'){
			hashMap[arr[i]] = 'double';
		}
		//check if number has been saved as a double, set foundDouble to false
		else if(arr[i] == prevNum){
			hashMap[arr[i]] = 'multiple';
		}
		prevNum = arr[i];
	}

	for(var key in hashMap){
    	if(hashMap[key] == 'double'){
    		foundDouble = true;
    	}
	}
	return foundDouble;
}

var tests = [112233, 123444, 111122, 288888, 333334, 288999];
var expectedResults = [true, false, true, false, false, true];

var results = tests.map(arr => {
	return isPassword(convertIntToArray(arr));
});

console.log(results);

