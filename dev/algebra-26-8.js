//JavaScript
(function() {
	retryWhileError(function() {
		'use strict';
		let a = sl(1,180);
		NAtask.setEvaluationTask({
			expr: [
				['cosdeg','sindeg'].iz()+'(' + sl(-1000,1000) + ')',
				['cosdeg','sindeg'].iz()+'(' + sl(-1000,1000) + ')',
				['ctgdeg', 'tgdeg'].iz()+'(' + sl(-20,20)*45 + ')',
			].joinPlusMinus(),
			//forbiddenAnswers: [0],
			authors: [''],
		});
	}, 1000);
})();
//Алгебра 10 класс, 26.8


/*
(function() {
	retryWhileError(function() {
		'use strict';
		let a = sl(1,180);
		NAtask.setEvaluationTask({
			expr: 'cosdeg(' + sl(-1000,1000) + ') - sindeg(' + sl(-1000,1000) + ')-ctgdeg(' + sl(-1000,1000) + ')',
			//expr: 'cosdeg(' + (a.pm() + 180 * sl(-10,10)) + ') - sindeg(' + (a.pm() + 180 * sl(-10,10)) + ')-ctgdeg(' + (a.pm() + 180 * sl(-10,10)) + ')',
			//forbiddenAnswers: [0],
			authors: ['Суматохина Александра'],
		});
	}, 10000);
})();
//Алгебра 10 класс, 26.8
*/
