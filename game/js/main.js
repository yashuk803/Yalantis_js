class Warior {

    constructor(name, health = 100, weapon) {
        this._name = name;
        this._health = health;
        this.weapon = weapon;
    }

    healthChange(attackValue) {

        if(attackValue > this._health) {
            return 0;
        }
        if(attackValue === 0) {
            return `${this._name} dodged`;
        }
        if(attackValue > 0) {
            this._health = this.health - attackValue;
            return `${this._name} lost health -- ${this._health}`;
        }
    }

    attacked() {
        this.power = Math.floor(Math.random() * 11);
        return this;
    }

    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
}

class Monster extends Warior {
    constructor(name, health, weapon) {
        super(name, health, weapon);
    }
}

class Gladiator extends Warior {
    constructor(name, health, weapon) {
        super(name, health, weapon);
    }
}

class Game {
    constructor(player1, player2) {
        this._player1 = player1;
        this._player2 = player2;
    }
    start() {
        do {
            this.attacking = this._player1.attacked();
            console.log(this.__message(this.attacking));
            this.healthChange = this._player2.healthChange(this.attacking.power);

            if (this.healthChange === 0) return;

            this.attacking = this._player2.attacked();
            console.log(this.__message(this.attacking));
            this.healthChange = this._player1.healthChange(this.attacking.power);

        } while (this.healthChange !== 0);
    }
    winner() {
        return `Won -- ${this.attacking.name}`
    }
    __message(player) {
        return `Attacked ${player.name} -- ${player.health}`
    }
}

const gladiator = new Gladiator('Gladiator', 100, 'Sword');
const monster = new Monster('Monster', 100, 'Archery');

const game = new Game(gladiator, monster);

game.start();
console.log(game.winner()); //Won -- Gladiator
