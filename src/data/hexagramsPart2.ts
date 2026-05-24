import { TrigramName, type HexagramData, type LineData } from '../types';
import { TRIGRAMS } from './trigrams';

// Helper
function line(index: number, isYang: boolean, yaoCi: string, translation?: string): LineData {
  const names = ['初', '二', '三', '四', '五', '上'];
  const suffix = isYang ? '九' : '六';
  return { index: index + 1, name: `${names[index]}${suffix}`, yaoCi, translation };
}

// ─── 31. 泽山咸 (xián) ──────────────────────────────────────────────
const xianHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.DUI];
  const lower = TRIGRAMS[TrigramName.GEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '咸其拇。', '感应到了脚趾，还只是轻微的开始，尚未深入。'),
    line(1, false, '咸其腓，凶，居吉。', '感应到了小腿肚，如果急于行动则不利，安静等待则吉祥。'),
    line(2, true, '咸其股，执其随，往吝。', '感应到了大腿，盲目地跟着别人走，这样下去会有问题。'),
    line(3, true, '贞吉悔亡。憧憧往来，朋从尔思。', '持守正道则吉祥无憾。心意虽然摇摆不定，但朋友们最终会理解和认同你的想法。'),
    line(4, true, '咸其脢，无悔。', '感应到了背脊（不轻易表露的部位），没有悔恨。提示默默坚守。'),
    line(5, false, '咸其辅颊舌。', '感应到了面颊和舌头（言语的表达）。提示到了感应的最后阶段，言语沟通变得重要。'),
  ];
  return {
    kingWenNumber: 31,
    binary: bin,
    name: '咸',
    fullName: '泽山咸',
    pinyin: 'xián',
    guaCi: '亨，利贞。取女吉。',
    guaCiTranslation: '通达，适宜持守正道。娶妻吉祥。咸卦象征着无形的心灵感应与相互吸引，就像男女之间自然而然的契合。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 32. 雷风恒 (héng) ──────────────────────────────────────────────
const hengHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.ZHEN];
  const lower = TRIGRAMS[TrigramName.XUN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '浚恒，贞凶，无攸利。', '过于深求持久不变，即使动机纯正也不利，没有什么好处。提示不可操之过急。'),
    line(1, true, '悔亡。', '悔恨消失了。提示保持中道就能化解遗憾。'),
    line(2, true, '不恒其德，或承之羞，贞吝。', '不能长久地保持德行，可能会受到羞辱，即使坚持某种做法也难堪。'),
    line(3, true, '田无禽。', '去田里打猎却没有猎物。提示如果在错误的地方坚持，只会白费力气。'),
    line(4, false, '恒其德，贞。妇人吉，夫子凶。', '长久地保持柔顺之德是好的——对于女子来说是吉祥的，对于男子来说则不合适。提示不同身份应有不同的坚持。'),
    line(5, false, '振恒，凶。', '不断地变更破坏长久之道，凶险。提示在应该坚守的时候反复无常是不好的。'),
  ];
  return {
    kingWenNumber: 32,
    binary: bin,
    name: '恒',
    fullName: '雷风恒',
    pinyin: 'héng',
    guaCi: '亨，无咎。利贞。利有攸往。',
    guaCiTranslation: '通达，没有过失。适宜持守正道。适宜有所行动。恒卦象征着长久和恒心，持之以恒便能成功。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 33. 天山遁 (dùn) ──────────────────────────────────────────────
const dunHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.QIAN];
  const lower = TRIGRAMS[TrigramName.GEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '遁尾，厉。勿用有攸往。', '退避时落在最后面，有风险。此时不宜有所行动。'),
    line(1, false, '执之用黄牛之革，莫之胜说。', '用黄牛皮做的皮绳牢牢地拴住，谁也没法解开。提示有时候需要有坚定的约束和意志。'),
    line(2, true, '系遁，有疾厉。畜臣妾，吉。', '退避时被牵绊住了，有麻烦和风险。但处理好家庭事务（小的范围）还是吉利的。'),
    line(3, true, '好遁，君子吉，小人否。', '能够从容地选择退避，对于有德之人来说是吉利的，但对于格局小的人来说做不到。'),
    line(4, true, '嘉遁，贞吉。', '在最好的时机选择了恰当的退避，持守正道则吉祥。'),
    line(5, true, '肥遁，无不利。', '潇洒从容地远离，没有任何不利。提示在最恰当的时机退隐，是最理想的状态。'),
  ];
  return {
    kingWenNumber: 33,
    binary: bin,
    name: '遁',
    fullName: '天山遁',
    pinyin: 'dùn',
    guaCi: '亨。小利贞。',
    guaCiTranslation: '通达。在小的方面适宜守正。遁卦象征退避与隐藏，在时机不利时暂且退守也是一种智慧。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 34. 雷天大壮 (dà zhuàng) ──────────────────────────────────────
const daZhuangHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.ZHEN];
  const lower = TRIGRAMS[TrigramName.QIAN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '壮于趾，征凶，有孚。', '力量只到了脚趾就想出征，凶险。提示力量还不够时不要急于行动。'),
    line(1, true, '贞吉。', '持守正道则吉祥。'),
    line(2, true, '小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。', '普通人用蛮力，有德之人不这样。即使持守正道也有风险，像公羊用角去撞篱笆，最后角被卡住了。'),
    line(3, true, '贞吉悔亡。藩决不羸，壮于大舆之輹。', '持守正道吉祥无憾。篱笆被冲破而角没有卡住，像大车的轮轴一样强而有力。'),
    line(4, false, '丧羊于易，无悔。', '在边界那里丢失了羊，但没有悔恨。提示有时失去一些东西不必过于计较。'),
    line(5, false, '羝羊触藩，不能退，不能遂，无攸利。艰则吉。', '公羊撞篱笆角被卡住了，进退两难，没有什么好处。但如果能坚持忍耐，最终还是好的。'),
  ];
  return {
    kingWenNumber: 34,
    binary: bin,
    name: '大壮',
    fullName: '雷天大壮',
    pinyin: 'dà zhuàng',
    guaCi: '利贞。',
    guaCiTranslation: '适宜持守正道。大壮卦象征着强盛和壮大，但在力量强大的时候更要谨慎守正。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 35. 火地晋 (jìn) ──────────────────────────────────────────────
const jinHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.LI];
  const lower = TRIGRAMS[TrigramName.KUN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '晋如摧如，贞吉。罔孚，裕无咎。', '前进时受到挫折，但持守正道则吉祥。即使暂时得不到信任，从容宽裕也能免于过失。'),
    line(1, false, '晋如愁如，贞吉。受兹介福，于其王母。', '前进时满怀忧愁，但持守正道则吉祥。会从祖母那里得到大的福气与庇佑。'),
    line(2, false, '众允，悔亡。', '得到众人的信任和认可，悔恨就消失了。'),
    line(3, true, '晋如鼫鼠，贞厉。', '前进时像大老鼠一样（贪婪而怯懦），即使持守正道也有风险。'),
    line(4, false, '悔亡。失得勿恤，往吉，无不利。', '悔恨消失了。不必过于计较得失，放胆去做，吉祥而无不利。'),
    line(5, true, '晋其角，维用伐邑。厉吉无咎，贞吝。', '前进到了顶点，只能用来征伐自己的城邑（整顿内部）。有风险但也可能吉利无咎，持守正道也有困难。'),
  ];
  return {
    kingWenNumber: 35,
    binary: bin,
    name: '晋',
    fullName: '火地晋',
    pinyin: 'jìn',
    guaCi: '康侯用锡马蕃庶，昼日三接。',
    guaCiTranslation: '康侯用天子赏赐的马匹繁育繁殖，一天之中受到多次接见。晋卦象征进步与上升，光明在前。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 36. 地火明夷 (míng yí) ────────────────────────────────────────
const mingYiHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.KUN];
  const lower = TRIGRAMS[TrigramName.LI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '明夷于飞，垂其翼。君子于行，三日不食。有攸往，主人有言。', '在黑暗中飞翔，垂下翅膀。有德之人远行，多日没有饭吃。若要有所行动，主人还会有所指责。提示逆境中要隐忍。'),
    line(1, false, '明夷，夷于左股。用拯马壮，吉。', '光明受伤了，伤在左腿。用强壮的马来救援，吉祥。提示在困境中及时自救。'),
    line(2, true, '明夷于南狩，得其大首。不可疾贞。', '在黑暗中去南方征伐，擒获了对方的大首领。但不可急于求成、操之过急。'),
    line(3, false, '入于左腹，获明夷之心，于出门庭。', '深入到内部，理解了受伤之心的本质，然后走出门庭、远离是非。提示看透了就及时离开。'),
    line(4, false, '箕子之明夷，利贞。', '箕子（殷纣王的叔父）面对黑暗时期，佯狂避世，持守正道是明智的。'),
    line(5, false, '不明晦。初登于天，后入于地。', '一开始光明灿烂后来陷入了黑暗。提示如果不懂得收敛和保全自己，就会有从高处跌落的可能。'),
  ];
  return {
    kingWenNumber: 36,
    binary: bin,
    name: '明夷',
    fullName: '地火明夷',
    pinyin: 'míng yí',
    guaCi: '利艰贞。',
    guaCiTranslation: '适宜在艰难中持守正道。明夷卦象征光明受到了伤害和遮蔽，黑暗中要保持内心的光明。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 37. 风火家人 (jiā rén) ────────────────────────────────────────
const jiaRenHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.XUN];
  const lower = TRIGRAMS[TrigramName.LI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '闲有家，悔亡。', '家庭中有规矩和防范，悔恨就会消失。'),
    line(1, false, '无攸遂，在中馈，贞吉。', '不必有什么大的成就，专心做好家务和饮食之事，持守正道则吉祥。'),
    line(2, true, '家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。', '家人之间有严厉的管教，虽然有悔有险但最终吉祥。如果家人嘻嘻哈哈、毫无规矩，最终会有问题。'),
    line(3, false, '富家，大吉。', '使家庭富足，大吉大利。'),
    line(4, true, '王假有家，勿恤，吉。', '君王降临到这个家庭（以治家之道治理天下），不必担心，吉祥。'),
    line(5, true, '有孚威如，终吉。', '有诚信也有威严，最终吉祥。'),
  ];
  return {
    kingWenNumber: 37,
    binary: bin,
    name: '家人',
    fullName: '风火家人',
    pinyin: 'jiā rén',
    guaCi: '利女贞。',
    guaCiTranslation: '适宜女子持守正道（这并非指只有女子才适用，而是强调家庭中柔顺中正之道的重要性）。家人卦象征家庭伦理与和谐。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 38. 火泽睽 (kuí) ──────────────────────────────────────────────
const kuiHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.LI];
  const lower = TRIGRAMS[TrigramName.DUI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '悔亡。丧马勿逐，自复。见恶人，无咎。', '悔恨消失。丢失了马不要追，它自己会回来。遇到了不喜欢的人，也不需要起冲突。'),
    line(1, true, '遇主于巷，无咎。', '在巷子里偶然遇到了主人（有缘的人），没有过失。'),
    line(2, false, '见舆曳，其牛掣。其人天且劓，无初有终。', '看到大车被拖住，拉车的牛也受牵制。那人被削去了头发和鼻子，起初很不顺但最终有所结果。'),
    line(3, true, '睽孤。遇元夫，交孚。厉，无咎。', '在分歧中感到孤独。遇到了一位志同道合的人，以诚相待。虽有风险但无过失。'),
    line(4, false, '悔亡。厥宗噬肤，往何咎。', '悔恨消失了。同宗族的人在吃肉（正在处理事情），前去又有什么过失呢？'),
    line(5, true, '睽孤。见豕负涂，载鬼一车。先张之弧，后说之弧。匪寇婚媾。往遇雨则吉。', '在分歧中感到孤独。看到猪滚了一身泥，又看到载满了鬼怪的车。起初拉满了弓要射，后来又放下了。来者不是强盗而是来求婚的。前往若遇到下雨（化解紧张）就是吉利的。'),
  ];
  return {
    kingWenNumber: 38,
    binary: bin,
    name: '睽',
    fullName: '火泽睽',
    pinyin: 'kuí',
    guaCi: '小事吉。',
    guaCiTranslation: '小事上吉祥。睽卦象征着分离与分歧，在大事上难以统一，但小事可以配合。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 39. 水山蹇 (jiǎn) ─────────────────────────────────────────────
const jianHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.KAN];
  const lower = TRIGRAMS[TrigramName.GEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '往蹇，来誉。', '去了就会遇到困难，回来则会得到赞誉。提示此时不宜前进。'),
    line(1, false, '王臣蹇蹇，匪躬之故。', '王室的臣子处在一个又一个的困难中，这些困难并不是他自身的原因造成的。提示有时困境是环境所致。'),
    line(2, true, '往蹇，来反。', '去了会遇到困难，不如回来。'),
    line(3, false, '往蹇，来连。', '去了会遇到困难，回来时会有人结伴相连。'),
    line(4, true, '大蹇，朋来。', '处于巨大的困难之中，朋友们会前来相助。'),
    line(5, false, '往蹇，来硕。吉。利见大人。', '去了会遇到困难，但回来却有大的收获。吉祥。适宜去见贵人。'),
  ];
  return {
    kingWenNumber: 39,
    binary: bin,
    name: '蹇',
    fullName: '水山蹇',
    pinyin: 'jiǎn',
    guaCi: '利西南，不利东北。利见大人，贞吉。',
    guaCiTranslation: '西南方向有利，东北方向不利。适宜去见有德有位的贵人，持守正道则吉祥。蹇卦象征艰难险阻。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 40. 雷水解 (xiè) ──────────────────────────────────────────────
const xieHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.ZHEN];
  const lower = TRIGRAMS[TrigramName.KAN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '无咎。', '没有过失。提示困难解除之初一切都在恢复。'),
    line(1, true, '田获三狐，得黄矢，贞吉。', '打猎捕获了三只狐狸，得到了黄色的箭。持守正道则吉祥。提示在除害的过程中有所收获。'),
    line(2, false, '负且乘，致寇至，贞吝。', '背着沉重的东西还要乘车，招来了盗贼。即使持守正道也难堪。提示不要引人注目地炫富。'),
    line(3, true, '解而拇，朋至斯孚。', '解开你脚趾上的束缚，朋友们就会到来并以诚相待。'),
    line(4, false, '君子维有解，吉。有孚于小人。', '有德之人能够解除困难和束缚，吉祥。即使对普通人也要以诚信相待。'),
    line(5, false, '公用射隼于高墉之上，获之，无不利。', '王公在高墙上射下了凶猛的鹰隼并且捕获了它，没有什么不利。'),
  ];
  return {
    kingWenNumber: 40,
    binary: bin,
    name: '解',
    fullName: '雷水解',
    pinyin: 'xiè',
    guaCi: '利西南。无所往，其来复吉。有攸往，夙吉。',
    guaCiTranslation: '西南方向有利。如果没有特别要去的地方，回来是吉利的。如果要有所前往，早一点行动是吉利的。解卦象征困难得到解除。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 41. 山泽损 (sǔn) ──────────────────────────────────────────────
const sunHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.GEN];
  const lower = TRIGRAMS[TrigramName.DUI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '已事遄往，无咎。酌损之。', '做完自己的事后赶快前往帮忙，没有过失。但要酌情减损、量力而行。'),
    line(1, true, '利贞，征凶。弗损，益之。', '适宜持守正道，贸然前进则有风险。不必减损自己，反而能使别人受益。'),
    line(2, false, '三人行则损一人，一人行则得其友。', '三个人一起走路会减少一个人，一个人走路反而会交到朋友。提示数量不是关键，关键在于契合。'),
    line(3, false, '损其疾，使遄有喜，无咎。', '减损自己的毛病和缺点，尽快改进就会有好事发生，没有过失。'),
    line(4, false, '或益之十朋之龟，弗克违，元吉。', '有人送来了价值十朋的大龟（非常珍贵的礼物），无法拒绝，这是大吉大利的。'),
    line(5, true, '弗损，益之。无咎，贞吉。利有攸往，得臣无家。', '不必减损自己，反而能增益他人。没有过失，持守正道则吉祥。适宜有所行动，会得到没有家庭牵挂的忠心追随者。'),
  ];
  return {
    kingWenNumber: 41,
    binary: bin,
    name: '损',
    fullName: '山泽损',
    pinyin: 'sǔn',
    guaCi: '有孚，元吉，无咎，可贞。利有攸往。曷之用，二簋可用享。',
    guaCiTranslation: '有诚信，大吉，没有过失，可以持守正道。适宜有所行动。用什么来献祭呢？两碗简单的食物就足够了。损卦象征减损与简约。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 42. 风雷益 (yì) ───────────────────────────────────────────────
const yi2Hex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.XUN];
  const lower = TRIGRAMS[TrigramName.ZHEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '利用为大作，元吉，无咎。', '适宜去做大的事业，大吉大利，没有过失。'),
    line(1, false, '或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉。', '有人送来了价值十朋的大龟，无法拒绝，长久持守正道则吉祥。君王以此祭祀天帝，吉祥。'),
    line(2, false, '益之用凶事，无咎。有孚中行，告公用圭。', '在凶险的事情中得到增益和帮助，没有过失。心怀诚信走中道，用圭玉告知王公。'),
    line(3, false, '中行，告公从。利用为依迁国。', '走中道行事，告知王公能够听从。适宜作为依靠来完成迁都这样的大事。'),
    line(4, true, '有孚惠心，勿问元吉。有孚惠我德。', '心怀诚信与仁爱之心，不用说也知道是大吉大利的。诚信的人会以他的德行回报我。'),
    line(5, true, '莫益之，或击之。立心勿恒，凶。', '没有人来帮他，反而有人来攻击他。如果立下的志向不能持久，就会有凶险。'),
  ];
  return {
    kingWenNumber: 42,
    binary: bin,
    name: '益',
    fullName: '风雷益',
    pinyin: 'yì',
    guaCi: '利有攸往，利涉大川。',
    guaCiTranslation: '适宜有所行动，适宜渡过大河大川。益卦象征增益和帮助，减上益下、民心悦服。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 43. 泽天夬 (guài) ─────────────────────────────────────────────
const guaiHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.DUI];
  const lower = TRIGRAMS[TrigramName.QIAN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '壮于前趾，往不胜为咎。', '力量只在前面的脚趾上就想前进，去了必然不胜，这会成为过失。'),
    line(1, true, '惕号，莫夜有戎，勿恤。', '警惕地发出号令，夜晚虽然有敌人来犯，也不必过分担忧。因有备而无患。'),
    line(2, true, '壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。', '愤怒表现在脸上，有凶险。有德之人决断地独行，途中遇雨被淋湿了，虽然有些不快但无大碍。'),
    line(3, true, '臀无肤，其行次且。牵羊悔亡，闻言不信。', '臀部受伤坐立不安，走路踉踉跄跄。牵着羊走悔恨就会消失，但这话说出来没人相信。'),
    line(4, true, '苋陆夬夬，中行无咎。', '像苋陆草那样决断干脆，走中道就不会有过失。'),
    line(5, false, '无号，终有凶。', '没有发出号令和警示，最终会有凶险。提示当断不断反受其乱。'),
  ];
  return {
    kingWenNumber: 43,
    binary: bin,
    name: '夬',
    fullName: '泽天夬',
    pinyin: 'guài',
    guaCi: '扬于王庭，孚号有厉。告自邑，不利即戎。利有攸往。',
    guaCiTranslation: '在王庭之上公开宣布，诚恳地告知有危险。从自己的城邑发布号令，不宜立刻动用武力。适宜有所行动。夬卦象征决断与决裂。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 44. 天风姤 (gòu) ──────────────────────────────────────────────
const gouHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.QIAN];
  const lower = TRIGRAMS[TrigramName.XUN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '系于金柅，贞吉。有攸往，见凶。羸豕孚蹢躅。', '系在金属的刹车杆上（加以约束），持守正道则吉祥。若贸然前往则凶险。像瘦猪一样蠢蠢欲动。'),
    line(1, true, '包有鱼，无咎。不利宾。', '包裹里有鱼，没有过失。但不宜用来招待客人。提示先管好自己。'),
    line(2, true, '臀无肤，其行次且。厉，无大咎。', '臀部受伤坐立不安，行走困难。有风险但没有大过错。'),
    line(3, true, '包无鱼，起凶。', '包裹里没有鱼，有所行动则凶险。提示资源不足时不可贸然行动。'),
    line(4, true, '以杞包瓜，含章，有陨自天。', '用杞柳来包裹瓜果，内含美好的章采，会有从天而降的机遇。'),
    line(5, true, '姤其角，吝，无咎。', '在相遇时顶撞到了角，有些难堪但无大的过失。'),
  ];
  return {
    kingWenNumber: 44,
    binary: bin,
    name: '姤',
    fullName: '天风姤',
    pinyin: 'gòu',
    guaCi: '女壮，勿用取女。',
    guaCiTranslation: '女子过于强壮，不宜娶这样的女子。姤卦象征不期而遇，一阴初生而遇五阳。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 45. 泽地萃 (cuì) ──────────────────────────────────────────────
const cuiHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.DUI];
  const lower = TRIGRAMS[TrigramName.KUN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '有孚不终，乃乱乃萃。若号，一握为笑。勿恤，往无咎。', '诚信不能坚持到底，人心就会乱了之后再重新聚集。如果大声呼喊求助，握手之后就会相视而笑。不必忧虑，前去不会有过失。'),
    line(1, false, '引吉，无咎。孚乃利用禴。', '被人引导和提携是吉祥的，没有过失。以诚信之心即使是简朴的祭祀也足够了。'),
    line(2, false, '萃如嗟如，无攸利。往无咎，小吝。', '想要聚集却又叹息不止，没有什么好处。前去虽然没有大的过失，但小处也有些不顺。'),
    line(3, true, '大吉，无咎。', '非常吉祥，没有过失。'),
    line(4, true, '萃有位，无咎。匪孚，元永贞，悔亡。', '在聚集中占据了合适的位置，没有过失。如果还没有得到完全的信任，从始至终持守正道，悔恨自会消失。'),
    line(5, false, '赍咨涕洟，无咎。', '叹息着哭泣流涕，但没有大的过失。提示情绪表达出来也可以被接受。'),
  ];
  return {
    kingWenNumber: 45,
    binary: bin,
    name: '萃',
    fullName: '泽地萃',
    pinyin: 'cuì',
    guaCi: '亨。王假有庙。利见大人，亨，利贞。用大牲吉。利有攸往。',
    guaCiTranslation: '通达。君王来到宗庙祭祀。适宜去拜访贵人，通达，适宜持守正道。用大牲口祭祀是吉利的。适宜有所行动。萃卦象征着聚集与汇聚。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 46. 地风升 (shēng) ────────────────────────────────────────────
const shengHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.KUN];
  const lower = TRIGRAMS[TrigramName.XUN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '允升，大吉。', '得到信任和认可而上升，大吉大利。'),
    line(1, true, '孚乃利用禴，无咎。', '有诚信，即使是简朴的祭祀也足够了，没有过失。'),
    line(2, true, '升虚邑。', '上升进入了一座空城。提示一路畅通无阻。'),
    line(3, false, '王用亨于岐山，吉，无咎。', '君王在岐山祭祀，吉祥而没有过失。提示在上升中不忘根本。'),
    line(4, false, '贞吉，升阶。', '持守正道则吉祥，一步一步地逐步上升。'),
    line(5, false, '冥升，利于不息之贞。', '在昏暗中上升（不知道何时该停下来），适宜不断地持守正道来调整自己。'),
  ];
  return {
    kingWenNumber: 46,
    binary: bin,
    name: '升',
    fullName: '地风升',
    pinyin: 'shēng',
    guaCi: '元亨。用见大人，勿恤。南征吉。',
    guaCiTranslation: '最为通达。可以去拜访贵人，不必忧虑。向南方进发是吉利的。升卦象征上升与成长，从小到大的渐进。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 47. 泽水困 (kùn) ──────────────────────────────────────────────
const kun2Hex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.DUI];
  const lower = TRIGRAMS[TrigramName.KAN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '臀困于株木，入于幽谷，三岁不觌。', '坐在枯木上不得动弹，进入了幽深的山谷，很长时间都不见天日。提示陷入了很深的困境。'),
    line(1, true, '困于酒食，朱绂方来。利用享祀，征凶，无咎。', '困在酒食和应酬之中，官服刚刚送来。适宜用祭祀来通达心意，出兵有风险但没有大的过失。'),
    line(2, false, '困于石，据于蒺藜。入于其宫，不见其妻，凶。', '被岩石困住了，手又扶在了蒺藜上。回到家中却见不到妻子，非常凶险。提示走到了极端无助的境地。'),
    line(3, true, '来徐徐，困于金车。吝，有终。', '缓缓地过来，被金属的大车困住了。虽然过程有些难堪，但最终会有结果。'),
    line(4, true, '劓刖，困于赤绂。乃徐有说，利用祭祀。', '被割了鼻子和脚，困在了官位和荣耀之中。慢慢地会有转机，适宜用祭祀来通达心意。'),
    line(5, false, '困于葛藟，于臲兀。曰动悔有悔，征吉。', '被葛藤缠绕困住了，站立不稳。说一动就有悔恨，那就干脆继续前行反而吉利。提示与其在困境中犹豫不如行动起来。'),
  ];
  return {
    kingWenNumber: 47,
    binary: bin,
    name: '困',
    fullName: '泽水困',
    pinyin: 'kùn',
    guaCi: '亨。贞，大人吉，无咎。有言不信。',
    guaCiTranslation: '通达。持守正道，对于有德之人来说是吉祥的，没有过失。但此时说的话别人不会相信。困卦象征困顿与艰难。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 48. 水风井 (jǐng) ─────────────────────────────────────────────
const jingHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.KAN];
  const lower = TRIGRAMS[TrigramName.XUN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '井泥不食，旧井无禽。', '井里满是泥污不能饮用，废弃的老井连鸟兽都不来光顾。提示需要清理和修缮。'),
    line(1, true, '井谷射鲋，瓮敝漏。', '井底的水只能射到一些小鱼，水瓮又是破漏的。提示资源没有被充分利用。'),
    line(2, true, '井渫不食，为我心恻。可用汲，王明，并受其福。', '井已经清理干净了却没有人来喝，让人心里很难受。可以来汲水了，若是君王英明，大家都能享受到这份福祉。'),
    line(3, false, '井甃，无咎。', '把井壁砌好了，没有过失。提示做好基础工作。'),
    line(4, true, '井洌，寒泉食。', '井水清澈甘冽，像寒泉一样可以饮用了。提示资源到了最佳状态。'),
    line(5, false, '井收勿幕，有孚元吉。', '打水的井口不加遮盖，任人来取用。有诚信之心则大吉。提示资源应当共享而不是私藏。'),
  ];
  return {
    kingWenNumber: 48,
    binary: bin,
    name: '井',
    fullName: '水风井',
    pinyin: 'jǐng',
    guaCi: '改邑不改井，无丧无得。往来井井，汔至亦未繘井，羸其瓶，凶。',
    guaCiTranslation: '城邑可以搬迁但水井不会改变位置，没有失去也没有得到。人们来来往往地打水，都快到井口了却还没有把井绳放下去，反而把水瓶打破了，这就不好了。井卦象征供养与资源的分配。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 49. 泽火革 (gé) ───────────────────────────────────────────────
const geHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.DUI];
  const lower = TRIGRAMS[TrigramName.LI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '巩用黄牛之革。', '用黄牛皮做的皮革来加固。提示变革之前要有充分的准备和稳固的基础。'),
    line(1, false, '己日乃革之，征吉，无咎。', '到了恰当的时机就开始变革，前进吉祥而没有过失。'),
    line(2, true, '征凶，贞厉。革言三就，有孚。', '贸然前进有凶险，即使持守正道也艰难。变革的主张要经过多次讨论才能达成一致，才能获得信任。'),
    line(3, true, '悔亡。有孚改命，吉。', '悔恨消失了。有诚信就可以改变原有的局面和安排，吉祥。'),
    line(4, true, '大人虎变，未占有孚。', '大人物像老虎换毛一样进行脱胎换骨的变革，不用占问也知道他是有诚信的。'),
    line(5, false, '君子豹变，小人革面。征凶，居贞吉。', '有德之人像豹子一样完成自我更新，普通人只是改变一下表面。继续前进有风险，安守正道则吉祥。提示变革完成后需要一段稳定期。'),
  ];
  return {
    kingWenNumber: 49,
    binary: bin,
    name: '革',
    fullName: '泽火革',
    pinyin: 'gé',
    guaCi: '己日乃孚。元亨，利贞。悔亡。',
    guaCiTranslation: '到了该变革的时候才能获得信任。最为通达，适宜持守正道。悔恨消失。革卦象征变革与革新。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 50. 火风鼎 (dǐng) ─────────────────────────────────────────────
const dingHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.LI];
  const lower = TRIGRAMS[TrigramName.XUN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '鼎颠趾，利出否。得妾以其子，无咎。', '把鼎倒过来（鼎脚朝天），有利于倒掉里面的残渣。娶了妾因为她的儿子，没有过失。提示要清理旧的东西。'),
    line(1, true, '鼎有实。我仇有疾，不我能即，吉。', '鼎里装满了食物。我的对手有疾病在身，暂时不能来接近我，吉祥。'),
    line(2, true, '鼎耳革，其行塞。雉膏不食，方雨亏悔，终吉。', '鼎的耳朵脱落了，搬运受到阻碍。美味的野鸡肉吃不到，等到下雨后水火调和，悔恨就会消除，最终吉祥。'),
    line(3, true, '鼎折足，覆公餗，其形渥，凶。', '鼎的脚折断了，把王公的美食打翻在地，弄得一塌糊涂，凶险。提示不堪重任。'),
    line(4, false, '鼎黄耳金铉，利贞。', '鼎有了黄色的耳朵和金属的横杠（方便搬运），适宜持守正道。'),
    line(5, true, '鼎玉铉，大吉，无不利。', '鼎上装了玉制的横杠（最珍贵的配件），大吉大利，没有什么不利。'),
  ];
  return {
    kingWenNumber: 50,
    binary: bin,
    name: '鼎',
    fullName: '火风鼎',
    pinyin: 'dǐng',
    guaCi: '元吉，亨。',
    guaCiTranslation: '大吉大利，通达。鼎卦象征着国家的重器和权力的稳定，也可以理解为革故鼎新、建立新秩序。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 51. 震为雷 (zhèn) ─────────────────────────────────────────────
const zhenHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.ZHEN];
  const lower = TRIGRAMS[TrigramName.ZHEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '震来虩虩，后笑言哑哑，吉。', '雷声滚滚而来令人惊惧，过后仍然谈笑自若，吉祥。'),
    line(1, false, '震来厉。亿丧贝，跻于九陵。勿逐，七日得。', '雷声来得猛烈。估计会失去财宝，于是登上高陵。不要去追逐，七天之后自然会失而复得。'),
    line(2, false, '震苏苏，震行无眚。', '在雷声中惊恐不安，但若以敬畏之心来行事则不会有问题。'),
    line(3, true, '震遂泥。', '雷声过后陷入了泥沼。提示被恐惧压垮了。'),
    line(4, false, '震往来厉。亿无丧，有事。', '雷声来来回回都很猛烈。但估计不会有什么大的损失，只是需要处理一些事情。'),
    line(5, false, '震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。', '被雷声吓得哆嗦发抖，眼神惊恐。此时出行有风险。雷震没有伤到自己，而伤了邻居，没有大碍。但在婚姻嫁娶之事上会有一些口角和争议。'),
  ];
  return {
    kingWenNumber: 51,
    binary: bin,
    name: '震',
    fullName: '震为雷',
    pinyin: 'zhèn',
    guaCi: '亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。',
    guaCiTranslation: '通达。雷声滚滚而来令人惊惧，但镇定下来后依然谈笑自若。雷声震惊百里，但主持祭祀的人手中的勺子和香酒并没有掉落。震卦象征震动与敬畏。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 52. 艮为山 (gèn) ──────────────────────────────────────────────
const genHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.GEN];
  const lower = TRIGRAMS[TrigramName.GEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '艮其趾，无咎。利永贞。', '止住脚趾不再前行，没有过失。适宜长久地持守正道。'),
    line(1, false, '艮其腓，不拯其随，其心不快。', '止住了小腿却不能停下来跟随的人，心里很不愉快。'),
    line(2, true, '艮其限，列其夤，厉薰心。', '止住了腰部，背脊的肉都撕裂了，危险像火一样熏烤着内心。提示停在一个错误的位置反而更痛苦。'),
    line(3, false, '艮其身，无咎。', '止住了自身，没有过失。提示适可而止。'),
    line(4, false, '艮其辅，言有序，悔亡。', '止住了脸颊（管住嘴巴），说话有条不紊，悔恨就消失了。'),
    line(5, true, '敦艮，吉。', '以敦厚笃实的态度停下来，吉祥。'),
  ];
  return {
    kingWenNumber: 52,
    binary: bin,
    name: '艮',
    fullName: '艮为山',
    pinyin: 'gèn',
    guaCi: '艮其背，不获其身。行其庭，不见其人。无咎。',
    guaCiTranslation: '止于背部而不被身体所困。走过院子却不见里面的人。没有过失。艮卦象征停止与静止，当行则行当止则止。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 53. 风山渐 (jiàn) ─────────────────────────────────────────────
const jian2Hex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.XUN];
  const lower = TRIGRAMS[TrigramName.GEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '鸿渐于干，小子厉，有言，无咎。', '大雁渐渐飞到水岸边，小孩子觉得有危险而吵闹，但最终没有过失。'),
    line(1, false, '鸿渐于磐，饮食衎衎，吉。', '大雁渐渐飞到磐石上，安稳地饮食和乐，吉祥。'),
    line(2, true, '鸿渐于陆，夫征不复，妇孕不育，凶。利御寇。', '大雁渐渐飞到陆地上，丈夫出征未归，妇人怀孕却不生育，凶险。此时只适宜用来防御外敌。'),
    line(3, false, '鸿渐于木，或得其桷，无咎。', '大雁渐渐飞到树木上，找到了平的树枝来落脚，没有过失。'),
    line(4, true, '鸿渐于陵，妇三岁不孕，终莫之胜，吉。', '大雁渐渐飞到丘陵上，妇人多时不孕，但最终没有人能阻挡她，吉祥。'),
    line(5, true, '鸿渐于逵，其羽可用为仪，吉。', '大雁渐渐飞到了大道上，它的羽毛可以用来作为礼仪的装饰。吉祥。'),
  ];
  return {
    kingWenNumber: 53,
    binary: bin,
    name: '渐',
    fullName: '风山渐',
    pinyin: 'jiàn',
    guaCi: '女归吉，利贞。',
    guaCiTranslation: '女子出嫁是吉祥的，适宜持守正道。渐卦象征渐进与逐步发展，不可急于求成。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 54. 雷泽归妹 (guī mèi) ────────────────────────────────────────
const guiMeiHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.ZHEN];
  const lower = TRIGRAMS[TrigramName.DUI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '归妹以娣，跛能履，征吉。', '以妹妹的身份陪嫁，虽然像跛了脚走路一样但也能行走，前进吉祥。'),
    line(1, true, '眇能视，利幽人之贞。', '眼睛不太好但还能看见，适宜隐退之人持守正道。'),
    line(2, false, '归妹以须，反归以娣。', '妹妹陪嫁等待太久，反而被送了回来。'),
    line(3, true, '归妹愆期，迟归有时。', '嫁女推迟了日期，虽然迟迟没有出嫁但总会有合适的时机。'),
    line(4, false, '帝乙归妹，其君之袂不如其娣之袂良。月几望，吉。', '帝乙将自己的妹妹嫁了出去，姐姐的衣袖反而不如妹妹的华丽。像月亮快要圆满之前那样，吉祥。'),
    line(5, false, '女承筐无实，士刲羊无血，无攸利。', '女子端着空空的筐子没有什么可献上的，男子杀羊却没有血流出来。一切都是空荡荡的，没有什么好处。'),
  ];
  return {
    kingWenNumber: 54,
    binary: bin,
    name: '归妹',
    fullName: '雷泽归妹',
    pinyin: 'guī mèi',
    guaCi: '征凶，无攸利。',
    guaCiTranslation: '贸然前进有凶险，没有什么有利之处。归妹卦象征婚姻与结合，但也提示在不对等的条件下结合是有风险的。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 55. 雷火丰 (fēng) ─────────────────────────────────────────────
const fengHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.ZHEN];
  const lower = TRIGRAMS[TrigramName.LI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '遇其配主，虽旬无咎，往有尚。', '遇到了相配的主人，十天之内都没有过失，前往会有好结果。'),
    line(1, false, '丰其蔀，日中见斗。往得疑疾，有孚发若，吉。', '丰盛到了被遮蔽的程度，正午时分看到了北斗星（反常）。前往会被人猜疑，但诚信可以启发人心，吉祥。'),
    line(2, true, '丰其沛，日中见沬。折其右肱，无咎。', '丰盛到了被遮盖的程度，正午看到了微光。折断了右臂，但没有大的过失。'),
    line(3, true, '丰其蔀，日中见斗。遇其夷主，吉。', '丰盛中被遮蔽，正午看到了北斗星。遇到了与自己相配的主人，吉祥。'),
    line(4, false, '来章，有庆誉，吉。', '带来了美丽的光彩，有喜庆和赞誉，吉祥。'),
    line(5, false, '丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。', '丰盛了他的房屋，却遮蔽了他的家。从门缝中窥视，寂静无人，多年不见人影，非常不吉利。提示盛极而衰、自绝于人。'),
  ];
  return {
    kingWenNumber: 55,
    binary: bin,
    name: '丰',
    fullName: '雷火丰',
    pinyin: 'fēng',
    guaCi: '亨。王假之，勿忧，宜日中。',
    guaCiTranslation: '通达。君王来到了这里，不必忧虑，适宜像正午的太阳一样保持光明。丰卦象征丰盛与盛大。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 56. 火山旅 (lǚ) ───────────────────────────────────────────────
const lv2Hex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.LI];
  const lower = TRIGRAMS[TrigramName.GEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '旅琐琐，斯其所取灾。', '旅途中斤斤计较、琐碎不堪，这是自找的麻烦。'),
    line(1, false, '旅即次，怀其资，得童仆贞。', '旅途中找到了住处，怀中有钱财，得到了忠心的仆人。'),
    line(2, true, '旅焚其次，丧其童仆，贞厉。', '旅途中住处被烧毁，失掉了忠心的仆人，即使持守正道也有风险。'),
    line(3, true, '旅于处，得其资斧，我心不快。', '旅途中有了住处，也得到了生活所需的资财和工具，但心里还是不快乐。'),
    line(4, false, '射雉一矢亡，终以誉命。', '用一支箭射中了野鸡但箭也丢了，最终却获得了好的名誉。'),
    line(5, true, '鸟焚其巢，旅人先笑后号咷。丧牛于易，凶。', '鸟的巢被烧了，旅途中的人先笑而后大哭。在边界丢失了牛，非常凶险。提示在旅途的终点放松警惕会招致损失。'),
  ];
  return {
    kingWenNumber: 56,
    binary: bin,
    name: '旅',
    fullName: '火山旅',
    pinyin: 'lǚ',
    guaCi: '小亨。旅贞吉。',
    guaCiTranslation: '小有通达。旅途中持守正道则吉祥。旅卦象征旅居与异乡。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 57. 巽为风 (xùn) ──────────────────────────────────────────────
const xunHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.XUN];
  const lower = TRIGRAMS[TrigramName.XUN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '进退，利武人之贞。', '进退不定，适宜像军人一样果断坚定地持守正道。'),
    line(1, true, '巽在床下，用史巫纷若，吉，无咎。', '顺应地跪伏在床下，请史官和巫师来反复沟通处理，吉祥而没有过失。'),
    line(2, true, '频巽，吝。', '频繁地改变态度去顺应，这样反而不好。'),
    line(3, false, '悔亡。田获三品。', '悔恨消失了。打猎获得了三种品类的猎物。提示顺应的回报很丰厚。'),
    line(4, true, '贞吉，悔亡，无不利。无初有终。先庚三日，后庚三日，吉。', '持守正道则吉祥，悔恨消失，没有什么不利。开始时不太顺但结局很好。在庚日前三天和后三天（即事情前后的充分准备），吉祥。'),
    line(5, true, '巽在床下，丧其资斧，贞凶。', '过分地跪伏在床下，连生活所需的资财和工具都失去了。即使持守正道也有凶险。提示顺应过度就会失去自我。'),
  ];
  return {
    kingWenNumber: 57,
    binary: bin,
    name: '巽',
    fullName: '巽为风',
    pinyin: 'xùn',
    guaCi: '小亨。利有攸往，利见大人。',
    guaCiTranslation: '小有通达。适宜有所行动，适宜拜访贵人。巽卦象征顺应与渗透，以柔克刚。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 58. 兑为泽 (duì) ──────────────────────────────────────────────
const duiHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.DUI];
  const lower = TRIGRAMS[TrigramName.DUI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '和兑，吉。', '以和谐友善的态度与人愉快地交流，吉祥。'),
    line(1, true, '孚兑，吉，悔亡。', '以诚信的态度与人愉快地交往，吉祥，悔恨消失。'),
    line(2, false, '来兑，凶。', '刻意来做表面上的取悦和讨好，这样是不好的。提示真正的喜悦应当是发自内心的。'),
    line(3, true, '商兑未宁，介疾有喜。', '商量和讨论还没有平定下来，但中间的小问题有望变成好事。'),
    line(4, true, '孚于剥，有厉。', '信任了不该信任的人（那些阴险剥蚀的人），有风险。提示喜悦中也要辨别是非。'),
    line(5, false, '引兑。', '引导而出的喜悦。提示喜悦需要被引发和带动。不要急于达成，顺其自然就好。'),
  ];
  return {
    kingWenNumber: 58,
    binary: bin,
    name: '兑',
    fullName: '兑为泽',
    pinyin: 'duì',
    guaCi: '亨，利贞。',
    guaCiTranslation: '通达，适宜持守正道。兑卦象征喜悦与交流，像湖泊一样滋润万物。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 59. 风水涣 (huàn) ─────────────────────────────────────────────
const huanHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.XUN];
  const lower = TRIGRAMS[TrigramName.KAN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '用拯马壮，吉。', '用强壮的马来拯救和帮助，吉祥。提示在涣散之初及时挽救。'),
    line(1, true, '涣奔其机，悔亡。', '在涣散中奔向安全的凭依和支撑，悔恨消失。'),
    line(2, false, '涣其躬，无悔。', '在涣散中把自己释放开来，不固执于自我，心中无悔。'),
    line(3, false, '涣其群，元吉。涣有丘，匪夷所思。', '在涣散中打破小团体和私党，大吉。从涣散中重新凝聚起来如同山丘一样，这不是一般人能想到的。'),
    line(4, true, '涣汗其大号，涣王居，无咎。', '像出汗一样发出大的号令，王者的居所也得到了清理和更新，没有过失。'),
    line(5, true, '涣其血，去逖出，无咎。', '在涣散中化解了流血冲突，远远地离开危险，没有过失。'),
  ];
  return {
    kingWenNumber: 59,
    binary: bin,
    name: '涣',
    fullName: '风水涣',
    pinyin: 'huàn',
    guaCi: '亨。王假有庙，利涉大川，利贞。',
    guaCiTranslation: '通达。君王来到宗庙祭祀。适宜渡大河做大事，适宜持守正道。涣卦象征涣散与重新凝聚。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 60. 水泽节 (jié) ──────────────────────────────────────────────
const jieHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.KAN];
  const lower = TRIGRAMS[TrigramName.DUI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '不出户庭，无咎。', '不走出家门和庭院，没有过失。提示知道何时停下来不出门。'),
    line(1, true, '不出门庭，凶。', '不走出家门和庭院——但这次却是不好的。提示时机到了就该出门了，一直不走反而是问题。'),
    line(2, false, '不节若，则嗟若，无咎。', '如果不注意节制，将来就会哀叹了。但即使如此也没有大的过失（因为可以补救）。'),
    line(3, false, '安节，亨。', '安于节制之道，通达。'),
    line(4, true, '甘节，吉，往有尚。', '心甘情愿地乐于节制，吉祥，前往会有好结果。'),
    line(5, false, '苦节，贞凶，悔亡。', '过于刻苦地节制自己，即使持守正道也有风险，但悔恨会消失。提示节制不是越严越好。'),
  ];
  return {
    kingWenNumber: 60,
    binary: bin,
    name: '节',
    fullName: '水泽节',
    pinyin: 'jié',
    guaCi: '亨。苦节不可贞。',
    guaCiTranslation: '通达。但是过分的节制和刻苦是不能长久持守的。节卦象征节制与限度。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 61. 风泽中孚 (zhōng fú) ───────────────────────────────────────
const zhongFuHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.XUN];
  const lower = TRIGRAMS[TrigramName.DUI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '虞吉，有它不燕。', '安心守住是吉祥的，如果有了其他的心思和牵挂就不得安宁了。'),
    line(1, true, '鸣鹤在阴，其子和之。我有好爵，吾与尔靡之。', '白鹤在背阴处鸣叫，小鹤也回应和鸣。我有美酒，愿意与你分享共饮。这是易经中最美的一句，象征真诚的呼应和分享。'),
    line(2, false, '得敌，或鼓或罢，或泣或歌。', '遇到了对手，时而击鼓时而停止，时而哭泣时而歌唱。内心充满了矛盾和起伏。'),
    line(3, false, '月几望，马匹亡，无咎。', '月亮快要圆满了，马匹却丢失了，但没有大的过失。提示有些损失是可以接受的。'),
    line(4, true, '有孚挛如，无咎。', '诚信像捆扎在一起一样紧密牢固，没有过失。'),
    line(5, true, '翰音登于天，贞凶。', '飞鸟的声音高高地登上了天（过于虚张声势），即使持守正道也有风险。提示诚信过了头就变成了虚伪。'),
  ];
  return {
    kingWenNumber: 61,
    binary: bin,
    name: '中孚',
    fullName: '风泽中孚',
    pinyin: 'zhōng fú',
    guaCi: '豚鱼吉。利涉大川，利贞。',
    guaCiTranslation: '即使是最简单的豚鱼祭品也是吉利的。适宜渡大河做大事，适宜持守正道。中孚卦象征内心的诚信。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 62. 雷山小过 (xiǎo guò) ───────────────────────────────────────
const xiaoGuoHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.ZHEN];
  const lower = TRIGRAMS[TrigramName.GEN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '飞鸟以凶。', '像飞鸟一样向上冲是有凶险的。提示不要好高骛远。'),
    line(1, false, '过其祖，遇其妣。不及其君，遇其臣。无咎。', '越过了祖父却遇到了祖母。没有见到君王而遇到了臣子。没有过失。提示退而求其次也能接受。'),
    line(2, true, '弗过防之，从或戕之，凶。', '不去过度防范，但若放任自流可能会被伤害，凶险。提示要适度保护自己。'),
    line(3, true, '无咎。弗过遇之，往厉必戒。勿用永贞。', '没有过失。不必过于苛求也能遇到它，但若继续前行有风险需要警惕。此时不必拘泥于长久不变的守正。'),
    line(4, false, '密云不雨，自我西郊。公弋取彼在穴。', '乌云密布却不下雨，从西郊飘来。王公用带绳的箭射取藏在洞穴中的猎物。提示耐心等待。'),
    line(5, false, '弗遇过之，飞鸟离之，凶。是谓灾眚。', '没有遇到反而远远地超过了，像飞鸟离开了该去的地方，凶险。这就是天灾人祸。'),
  ];
  return {
    kingWenNumber: 62,
    binary: bin,
    name: '小过',
    fullName: '雷山小过',
    pinyin: 'xiǎo guò',
    guaCi: '亨，利贞。可小事，不可大事。飞鸟遗之音，不宜上，宜下，大吉。',
    guaCiTranslation: '通达，适宜持守正道。可以做小事，不宜做大事。像飞鸟留下鸣叫声一样，不宜往高处飞，应当往下走，这样会非常吉祥。小过卦象征小的过度。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 63. 水火既济 (jì jì) ──────────────────────────────────────────
const jiJiHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.KAN];
  const lower = TRIGRAMS[TrigramName.LI];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, true, '曳其轮，濡其尾，无咎。', '拖住车轮不让它走得太快，尾巴沾湿了，没有过失。提示成功后更要克制。'),
    line(1, false, '妇丧其茀，勿逐，七日得。', '妇人丢失了首饰，不需要去追逐寻找，七天之后自然就会失而复得。'),
    line(2, true, '高宗伐鬼方，三年克之。小人勿用。', '殷高宗征伐鬼方国，三年才攻克。提示做大事需要耐心和持久，并且不能重用德行不够的人。'),
    line(3, false, '繻有衣袽，终日戒。', '漂亮的丝绸衣服变成了破旧的衣衫，整天都在戒备之中。提示成功之后也不要放松警惕。'),
    line(4, true, '东邻杀牛，不如西邻之禴祭，实受其福。', '东边的邻居杀牛来隆重祭祀，还不如西边邻居简朴的小祭祀——因为心诚，所以真正得到了福气。'),
    line(5, false, '濡其首，厉。', '把头浸湿了，很危险。提示成功后得意忘形会出问题。'),
  ];
  return {
    kingWenNumber: 63,
    binary: bin,
    name: '既济',
    fullName: '水火既济',
    pinyin: 'jì jì',
    guaCi: '亨小，利贞。初吉终乱。',
    guaCiTranslation: '小事通达，适宜持守正道。开始时吉祥，但最终可能会混乱。既济卦象征事情已经完成，但完成之后就是新的开始。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── 64. 火水未济 (wèi jì) ─────────────────────────────────────────
const weiJiHex = ((): HexagramData => {
  const upper = TRIGRAMS[TrigramName.LI];
  const lower = TRIGRAMS[TrigramName.KAN];
  const bin = (upper.binary << 3) | lower.binary;
  const lines: [LineData, LineData, LineData, LineData, LineData, LineData] = [
    line(0, false, '濡其尾，吝。', '尾巴沾湿了，有些可惜。提示在事情快完成时最容易出小问题。'),
    line(1, true, '曳其轮，贞吉。', '拖住车轮不放，持守正道则吉祥。提示稳住阵脚。'),
    line(2, false, '未济，征凶。利涉大川。', '事情还没有成功，贸然前进有凶险。但适宜渡过大的河流。提示条件具备时就要大胆去做。'),
    line(3, true, '贞吉，悔亡。震用伐鬼方，三年有赏于大国。', '持守正道则吉祥，悔恨消失。以雷霆之势征伐鬼方，三年后得到了大国的赏赐。'),
    line(4, false, '贞吉，无悔。君子之光，有孚，吉。', '持守正道吉祥而没有悔恨。有德之人的光芒散发出来，有诚信，吉祥。'),
    line(5, true, '有孚于饮酒，无咎。濡其首，有孚失是。', '饮酒时有诚信之心，没有过失。但如果喝酒喝到了把头都弄湿了，那就是诚信失度了。作为易经的最后一爻，提示人们：即使有诚信，也要把握好分寸。'),
  ];
  return {
    kingWenNumber: 64,
    binary: bin,
    name: '未济',
    fullName: '火水未济',
    pinyin: 'wèi jì',
    guaCi: '亨。小狐汔济，濡其尾，无攸利。',
    guaCiTranslation: '通达。小狐狸快要渡过河了，却在最后时刻沾湿了尾巴，功亏一篑。未济卦是六十四卦的最后一卦，象征事情尚未完成，提醒人们永远不要以为一切都结束了。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines,
  };
})();

// ─── Export ─────────────────────────────────────────────────────────
export const HEXAGRAMS_PART_2: HexagramData[] = [
  xianHex,
  hengHex,
  dunHex,
  daZhuangHex,
  jinHex,
  mingYiHex,
  jiaRenHex,
  kuiHex,
  jianHex,
  xieHex,
  sunHex,
  yi2Hex,
  guaiHex,
  gouHex,
  cuiHex,
  shengHex,
  kun2Hex,
  jingHex,
  geHex,
  dingHex,
  zhenHex,
  genHex,
  jian2Hex,
  guiMeiHex,
  fengHex,
  lv2Hex,
  xunHex,
  duiHex,
  huanHex,
  jieHex,
  zhongFuHex,
  xiaoGuoHex,
  jiJiHex,
  weiJiHex,
];
