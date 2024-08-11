function maxUniqSequence(s) {
  let maxLen = 0;
  let start = 0;
  let end = 0;
  const lastSeen = {};

  while (end < s.length) {
    const char = s[end];
    if (lastSeen[char] !== undefined) {
      start = Math.max(start, lastSeen[char] + 1);
    }
    lastSeen[char] = end;
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }

  return maxLen;
}

console.log(maxUniqSequence('abcdabcde')); // Output: 5
