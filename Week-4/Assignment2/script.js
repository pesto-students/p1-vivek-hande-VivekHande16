var Person = function() {}

/* Adds the initialize method on Person's prototype */
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

/* Function Teacher with teach method which logs output to console */
var Teacher = function() {
    this.teach = function (subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
}

/* Assigning the Teacher's prototype to Person function so that Teacher can inherit the properties of Person function*/
Teacher.prototype = new Person();


var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");    //Execute the teach method present in Teacher function. 


