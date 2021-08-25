class Person{
    get fullName(){
        return this._fullName;
    }
    set fullName(value){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}([\\s]?[A-Za-z]{2,})*$");
    if (nameRegex.test(value)) 
        this._fullName=value;
    else 
        throw "Invalid Name";
    
    }
    get phone(){
        return this._phone;
    }
    set phone(value){
        let phoneRegex = RegExp("^[0-9]{1,2}[ ][0-9]{10}$");
        if(phoneRegex.test(value))
            this._phone = value;
        else
            throw 'Invalid Phone Number';
    }
    get address(){
        return this._address;
    }
    set address(value){
        this._address = value;
    }
    get City(){
        return this._City;
    }
    set City(value){
        this._City = value;
    }
    get State(){
        return this._State;
    }
    set State(value){ 
        this._State = value;
    }
    get zip(){
        return this._zip;
    }
    set zip(value){
        let zipRegex = RegExp("^[1-9][0-9]{2}\\s?[0-9]{3}$");
        if(zipRegex.test(value))
            this._zip = value;
        else
            throw 'Invalid ZipCode';
    }

    toString(){
        return "Full Name : "+this.fullName+" Phone Number : "+this.phone+
        " Address : "+this.address+" City : "+this.City+" State : "+this.State+
        " Zip : "+this.zip;
    }
}