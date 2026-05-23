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
    line(0, false, '咸其拇。'),
    line(1, false, '咸其腓，凶，居吉。'),
    line(2, true, '咸其股，执其随，往吝。'),
    line(3, true, '贞吉悔亡。憧憧往来，朋从尔思。'),
    line(4, true, '咸其脢，无悔。'),
    line(5, false, '咸其辅颊舌。'),
  ];
  return {
    kingWenNumber: 31,
    binary: bin,
    name: '咸',
    fullName: '泽山咸',
    pinyin: 'xián',
    guaCi: '亨，利贞。取女吉。',
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
    line(0, false, '浚恒，贞凶，无攸利。'),
    line(1, true, '悔亡。'),
    line(2, true, '不恒其德，或承之羞，贞吝。'),
    line(3, true, '田无禽。'),
    line(4, false, '恒其德，贞。妇人吉，夫子凶。'),
    line(5, false, '振恒，凶。'),
  ];
  return {
    kingWenNumber: 32,
    binary: bin,
    name: '恒',
    fullName: '雷风恒',
    pinyin: 'héng',
    guaCi: '亨，无咎。利贞。利有攸往。',
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
    line(0, false, '遁尾，厉。勿用有攸往。'),
    line(1, false, '执之用黄牛之革，莫之胜说。'),
    line(2, true, '系遁，有疾厉。畜臣妾，吉。'),
    line(3, true, '好遁，君子吉，小人否。'),
    line(4, true, '嘉遁，贞吉。'),
    line(5, true, '肥遁，无不利。'),
  ];
  return {
    kingWenNumber: 33,
    binary: bin,
    name: '遁',
    fullName: '天山遁',
    pinyin: 'dùn',
    guaCi: '亨。小利贞。',
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
    line(0, true, '壮于趾，征凶，有孚。'),
    line(1, true, '贞吉。'),
    line(2, true, '小人用壮，君子用罔，贞厉。羝羊触藩，羸其角。'),
    line(3, true, '贞吉悔亡。藩决不羸，壮于大舆之輹。'),
    line(4, false, '丧羊于易，无悔。'),
    line(5, false, '羝羊触藩，不能退，不能遂，无攸利。艰则吉。'),
  ];
  return {
    kingWenNumber: 34,
    binary: bin,
    name: '大壮',
    fullName: '雷天大壮',
    pinyin: 'dà zhuàng',
    guaCi: '利贞。',
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
    line(0, false, '晋如摧如，贞吉。罔孚，裕无咎。'),
    line(1, false, '晋如愁如，贞吉。受兹介福，于其王母。'),
    line(2, false, '众允，悔亡。'),
    line(3, true, '晋如鼫鼠，贞厉。'),
    line(4, false, '悔亡。失得勿恤，往吉，无不利。'),
    line(5, true, '晋其角，维用伐邑。厉吉无咎，贞吝。'),
  ];
  return {
    kingWenNumber: 35,
    binary: bin,
    name: '晋',
    fullName: '火地晋',
    pinyin: 'jìn',
    guaCi: '康侯用锡马蕃庶，昼日三接。',
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
    line(0, true, '明夷于飞，垂其翼。君子于行，三日不食。有攸往，主人有言。'),
    line(1, false, '明夷，夷于左股。用拯马壮，吉。'),
    line(2, true, '明夷于南狩，得其大首。不可疾贞。'),
    line(3, false, '入于左腹，获明夷之心，于出门庭。'),
    line(4, false, '箕子之明夷，利贞。'),
    line(5, false, '不明晦。初登于天，后入于地。'),
  ];
  return {
    kingWenNumber: 36,
    binary: bin,
    name: '明夷',
    fullName: '地火明夷',
    pinyin: 'míng yí',
    guaCi: '利艰贞。',
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
    line(0, true, '闲有家，悔亡。'),
    line(1, false, '无攸遂，在中馈，贞吉。'),
    line(2, true, '家人嗃嗃，悔厉吉。妇子嘻嘻，终吝。'),
    line(3, false, '富家，大吉。'),
    line(4, true, '王假有家，勿恤，吉。'),
    line(5, true, '有孚威如，终吉。'),
  ];
  return {
    kingWenNumber: 37,
    binary: bin,
    name: '家人',
    fullName: '风火家人',
    pinyin: 'jiā rén',
    guaCi: '利女贞。',
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
    line(0, true, '悔亡。丧马勿逐，自复。见恶人，无咎。'),
    line(1, true, '遇主于巷，无咎。'),
    line(2, false, '见舆曳，其牛掣。其人天且劓，无初有终。'),
    line(3, true, '睽孤。遇元夫，交孚。厉，无咎。'),
    line(4, false, '悔亡。厥宗噬肤，往何咎。'),
    line(5, true, '睽孤。见豕负涂，载鬼一车。先张之弧，后说之弧。匪寇婚媾。往遇雨则吉。'),
  ];
  return {
    kingWenNumber: 38,
    binary: bin,
    name: '睽',
    fullName: '火泽睽',
    pinyin: 'kuí',
    guaCi: '小事吉。',
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
    line(0, false, '往蹇，来誉。'),
    line(1, false, '王臣蹇蹇，匪躬之故。'),
    line(2, true, '往蹇，来反。'),
    line(3, false, '往蹇，来连。'),
    line(4, true, '大蹇，朋来。'),
    line(5, false, '往蹇，来硕。吉。利见大人。'),
  ];
  return {
    kingWenNumber: 39,
    binary: bin,
    name: '蹇',
    fullName: '水山蹇',
    pinyin: 'jiǎn',
    guaCi: '利西南，不利东北。利见大人，贞吉。',
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
    line(0, false, '无咎。'),
    line(1, true, '田获三狐，得黄矢，贞吉。'),
    line(2, false, '负且乘，致寇至，贞吝。'),
    line(3, true, '解而拇，朋至斯孚。'),
    line(4, false, '君子维有解，吉。有孚于小人。'),
    line(5, false, '公用射隼于高墉之上，获之，无不利。'),
  ];
  return {
    kingWenNumber: 40,
    binary: bin,
    name: '解',
    fullName: '雷水解',
    pinyin: 'xiè',
    guaCi: '利西南。无所往，其来复吉。有攸往，夙吉。',
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
    line(0, true, '已事遄往，无咎。酌损之。'),
    line(1, true, '利贞，征凶。弗损，益之。'),
    line(2, false, '三人行则损一人，一人行则得其友。'),
    line(3, false, '损其疾，使遄有喜，无咎。'),
    line(4, false, '或益之十朋之龟，弗克违，元吉。'),
    line(5, true, '弗损，益之。无咎，贞吉。利有攸往，得臣无家。'),
  ];
  return {
    kingWenNumber: 41,
    binary: bin,
    name: '损',
    fullName: '山泽损',
    pinyin: 'sǔn',
    guaCi: '有孚，元吉，无咎，可贞。利有攸往。曷之用，二簋可用享。',
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
    line(0, true, '利用为大作，元吉，无咎。'),
    line(1, false, '或益之十朋之龟，弗克违，永贞吉。王用享于帝，吉。'),
    line(2, false, '益之用凶事，无咎。有孚中行，告公用圭。'),
    line(3, false, '中行，告公从。利用为依迁国。'),
    line(4, true, '有孚惠心，勿问元吉。有孚惠我德。'),
    line(5, true, '莫益之，或击之。立心勿恒，凶。'),
  ];
  return {
    kingWenNumber: 42,
    binary: bin,
    name: '益',
    fullName: '风雷益',
    pinyin: 'yì',
    guaCi: '利有攸往，利涉大川。',
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
    line(0, true, '壮于前趾，往不胜为咎。'),
    line(1, true, '惕号，莫夜有戎，勿恤。'),
    line(2, true, '壮于頄，有凶。君子夬夬，独行遇雨，若濡有愠，无咎。'),
    line(3, true, '臀无肤，其行次且。牵羊悔亡，闻言不信。'),
    line(4, true, '苋陆夬夬，中行无咎。'),
    line(5, false, '无号，终有凶。'),
  ];
  return {
    kingWenNumber: 43,
    binary: bin,
    name: '夬',
    fullName: '泽天夬',
    pinyin: 'guài',
    guaCi: '扬于王庭，孚号有厉。告自邑，不利即戎。利有攸往。',
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
    line(0, false, '系于金柅，贞吉。有攸往，见凶。羸豕孚蹢躅。'),
    line(1, true, '包有鱼，无咎。不利宾。'),
    line(2, true, '臀无肤，其行次且。厉，无大咎。'),
    line(3, true, '包无鱼，起凶。'),
    line(4, true, '以杞包瓜，含章，有陨自天。'),
    line(5, true, '姤其角，吝，无咎。'),
  ];
  return {
    kingWenNumber: 44,
    binary: bin,
    name: '姤',
    fullName: '天风姤',
    pinyin: 'gòu',
    guaCi: '女壮，勿用取女。',
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
    line(0, false, '有孚不终，乃乱乃萃。若号，一握为笑。勿恤，往无咎。'),
    line(1, false, '引吉，无咎。孚乃利用禴。'),
    line(2, false, '萃如嗟如，无攸利。往无咎，小吝。'),
    line(3, true, '大吉，无咎。'),
    line(4, true, '萃有位，无咎。匪孚，元永贞，悔亡。'),
    line(5, false, '赍咨涕洟，无咎。'),
  ];
  return {
    kingWenNumber: 45,
    binary: bin,
    name: '萃',
    fullName: '泽地萃',
    pinyin: 'cuì',
    guaCi: '亨。王假有庙。利见大人，亨，利贞。用大牲吉。利有攸往。',
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
    line(0, false, '允升，大吉。'),
    line(1, true, '孚乃利用禴，无咎。'),
    line(2, true, '升虚邑。'),
    line(3, false, '王用亨于岐山，吉，无咎。'),
    line(4, false, '贞吉，升阶。'),
    line(5, false, '冥升，利于不息之贞。'),
  ];
  return {
    kingWenNumber: 46,
    binary: bin,
    name: '升',
    fullName: '地风升',
    pinyin: 'shēng',
    guaCi: '元亨。用见大人，勿恤。南征吉。',
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
    line(0, false, '臀困于株木，入于幽谷，三岁不觌。'),
    line(1, true, '困于酒食，朱绂方来。利用享祀，征凶，无咎。'),
    line(2, false, '困于石，据于蒺藜。入于其宫，不见其妻，凶。'),
    line(3, true, '来徐徐，困于金车。吝，有终。'),
    line(4, true, '劓刖，困于赤绂。乃徐有说，利用祭祀。'),
    line(5, false, '困于葛藟，于臲兀。曰动悔有悔，征吉。'),
  ];
  return {
    kingWenNumber: 47,
    binary: bin,
    name: '困',
    fullName: '泽水困',
    pinyin: 'kùn',
    guaCi: '亨。贞，大人吉，无咎。有言不信。',
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
    line(0, false, '井泥不食，旧井无禽。'),
    line(1, true, '井谷射鲋，瓮敝漏。'),
    line(2, true, '井渫不食，为我心恻。可用汲，王明，并受其福。'),
    line(3, false, '井甃，无咎。'),
    line(4, true, '井洌，寒泉食。'),
    line(5, false, '井收勿幕，有孚元吉。'),
  ];
  return {
    kingWenNumber: 48,
    binary: bin,
    name: '井',
    fullName: '水风井',
    pinyin: 'jǐng',
    guaCi: '改邑不改井，无丧无得。往来井井，汔至亦未繘井，羸其瓶，凶。',
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
    line(0, true, '巩用黄牛之革。'),
    line(1, false, '己日乃革之，征吉，无咎。'),
    line(2, true, '征凶，贞厉。革言三就，有孚。'),
    line(3, true, '悔亡。有孚改命，吉。'),
    line(4, true, '大人虎变，未占有孚。'),
    line(5, false, '君子豹变，小人革面。征凶，居贞吉。'),
  ];
  return {
    kingWenNumber: 49,
    binary: bin,
    name: '革',
    fullName: '泽火革',
    pinyin: 'gé',
    guaCi: '己日乃孚。元亨，利贞。悔亡。',
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
    line(0, false, '鼎颠趾，利出否。得妾以其子，无咎。'),
    line(1, true, '鼎有实。我仇有疾，不我能即，吉。'),
    line(2, true, '鼎耳革，其行塞。雉膏不食，方雨亏悔，终吉。'),
    line(3, true, '鼎折足，覆公餗，其形渥，凶。'),
    line(4, false, '鼎黄耳金铉，利贞。'),
    line(5, true, '鼎玉铉，大吉，无不利。'),
  ];
  return {
    kingWenNumber: 50,
    binary: bin,
    name: '鼎',
    fullName: '火风鼎',
    pinyin: 'dǐng',
    guaCi: '元吉，亨。',
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
    line(0, true, '震来虩虩，后笑言哑哑，吉。'),
    line(1, false, '震来厉。亿丧贝，跻于九陵。勿逐，七日得。'),
    line(2, false, '震苏苏，震行无眚。'),
    line(3, true, '震遂泥。'),
    line(4, false, '震往来厉。亿无丧，有事。'),
    line(5, false, '震索索，视矍矍，征凶。震不于其躬，于其邻，无咎。婚媾有言。'),
  ];
  return {
    kingWenNumber: 51,
    binary: bin,
    name: '震',
    fullName: '震为雷',
    pinyin: 'zhèn',
    guaCi: '亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。',
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
    line(0, false, '艮其趾，无咎。利永贞。'),
    line(1, false, '艮其腓，不拯其随，其心不快。'),
    line(2, true, '艮其限，列其夤，厉薰心。'),
    line(3, false, '艮其身，无咎。'),
    line(4, false, '艮其辅，言有序，悔亡。'),
    line(5, true, '敦艮，吉。'),
  ];
  return {
    kingWenNumber: 52,
    binary: bin,
    name: '艮',
    fullName: '艮为山',
    pinyin: 'gèn',
    guaCi: '艮其背，不获其身。行其庭，不见其人。无咎。',
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
    line(0, false, '鸿渐于干，小子厉，有言，无咎。'),
    line(1, false, '鸿渐于磐，饮食衎衎，吉。'),
    line(2, true, '鸿渐于陆，夫征不复，妇孕不育，凶。利御寇。'),
    line(3, false, '鸿渐于木，或得其桷，无咎。'),
    line(4, true, '鸿渐于陵，妇三岁不孕，终莫之胜，吉。'),
    line(5, true, '鸿渐于逵，其羽可用为仪，吉。'),
  ];
  return {
    kingWenNumber: 53,
    binary: bin,
    name: '渐',
    fullName: '风山渐',
    pinyin: 'jiàn',
    guaCi: '女归吉，利贞。',
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
    line(0, true, '归妹以娣，跛能履，征吉。'),
    line(1, true, '眇能视，利幽人之贞。'),
    line(2, false, '归妹以须，反归以娣。'),
    line(3, true, '归妹愆期，迟归有时。'),
    line(4, false, '帝乙归妹，其君之袂不如其娣之袂良。月几望，吉。'),
    line(5, false, '女承筐无实，士刲羊无血，无攸利。'),
  ];
  return {
    kingWenNumber: 54,
    binary: bin,
    name: '归妹',
    fullName: '雷泽归妹',
    pinyin: 'guī mèi',
    guaCi: '征凶，无攸利。',
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
    line(0, true, '遇其配主，虽旬无咎，往有尚。'),
    line(1, false, '丰其蔀，日中见斗。往得疑疾，有孚发若，吉。'),
    line(2, true, '丰其沛，日中见沬。折其右肱，无咎。'),
    line(3, true, '丰其蔀，日中见斗。遇其夷主，吉。'),
    line(4, false, '来章，有庆誉，吉。'),
    line(5, false, '丰其屋，蔀其家，窥其户，阒其无人，三岁不觌，凶。'),
  ];
  return {
    kingWenNumber: 55,
    binary: bin,
    name: '丰',
    fullName: '雷火丰',
    pinyin: 'fēng',
    guaCi: '亨。王假之，勿忧，宜日中。',
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
    line(0, false, '旅琐琐，斯其所取灾。'),
    line(1, false, '旅即次，怀其资，得童仆贞。'),
    line(2, true, '旅焚其次，丧其童仆，贞厉。'),
    line(3, true, '旅于处，得其资斧，我心不快。'),
    line(4, false, '射雉一矢亡，终以誉命。'),
    line(5, true, '鸟焚其巢，旅人先笑后号咷。丧牛于易，凶。'),
  ];
  return {
    kingWenNumber: 56,
    binary: bin,
    name: '旅',
    fullName: '火山旅',
    pinyin: 'lǚ',
    guaCi: '小亨。旅贞吉。',
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
    line(0, false, '进退，利武人之贞。'),
    line(1, true, '巽在床下，用史巫纷若，吉，无咎。'),
    line(2, true, '频巽，吝。'),
    line(3, false, '悔亡。田获三品。'),
    line(4, true, '贞吉，悔亡，无不利。无初有终。先庚三日，后庚三日，吉。'),
    line(5, true, '巽在床下，丧其资斧，贞凶。'),
  ];
  return {
    kingWenNumber: 57,
    binary: bin,
    name: '巽',
    fullName: '巽为风',
    pinyin: 'xùn',
    guaCi: '小亨。利有攸往，利见大人。',
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
    line(0, true, '和兑，吉。'),
    line(1, true, '孚兑，吉，悔亡。'),
    line(2, false, '来兑，凶。'),
    line(3, true, '商兑未宁，介疾有喜。'),
    line(4, true, '孚于剥，有厉。'),
    line(5, false, '引兑。'),
  ];
  return {
    kingWenNumber: 58,
    binary: bin,
    name: '兑',
    fullName: '兑为泽',
    pinyin: 'duì',
    guaCi: '亨，利贞。',
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
    line(0, false, '用拯马壮，吉。'),
    line(1, true, '涣奔其机，悔亡。'),
    line(2, false, '涣其躬，无悔。'),
    line(3, false, '涣其群，元吉。涣有丘，匪夷所思。'),
    line(4, true, '涣汗其大号，涣王居，无咎。'),
    line(5, true, '涣其血，去逖出，无咎。'),
  ];
  return {
    kingWenNumber: 59,
    binary: bin,
    name: '涣',
    fullName: '风水涣',
    pinyin: 'huàn',
    guaCi: '亨。王假有庙，利涉大川，利贞。',
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
    line(0, true, '不出户庭，无咎。'),
    line(1, true, '不出门庭，凶。'),
    line(2, false, '不节若，则嗟若，无咎。'),
    line(3, false, '安节，亨。'),
    line(4, true, '甘节，吉，往有尚。'),
    line(5, false, '苦节，贞凶，悔亡。'),
  ];
  return {
    kingWenNumber: 60,
    binary: bin,
    name: '节',
    fullName: '水泽节',
    pinyin: 'jié',
    guaCi: '亨。苦节不可贞。',
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
    line(0, true, '虞吉，有它不燕。'),
    line(1, true, '鸣鹤在阴，其子和之。我有好爵，吾与尔靡之。'),
    line(2, false, '得敌，或鼓或罢，或泣或歌。'),
    line(3, false, '月几望，马匹亡，无咎。'),
    line(4, true, '有孚挛如，无咎。'),
    line(5, true, '翰音登于天，贞凶。'),
  ];
  return {
    kingWenNumber: 61,
    binary: bin,
    name: '中孚',
    fullName: '风泽中孚',
    pinyin: 'zhōng fú',
    guaCi: '豚鱼吉。利涉大川，利贞。',
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
    line(0, false, '飞鸟以凶。'),
    line(1, false, '过其祖，遇其妣。不及其君，遇其臣。无咎。'),
    line(2, true, '弗过防之，从或戕之，凶。'),
    line(3, true, '无咎。弗过遇之，往厉必戒。勿用永贞。'),
    line(4, false, '密云不雨，自我西郊。公弋取彼在穴。'),
    line(5, false, '弗遇过之，飞鸟离之，凶。是谓灾眚。'),
  ];
  return {
    kingWenNumber: 62,
    binary: bin,
    name: '小过',
    fullName: '雷山小过',
    pinyin: 'xiǎo guò',
    guaCi: '亨，利贞。可小事，不可大事。飞鸟遗之音，不宜上，宜下，大吉。',
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
    line(0, true, '曳其轮，濡其尾，无咎。'),
    line(1, false, '妇丧其茀，勿逐，七日得。'),
    line(2, true, '高宗伐鬼方，三年克之。小人勿用。'),
    line(3, false, '繻有衣袽，终日戒。'),
    line(4, true, '东邻杀牛，不如西邻之禴祭，实受其福。'),
    line(5, false, '濡其首，厉。'),
  ];
  return {
    kingWenNumber: 63,
    binary: bin,
    name: '既济',
    fullName: '水火既济',
    pinyin: 'jì jì',
    guaCi: '亨小，利贞。初吉终乱。',
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
    line(0, false, '濡其尾，吝。'),
    line(1, true, '曳其轮，贞吉。'),
    line(2, false, '未济，征凶。利涉大川。'),
    line(3, true, '贞吉，悔亡。震用伐鬼方，三年有赏于大国。'),
    line(4, false, '贞吉，无悔。君子之光，有孚，吉。'),
    line(5, true, '有孚于饮酒，无咎。濡其首，有孚失是。'),
  ];
  return {
    kingWenNumber: 64,
    binary: bin,
    name: '未济',
    fullName: '火水未济',
    pinyin: 'wèi jì',
    guaCi: '亨。小狐汔济，濡其尾，无攸利。',
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
