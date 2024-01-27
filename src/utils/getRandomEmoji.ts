function getRandomEmoji(): string {
  const emojiRanges = [
    [0x1f601, 0x1f64f], // Emoticons
    [0x1f680, 0x1f6c0], // Transport & Map Symbols
    [0x1f300, 0x1f5ff], // Misc Symbols and Pictographs
    // You can add more ranges as needed
  ];

  const range = emojiRanges[Math.floor(Math.random() * emojiRanges.length)];
  const codePoint =
    Math.floor(Math.random() * (range[1] - range[0])) + range[0];

  return String.fromCodePoint(codePoint);
}

export default getRandomEmoji;
