class User {
    // Подсчет пользователей User
    static count: number = 0;
    
    private _name: string;
    private _login: string;
    private _password: string;
    
    // Конструктор
    constructor(name: string, login: string, password: string) {
        this._name = name;
        this._login = login;
        this._password = password;
        
        // Увеличиваем счетчик пользователей
        User.count++;
    }
    
    // Узнать имя
    get name(): string {
        return this._name;
    }
  
    // Изменить имя
    set name(value: string) {
        this._name = value;
    }
    
    // Узнать логин
    get login(): string {
        return this._login;
    }
    
    // Изменить пароль
    set password(value: string) {
        this._password = value;
    }
    
    // Вывод имени и логина
    showInfo(): void {
        console.log(`Пользователь: ${this._name}, Логин: ${this._login}`);
    }
}
