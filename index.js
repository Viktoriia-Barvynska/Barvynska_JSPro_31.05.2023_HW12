//=================HW12==================
/* Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.
Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
*/
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // змінна з рядком

// створення функції
const generateKey = (length, characters) => { // функція приймає параметр довжини та рядка
  const lgth = characters.length; // змінна, яка буде зберігати в собі довжину рядка
  let key = ''; // змінна, яка поки пуста, але до неї буде додаватись символ при кожній ітерації
  for (let i = 0; i < length; i++) { // запускається цикл
    const index = Math.floor(Math.random() * lgth); // в змінну index буде зберігатись обираний випадковий індекс 
    key += characters[index];
  }
  return key;
};
const key = generateKey(16, characters);
console.log(key);