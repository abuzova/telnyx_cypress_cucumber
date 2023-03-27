class Pages{
    constructor(name) {
        this.speed = 0;
        this.name = name;
      }
      run(speed) {
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}.`);
      }
      stop() {
        this.speed = 0;
        alert(`${this.name} стоит неподвижно.`);
      }
}
