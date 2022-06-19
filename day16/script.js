function Weapon(type, damage, speed) {
  this.type = type;
  this.damage = damage;
  this.speed = speed;
}

function Character(name, level, weapon) {
  this.name = name;
  this.level = level;
  this.weapon = weapon;
}

Character.prototype.attack = function (character) {
  console.log(`${this.name} attack ${character.name}`);
};

Character.prototype.changeWeapon = function (weapon) {
  this.weapon = weapon;
  console.log(this);
};

let knife1 = new Weapon("knife", 100, 50);
let knife2 = new Weapon("knife", 90, 30);

let Hung1 = new Character("Hung1", 1, knife1);
let Hung2 = new Character("Hung2", 1, knife2);

Hung1.attack(Hung2);
Hung2.changeWeapon(knife1);
