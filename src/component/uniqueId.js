/**
 * Generate a unique id for use with map as keys or any other purpose.
 * @param {number} length The length of the unique id
 * @returns string
 */
function uniqueId(length = 20) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default uniqueId;
