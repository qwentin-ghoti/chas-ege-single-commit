(function() {
	retryWhileError(function() {
		'use strict';
		NAinfo.requireApiVersion(0, 2);
		let number = sl(4, 8);
		let startPoint = sl(1, 10);

		let points = [];
		let sqrtPoints = [];
		let sluch;
		let otstup = (47 / number).ceil();
		for (let i = 0; i < 4; i++) {
			points.push(slKrome(points, startPoint, startPoint + number - 1));
			let treal, tview;
			do {
				sluch = sl(1, 5).pm();
				if ((points[i] - startPoint + 1).pow(2) + sluch > 0) {
					treal = points[i].pow(2) + sluch;
					tview = ((points[i].pow(2) + sluch).sqrt() - startPoint + 1) * otstup;
					sqrtPoints.pushIf(treal, !sqrtPoints.includes(treal));

				} else {
					treal = points[i].pow(2) + sluch.abs();
					tview = ((points[i].pow(2) + sluch.abs()).sqrt() - startPoint + 1) * otstup;
					sqrtPoints.pushIf(treal, !sqrtPoints.includes(treal));
				}
			} while (sqrtPoints.length != i + 1);
			pointsViewSqrt.push([tview, 0]);
		}

		let allAnswers = [
			["$A$", "$B$", "$C$", "$D$"],
			['$' + sqrtPoints[0].texsqrt() + '$', '$' + sqrtPoints[1].texsqrt() + '$', '$' + sqrtPoints[2].texsqrt() + '$',
				'$' + sqrtPoints[3].texsqrt() + '$'
			]
		].shuffle();
		let numberOfAnsw = sl(0, 3);
		let answ = allAnswers[0][numberOfAnsw];
		allAnswers[0].splice(numberOfAnsw, 1);
		let wrAns = allAnswers[0];
		let paint1 = function(ct) {
			//Оси координат
			ct.translate(50, 50);
			ct.drawArrow(-20, 0, 490, 0);
			ct.scale(10, -10);
			//стрелочка
			ct.lineWidth = 0.1;
			//засечки
			for (let i = 0; i < 45; i += otstup)
				ct.drawLine(i, -1, i, 1);
			ct.translate(-otstup, 0);
			ct.fillStyle = "blue";
			graph9AmarkCircles(ct, pointsViewSqrt, 4, 0.4);
			//буквы и цифры
			ct.fillStyle = "blue";
			let absd = ["A", "B", "C", "D"];
			ct.font = "16px liberation_sans";
			ct.scale(1 / 10, -1 / 10);
			for (let i = 0; i < 4; i++)
				ct.fillText(absd[i], pointsViewSqrt[i][0] * 10, 1.7 * 10);
			let c = 0;
			ct.fillStyle = "black";
			for (let i = otstup; i < 45 + otstup; i += otstup) {
				ct.fillText((startPoint + c).toString(), i * 10 - 5, -1.2 * 10);
				c++;
			}
		};
		NAtask.setTask({
			text: 'Какое из чисел отмечено на координатной прямой точкой A?',
			answers: answ,
			wrongAnswers: wrAns,
		});
		AtoB(3);
		chas2.task.modifiers.addCanvasIllustration({
			width: 600,
			height: 100,
			paint: paint1,
		});
	});
})();
