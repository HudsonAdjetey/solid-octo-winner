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
