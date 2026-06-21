class SuperUser extends User {
    // Подсчет суперпользователей
    static count: number = 0;
    
    // Роль
    private _role: string;
    
    // Конструктор
    constructor(name: string, login: string, password: string, role: string) {
        super(name, login, password);
        this._role = role;
        
        // Увеличиваем счетчик суперпользователей
        SuperUser.count++;
    }
    
    // Узнать роль
    get role(): string {
        return this._role;
    }

    // Изменить роль
    set role(value: string) {
        this._role = value;
    }
    
    // Вывод имени и логина
    showInfo(): void {
        console.log(`Супер-пользователь: ${this.name}, Логин: ${this.login}, Роль: ${this._role}`);
    }
}
