const createComponent = (content = {
  href: '#:~:text=转，光阴迫。-,一万年太久，只争朝夕,-。',
  t: '动态 Web Components',
  n: '《满江红·和郭沫若同志》',
  data: '毛泽东-小小寰球，有几个苍蝇碰壁。-嗡嗡叫，几声凄厉，几声抽泣。-蚂蚁缘槐夸大国，蚍蜉撼树谈何易。-正西风落叶下长安，飞鸣镝。-多少事，从来急。-天地转，光阴迫。-一万年太久，只争朝夕。-四海翻腾云水怒，五洲震荡风雷激。-要扫除一切害人虫，全无敌。'
}) => {
  const ele = document.createElement('copy-section');
  const {href, t, n, data} = content;
  ele.setAttribute('href', href);
  ele.setAttribute('t', t);
  ele.setAttribute('n', n);
  ele.textContent = data;

  const main = document.getElementById('main')
  main?.appendChild(ele)
};

export {
  createComponent
};
