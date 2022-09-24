import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress";
import dayjs from "dayjs";
import useTimer from "../../common/hooks/use-timer";
import Layout from "../../common/layout";
import { Box, Flex } from "@chakra-ui/react";

const Timer = () => {
  const time = useTimer();

  return (
    <Layout>
      <Flex
        w={"100vw"}
        h={"100vh"}
        dir="column"
        justify="center"
        align="center"
      >
        <CircularProgress
          value={time.progress}
          color="green.400"
          size="350px"
          fontSize="15rem"
        >
          <CircularProgressLabel>
            {Number(time.hours) >= 1 ? `${time.hours}:` : ""} {time.minutes}:
            {time.seconds}
          </CircularProgressLabel>
        </CircularProgress>
      </Flex>
    </Layout>
  );
};

export default Timer;
