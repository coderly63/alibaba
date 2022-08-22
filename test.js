var reverseWords = function (s) {
  return s.trim().replace(/\s+/gi, ' ').split(' ').reverse().join(' ')
};