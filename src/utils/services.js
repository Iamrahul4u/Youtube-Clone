function convertISO8601ToReadable(duration) {
  const match = duration.match(/PT(\d+M)?(\d+S)?/);

  const minutes = match[1] ? parseInt(match[1].replace("M", "")) : 0;
  const seconds = match[2] ? parseInt(match[2].replace("S", "")) : 0;

  const minutesString = minutes > 0 ? `${minutes}  ` : "0";
  const secondsString = seconds > 0 ? `${seconds}  ` : "";

  if (minutesString && secondsString) {
    return `${minutesString} : ${secondsString}`;
  } else {
    return minutesString || secondsString;
  }
}

const isoDuration = "PT2M44S";
const readableDuration = convertISO8601ToReadable(isoDuration);

export default convertISO8601ToReadable;
