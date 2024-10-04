function solution(phone_number) {
  let numArr = [];
  for (let i = 0; i < phone_number.length - 4; i++) {
    numArr.push(phone_number.split("")[i].replace(/[0-9]/, "*"));
  }
  for (let i = phone_number.length - 4; i < phone_number.length; i++) {
    numArr.push(phone_number[i]);
  }
  return numArr.join("");
}
