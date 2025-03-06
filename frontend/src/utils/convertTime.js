const convertTime = (time) => {
  // Check for valid input format
  if (typeof time !== "string" || !/^([01]?\d|2[0-3]):([0-5]\d)$/.test(time)) {
    return "Invalid Time"; // Return default value for invalid format
  }

  const [hourString, minuteString] = time.split(":");
  let hours = parseInt(hourString, 10);
  const minutes = parseInt(minuteString, 10);

  // Determine meridiem and convert hours for 12-hour format
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight

  return `${hours.toString().padStart(2, '0')}:${minuteString} ${meridiem}`;
};

export default convertTime;