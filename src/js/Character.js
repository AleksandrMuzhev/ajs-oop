export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
    }
    
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!allowedTypes.includes(type)) {
      throw new Error('Некорректный тип персонажа');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    
    this.attack = 0;
    this.defence = 0;
  }
  
  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
    
    this.level += 1;
    this.attack = Math.floor(this.attack * 1.2);
    this.defence = Math.floor(this.defence * 1.2);
    this.health = 100;
  }
  
  damage(points) {
    if (this.health <= 0) {
      return;
    }
    
    const damageTaken = points * (1 - this.defence / 100);
    this.health -= damageTaken;
    
    if (this.health < 0) {
      this.health = 0;
    }
  }
}