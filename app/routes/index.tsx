import {useAudio} from "~/components/useAudio";
import {useState} from "react";
import {HelpfulTimer} from "~/components/HelpfulTimer";

const timer = new HelpfulTimer();

export default function Index() {
    const [audioUrl, setAudioUrl] = useState<string>("");
    const [playing, start, stop] = useAudio(audioUrl);
    const play: any = start;
    const stopPlay: any = stop;
    const [audio, setAudio] = useState(null)

    const timerUnitExpired = (timerLength: number) => {
        setAudioUrl(`/audio/${timerLength}_minutes_remaining.mp3`);
        stopPlay();
        play();
    }

    const startPlay = async () => {
        await timer.start(6, timerUnitExpired);
    }

    return (
        <main className="min-h-screen bg-white sm:flex sm:items-center flex-col m-10 text-black">
            <h1 className={"text-7xl"}>Helpful Timer</h1>
            <div>
                <button onClick={startPlay} className={"bg-green text-white pt-5 pb-5 pl-10 pr-10 rounded"}>Start</button>
                <button onClick={stopPlay} className={"ml-5 bg-green text-white pt-5 pb-5 pl-10 pr-10 rounded"}>Stop</button>
            </div>
        </main>
    );
}
