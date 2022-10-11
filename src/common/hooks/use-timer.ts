import { useState, useEffect, useRef } from "react";

export interface TimeType {
  hours?: number | string;
  minutes?: number | string;
  seconds?: number | string;
}

const setNumerical = (val: number | string | undefined = 0) => {
  if (typeof val === "string") {
    return Number(val);
  }

  return val;
};

const addZero = (val: number | string = 0) => {
  return setNumerical(val) < 10 ? `0${val}` : val.toString();
};

const format = (time: TimeType) => {
  const { hours, minutes, seconds } = time;

  return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
};

const convertToSecond = (time: string) => {
  let parts = time.split(":");

  return (
    setNumerical(parts[0]) * 3600 +
    setNumerical(parts[1]) * 60 +
    setNumerical(parts[2])
  );
};

const calcProgress = (initialTime: TimeType, currentTime: TimeType) => {
  const convertedCurrentTime = convertToSecond(format(currentTime));
  const convertedInitialTime = convertToSecond(format(initialTime));

  return (100 * convertedCurrentTime) / convertedInitialTime;
};

const useTimer = (props?: TimeType) => {
  const { hours = 0, minutes = 0, seconds = 0 } = props || {};

  if (hours < 0 || minutes < 0 || seconds < 0) {
    return {
      hours: hours > 0 ? hours : addZero(0),
      minutes: minutes > 0 ? minutes : addZero(0),
      seconds: seconds > 0 ? seconds : addZero(0),
      progress: 0,
    };
  }

  const interval = useRef<NodeJS.Timer | null>(null);
  const initial = useRef<TimeType>({ hours, minutes, seconds });
  const [time, setTime] = useState<TimeType>({
    hours,
    minutes,
    seconds,
  });
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    let h = setNumerical(time.hours);
    let m = setNumerical(time.minutes);
    let s = setNumerical(time.seconds);

    interval.current = setInterval(() => countDown(h, m, s), 1000);

    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [time]);

  const countDown = (h: number, m: number, s: number) => {
    if (h === 0 && m === 0 && s === 0) {
      return;
    }

    --s;

    if (s < 0) {
      s = 59;
      --m;
    }

    if (m < 0) {
      m = 59;
      --h;
    }

    const result = {
      hours: h,
      minutes: m,
      seconds: s,
    };

    setTime(result);

    setProgress(calcProgress(initial.current, result));
  };

  return {
    hours: addZero(time.hours),
    minutes: addZero(time.minutes),
    seconds: addZero(time.seconds),
    format: `${Number(time.hours) >= 1 ? addZero(time.hours) + ':' : ""} ${addZero(time.minutes)}:
    ${addZero(time.seconds)}`,  
    progress,
  };
};

export default useTimer;
