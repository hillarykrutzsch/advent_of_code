var input = '3,225,1,225,6,6,1100,1,238,225,104,0,1101,32,43,225,101,68,192,224,1001,224,-160,224,4,224,102,8,223,223,1001,224,2,224,1,223,224,223,1001,118,77,224,1001,224,-87,224,4,224,102,8,223,223,1001,224,6,224,1,223,224,223,1102,5,19,225,1102,74,50,224,101,-3700,224,224,4,224,1002,223,8,223,1001,224,1,224,1,223,224,223,1102,89,18,225,1002,14,72,224,1001,224,-3096,224,4,224,102,8,223,223,101,5,224,224,1,223,224,223,1101,34,53,225,1102,54,10,225,1,113,61,224,101,-39,224,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1101,31,61,224,101,-92,224,224,4,224,102,8,223,223,1001,224,4,224,1,223,224,223,1102,75,18,225,102,48,87,224,101,-4272,224,224,4,224,102,8,223,223,1001,224,7,224,1,224,223,223,1101,23,92,225,2,165,218,224,101,-3675,224,224,4,224,1002,223,8,223,101,1,224,224,1,223,224,223,1102,8,49,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1107,226,226,224,1002,223,2,223,1005,224,329,1001,223,1,223,1007,677,226,224,1002,223,2,223,1006,224,344,1001,223,1,223,108,677,226,224,102,2,223,223,1006,224,359,1001,223,1,223,7,226,226,224,1002,223,2,223,1005,224,374,101,1,223,223,107,677,677,224,1002,223,2,223,1006,224,389,1001,223,1,223,1007,677,677,224,1002,223,2,223,1006,224,404,1001,223,1,223,1107,677,226,224,1002,223,2,223,1005,224,419,1001,223,1,223,108,226,226,224,102,2,223,223,1006,224,434,1001,223,1,223,1108,226,677,224,1002,223,2,223,1006,224,449,1001,223,1,223,1108,677,226,224,102,2,223,223,1005,224,464,1001,223,1,223,107,226,226,224,102,2,223,223,1006,224,479,1001,223,1,223,1008,226,226,224,102,2,223,223,1005,224,494,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,509,101,1,223,223,8,226,677,224,1002,223,2,223,1006,224,524,1001,223,1,223,1007,226,226,224,1002,223,2,223,1006,224,539,101,1,223,223,1008,677,677,224,1002,223,2,223,1006,224,554,101,1,223,223,1108,677,677,224,102,2,223,223,1006,224,569,101,1,223,223,1107,226,677,224,102,2,223,223,1005,224,584,1001,223,1,223,8,677,226,224,1002,223,2,223,1006,224,599,101,1,223,223,1008,677,226,224,102,2,223,223,1006,224,614,1001,223,1,223,7,226,677,224,1002,223,2,223,1005,224,629,101,1,223,223,107,226,677,224,102,2,223,223,1005,224,644,101,1,223,223,8,677,677,224,102,2,223,223,1005,224,659,1001,223,1,223,108,677,677,224,1002,223,2,223,1005,224,674,101,1,223,223,4,223,99,226';
//var input = '3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99';


function intCodeProgram(inputString, inputValue){
	let convertedArray = inputString.split(',').map(m => parseInt(m));
	let currentIndex = 0;
	while(convertedArray[currentIndex] != 99){
		let currentInstruction = convertedArray[currentIndex];
		//gather values from current Instruction
		let instructionArray = [];
		let nextInstructionCount = 0;
		while(currentInstruction > 0){
			instructionArray.push(currentInstruction % 10);
			currentInstruction = Math.floor(currentInstruction / 10);
		}
		let newInstruction = instructionArray[0];
		let firstParamMode = 0;
		let secondParamMode = 0;
		if(instructionArray.length > 1){
			newInstruction = parseInt(String(instructionArray[1]) + String(instructionArray[0]));
			//0 position mode, value is value stored at address, 1 immediate mode, value is value
			firstParamMode = instructionArray[2];
			secondParamMode = instructionArray[3];

			//Parameters that an instruction writes to will never be in immediate mode.
			let thirdParamMode = 0;
		}

		let firstNum=0,secondNum=0;
		let firstParam = convertedArray[currentIndex+1];
		let secondParam = convertedArray[currentIndex+2];
		let thirdParam = convertedArray[currentIndex+3];
		if(firstParamMode == 1){
			firstNum = firstParam;
		}
		else{
			firstNum = convertedArray[firstParam];
		}
		if(secondParamMode == 1){
			secondNum = secondParam;
		}
		else{
			secondNum = convertedArray[secondParam];
		}

		switch(newInstruction){
			case 1:
				//addition instruction
				convertedArray[thirdParam] = firstNum + secondNum;
				nextInstructionCount = 4;
			break;
			case 2:
				//multiplication instruction
				convertedArray[thirdParam] = firstNum * secondNum;
				nextInstructionCount = 4;
			break;
			case 3:
				//input instruction
				convertedArray[firstParam] = inputValue;
				nextInstructionCount = 2;
			break;
			case 4:
				//output instruction
				console.log('output: ' + firstNum);
				nextInstructionCount = 2;
			break;
			case 5:
				//jump-if-true
				if(firstNum != 0){
					currentIndex = secondNum;
					nextInstructionCount = 0;
				}
				else{
					nextInstructionCount = 3;
				}
			break;
			case 6:
				//jump-if-false
				if(firstNum == 0){
					currentIndex = secondNum;
					nextInstructionCount = 0;
				}
				else{
					nextInstructionCount = 3;
				}
			break;
			case 7:
				//less than
				convertedArray[thirdParam] = firstNum < secondNum ? 1 : 0;
				nextInstructionCount = 4;
			break;
			case 8:
				//equals
				convertedArray[thirdParam] = firstNum == secondNum ? 1 : 0;
				nextInstructionCount = 4;
			break;
		}
		//debugger;
		currentIndex+=nextInstructionCount;
		
	}
	return convertedArray[0];
}


//part1
intCodeProgram(input, 1);

//part2
intCodeProgram(input, 5);
