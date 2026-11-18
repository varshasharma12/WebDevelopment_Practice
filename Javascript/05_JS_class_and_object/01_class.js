/*class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    showInfo(){
        console.log(this.name)
    }
}
class User extends Person{
    constructor(name.age){
        super(name,age)
    }
}
const user1=new User("varsha",20);

user1.showInfo() */

class BankAccount{
    #balance;
    constructor(startingAmount, accountHolder){
        this.accountHolder=accountHolder;
        this.#balance=startingAmount;
    }
    deposit(amount){
        this.#balance+=amount
    }
    getBalance(){
        console.log(`${this.accountHolder} has balance: ${this.#balance}`)
        return this.#balance
    }
}
const acc=new BankAccount(1000,"varsha")
acc.deposit(2000)
acc.getBalance()