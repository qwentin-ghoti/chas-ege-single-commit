class ArithmeticProgression {
	constructor(first, difference) {
		this.first = first;
		this.difference = difference;
		this.nmember = 0;

	}

	member(nmember) {
		this.nmember = nmember;
		return this.first + this.difference * (this.nmember - 1);
	}

	summa(nmember) {
		this.nmember = nmember;
		return ((2 * this.first + this.difference * (this.nmember - 1)) / 2) * this.nmember;
	}

}



let a = sluchch(2, 5);
let b = sluchch(2, 4);
let n = sluchch(8, 18);
let n2 = n - sluchch(2, 5);

let progress = new ArithmeticProgression(a, b);

NAtask.setTask({
	text: 'Грузовик перевозит партию щебня массой ' + progress.summa(n) +  
		' тонн, ежедневно увеличивая норму перевозки на одно и то же число тонн. ' +
		'Известно, что за первый день было перевезено ' + a +  ' тонны щебня. ' +
		'Определите, сколько тонн щебня было перевезено за ' + n2 +  ' день, если вся работа была выполнена за ' + n +  
		' дней.',

	answers: progress.member(n2),
});
