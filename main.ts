import { User } from './User';
import { SuperUser } from './SuperUser';

const user1 = new User('Paul McCartney', 'paul', '1234');
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

// Проверка
const user1 = new User('Paul McCartney', 'paul', '1234');
const user2 = new User('George Harrison', 'george', '5678');
const user3 = new User('Richard Starkey', 'ringo', '8523');
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

user1.showInfo(); // Пользователь: Paul McCartney, Логин: paul
admin.showInfo(); // Супер-пользователь: John Lennon, Логин: john, Роль: admin

// Проверка счетчиков
console.log(`Всего создано пользователей: ${User.count}`); // 4
console.log(`Всего создано супер-пользователей: ${SuperUser.count}`); // 1

// Проверка доступности свойств
console.log(user1.name); // Paul McCartney - можно прочитать
user1.name = 'Paul'; // можно изменить
console.log(user1.name); // Paul

console.log(user1.login); // paul - можно прочитать
// user1.login = 'newlogin'; // Ошибка! Нельзя изменить

// user1.password - нельзя прочитать, но можно изменить
user1.password = 'newpassword'; // работает
// console.log(user1.password); // Ошибка! Свойство password приватное

// Проверка работы с ролью
console.log(admin.role); // admin - можно прочитать
admin.role = 'superadmin'; // можно изменить
console.log(admin.role); // superadmin
