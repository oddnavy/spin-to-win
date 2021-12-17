import { useAnimation, motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const controls = useAnimation();

  const radius = 5;
  const circumference = 2 * Math.PI * radius;
  const segmentPercent = 100 / 6 / 100;
  const segmentSize = circumference * segmentPercent;
  const strokeDasharray = `${segmentSize} ${circumference}`;

  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col justify-center items-center">
      <Head>
        <title>Spin-to-Win</title>
      </Head>

      <div className="relative -mb-4 mx-auto w-6">
        <motion.svg
          viewBox="0 0 50 50"
          animate={controls}
          variants={{
            start: {
              rotate: [
                0, -10, 0, 10, 0, -10, 0, 10, 0, -10, 0, 10, 0, -10, 0, 10, 0,
              ],
              transition: {
                ease: "easeInOut",
                duration: 1.4,
                delay: 1.6,
              },
            },
            spin: {
              rotate: [0, -10, 0, 10, 0],
              transition: {
                ease: "easeInOut",
                repeat: Infinity,
                duration: 0.3,
              },
            },
            major: {
              rotate: [0, -10, 0, 10, 0],
              transition: {
                ease: "easeInOut",
                repeat: 3,
                duration: 1,
              },
            },
            minor: {
              rotate: [0, -10, 0, 10, 0],
              transition: {
                ease: "easeInOut",
                repeat: 3,
                duration: 1,
              },
            },
            lose: {
              rotate: [0, -10, 0, 10, 0],
              transition: {
                ease: "easeInOut",
                repeat: 3,
                duration: 1,
              },
            },
          }}
          style={{ originX: "top", originY: "50%" }}
        >
          <motion.polygon points="0,0 25,50 50,0"></motion.polygon>
        </motion.svg>
      </div>
      <motion.svg className="w-[50vw] max-h-[50vh]" viewBox="0 0 20 20">
        <motion.g
          initial="initial"
          animate={controls}
          style={{ originX: "50%", originY: "50%" }}
          variants={{
            initial: {
              rotate: 0,
            },
            start: {
              rotate: [0, 360],
              transition: {
                duration: 3,
                ease: "backIn",
              },
            },
            spin: {
              rotate: [0, 360],
              transition: {
                repeat: Infinity,
                duration: 0.9,
                type: "tween",
                ease: "linear",
                bounce: 1,
              },
            },
            major: {
              rotate: 360 * 3,
              transition: {
                duration: 4,
                ease: "easeOut",
              },
            },
            minor: {
              rotate: 360 * 3 + 120,
              transition: {
                duration: 4,
                ease: "easeOut",
              },
            },
            lose: {
              rotate: 360 * 3 + 60,
              transition: {
                duration: 4,
                ease: "easeOut",
              },
            },
          }}
        >
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="white"
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
          />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="#faf7f0"
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={segmentSize * 2}
          />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="#fff"
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={segmentSize * 3}
          />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="#faf7f0"
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={segmentSize * 4}
          />

          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="#fff"
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={segmentSize * 5}
          />
          <circle
            r="5"
            cx="10"
            cy="10"
            fill="transparent"
            stroke="#faf7f0"
            strokeWidth="10"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={segmentSize * 6}
          />
          <text x="9.2" y="2" fontSize="1.5px">
            🥇
          </text>
          <text x="9.5" y="19" fontSize="1.5px">
            🥇
          </text>
          <text x="2" y="15" fontSize="1.5px">
            🥈
          </text>
          <text x="16.5" y="6.5" fontSize="1.5px">
            🥈
          </text>
          <text x="2" y="6" fontSize="1px">
            ❌
          </text>
          <text x="17" y="14" fontSize="1px">
            ❌
          </text>
        </motion.g>
      </motion.svg>

      <div className="flex items-center justify-center mt-12 gap-x-3">
        <button
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          onClick={async () => {
            await controls.start("start");
            await controls.start("spin");
          }}
        >
          <span className="mr-3">💫</span> Spin
        </button>
        <div className="mx-6">→</div>
        <button
          className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          onClick={() => {
            controls.start("major");
          }}
        >
          Win Major
        </button>
        <button
          className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => {
            controls.start("minor");
          }}
        >
          Win Minor
        </button>
        <button
          className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
          onClick={() => {
            controls.start("lose");
          }}
        >
          Lose
        </button>
      </div>
    </div>
  );
}
