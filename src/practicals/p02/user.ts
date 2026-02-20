export class User {
    firstname: string;
    lastname: string
    private _age: number = 0;
    static BIRTH_YEAR: number = 2000;

    constructor( ) {
        this.firstname = "";
        this.lastname = "";
        this._age = 0;
    }

    setFirstname(firstname: string) {
        this.firstname = firstname;
    }

    setLastname(lastname: string) {
        this.lastname = lastname;
    }

    setAge(age: number) {
        this._age = age;
    }

    getAge(): number {
        return this._age;
    }

    getFullName(): string {
        return `${this.firstname}${this.lastname}`;
    }
}