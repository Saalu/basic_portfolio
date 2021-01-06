

function Client(name, balance) {
    this.name = name;
    this.balance = balance
}

Client.prototype.membership = function(){
    let name;

    if(this.balance > 1000) {
        name = 'Gold';
    }else if(this.balance > 500) {
        name = 'Platinum';
    }else {
        name = 'Normal';
    }

    return name;
    }

Client.prototype.clientInfo = function() {
        return `Name: ${this.name} , Balance ${this.balance},
         Membership: ${this.membership()}`
    }
Client.prototype.withdraw = function(amount) {
    this.balance -= amount;
}
Client.prototype.deposit = function(amount) {
    this.balance += amount
}

Client.prototype.getBalance = function() {
    return this.balance
}

const person = new Client('Saalu', 2000)


console.log(person)
console.log(person.withdraw(1000))

console.log('-------------')
console.log(person.getBalance())
console.log(person.clientInfo())


// Business
function Business(name, balance, phone, category) {
    Client.call(this, name, balance);
    this.phone = phone;
    this.category = category;

}
// inherit the prototype
 Business.prototype = Object.create(Client.prototype)

// Return the constructor as business
Business.prototype.constructor = Business;

Business.prototype.businessInfo = function() {
    return `Name: ${this.name} , Balance: ${this.balance},
     Membership: ${this.membership()},  Category: ${this.category}, Phone: ${this.phone}`
}




const business = new Business('Udemy', '30000450', 244594686, 'Education')

console.log(business)
console.log(business.businessInfo())





