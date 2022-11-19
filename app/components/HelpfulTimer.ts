import {TimerUnit} from "~/components/TimerUnit";

export class HelpfulTimer {
    private timerQueue: TimerUnit[] = [];

    async start(numberOfTimerUnits: number, callback: (timerLength: number) => void): Promise<void> {
        this.timerQueue = [];
        const timerIntervalInMinutes = 5;
        for (let i = 0; i < numberOfTimerUnits; i++) {
            let isLast = false;
            if (i === numberOfTimerUnits - 1) {
                isLast = true;
            }
            const timerUnit = new TimerUnit((i + 1) * timerIntervalInMinutes);
            this.timerQueue.push(timerUnit);
        }
        await this.delay(60 * 5000);
        while (this.timerQueue.length > 0) {
            const nextUnit = this.timerQueue.shift()!;
            callback(nextUnit.timerLength);
            await this.delay(60 * 5000);
        }
    }

    private delay(ms: number): Promise<void> {
        return new Promise( resolve => setTimeout(resolve, ms));
    }
}