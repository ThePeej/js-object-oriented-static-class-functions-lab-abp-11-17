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

}

Question._All = [];
