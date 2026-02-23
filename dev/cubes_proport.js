(function() {

function lx_declareClarifiedPhrase(existingWord, clarifyingWord){
	let existingScheme = lx[existingWord] || sklonlxkand(existingWord);
	let proposedScheme = existingScheme.clone();
	for (let p of ['ie','re','ve','de','te','pe',  'im','rm','vm','dm','tm','pm',]){
		proposedScheme[p] += ' ' + clarifyingWord;
	}
	lx[existingWord + ' ' + clarifyingWord] = proposedScheme;
}

lx['площадь'] = sklonlxkand('площадь3');
lx_declareClarifiedPhrase('площадь','поверхности');

NAtask.setDilationTask = function(o) {
	let dilationCoefficient = o.dilationCoefficient || sl(2,10);
	let figureName = sklonlxkand(o.figureName);
	let action = ['увелич','уменьш'].iz();
	o.measurements[0].name = sklonlxkand(o.measurements[0].name);
	o.measurements[1].name = sklonlxkand(o.measurements[1].name);

	let textOptions = [
	];

	if (o.measurements[1].primary) {
		textOptions.push(
			'Во сколько раз ' + action + 'ится ' + o.measurements[0].name.ie + ' ' +
			figureName.re + ', если ' +
			['его','её','его','их'][figureName.rod] + ' ' + o.measurements[1].name.ve + ' ' + action + 'ить в '+
			chislitlx(dilationCoefficient.pow(o.measurements[1].power), 'раз', 'v')+'?'
		);
	}
	else {
		textOptions.push(
			'Во сколько раз ' + action + 'или ' + o.measurements[0].name.ie + ' ' +
			figureName.re + ', если ' +
			['его','её','его','их'][figureName.rod] + ' ' + o.measurements[1].name.ie + ' ' +
			action + ['ился','илась','илось','ились'][o.measurements[1].name.rod] + ' в '+
			chislitlx(dilationCoefficient.pow(o.measurements[1].power), 'раз', 'v')+'?'
		);
	}

	let task = o.clone();
	task.text = textOptions.iz();

	task.answers = [dilationCoefficient.pow(o.measurements[0].power)];
	NAtask.setTask(task);
}



	NAtask.setDilationTask({
		measurements: [
			{
				name: 'ребро',
				primary: true,
				power: 1,
			},
			{
				name: 'объём',
				power: 3,
			},
			{
				name: 'площадь поверхности',
				power: 2,
			},
		].iz(2),
		figureName: 'куб',
		dilationCoefficient: sl(2,10),
		authors: ['Николай Авдеев'],
	});
})();
