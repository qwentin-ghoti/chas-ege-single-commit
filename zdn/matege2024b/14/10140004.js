(function() {
	retryWhileError(function() {
		'use strict';
		let d1 = sl(2, 100);
		let d2 = sl(2, 100);
		let d3 = sl(2, 100);
		let operands = [
			[
				sl(1, 100),
				'(' + sl(1, 100) + '/' + sl(1, 100) + ')',
				'mixed(' + sl(1, 10) + ',' + sl(1, d1-1) + ',' + d1 + ')',
			].iz(),
			'(' + [
				'mixed(' + sl(1, 10) + ',' + sl(1, d2-1) + ',' + d2 + ')',
				[
					'mixed(' + sl(1, 10) + ',' + sl(1, d3-1) + ',' + d3 + ')',
					'(' + sl(1, 100) + '/' + sl(1, 100) + ')',
				].iz(),
			].shuffleJoin(['+', '-'].iz()) + ')',
		];

		NAtask.setEvaluationTask({
			expr: [
				'divideColon(' + operands.shuffleJoin(',')+')',
				operands.shuffleJoin('*')
			].iz(),
			//forbiddenAnswers: [0],
			authors: ['Николай Авдеев'],
		});
	}, 2000);
})();
