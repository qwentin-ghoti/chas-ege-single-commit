(function() {
	retryWhileError(function() {
		'use strict';

		var mult1 = math.parse('cos(x)-(-1/2)');
		var mult2 = math.parse('cos(x)-(-2)');
		mult1 = math.simplify(mult1);
		mult2 = math.simplify(mult2);

		var prod = math.multiply(mult1, mult2);
		var prod = new math.OperatorNode('*', 'multiply', [mult1, mult2]);
		var e2 = math.simplify(expanded, [{ r: 'n1*n3 + n2*n3', l: '(n1+n2)*n3' }]);
		var e3 = math.simplify(e2);

		chas2.task.setTask({
			text: "$$" +
				e3.toTex() +
			"$$",
			answers: "?",
			enablePartsSubtraction: 0,
			handleMultipleRoots: 'randomExceptList',
			forceMultipleRoots: sl(4),
		});

	});
})();


(function() {
	retryWhileUndefined(function() {
		'use strict';

		math.expandProdSums = function(expr){
			return math.simplify(expr, [
				{ r: 'n1*n3 + n2*n3', l: '(n1+n2)*n3' },
				{ r: 'n1*n3 - n2*n3', l: '(n1-n2)*n3' },
			]);
		}
		var mult1 = math.parse('cos(x)-(-1/2)');
		var mult2 = math.parse('cos(x)-(-2)');
		mult1 = math.simplify(mult1);
		mult2 = math.simplify(mult2);

		var prod = new math.OperatorNode('*', 'multiply', [mult1, mult2]);
		var e2 = math.simplify(prod, [{ r: 'n1*n3 + n2*n3', l: '(n1+n2)*n3' }]);
		var e3 = math.simplify(e2);
		var e4 = new math.OperatorNode('*', 'multiply', [math.parse('2'), e3]);
		var e5 = math.simplify(e4, [{ r: 'n1*n3 + n2*n3', l: '(n1+n2)*n3' }]);
		var e6 = math.simplify(e5);
		var e7 = math.simplify(e6, [{ r: 'n1*n3 + n2*n3', l: '(n1+n2)*n3' }]);
		var e8 = math.simplifyCore(e7);
		var e9 = math.simplify(e8, [{ l: '(cos(n1))^2', r: '1-(sin(n1))^2' }]);
		var e10 = math.simplify(e9, [{ r: 'n1*n3 - n2*n3', l: '(n1-n2)*n3' }]);
		var e11 = math.simplify(e10);
		var e12 = math.simplify(e11, [{ l: 'cos(n1)', r: 'sin(n1+3 pi/2)' }]);
		var e13 = new math.OperatorNode('*', 'multiply', [math.parse('3'), e12]);
		var e14 = math.expandProdSums(e13);
		var e15 = math.simplify(e14);



		chas2.task.setTask({
			text: "$$" +
				e15.toTex() +
			"$$",
			answers: "?",
		});
		return true;
	});
})();




math.parse('(sin(x))^2').toTex()
"{\\left(\\sin\\left( x\\right)\\right)}^{2}"
math.parse('sin(x)*sin(x)').toTex()
"\\sin\\left( x\\right)\\cdot\\sin\\left( x\\right)"
math.simplify(math.parse('sin(x)*sin(x)')).toTex()
"{\\sin\\left( x\\right)}^{2}"





var customLaTeX_trig = {
  'sinpow': function (node, options) { //provide toTex for your own custom function
    if(node.args[1].isNumeric){
      return '\\sin^{' + node.args[1].toTex(options)+'}(' + ')';
  }
}


var s01 = math.parse('(sin(x))^2');
var s02 = math.simplify(s01, [{ l: '(sin(n1))^c', r: 'sinpow(n1, c)' }]);
