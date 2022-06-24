"Use strict";

function calculator(num1,operator,num2){
	switch (operator) {
		case "+":
			return num1 + num2
			break;
		case "-":
			return num1 - num2
		    break;
		case "/":
			return num1 / num2
			break;
		case "*":
			return num1 % num2
			break;
		case "%":
			num1 + num2
			break;
		default:
			break;
	}
}console.log(calculator())
//________________________________________________________________________________

function nstPrime(nstPrime){
let primeCount = 0
for (let i = 0;primeCount < nstPrime ; i++) {
    let a = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                a = 1;
            }
        }if (i > 1 && a == 0) {
                primeCount += 1 
            if(primeCount === nstPrime){
                console.log(i)
            }
        }
    }
}nstPrime()
///////

function weeksDaysHours(weeks){
	  let days = 7;
	  let hours = 24;
	  
	  for (let i = 1; i <= weeks; i++) {
		console.log("Week: " + i);

		for (let j = 1; j <= days; j++) {
		  console.log("  Day: " + j);

		  for (let k = 1; k <= hours; k++) {
			console.log("  hour: " + k);
  
		}
	  }
	}
}weeksDaysHours()

//////
function driverSalary (roadLength,dayLength ){
	let pastLength = 0;
	
	while(pastLength < roadLength){
		pastLength += dayLength;
			console.log(pastLength + "km");
			let dayPrice = 10;
				if(pastLength == roadLength){break;}
			while(dayPrice < dayLength){
				console.log(dayPrice + " km + 10$");
				dayPrice += 10;
					
			}		
	}      
}console.log(driverSalary());