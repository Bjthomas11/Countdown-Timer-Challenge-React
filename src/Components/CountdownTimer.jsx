import FlipCountdown from "@rumess/react-flip-countdown";

const CountdownTimer = () => {
  return (
    <FlipCountdown
      endAt={"2022-12-12 01:26:58"} // Date/Time
      hideYear
      hideMonth
      dayTitle="Days"
      hourTitle="Hours"
      minuteTitle="Minutes"
      secondTitle="Seconds"
      titlePosition="bottom"
      theme="dark"
    />
  );
};

export default CountdownTimer;
