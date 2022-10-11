import useTimer from "@hooks/use-timer";

const Timer = () => {
  const { format, progress } = useTimer({ minutes: 25 });

  return (
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="sm:text-center text-xl">{format}</h2>
      <div className="mx-auto">
        <div className="bg-green-500 h-5" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default Timer;
