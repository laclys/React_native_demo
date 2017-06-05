export default class Student {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    getDescription() {
        return 'name:'+this.name+'sex:'+this.sex+'age:'+this.age;
    }
}