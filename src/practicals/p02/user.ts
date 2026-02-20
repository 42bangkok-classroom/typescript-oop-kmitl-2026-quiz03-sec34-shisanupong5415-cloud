export class User {
    firstname: string;
    lastname: string
    private _age: number = 0;
    static BIRTH_YEAR: number ;

    constructor(firstname: string , lastname: string , age: number ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set setFirstname(firstname: string) {
        this.firstname = firstname;
    }

    get getFirstname(): string {
        return this.firstname;
    }

    set setLastname(lastname: string) {
        this.lastname = lastname;
    }

    get getLastname(): string {
        return this.lastname;
    }

    set setAge(age: number) {
        this._age = age;
    }

    get getAge(): number {
        return this._age;
    }

    get FullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
}