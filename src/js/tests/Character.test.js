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