class Subject {
  constructor() {
    this.observers = [];
  }
  subcriber(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => {
      return observer(data);
    });
  }
}

/**
 * observer
 * @param (string: data)
 * @private
 */

const observer1 = (data) => {
  console.log(`Observer 1 received ${data}`);
};

const observer2 = (data) => {
  console.log(`Observer 2 received ${data}`);
};

const subject = new Subject();
subject.subcriber(observer1);
subject.subcriber(observer2);

subject.notify("Hello Observers");
