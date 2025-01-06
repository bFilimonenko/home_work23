// #2

// Задача: Унікальні користувачі.
// Завдання: Реалізувати модуль на JavaScript у формі класу UniqueUsernames, який використовує Set для збереження
// унікальних імен користувачів. Клас має надавати можливість:
// Додавання імен користувачів: Метод addUser дозволяє додати нове ім'я до набору.
// Якщо ім'я вже існує, воно не буде додано повторно, зберігаючи унікальність імен у наборі.
// Перевірка наявності імені: Метод exists перевіряє, чи існує задане ім'я серед збережених унікальних імен.
// Отримання кількості унікальних імен: Метод count повертає кількість унікальних імен, збережених у наборі.

// Критерії перевірки:
// Наявність методів addUser, exists, count у класі UniqueUsernames.
// Використання конструкції class для створення класу UniqueUsernames.
// Застосування new Set() для внутрішнього сховища імен користувачів у конструкторі класу.

class UniqueUsernames {
  usernames;

  constructor() {
    this.usernames = new Set;
  }

  addUser(username) {
    return this.usernames.add(username);
  }

  exists(username) {
    return this.usernames.has(username);
  }

  count() {
    return this.usernames.size;
  }
}

// Демонстрація використання
const uniqueUsernames = new UniqueUsernames()
uniqueUsernames.addUser('john_doe')
uniqueUsernames.addUser('jane_doe')
uniqueUsernames.addUser('john_doe') // Ця дія не змінить набір, оскільки 'john_doe' вже існує

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`) // true
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`) // 2
