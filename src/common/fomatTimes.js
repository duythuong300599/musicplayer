import propsTypes from "prop-types";

formatTimes.propTypes = {
  times: propsTypes.number,
};

export default function formatTimes(times) {
  // Hours, minutes and seconds
  var hrs = ~~(times / 3600);
  var mins = ~~((times % 3600) / 60);
  var secs = ~~times % 60;
  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  if (mins > 0 && mins < 10) {
    ret += "0" + mins + ":" + (secs < 10 ? "0" : "");
  } else {
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  }
  ret += "" + secs;
  return ret;
}
