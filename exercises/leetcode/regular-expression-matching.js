let isMatch = function (s, p) {
	let stringS = s.split("");
	let stringP = p.split("");

	let newIndexArr = [];
	let newLettersArr = [];
	let newOnlyDotsArr = [];

	if (p.includes(".") && !p.includes("*")) {
		stringP.map((charP, index) => {
			if (charP === ".") {
				newIndexArr.push(index);
			}
		});

		newIndexArr.forEach((index) => {
			newLettersArr.push(stringS[index]);

			newLettersArr.forEach((letter) => {
				stringP[index] = letter;
			});
		});
	}

	if (p.includes("*") && !p.includes(".")) {
		stringP.map((charP, index) => {
			if (charP === "*") {
				newIndexArr.push(index);
				newLettersArr = stringS.slice(index);
			}
		});

		newIndexArr.forEach((item) => {
			stringP[item] = newLettersArr;
		});
	}

	if (p.includes(".") && p.includes("*")) {
		stringP.map((charP, index) => {
			if (charP === ".") {
				newOnlyDotsArr.push(index);
			} else if (charP === "*") {
				newIndexArr.push(index);
				newLettersArr = stringS.slice(index);
			}
		});

		newOnlyDotsArr.forEach((index) => {
			newLettersArr.push(stringS[index]);

			newLettersArr.forEach((letter) => {
				stringP[index] = letter;
			});
		});

		newIndexArr.forEach((item) => {
			stringP[item] = newLettersArr;
		});
	}

	if (s === p) {
		return true;
	} else if (stringS === stringP) {
		return true;
	} else return false;
};

isMatch("vitor", "vitor");
