import { TrigramName, type HexagramData, type LineData } from '../types';
import { TRIGRAMS } from './trigrams';

function line(index: number, yinYang: 0 | 1, yaoCi: string): LineData {
  const yangNames = ['初九', '九二', '九三', '九四', '九五', '上九'];
  const yinNames = ['初六', '六二', '六三', '六四', '六五', '上六'];
  return {
    index,
    name: yinYang === 1 ? yangNames[index] : yinNames[index],
    yaoCi,
  };
}

// ─── 1. 乾为天 (qián) ──────────────────────────────────────────────
const qianHex = (() => {
  const upper = TRIGRAMS[TrigramName.QIAN];
  const lower = TRIGRAMS[TrigramName.QIAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 1,
    binary,
    name: '乾',
    fullName: '乾为天',
    pinyin: 'qián',
    guaCi: '元亨利贞。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '潜龙勿用。'),
      line(1, 1, '见龙在田，利见大人。'),
      line(2, 1, '君子终日乾乾，夕惕若厉，无咎。'),
      line(3, 1, '或跃在渊，无咎。'),
      line(4, 1, '飞龙在天，利见大人。'),
      line(5, 1, '亢龙有悔。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 2. 坤为地 (kūn) ──────────────────────────────────────────────
const kunHex = (() => {
  const upper = TRIGRAMS[TrigramName.KUN];
  const lower = TRIGRAMS[TrigramName.KUN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 2,
    binary,
    name: '坤',
    fullName: '坤为地',
    pinyin: 'kūn',
    guaCi: '元亨，利牝马之贞。君子有攸往，先迷后得主，利。西南得朋，东北丧朋。安贞吉。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '履霜，坚冰至。'),
      line(1, 0, '直方大，不习无不利。'),
      line(2, 0, '含章可贞。或从王事，无成有终。'),
      line(3, 0, '括囊，无咎无誉。'),
      line(4, 0, '黄裳元吉。'),
      line(5, 0, '龙战于野，其血玄黄。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 3. 水雷屯 (zhūn) ─────────────────────────────────────────────
const zhunHex = (() => {
  const upper = TRIGRAMS[TrigramName.KAN];
  const lower = TRIGRAMS[TrigramName.ZHEN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 3,
    binary,
    name: '屯',
    fullName: '水雷屯',
    pinyin: 'zhūn',
    guaCi: '屯，元亨利贞。勿用有攸往。利建侯。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '磐桓，利居贞，利建侯。'),
      line(1, 0, '屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。'),
      line(2, 0, '即鹿无虞，惟入于林中，君子几不如舍，往吝。'),
      line(3, 0, '乘马班如，求婚媾，往吉，无不利。'),
      line(4, 1, '屯其膏，小贞吉，大贞凶。'),
      line(5, 0, '乘马班如，泣血涟如。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 4. 山水蒙 (méng) ─────────────────────────────────────────────
const mengHex = (() => {
  const upper = TRIGRAMS[TrigramName.GEN];
  const lower = TRIGRAMS[TrigramName.KAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 4,
    binary,
    name: '蒙',
    fullName: '山水蒙',
    pinyin: 'méng',
    guaCi: '蒙，亨。匪我求童蒙，童蒙求我。初筮告，再三渎，渎则不告。利贞。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '发蒙，利用刑人，用说桎梏，以往吝。'),
      line(1, 1, '包蒙，吉。纳妇，吉。子克家。'),
      line(2, 0, '勿用取女，见金夫，不有躬，无攸利。'),
      line(3, 0, '困蒙，吝。'),
      line(4, 0, '童蒙，吉。'),
      line(5, 1, '击蒙，不利为寇，利御寇。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 5. 水天需 (xū) ───────────────────────────────────────────────
const xuHex = (() => {
  const upper = TRIGRAMS[TrigramName.KAN];
  const lower = TRIGRAMS[TrigramName.QIAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 5,
    binary,
    name: '需',
    fullName: '水天需',
    pinyin: 'xū',
    guaCi: '需，有孚，光亨，贞吉。利涉大川。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '需于郊，利用恒，无咎。'),
      line(1, 1, '需于沙，小有言，终吉。'),
      line(2, 1, '需于泥，致寇至。'),
      line(3, 0, '需于血，出自穴。'),
      line(4, 1, '需于酒食，贞吉。'),
      line(5, 0, '入于穴，有不速之客三人来，敬之终吉。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 6. 天水讼 (sòng) ──────────────────────────────────────────────
const songHex = (() => {
  const upper = TRIGRAMS[TrigramName.QIAN];
  const lower = TRIGRAMS[TrigramName.KAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 6,
    binary,
    name: '讼',
    fullName: '天水讼',
    pinyin: 'sòng',
    guaCi: '讼，有孚窒惕，中吉，终凶。利见大人，不利涉大川。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '不永所事，小有言，终吉。'),
      line(1, 1, '不克讼，归而逋，其邑人三百户，无眚。'),
      line(2, 0, '食旧德，贞厉，终吉。或从王事，无成。'),
      line(3, 1, '不克讼，复即命，渝安贞，吉。'),
      line(4, 1, '讼，元吉。'),
      line(5, 1, '或锡之鞶带，终朝三褫之。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 7. 地水师 (shī) ───────────────────────────────────────────────
const shiHex = (() => {
  const upper = TRIGRAMS[TrigramName.KUN];
  const lower = TRIGRAMS[TrigramName.KAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 7,
    binary,
    name: '师',
    fullName: '地水师',
    pinyin: 'shī',
    guaCi: '师，贞，丈人吉，无咎。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '师出以律，否臧凶。'),
      line(1, 1, '在师中，吉无咎，王三锡命。'),
      line(2, 0, '师或舆尸，凶。'),
      line(3, 0, '师左次，无咎。'),
      line(4, 0, '田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。'),
      line(5, 0, '大君有命，开国承家，小人勿用。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 8. 水地比 (bǐ) ────────────────────────────────────────────────
const biHex = (() => {
  const upper = TRIGRAMS[TrigramName.KAN];
  const lower = TRIGRAMS[TrigramName.KUN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 8,
    binary,
    name: '比',
    fullName: '水地比',
    pinyin: 'bǐ',
    guaCi: '比，吉。原筮元永贞，无咎。不宁方来，后夫凶。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '有孚比之，无咎。有孚盈缶，终来有它，吉。'),
      line(1, 0, '比之自内，贞吉。'),
      line(2, 0, '比之匪人。'),
      line(3, 0, '外比之，贞吉。'),
      line(4, 1, '显比，王用三驱，失前禽。邑人不诫，吉。'),
      line(5, 0, '比之无首，凶。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 9. 风天小畜 (xiǎo chù) ───────────────────────────────────────
const xiaoChuHex = (() => {
  const upper = TRIGRAMS[TrigramName.XUN];
  const lower = TRIGRAMS[TrigramName.QIAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 9,
    binary,
    name: '小畜',
    fullName: '风天小畜',
    pinyin: 'xiǎo chù',
    guaCi: '小畜，亨。密云不雨，自我西郊。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '复自道，何其咎，吉。'),
      line(1, 1, '牵复，吉。'),
      line(2, 1, '舆说辐，夫妻反目。'),
      line(3, 0, '有孚，血去惕出，无咎。'),
      line(4, 1, '有孚挛如，富以其邻。'),
      line(5, 1, '既雨既处，尚德载。妇贞厉。月几望，君子征凶。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 10. 天泽履 (lǚ) ───────────────────────────────────────────────
const lvHex = (() => {
  const upper = TRIGRAMS[TrigramName.QIAN];
  const lower = TRIGRAMS[TrigramName.DUI];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 10,
    binary,
    name: '履',
    fullName: '天泽履',
    pinyin: 'lǚ',
    guaCi: '履虎尾，不咥人，亨。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '素履，往无咎。'),
      line(1, 1, '履道坦坦，幽人贞吉。'),
      line(2, 0, '眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。'),
      line(3, 1, '履虎尾，愬愬终吉。'),
      line(4, 1, '夬履，贞厉。'),
      line(5, 1, '视履考祥，其旋元吉。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 11. 地天泰 (tài) ──────────────────────────────────────────────
const taiHex = (() => {
  const upper = TRIGRAMS[TrigramName.KUN];
  const lower = TRIGRAMS[TrigramName.QIAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 11,
    binary,
    name: '泰',
    fullName: '地天泰',
    pinyin: 'tài',
    guaCi: '泰，小往大来，吉亨。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '拔茅茹，以其汇，征吉。'),
      line(1, 1, '包荒，用冯河，不遐遗，朋亡，得尚于中行。'),
      line(2, 1, '无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。'),
      line(3, 0, '翩翩，不富以其邻，不戒以孚。'),
      line(4, 0, '帝乙归妹，以祉元吉。'),
      line(5, 0, '城复于隍，勿用师。自邑告命，贞吝。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 12. 天地否 (pǐ) ────────────────────────────────────────────────
const piHex = (() => {
  const upper = TRIGRAMS[TrigramName.QIAN];
  const lower = TRIGRAMS[TrigramName.KUN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 12,
    binary,
    name: '否',
    fullName: '天地否',
    pinyin: 'pǐ',
    guaCi: '否之匪人，不利君子贞，大往小来。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '拔茅茹，以其汇，贞吉亨。'),
      line(1, 0, '包承，小人吉，大人否亨。'),
      line(2, 0, '包羞。'),
      line(3, 1, '有命无咎，畴离祉。'),
      line(4, 1, '休否，大人吉。其亡其亡，系于苞桑。'),
      line(5, 1, '倾否，先否后喜。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 13. 天火同人 (tóng rén) ──────────────────────────────────────
const tongRenHex = (() => {
  const upper = TRIGRAMS[TrigramName.QIAN];
  const lower = TRIGRAMS[TrigramName.LI];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 13,
    binary,
    name: '同人',
    fullName: '天火同人',
    pinyin: 'tóng rén',
    guaCi: '同人于野，亨。利涉大川，利君子贞。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '同人于门，无咎。'),
      line(1, 0, '同人于宗，吝。'),
      line(2, 1, '伏戎于莽，升其高陵，三岁不兴。'),
      line(3, 1, '乘其墉，弗克攻，吉。'),
      line(4, 1, '同人先号咷而后笑，大师克相遇。'),
      line(5, 1, '同人于郊，无悔。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 14. 火天大有 (dà yǒu) ─────────────────────────────────────────
const daYouHex = (() => {
  const upper = TRIGRAMS[TrigramName.LI];
  const lower = TRIGRAMS[TrigramName.QIAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 14,
    binary,
    name: '大有',
    fullName: '火天大有',
    pinyin: 'dà yǒu',
    guaCi: '大有，元亨。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '无交害，匪咎，艰则无咎。'),
      line(1, 1, '大车以载，有攸往，无咎。'),
      line(2, 1, '公用亨于天子，小人弗克。'),
      line(3, 1, '匪其彭，无咎。'),
      line(4, 0, '厥孚交如，威如，吉。'),
      line(5, 1, '自天佑之，吉无不利。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 15. 地山谦 (qiān) ─────────────────────────────────────────────
const qian2Hex = (() => {
  const upper = TRIGRAMS[TrigramName.KUN];
  const lower = TRIGRAMS[TrigramName.GEN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 15,
    binary,
    name: '谦',
    fullName: '地山谦',
    pinyin: 'qiān',
    guaCi: '谦，亨，君子有终。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '谦谦君子，用涉大川，吉。'),
      line(1, 0, '鸣谦，贞吉。'),
      line(2, 1, '劳谦君子，有终吉。'),
      line(3, 0, '无不利，撝谦。'),
      line(4, 0, '不富以其邻，利用侵伐，无不利。'),
      line(5, 0, '鸣谦，利用行师，征邑国。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 16. 雷地豫 (yù) ────────────────────────────────────────────────
const yuHex = (() => {
  const upper = TRIGRAMS[TrigramName.ZHEN];
  const lower = TRIGRAMS[TrigramName.KUN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 16,
    binary,
    name: '豫',
    fullName: '雷地豫',
    pinyin: 'yù',
    guaCi: '豫，利建侯行师。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '鸣豫，凶。'),
      line(1, 0, '介于石，不终日，贞吉。'),
      line(2, 0, '盱豫，悔。迟有悔。'),
      line(3, 1, '由豫，大有得。勿疑，朋盍簪。'),
      line(4, 0, '贞疾，恒不死。'),
      line(5, 0, '冥豫，成有渝，无咎。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 17. 泽雷随 (suí) ───────────────────────────────────────────────
const suiHex = (() => {
  const upper = TRIGRAMS[TrigramName.DUI];
  const lower = TRIGRAMS[TrigramName.ZHEN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 17,
    binary,
    name: '随',
    fullName: '泽雷随',
    pinyin: 'suí',
    guaCi: '随，元亨利贞，无咎。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '官有渝，贞吉。出门交有功。'),
      line(1, 0, '系小子，失丈夫。'),
      line(2, 0, '系丈夫，失小子。随有求得，利居贞。'),
      line(3, 1, '随有获，贞凶。有孚在道，以明，何咎。'),
      line(4, 1, '孚于嘉，吉。'),
      line(5, 0, '拘系之，乃从维之，王用亨于西山。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 18. 山风蛊 (gǔ) ────────────────────────────────────────────────
const guHex = (() => {
  const upper = TRIGRAMS[TrigramName.GEN];
  const lower = TRIGRAMS[TrigramName.XUN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 18,
    binary,
    name: '蛊',
    fullName: '山风蛊',
    pinyin: 'gǔ',
    guaCi: '蛊，元亨。利涉大川。先甲三日，后甲三日。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '干父之蛊，有子，考无咎，厉终吉。'),
      line(1, 1, '干母之蛊，不可贞。'),
      line(2, 1, '干父之蛊，小有悔，无大咎。'),
      line(3, 0, '裕父之蛊，往见吝。'),
      line(4, 0, '干父之蛊，用誉。'),
      line(5, 1, '不事王侯，高尚其事。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 19. 地泽临 (lín) ────────────────────────────────────────────────
const linHex = (() => {
  const upper = TRIGRAMS[TrigramName.KUN];
  const lower = TRIGRAMS[TrigramName.DUI];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 19,
    binary,
    name: '临',
    fullName: '地泽临',
    pinyin: 'lín',
    guaCi: '临，元亨利贞。至于八月有凶。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '咸临，贞吉。'),
      line(1, 1, '咸临，吉无不利。'),
      line(2, 0, '甘临，无攸利。既忧之，无咎。'),
      line(3, 0, '至临，无咎。'),
      line(4, 0, '知临，大君之宜，吉。'),
      line(5, 0, '敦临，吉无咎。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 20. 风地观 (guān) ──────────────────────────────────────────────
const guanHex = (() => {
  const upper = TRIGRAMS[TrigramName.XUN];
  const lower = TRIGRAMS[TrigramName.KUN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 20,
    binary,
    name: '观',
    fullName: '风地观',
    pinyin: 'guān',
    guaCi: '观，盥而不荐，有孚颙若。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '童观，小人无咎，君子吝。'),
      line(1, 0, '窥观，利女贞。'),
      line(2, 0, '观我生，进退。'),
      line(3, 0, '观国之光，利用宾于王。'),
      line(4, 1, '观我生，君子无咎。'),
      line(5, 1, '观其生，君子无咎。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 21. 火雷噬嗑 (shì hé) ──────────────────────────────────────────
const shiHeHex = (() => {
  const upper = TRIGRAMS[TrigramName.LI];
  const lower = TRIGRAMS[TrigramName.ZHEN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 21,
    binary,
    name: '噬嗑',
    fullName: '火雷噬嗑',
    pinyin: 'shì hé',
    guaCi: '噬嗑，亨。利用狱。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '屦校灭趾，无咎。'),
      line(1, 0, '噬肤灭鼻，无咎。'),
      line(2, 0, '噬腊肉，遇毒。小吝，无咎。'),
      line(3, 1, '噬干胏，得金矢。利艰贞，吉。'),
      line(4, 0, '噬干肉，得黄金。贞厉，无咎。'),
      line(5, 1, '何校灭耳，凶。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 22. 山火贲 (bì) ────────────────────────────────────────────────
const bi2Hex = (() => {
  const upper = TRIGRAMS[TrigramName.GEN];
  const lower = TRIGRAMS[TrigramName.LI];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 22,
    binary,
    name: '贲',
    fullName: '山火贲',
    pinyin: 'bì',
    guaCi: '贲，亨。小利有攸往。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '贲其趾，舍车而徒。'),
      line(1, 0, '贲其须。'),
      line(2, 1, '贲如濡如，永贞吉。'),
      line(3, 0, '贲如皤如，白马翰如。匪寇婚媾。'),
      line(4, 0, '贲于丘园，束帛戋戋，吝，终吉。'),
      line(5, 1, '白贲，无咎。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 23. 山地剥 (bō) ────────────────────────────────────────────────
const boHex = (() => {
  const upper = TRIGRAMS[TrigramName.GEN];
  const lower = TRIGRAMS[TrigramName.KUN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 23,
    binary,
    name: '剥',
    fullName: '山地剥',
    pinyin: 'bō',
    guaCi: '剥，不利有攸往。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '剥床以足，蔑贞凶。'),
      line(1, 0, '剥床以辨，蔑贞凶。'),
      line(2, 0, '剥之，无咎。'),
      line(3, 0, '剥床以肤，凶。'),
      line(4, 0, '贯鱼以宫人宠，无不利。'),
      line(5, 1, '硕果不食，君子得舆，小人剥庐。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 24. 地雷复 (fù) ────────────────────────────────────────────────
const fuHex = (() => {
  const upper = TRIGRAMS[TrigramName.KUN];
  const lower = TRIGRAMS[TrigramName.ZHEN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 24,
    binary,
    name: '复',
    fullName: '地雷复',
    pinyin: 'fù',
    guaCi: '复，亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '不远复，无祗悔，元吉。'),
      line(1, 0, '休复，吉。'),
      line(2, 0, '频复，厉，无咎。'),
      line(3, 0, '中行独复。'),
      line(4, 0, '敦复，无悔。'),
      line(5, 0, '迷复，凶，有灾眚。用行师，终有大败，以其国君凶，至于十年不克征。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 25. 天雷无妄 (wú wàng) ────────────────────────────────────────
const wuWangHex = (() => {
  const upper = TRIGRAMS[TrigramName.QIAN];
  const lower = TRIGRAMS[TrigramName.ZHEN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 25,
    binary,
    name: '无妄',
    fullName: '天雷无妄',
    pinyin: 'wú wàng',
    guaCi: '无妄，元亨利贞。其匪正有眚，不利有攸往。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '无妄，往吉。'),
      line(1, 0, '不耕获，不菑畬，则利有攸往。'),
      line(2, 0, '无妄之灾，或系之牛，行人之得，邑人之灾。'),
      line(3, 1, '可贞，无咎。'),
      line(4, 1, '无妄之疾，勿药有喜。'),
      line(5, 1, '无妄，行有眚，无攸利。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 26. 山天大畜 (dà chù) ─────────────────────────────────────────
const daChuHex = (() => {
  const upper = TRIGRAMS[TrigramName.GEN];
  const lower = TRIGRAMS[TrigramName.QIAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 26,
    binary,
    name: '大畜',
    fullName: '山天大畜',
    pinyin: 'dà chù',
    guaCi: '大畜，利贞。不家食吉，利涉大川。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '有厉，利已。'),
      line(1, 1, '舆说輹。'),
      line(2, 1, '良马逐，利艰贞。曰闲舆卫，利有攸往。'),
      line(3, 0, '童牛之牿，元吉。'),
      line(4, 0, '豮豕之牙，吉。'),
      line(5, 1, '何天之衢，亨。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 27. 山雷颐 (yí) ────────────────────────────────────────────────
const yiHex = (() => {
  const upper = TRIGRAMS[TrigramName.GEN];
  const lower = TRIGRAMS[TrigramName.ZHEN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 27,
    binary,
    name: '颐',
    fullName: '山雷颐',
    pinyin: 'yí',
    guaCi: '颐，贞吉。观颐，自求口实。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '舍尔灵龟，观我朵颐，凶。'),
      line(1, 0, '颠颐，拂经于丘颐，征凶。'),
      line(2, 0, '拂颐，贞凶，十年勿用，无攸利。'),
      line(3, 0, '颠颐，吉。虎视眈眈，其欲逐逐，无咎。'),
      line(4, 0, '拂经，居贞吉，不可涉大川。'),
      line(5, 1, '由颐，厉吉，利涉大川。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 28. 泽风大过 (dà guò) ─────────────────────────────────────────
const daGuoHex = (() => {
  const upper = TRIGRAMS[TrigramName.DUI];
  const lower = TRIGRAMS[TrigramName.XUN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 28,
    binary,
    name: '大过',
    fullName: '泽风大过',
    pinyin: 'dà guò',
    guaCi: '大过，栋桡。利有攸往，亨。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '藉用白茅，无咎。'),
      line(1, 1, '枯杨生稊，老夫得其女妻，无不利。'),
      line(2, 1, '栋桡，凶。'),
      line(3, 1, '栋隆，吉。有它吝。'),
      line(4, 1, '枯杨生华，老妇得其士夫，无咎无誉。'),
      line(5, 0, '过涉灭顶，凶，无咎。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 29. 坎为水 (kǎn) ──────────────────────────────────────────────
const kanHex = (() => {
  const upper = TRIGRAMS[TrigramName.KAN];
  const lower = TRIGRAMS[TrigramName.KAN];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 29,
    binary,
    name: '坎',
    fullName: '坎为水',
    pinyin: 'kǎn',
    guaCi: '习坎，有孚，维心亨，行有尚。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '习坎，入于坎窞，凶。'),
      line(1, 1, '坎有险，求小得。'),
      line(2, 0, '来之坎坎，险且枕，入于坎窞，勿用。'),
      line(3, 0, '樽酒簋贰，用缶，纳约自牖，终无咎。'),
      line(4, 1, '坎不盈，祗既平，无咎。'),
      line(5, 0, '系用徽纆，寘于丛棘，三岁不得，凶。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── 30. 离为火 (lí) ────────────────────────────────────────────────
const liHex = (() => {
  const upper = TRIGRAMS[TrigramName.LI];
  const lower = TRIGRAMS[TrigramName.LI];
  const binary = (upper.binary << 3) | lower.binary;
  return {
    kingWenNumber: 30,
    binary,
    name: '离',
    fullName: '离为火',
    pinyin: 'lí',
    guaCi: '离，利贞，亨。畜牝牛，吉。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '履错然，敬之无咎。'),
      line(1, 0, '黄离，元吉。'),
      line(2, 1, '日昃之离，不鼓缶而歌，则大耋之嗟，凶。'),
      line(3, 1, '突如其来如，焚如，死如，弃如。'),
      line(4, 0, '出涕沱若，戚嗟若，吉。'),
      line(5, 1, '王用出征，有嘉折首，获匪其丑，无咎。'),
    ] as [LineData, LineData, LineData, LineData, LineData, LineData],
  };
})();

// ─── Export ─────────────────────────────────────────────────────────
export const HEXAGRAMS_PART_1: HexagramData[] = [
  qianHex,
  kunHex,
  zhunHex,
  mengHex,
  xuHex,
  songHex,
  shiHex,
  biHex,
  xiaoChuHex,
  lvHex,
  taiHex,
  piHex,
  tongRenHex,
  daYouHex,
  qian2Hex,
  yuHex,
  suiHex,
  guHex,
  linHex,
  guanHex,
  shiHeHex,
  bi2Hex,
  boHex,
  fuHex,
  wuWangHex,
  daChuHex,
  yiHex,
  daGuoHex,
  kanHex,
  liHex,
];
