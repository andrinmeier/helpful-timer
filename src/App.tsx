import {useEffect, useState} from "react";

let isStopped = false;

export default function Index() {
  const [audioUrl, setAudioUrl] = useState<string>("audio/5_minutes_remaining.mp3");

  useEffect(() => {
          async function doPlay() {
              console.log(audioUrl);
              const audio = new Audio(audioUrl);
              console.log("audio play");
              await audio.play();
          }
          doPlay();
      },
      [audioUrl]
  );


  const startPlay = async (counter: number) => {
      if (counter >= 1 && !isStopped) {
          console.log(counter);
          setAudioUrl(`audio/${(counter) * 5}_minutes_remaining.mp3`);
          setTimeout(() => startPlay(counter - 1), 5000 * 60);
      } else {
          console.log("DONE!");
      }
  }

  const stop = () => {
      isStopped = true;
  }

  return (
      <main className="min-h-screen bg-white sm:flex sm:items-center flex-col m-10 text-black">
        <h1 className={"text-7xl"}>Helpful Timer</h1>
        <div>
          <button onClick={() => startPlay(6)} className={"bg-green text-white pt-5 pb-5 pl-10 pr-10 rounded"}>Start</button>
          <button onClick={stop} className={"ml-5 bg-green text-white pt-5 pb-5 pl-10 pr-10 rounded"}>Stop</button>
        </div>
      </main>
  );
}