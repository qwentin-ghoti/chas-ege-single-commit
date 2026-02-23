/*

Гламурная выпускница Кандализа Изолентова собирается на дискотеку (свиданку, вписку, пьянку, ЕГЭ), и ей совершенно нечего надеть! Выбрав из того, что ей нечего надеть, несколько вещей, она разложила их на тёплом клетчатом пледе со стороной клетки 5 см. Свою любимую блузку она положила как можно дальше от кота (хоть он и спит); блузку и брюки, которые она надевала на предыдущее свидание, она положила друг под другом. Подарок её подруги на день рождения расположился непосредственно справа от брюк, купленных в магазине на распродаже, а две пары брюк, заказанных через интернет, лежат рядом.

Зная, что трикотаж на предыдущее свидание она не надевала и на распродаже не покупала, укажите, какой цифрой обозначены:

Любимая блузка
Подарок подруги
Брюки, купленные в магазине на распродаже
Трикотажные брюки

*/

/*

; . , а .

Зная, что трикотаж на предыдущее свидание она не надевала и на распродаже не покупала, укажите, какой цифрой обозначены:

Любимая блузка
Подарок подруги
Брюки, купленные в магазине на распродаже
Трикотажные брюки

*/


(function() {
	NAinfo.requireApiVersion(0, 2);

	let cellSide = sl(15,20);
	let event = sklonlxkand(["дискотека", "свидание", "прогулку", "экзамен"].iz());
	let previousEvent_ve = "предыдущ" + ["ий", "ую", "ее"][event.rod] + " " + event.ve;

	let whereBought = [
		["купленных в магазине на распродаже", "на распродаже не покупала"],
		["заказанных через интернет", "через интернет не заказывала"],
	].iz(2);
	let preamble0 =
		"Гламурная выпускница Кандализа Изолентова собирается на " + event.ve + ", и ей совершенно нечего надеть! " +
		"Выбрав из того, что ей нечего надеть, несколько вещей, " +
		"она разложила их на тёплом клетчатом пледе со стороной клетки " + cellSide + " см. "

	let leftOrRight = sl1();
	let topOrBottom = sl1();



	let puzzleParts = [
		"cвою любимую блузку она положила как можно дальше от кота (хоть он и спит)",
		["блузку", "брюки"].shuffleJoin(" и ") + ", которые она надевала на " + previousEvent_ve + ", она положила друг под другом",
		"подарок её подруги на " + ["день рождения", "новый год"].iz() + " расположился непосредственно " + ["справа", "слева"][leftOrRight] + " от брюк, " + whereBought[0][0],
		"две пары брюк, " + whereBought[1][0] + ", лежат рядом",
		"трикотаж на " + previousEvent_ve + " она не надевала и " + whereBought[1][1],
	].shuffle();

	let text1 = preamble0 + puzzleParts[0].toZagl() + "; " + puzzleParts[1] + ". " +
		puzzleParts[2].toZagl() + ", а " + puzzleParts[3] + ". " + "Зная, что " + puzzleParts[4] +
		", укажите, какой цифрой обозначены:"

	let puzzle1 = [
		["Любимая блузка",                                     topOrBottom,  leftOrRight?-1:1],
		["Брюки, " + whereBought[0][0].replace("ных", "ные"),  topOrBottom,  0], // Костыль!!
		["Подарок подруги",                                    topOrBottom,  leftOrRight?1:-1],
		["Трикотажные брюки",                                1-topOrBottom,  leftOrRight?-1:1],
	].shuffle();

	puzzle1 = puzzle1.map( (e) => [ e[0], 2 + 3 * e[1] + e[2] ] );

	let beltLength = sl(30,50).okrugldo(cellSide);

	let strText = text1;
	let strAnswers = puzzle1.T()[1].soed();

	let paint1 = function(ct) {
		let h = 400;
		ct.translate(h / 2, h / 2);

		//Меняем лево-право
		ct.scale([1,-1][leftOrRight], 1);
		var image = new Image();
		/*image.onload = function() {
			alert('0');
			ct.drawImage(image, 0, 0);
		};*/
		image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC";
		ct.drawImage(image, 100, 100);


		/*
		h = 300;
		//Оси координат
		graph9AdrawAxes_20_300(ct);
		ct.translate(-10, -10);
		//график
		ct.translate(h / 2, h / 2);
		ct.scale(1, -1);
		for (let i = -130; i < 130; i++)
			if (Math.abs(k * (i - 1) + b) < 110)
				ct.drawLine(i - 1, k * (i - 1) + b, i, k * i + b);
			//точки
		graph9AmarkCircles(ct, [X,Y].T(), 2);
		*/
	};
	NAtask.setTask({
		text: strText,
		answers: strAnswers,
		analys: "Длина ремня " + beltLength,
	});
	chas2.task.modifiers.addCanvasIllustration({
		width: 400,
		height: 400,
		paint: paint1,
	});
})();
//Самодельное
