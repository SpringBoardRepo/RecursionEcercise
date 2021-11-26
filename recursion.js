/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {

  if (index === nums.length) {
    return 1;
  }
  let result = nums[index] * product(nums, index + 1);
  return result;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestSoFar = 0) {

  if (index === words.length) return longestSoFar;

  let longestString = Math.max(words[index].length, longestSoFar);
  return longest(words, index + 1, longestString);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0, newStr = "") {
  if (index >= str.length) return newStr;
  newStr = newStr + str[index];

  return everyOther(str, index + 2, newStr);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  let left = index;
  let right = str.length - index - 1;

  if (left >= right) return true;
  if (str[left] !== str[right]) {
    return false;
  }
  return isPalindrome(str, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {

  if (index >= arr.length - 1) return - 1;

  if (arr[index] === val) return index;

  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, newStr = "") {

  if (str.length == newStr.length) return newStr;
  newStr = newStr + str[str.length - index - 1];
  return revString(str, index + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

  let stringArray = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArray.push(obj[key]);
    if (typeof obj[key] === "object") stringArray.push(...gatherStrings(obj[key]));
  }
  return stringArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {

  if (left > right) {
    return -1;
  }

  let middleIndex = Math.floor((left + right) / 2);

  if (arr[middleIndex] === val) {
    return middleIndex;
  }
  else if (arr[middleIndex] > val) {
    return binarySearch(arr, val, left, middleIndex - 1);
  }
  return binarySearch(arr, val, middleIndex + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
