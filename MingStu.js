import Student from './Student'

export default class MingStu extends Student{
    constructor(){
        super('Ming','man',20)
    }
    getDescription() {
        return '哈哈' + super.getDescription();
    }
}