/*
 * @Author: 32237384@qq.com
 * @Date: 2026-01-22 10:24:16
 * @FilePath: \lottery\public\config.js
 * @Description:配置
 */
let lotteryCodes = [
  "994",
  "174",
  "297",
  "266",
  "809",
  "611",
  "766",
  "123",
  "332",
  "762",
  "750",
  "469",
  "779",
  "229",
  "390",
  "400",
  "334",
  "440",
  "693",
  "445",
  "592",
  "823",
  "851",
  "648",
  "154",
  "619",
  "792",
  "568",
  "675",
];
const firstCount = 5;
const secondCount = 10;
const thirdCount = lotteryCodes.length - firstCount - secondCount;

window.lotteryCodes = lotteryCodes;
window.prizeConfig = {
  first: {
    name: "一等奖",
    count: firstCount,
    icon: "📱",
  },
  second: {
    name: "二等奖",
    count: secondCount,
    icon: "💻",
  },
  third: {
    name: "三等奖",
    count: thirdCount,
    icon: "🎧",
  },
};

// 生成 35 个三位数的数字字符串（即从 "100" 到 "999"）

function generateThreeDigitStrings(count = 35) {
  const result = [];
  for (let i = 0; i < count; i++) {
    // 生成 100～999 的随机整数，然后转为字符串
    const num = Math.floor(Math.random() * 900) + 100;
    result.push(String(num));
  }
  return result;
}
