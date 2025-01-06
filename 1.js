// #1

// Задача: Калькулятор калорійності продуктів через клас.
// Завдання: Розробити модуль на JavaScript, який імплементує клас CalorieCalculator. Клас має використовувати Map для
// управління даними про калорійність продуктів. Необхідно реалізувати наступні функціональності:
// Додавання продуктів: Метод addProduct приймає назву продукту та його калорійність, додаючи їх до колекції.
// Отримання калорійності продукту: Метод getProductCalories повертає калорійність продукту за його назвою.
// Якщо продукт не знайдено, повертає рядок 'Product not found'.
// Видалення продукту: Метод removeProduct видаляє продукт з колекції за назвою.

// Критерії перевірки:
// Клас CalorieCalculator має бути реалізований з використанням ключового слова class.
// Внутрішнє сховище продуктів має бути реалізоване за допомогою new Map().
// Наявність методів addProduct, getProductCalories, та removeProduct.

class CalorieCalculator {
  #productCalories;

  constructor() {
    this.#productCalories = new Map();
  }

  addProduct(product, calories) {
    return this.#productCalories.set(product, calories);
  }

  getProductCalories(productName) {
    return this.#productCalories.get(productName) || "Product not found";
  }

  removeProduct(productName) {
    return this.#productCalories.delete(productName);
  }
}

// Демонстрація використання
const calorieCalculator = new CalorieCalculator();
calorieCalculator.addProduct("Apple", 52);
calorieCalculator.addProduct("Banana", 89);

console.log(calorieCalculator.getProductCalories("Apple")); // 52
console.log(calorieCalculator.getProductCalories("Banana")); // 89

calorieCalculator.removeProduct("Apple");
console.log(calorieCalculator.getProductCalories("Apple")); // Product not found
