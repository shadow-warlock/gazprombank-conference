export default class Timer {
    constructor() {
        this.time = 0;
        this.onEnd = () => {};
        this.onTick = () => {};
        this.tick = this.tick.bind(this);
        this.start = this.start.bind(this);
        this.handleTick = this.handleTick.bind(this);
    }

    handleTick(onTick) {
        this.onTick = onTick;
    }

    start(onEnd, time) {
        this.time = time;
        this.onEnd = onEnd;
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(this.tick, 1000);
    }

    tick() {
        let newTime = this.time - 1;
        if (newTime < 0) {
            this.onTick(null);
            this.onEnd();
            clearInterval(this.interval);
        } else {
            this.time = newTime;
            this.onTick(newTime);
        }
    }
}
