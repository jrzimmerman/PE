
function getMultiples(iter) {
	var answer = 0;
	for (var i = 1; i < iter; i++) {
		if(i % 3 === 0 || i % 5 === 0) {
			answer += i;
		}
	}
	return answer;
}
getMultiples(1000);