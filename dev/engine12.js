function setMinimaxFunctionTask(o){
		let task = o.clone();

		let expr = math.parse(o.expr);
		let lEnd = math.parse(o.leftEnd).evaluate();
		let rEnd = math.parse(o.rightEnd).evaluate();

		let minY = expr.evaluate({x:rEnd});
		let maxY = minY;
		let minX = rEnd;
		let maxX = rEnd;

		for (let x = lEnd; x < rEnd; x += (o.step || 0.0001)) {
			let y = expr.evaluate({x});
			if (y > maxY) {
				maxX = x;
				maxY = y;
			} else if (y < minY) {
				minX = x;
				minY = y;
			}
		}
		console.log('minX: ' + minX + " ; minY: " + minY + " ;   maxX: " + maxX + " ; maxY: " + maxY);

		if (!(minY*1000).isAlmostInteger() || o.forbidMinY) {
			minY = null;
		}

		if (!(maxY*1000).isAlmostInteger() || o.forbidMaxY) {
			maxY = null;
		}

		genAssert(minY !== null || maxY !== null);

		var chooseMinMax;
		if (maxY === null || (minY !== null && sl1())) {
			chooseMinMax = 'наименьшее';
			o.answers = minY;
		} else {
			chooseMinMax = 'наибольшее';
			o.answers = maxY;
		}

		if (o.simplifyConstant){
			expr = math.simplifyConstant(expr);
		}

		if (!o.keepFractionsIrreduced){
			expr = math.simplify(expr,mathjsRules.reduceFractions);
			expr = math.simplify(expr,mathjsRules.reduceFractionsPi);
		}

		expr = math.simplify(expr, mathjsRules.clearFracAsPower);
		expr = math.simplify(expr, mathjsRules.omit1pi);
		expr = math.simplify(expr, mathjsRules.omit1sqrt);
		expr = math.simplify(expr, mathjsRules.trig2trigPow);


		let tex = expr.toTex().allDecimalsToStandard(true);
		o.text =
			'Найдите '+ chooseMinMax + ' значение функции $y=' + tex + '$ на отрезке ' +
			'$\\left[' + math.parse(o.leftEnd).toTex() + ' ; ' + math.parse(o.rightEnd).toTex() + '\\right]$.'
		o.answers = o.answers.ts();


		chas2.task.setTask(o);
}


(function() {
	retryWhileError(function() {
		'use strict';

		setMinimaxFunctionTask({
			expr: '12 cos(x) + 6 sqrt(3) x -2 sqrt(3) pi + 6',
			leftEnd: '0',
			rightEnd: 'pi/2',
			authors: ['Николай Авдеев'],
		});
	},100);
})();
//26692
