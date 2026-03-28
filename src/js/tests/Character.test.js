import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

describe('Character class', () => {
  test('should create character with valid name and type', () => {
    const character = new Character('Hero', 'Bowman');
    expect(character.name).toBe('Hero');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });
  
  test('should throw error if name is too short', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });
  
  test('should throw error if name is too long', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });
  
  test('should throw error if type is invalid', () => {
    expect(() => new Character('Hero', 'InvalidType')).toThrow('Некорректный тип персонажа');
  });
});

describe('Bowman class', () => {
  test('should create Bowman with correct stats', () => {
    const bowman = new Bowman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
  });
});

describe('Swordsman class', () => {
  test('should create Swordsman with correct stats', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.name).toBe('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
  });
});

describe('Magician class', () => {
  test('should create Magician with correct stats', () => {
    const magician = new Magician('Gandalf');
    expect(magician.name).toBe('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
  });
});

describe('Daemon class', () => {
  test('should create Daemon with correct stats', () => {
    const daemon = new Daemon('Azazel');
    expect(daemon.name).toBe('Azazel');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
  });
});

describe('Undead class', () => {
  test('should create Undead with correct stats', () => {
    const undead = new Undead('Ghoul');
    expect(undead.name).toBe('Ghoul');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
  });
});

describe('Zombie class', () => {
  test('should create Zombie with correct stats', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
  });
});

describe('Character methods', () => {
  describe('levelUp', () => {
    test('should increase level, attack, defence and restore health', () => {
      const character = new Bowman('Robin');
      character.health = 50;
      character.levelUp();
      
      expect(character.level).toBe(2);
      expect(character.attack).toBe(30); // 25 * 1.2 = 30
      expect(character.defence).toBe(30); // 25 * 1.2 = 30
      expect(character.health).toBe(100);
    });
    
    test('should throw error if health is 0', () => {
      const character = new Bowman('Robin');
      character.health = 0;
      
      expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
    
    test('should throw error if health is negative', () => {
      const character = new Bowman('Robin');
      character.health = -10;
      
      expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });
    
    test('should correctly calculate stats for Swordsman', () => {
      const swordsman = new Swordsman('Arthur');
      swordsman.health = 75;
      swordsman.levelUp();
      
      expect(swordsman.level).toBe(2);
      expect(swordsman.attack).toBe(48); // 40 * 1.2 = 48
      expect(swordsman.defence).toBe(12); // 10 * 1.2 = 12
      expect(swordsman.health).toBe(100);
    });
    
    test('should correctly calculate stats for Magician', () => {
      const magician = new Magician('Gandalf');
      magician.health = 30;
      magician.levelUp();
      
      expect(magician.level).toBe(2);
      expect(magician.attack).toBe(12); // 10 * 1.2 = 12
      expect(magician.defence).toBe(48); // 40 * 1.2 = 48
      expect(magician.health).toBe(100);
    });
  });
  
  describe('damage', () => {
    test('should reduce health correctly', () => {
      const character = new Bowman('Robin');
      character.damage(50);
      
      // health -= 50 * (1 - 25/100) = 50 * 0.75 = 37.5
      expect(character.health).toBe(62.5);
    });
    
    test('should not reduce health below 0', () => {
      const character = new Bowman('Robin');
      character.damage(200);
      
      expect(character.health).toBe(0);
    });
    
    test('should not apply damage if health is already 0', () => {
      const character = new Bowman('Robin');
      character.health = 0;
      character.damage(50);
      
      expect(character.health).toBe(0);
    });
    
    test('should calculate damage correctly for Swordsman', () => {
      const swordsman = new Swordsman('Arthur');
      swordsman.damage(100);
      
      // health -= 100 * (1 - 10/100) = 100 * 0.9 = 90
      expect(swordsman.health).toBe(10);
    });
    
    test('should calculate damage correctly for Magician with high defence', () => {
      const magician = new Magician('Gandalf');
      magician.damage(100);
      
      // health -= 100 * (1 - 40/100) = 100 * 0.6 = 60
      expect(magician.health).toBe(40);
    });
    
    test('should handle multiple damage applications', () => {
      const character = new Bowman('Robin');
      character.damage(30);
      character.damage(30);
      
      // Первый удар: 100 - 22.5 = 77.5
      // Второй удар: 77.5 - 22.5 = 55
      expect(character.health).toBe(55);
    });
  });
});