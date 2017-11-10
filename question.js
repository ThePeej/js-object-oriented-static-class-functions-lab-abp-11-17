'use strict';

class Question {

  static All() {
    return this._All
  }

  save(){
    this.constructor._All.push(this)
  }

  constructor(question) {
    this.content = question;
    this.save();
  }

  static find(i){
    console.log(this._All);
    debugger;
    return this._All[i-1];
  }

}

Question._All = [];
