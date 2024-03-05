class PokemonBattle {
    constructor(name, hp, attackPower) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
        
        
        
    }

    attack(target) {
        const damage = Math.floor(Math.random() * this.attackPower) + 1;
        target.hp -= damage;
        console.log(`${this.name} tackles ${target.name} for ${damage} damage!`);
    }

    isFainted() {
        return this.hp <= 0;
    }
}   

function letBattle() {
    let bulbasaur = new PokemonBattle ('Bulbasaur', 500, 90);
    let squirtle = new PokemonBattle ('Squirtle', 500, 90);

    console.log('The Battle Begins!');
    console.log(`${bulbasaur.name} vs ${squirtle.name}`);

    while (!bulbasaur.isFainted() && !squirtle.isFainted()) {
        bulbasaur.attack(squirtle);
        if (squirtle.isFainted()) {
            console.log(`${squirtle.name} fainted! ${bulbasaur.name} wins!`);
            return;
        }

        squirtle.attack(bulbasaur);
        if (bulbasaur.isFainted()) {
            console.log(`${bulbasaur.name} fainted! ${squirtle.name} wins!`);
            return;
        }
     }
}

letBattle(); 

        console.log('The Battle Ended!'); 
        console.log('Good Game!!! ');

        


    