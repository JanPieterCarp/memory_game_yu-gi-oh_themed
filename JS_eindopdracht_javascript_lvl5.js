
const kaarten = document.querySelectorAll('.memorykaart');
// zet alle kaarten in een array

let kaartgeflipped = false;
let vergrendel = false;
let kaart1, kaart2;
// variabellen

function flipkaart() {
	if (vergrendel) return;
		
	if (this === kaart1) return;
		// als this gelijk en van hetzelfde type als kaart1 is ga door

	this.classList.add('flip');

	if (!kaartgeflipped) {
		kaartgeflipped = true;
		kaart1 = this;
		return; 
  }

	kaart2 = this;
	checkset();
	//als kaart2 
}

function checkset() {
	let isMatch = kaart1.dataset.framework === kaart2.dataset.framework;
	//geeft de waarde van isMatch aan de hand of de dataset framework van de kaarten gelijk en van hetzelfde type is.

	isMatch ? vergrendelkaart() : flipterug();
	//checkt of isMatch true of false is als isMatch true is voert hij disableCards() uit. zoniet dan voert hij  unflipCards(); uit.
  }
  
function vergrendelkaart() {
	kaart1.removeEventListener('click', flipkaart);
	kaart2.removeEventListener('click', flipkaart);
	//als kaarten matchen bevriez ze.

	resetvariabellen();
  }


function flipterug() {
	vergrendel = true;
  
	setTimeout(() => {
		kaart1.classList.remove('flip');
		kaart2.classList.remove('flip');
		// draait kaarten om naar de achterkant over een periode van 2 secondes			

		resetvariabellen();
		}, 2000);
	}


function resetvariabellen() {
	[kaartgeflipped, vergrendel] = [false, false];
	[kaart1, kaart2] = [null, null];
		//maakt statements weer false en variabelen leeg voor een nieuwe poging

  }


(function shuffle() {
	kaarten.forEach(kaart => {
		let randomPos = Math.floor(Math.random() * 16);
		kaart.style.order = randomPos;
		// geeft iedere kaart een aparte positie door middel van een random.
	});
  })();


kaarten.forEach(kaart => kaart.addEventListener('click', flipkaart));


// function resetgame(){
// 	[kaartgeflipped, vergrendel] = [false, false];
// 	[kaart1, kaart2] = [null, null];
// 	[kaarten]=[null];
// }




