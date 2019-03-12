/* eslint-disable*/

var x = new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame() {f
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      const damageDelt = this.calculateDamage(3, 10);
      this.monsterHealth -= damageDelt
      this.createLog(true, damageDelt)
      if(this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack() {
      const damageDelt = this.calculateDamage(10, 20);
      this.monsterHealth -= damageDelt
      this.createLog(true, damageDelt)
      if(this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    heal() {
      this.playerHealth += 10;
      if(this.playerHealth >= 100) this.playerHealth = 100;
      this.createLog(true, 10, true)
      this.monsterAttack();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    monsterAttack() {
      const damageDelt = this.calculateDamage(5, 12);
      this.playerHealth -= damageDelt;
      this.createLog(false, damageDelt)
      this.checkWin();
    },
    calculateDamage(min, max) {
      return Math.max(Math.ceil(Math.random() * max) + 1, min)
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if(confirm('You Won! Play again?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false;
        }
        return true
      } else if (this.playerHealth <= 0) {
        if(confirm('You Lost! Play again?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    createLog(isPlayer, damageDelt, heal) {
      if(isPlayer) {
        if(heal) {
          this.turns.unshift({
            isPlayer: true,
            text: `Player heals for 10 damage!`
          })
        } else {
          this.turns.unshift({
            isPlayer: true,
            text: `Player hits monster for ${damageDelt} damage!`
          })
        }
      } else {
        this.turns.unshift({
          isPlayer: false,
          text: `Monster hits player for ${damageDelt} damage!`
        })
      }
    }
  }
});


console.log(x)