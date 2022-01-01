class Game {



    constructor() {

        let gameSpace = document.getElementById('gameSpace');
        let pairsToBeGuessed = document.getElementById('pairsToBeGuessed');
        let pairsAlreadyGuessed = document.getElementById('pairsAlreadyGuessed');
        let counter = 9;
        pairsToBeGuessed.textContent = counter
        pairsAlreadyGuessed.textContent = 0;

        let colors = ['red', 'blue', 'green', 'black', 'yellow', 'violet', 'gray', 'orange', 'brown',
            'red', 'blue', 'green', 'black', 'yellow', 'violet', 'gray', 'orange', 'brown'
        ];

        let divs = [...document.getElementsByClassName('color')];
        let checkIfColorsMatch = [];
        
        this.cardReval = function (e) {
            if (e.target.classList.contains('hidden')) {
                e.target.classList.toggle('hidden');

                if (checkIfColorsMatch.length <= 1) {
                    checkIfColorsMatch.push(e.target.classList[1]);
                    

                    if (checkIfColorsMatch[0] === checkIfColorsMatch[1]) {
                        
                        
                        for (let item of divs) {
                            if (item.classList.contains(checkIfColorsMatch[0])) {
                                item.classList.remove(checkIfColorsMatch[0]);
                                item.classList.add('guessed');
                                item.textContent = 'GUESSED';
                                checkIfColorsMatch.splice(0, 1);
                               
                            }
                        }
                        counter--;
                        pairsToBeGuessed.textContent = counter;
                        pairsAlreadyGuessed.textContent++;
                        if (counter <= 0) {
                            alert('You have won the game');
                        }
                        
                        
                    }
                    if (checkIfColorsMatch[0] !== checkIfColorsMatch[1]) {

                        setTimeout(function (e) {
                            for (let item of divs) {
                                if (!item.classList.contains('hidden')) {
                                    item.classList.toggle('hidden');
                                }
                                checkIfColorsMatch.splice(0, 1);
                            }
                        }, 2000);
                    }
                } else {    
                    e.target.classList.add('hidden');

                }
            }
        }

        this.pickColor = function () {
            let index = Math.floor(Math.random() * colors.length);
            return index;
        }

        this.addColorToDiv = function () {
            for (let item of divs) {
                let index = this.pickColor();
                item.classList.add(colors[index]);

                colors.splice(index, 1);
            }
        }

        this.hideColors = function () {

            for (let item of divs) {

                item.classList.add('hidden');

            }
        }

        this.start = function () {

            this.addColorToDiv();
            setTimeout(this.hideColors, 4000);
            

            for (let item of divs) {
                item.addEventListener('click', this.cardReval);
            }
        }
    }
}

let startButton = document.getElementById('start');


let game = new Game();    

startButton.addEventListener('click', function () {
    
    
    game.start();
    
})












