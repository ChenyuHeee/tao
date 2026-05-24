import { TrigramName, type HexagramData, type LineData } from '../types';
import { TRIGRAMS } from './trigrams';

function line(index: number, yinYang: 0 | 1, yaoCi: string, translation?: string): LineData {
  const yangNames = ['初九', '九二', '九三', '九四', '九五', '上九'];
  const yinNames = ['初六', '六二', '六三', '六四', '六五', '上六'];
  return {
    index,
    name: yinYang === 1 ? yangNames[index] : yinNames[index],
    yaoCi,
    translation,
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
    guaCiTranslation: '创始通达，适宜持守正道。这是六十四卦中最吉祥的卦辞之一，象征事物处于蓬勃发展的最佳状态。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '潜龙勿用。', '像潜伏的龙一样暂时不要轻举妄动，应当先积蓄力量、等待合适的时机。'),
      line(1, 1, '见龙在田，利见大人。', '龙已出现在田野之上，才能开始显现，适宜去拜访有德有位的贵人，寻求指导。'),
      line(2, 1, '君子终日乾乾，夕惕若厉，无咎。', '有德之人终日勤奋不懈，到了晚上仍然保持警惕谨慎，这样即使面临风险也不会出大问题。'),
      line(3, 1, '或跃在渊，无咎。', '可以尝试跃出深渊，也可以暂时留在渊中，进退都有余地，不会有过失。'),
      line(4, 1, '飞龙在天，利见大人。', '龙已飞腾于天空，才能得以充分施展，此时处于最好的位置。传统上认为这是最理想的爻位。'),
      line(5, 1, '亢龙有悔。', '龙飞得太高已经过度，事物走到极端后可能出现逆转，提示应当适可而止。'),
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
    guaCiTranslation: '通达顺利，适宜像母马那样柔顺而坚定地前行。有德之人若有所行动，起初可能会感到迷茫，随后会找到方向。西南方可以得到朋友帮助，东北方则可能失去朋友。保持安稳守正则吉祥。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '履霜，坚冰至。', '脚踩到霜，就知道坚冰即将到来。提示要善于从细微的迹象中预见未来的趋势。'),
      line(1, 0, '直方大，不习无不利。', '内心正直、行为端方、胸怀广大，即使不刻意学习也自然顺利。这是大地之德的体现。'),
      line(2, 0, '含章可贞。或从王事，无成有终。', '怀藏才华而不显露，可以持守正道。若辅佐君王做事，不必居功自傲，但求善始善终。'),
      line(3, 0, '括囊，无咎无誉。', '像扎紧口袋一样谨慎收敛言行，这样虽然没有赞誉，但也不会招惹过失。提示在敏感时期谨言慎行。'),
      line(4, 0, '黄裳元吉。', '穿着黄色衣裳（黄色是中和之色），保持谦逊中正，这是最为吉祥的状态。'),
      line(5, 0, '龙战于野，其血玄黄。', '龙在野外相斗，流出青黄相杂的血。提示阴阳失衡到了极致会产生冲突和对立。'),
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
    guaCiTranslation: '创始、通达、适宜持守正道。不宜急于向前行动。适宜建立稳固的根基、培植自己的力量与支持者。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '磐桓，利居贞，利建侯。', '像大石压住草木一样暂且徘徊不前，适宜安稳守正，适宜先打好基础。'),
      line(1, 0, '屯如邅如，乘马班如。匪寇婚媾，女子贞不字，十年乃字。', '前进的道路艰难徘徊，像骑马原地打转。来者并非贼寇而是求婚之人，但女子坚守正道不愿出嫁，过了很久才应允。提示有些事情急不得。'),
      line(2, 0, '即鹿无虞，惟入于林中，君子几不如舍，往吝。', '追逐鹿却没有虞人（熟悉山林的人）引导，只会迷失在森林中。明智的人知道见机行事不如暂时放弃，贸然前往反而不好。'),
      line(3, 0, '乘马班如，求婚媾，往吉，无不利。', '骑马徘徊犹豫，最终决定前去求婚。勇敢前往是吉利的，不会有什么不利。'),
      line(4, 1, '屯其膏，小贞吉，大贞凶。', '在艰难时期要积蓄恩泽与资源。做小事坚守正道是吉利的，但在大事上固执己见则可能不利。'),
      line(5, 0, '乘马班如，泣血涟如。', '骑在马上徘徊不前，哭得血泪涟涟。提示走到了极端困境，情绪崩溃却无济于事，需要调整心态。'),
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
    guaCiTranslation: '通达。不是我去求幼童来学习，而是幼童主动求教于我。初次来问可以告知，再三来问就成了轻慢不敬，轻慢就不再告知。适宜持守正道。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '发蒙，利用刑人，用说桎梏，以往吝。', '启发蒙昧，适宜以规矩法度来约束，帮人摆脱束缚。但操之过急反而不妥。'),
      line(1, 1, '包蒙，吉。纳妇，吉。子克家。', '以包容心态对待蒙昧之人，吉祥。娶妻吉祥。子女能够持家。提示包容与耐心是启蒙之道。'),
      line(2, 0, '勿用取女，见金夫，不有躬，无攸利。', '不要娶这样的女子——她见到有钱有势的人就失去了自己的主见和操守，这样做没有任何好处。提示保持独立判断。'),
      line(3, 0, '困蒙，吝。', '困在蒙昧之中走不出来，处境堪忧。提示如果自己不求学、不向外求教，便会一直困在无知中。'),
      line(4, 0, '童蒙，吉。', '像孩童一样虚心受教，这是吉利的。保持谦逊好学的态度，不会有什么问题。'),
      line(5, 1, '击蒙，不利为寇，利御寇。', '用强力手段来破除蒙昧，不宜主动去侵犯别人，但适宜用来防御外来的侵扰。提示教育也要有适当的界限。'),
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
    guaCiTranslation: '心怀诚信，前景光明而通达，持守正道则吉祥。适宜去渡过大河大川（做大事）。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '需于郊，利用恒，无咎。', '在郊外等待，适宜保持耐心和恒心，不会有过失。'),
      line(1, 1, '需于沙，小有言，终吉。', '在沙滩上等待，可能会有一些闲言碎语，但最终是吉利的。'),
      line(2, 1, '需于泥，致寇至。', '在泥沼中等待，可能会招来麻烦或对立之人。提示等待的位置也很重要。'),
      line(3, 0, '需于血，出自穴。', '在血泊中等待，从洞穴中出来。提示即使在艰难危险的处境中，也要保持定力，总能走出来。'),
      line(4, 1, '需于酒食，贞吉。', '在酒食宴饮中等待，持守正道则吉祥。提示在安逸中也应保持清醒。'),
      line(5, 0, '入于穴，有不速之客三人来，敬之终吉。', '回到洞穴中，有不请自来的三位客人，以礼相待最终会吉利。'),
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
    guaCiTranslation: '诚信受到阻滞而需要警惕，中途可能有好转，但若坚持争讼到底则不利。适宜找公正的权威人士来调解，不宜贸然采取重大行动。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '不永所事，小有言，终吉。', '不要长时间纠缠于争讼之事，虽然会有一些口舌之争，但及早收手终归是好的。'),
      line(1, 1, '不克讼，归而逋，其邑人三百户，无眚。', '争讼未能取胜，回去躲避起来。在一个小地方安居，不会有灾祸。'),
      line(2, 0, '食旧德，贞厉，终吉。或从王事，无成。', '安享现有的德行和福报，持守正道虽然艰难但终归吉祥。若辅佐君王争讼，则不会有成果。'),
      line(3, 1, '不克讼，复即命，渝安贞，吉。', '争讼不能取胜，回归到自己的本分中去，转变态度安守正道，这样是吉利的。'),
      line(4, 1, '讼，元吉。', '裁决争讼，大吉。处于公正裁决的位置，能够以理服人。'),
      line(5, 1, '或锡之鞶带，终朝三褫之。', '即使被赐予了官服和腰带，一天之内也会被三次剥夺。提示靠争讼得来的东西是不稳固的。'),
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
    guaCiTranslation: '持守正道，有德高望重的长者统领会吉祥，不会有过失。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '师出以律，否臧凶。', '军队出征必须有纪律约束，若纪律涣散则凶险。'),
      line(1, 1, '在师中，吉无咎，王三锡命。', '身在军中指挥得当，吉利而不会有过失，君王再三褒奖委以重任。'),
      line(2, 0, '师或舆尸，凶。', '军队可能载着尸体回来，凶险。提示用人不当会导致惨重的失败。'),
      line(3, 0, '师左次，无咎。', '军队退后驻扎，没有过失。提示有时退守是正确的选择。'),
      line(4, 0, '田有禽，利执言，无咎。长子帅师，弟子舆尸，贞凶。', '田中有猎物，适宜果断行动。但需要合适的人来统兵——若让不合适的人来率领，即使目标是正当的也会出问题。'),
      line(5, 0, '大君有命，开国承家，小人勿用。', '君王颁布命令，封赏功臣立国建家。但要记住：不可重用德行不够的人。'),
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
    guaCiTranslation: '吉祥。再三考量，从始至终持守正道则无过失。那些不安宁的人会前来归附，迟疑不决落在最后的人反而不利。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '有孚比之，无咎。有孚盈缶，终来有它，吉。', '以诚信去亲近归附，不会有过失。诚信满满如同装满的酒坛，最终会有意料之外的好事。'),
      line(1, 0, '比之自内，贞吉。', '发自内心地亲近归附，持守正道则吉祥。'),
      line(2, 0, '比之匪人。', '亲近了不该亲近的人。提示择人而交要审慎。'),
      line(3, 0, '外比之，贞吉。', '向外去亲近贤德之人，持守正道则吉祥。'),
      line(4, 1, '显比，王用三驱，失前禽。邑人不诫，吉。', '光明正大地亲附。君王打猎时网开一面，放走前面的猎物，百姓不会恐慌，这样是吉利的。'),
      line(5, 0, '比之无首，凶。', '想要亲附却没有带头之人，没有方向和归属，这种状态是不利的。'),
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
    guaCiTranslation: '通达。乌云密布却不下雨，从西郊飘来。象征力量在积蓄但时机尚未成熟。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '复自道，何其咎，吉。', '回归到自己的道路上来，这有什么错呢？吉祥。'),
      line(1, 1, '牵复，吉。', '被牵引着回归正道，吉祥。'),
      line(2, 1, '舆说辐，夫妻反目。', '车子的辐条脱落了，夫妻之间争吵反目。提示小事积累起来也可能导致关系的破裂。'),
      line(3, 0, '有孚，血去惕出，无咎。', '心怀诚信，远离伤害和恐惧，不会有过失。'),
      line(4, 1, '有孚挛如，富以其邻。', '以诚信凝聚人心，与周围的人共同分享富足。'),
      line(5, 1, '既雨既处，尚德载。妇贞厉。月几望，君子征凶。', '雨已经下过了，也停了下来。此时应当以德载物。像妇人过于执拗、月亮快要圆满时一样，坚持前行反而是不利的。提示满则溢、盛则衰。'),
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
    guaCiTranslation: '踩到了老虎的尾巴，但老虎并没有咬人，通达。象征小心谨慎地行事，即使处于险境也能化险为夷。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '素履，往无咎。', '以朴素本真的态度前行，不会有过失。'),
      line(1, 1, '履道坦坦，幽人贞吉。', '走在平坦的大道上，隐退之人持守正道也吉祥。'),
      line(2, 0, '眇能视，跛能履，履虎尾，咥人，凶。武人为于大君。', '眼睛不好却偏要去看，脚不好却偏要去走。踩到虎尾而被咬伤，凶险。像武夫去充当君王一样不恰当。'),
      line(3, 1, '履虎尾，愬愬终吉。', '踩到了虎尾，小心谨慎、战战兢兢，最终是吉利的。提示保持敬畏。'),
      line(4, 1, '夬履，贞厉。', '决断地前行，持守正道但仍有风险。提示虽在尊位也要慎重。'),
      line(5, 1, '视履考祥，其旋元吉。', '回头审视自己的行为和走过的路，总结经验教训，是大吉大利的。'),
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
    guaCiTranslation: '小的离去而大的到来，吉祥而通达。这是天地交通、阴阳和合的卦象，象征万事顺遂的时期。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '拔茅茹，以其汇，征吉。', '拔茅草时连根带出了一大片，因为它们根部相连。结伴同行出征是吉利的。'),
      line(1, 1, '包荒，用冯河，不遐遗，朋亡，得尚于中行。', '胸怀宽广如包容大川，即使徒步涉水过河也不会遗落什么。不计较私交亲疏，坚守中道反而更受尊重。'),
      line(2, 1, '无平不陂，无往不复，艰贞无咎。勿恤其孚，于食有福。', '没有一直平坦而不倾斜的路，也没有只去不回的旅程。在艰难中持守正道则无过失。不必担心诚信不被认可，生活会有福气。'),
      line(3, 0, '翩翩，不富以其邻，不戒以孚。', '轻松自在地往来，不以财富炫耀邻里，无需戒备，以诚相待。'),
      line(4, 0, '帝乙归妹，以祉元吉。', '商王帝乙嫁女，以此获得福祉，非常吉祥。提示以上位者屈尊联姻的姿态来达成和谐。'),
      line(5, 0, '城复于隍，勿用师。自邑告命，贞吝。', '城墙倒塌回到壕沟之中，不要动用军队。在自己的城邑中发布命令，勉强持守也有困难。提示盛极而衰时不宜硬撑。'),
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
    guaCiTranslation: '阻塞不通的时期，对于有德之人来说处境不利。大的离去而小的到来，是非颠倒、正气不彰的时候。提示此时应当收敛退守。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '拔茅茹，以其汇，贞吉亨。', '拔茅草连根带出一片，根根相连。持守正道则吉祥通达。提示在困难时期要与志同道合者在一起。'),
      line(1, 0, '包承，小人吉，大人否亨。', '包容承顺，对于普通人来说是吉利的，但对于有志向有德行的人来说处境不利——接受现实反得通达。'),
      line(2, 0, '包羞。', '包藏羞耻。提示在逆境中可能要忍受屈辱。'),
      line(3, 1, '有命无咎，畴离祉。', '顺应时运的安排，不会有过失。与同伴一起可以得到福祉。'),
      line(4, 1, '休否，大人吉。其亡其亡，系于苞桑。', '阻塞的局面即将结束，有德之人迎来吉利。但不可大意，要像把东西系在坚韧的桑枝上一样随时警惕，因为危险随时可能回来。'),
      line(5, 1, '倾否，先否后喜。', '彻底颠覆了阻塞的局面，起初艰难而后迎来喜悦。提示否极泰来，坚持到底。'),
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
    guaCiTranslation: '在广阔的野外与人聚合，通达。适宜做大事，适宜有德之人持守正道。象征志同道合者走到一起。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '同人于门，无咎。', '在门内与人聚合，没有过失。从小范围开始团结。'),
      line(1, 0, '同人于宗，吝。', '只在宗族内部与人聚合，格局太小，不利。提示不要局限于小圈子。'),
      line(2, 1, '伏戎于莽，升其高陵，三岁不兴。', '在草丛中埋伏兵力，登高侦查，却多年不敢行动。提示猜疑和防备阻碍了真正的合作。'),
      line(3, 1, '乘其墉，弗克攻，吉。', '登上了城墙，但没有强行攻击，吉祥。提示克制冲动而选择和平。'),
      line(4, 1, '同人先号咷而后笑，大师克相遇。', '聚合的人起初因不和而大哭，但后来开怀大笑。因为大军终于相遇，克服了障碍。'),
      line(5, 1, '同人于郊，无悔。', '在郊外与人聚合，虽然规模有限，但心中无悔。'),
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
    guaCiTranslation: '最为通达。象征拥有丰盛的资源和力量，是大吉之卦。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '无交害，匪咎，艰则无咎。', '没有交往就不会受到伤害，这不是过错。保持艰苦朴素的心态就不会有过失。'),
      line(1, 1, '大车以载，有攸往，无咎。', '用大车装载财物前行，行动没有过失。提示准备好才能远行。'),
      line(2, 1, '公用亨于天子，小人弗克。', '公侯向天子进献贡品，普通人做不到这一点。提示在丰盛时不忘尊上感恩。'),
      line(3, 1, '匪其彭，无咎。', '不自鸣得意、不炫耀张扬，就不会有错。'),
      line(4, 0, '厥孚交如，威如，吉。', '以诚信待人交往，同时保持适度的威严，吉祥。'),
      line(5, 1, '自天佑之，吉无不利。', '得到上天的护佑，吉祥，没有什么不利的。提示真正的富有来自于顺应天道。'),
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
    guaCiTranslation: '通达，有德之人能有好的结果。谦卦是六十四卦中唯一六爻全吉的卦，象征谦逊的美德。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '谦谦君子，用涉大川，吉。', '最为谦逊的君子，用这样的态度去渡大河做大事，吉祥。'),
      line(1, 0, '鸣谦，贞吉。', '以谦逊闻名，持守正道则吉祥。'),
      line(2, 1, '劳谦君子，有终吉。', '勤劳而又谦逊的君子，有好的结局，吉祥。'),
      line(3, 0, '无不利，撝谦。', '没有什么不利，发挥谦逊的美德。'),
      line(4, 0, '不富以其邻，利用侵伐，无不利。', '不以财富而骄傲地对待邻居，若不得已去征伐也是可以的，没有不利。'),
      line(5, 0, '鸣谦，利用行师，征邑国。', '以谦逊闻名，适宜出兵征伐自己的城邑（矫正自己内部的问题）。'),
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
    guaCiTranslation: '适宜建立诸侯基业、出动军队。象征安逸愉悦的时期，但不可以沉溺其中，要有所作为。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '鸣豫，凶。', '以安逸享乐而自鸣得意，凶险。'),
      line(1, 0, '介于石，不终日，贞吉。', '坚如磐石般有定力，不终日沉溺于享乐，持守正道则吉祥。'),
      line(2, 0, '盱豫，悔。迟有悔。', '谄媚地贪图享乐，会有悔恨。迟疑不决也会有悔恨。'),
      line(3, 1, '由豫，大有得。勿疑，朋盍簪。', '带来安逸与快乐的源头，大有收获。不要猜疑，朋友们会像簪子束发一样聚集在一起。'),
      line(4, 0, '贞疾，恒不死。', '持守正道也要面对问题，但能长久地坚持下去，不至于倒下。'),
      line(5, 0, '冥豫，成有渝，无咎。', '沉溺于安逸享乐到昏昧的地步，如果能及时改变就不会有大的过失。'),
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
    guaCiTranslation: '创始通达，适宜持守正道，没有过失。象征随机应变、顺势而为。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '官有渝，贞吉。出门交有功。', '职务有所变动，持守正道则吉祥。外出与人交往会有收获。'),
      line(1, 0, '系小子，失丈夫。', '依附了小人，就会失去君子。提示选择跟随谁很重要。'),
      line(2, 0, '系丈夫，失小子。随有求得，利居贞。', '依附了成熟可靠的人，虽然失去了小人但也无妨。跟随正道会有所得，适宜安守正道。'),
      line(3, 1, '随有获，贞凶。有孚在道，以明，何咎。', '跟随此人有所收获，但持守正道反而有风险。如果心怀诚信、行于正道、光明磊落，又有什么过失呢？'),
      line(4, 1, '孚于嘉，吉。', '诚信地追随善美的人和事，吉祥。'),
      line(5, 0, '拘系之，乃从维之，王用亨于西山。', '紧紧束缚了又松开，君王在西山祭祀。提示事情到了尽头，该放手时要放手。'),
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
    guaCiTranslation: '最为通达，适宜做大事业。需要在事情开始前三天做好规划，事情开始后三天继续跟进。象征整治腐败、革除弊病。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '干父之蛊，有子，考无咎，厉终吉。', '纠正父辈留下的弊病，有这样的儿子，先辈就不会受责难。虽然有风险但最终吉祥。'),
      line(1, 1, '干母之蛊，不可贞。', '处理母亲留下的问题，不可过于生硬固执。提示处理事务需要灵活变通。'),
      line(2, 1, '干父之蛊，小有悔，无大咎。', '纠正父辈的问题，可能有些小的遗憾，但不会有大的过失。'),
      line(3, 0, '裕父之蛊，往见吝。', '对父辈遗留的弊病采取宽容放任的态度，这样下去是会出问题的。'),
      line(4, 0, '干父之蛊，用誉。', '妥善地纠正父辈遗留的问题，因此而获得赞誉。'),
      line(5, 1, '不事王侯，高尚其事。', '不侍奉王侯，以高尚的志趣行事。提示有些事情超越了世俗的功名利禄。'),
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
    guaCiTranslation: '创始通达，适宜持守正道。但到了八月可能会有不利。象征事物的发展有盛衰消长的规律，需要提前预判。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '咸临，贞吉。', '以感化的方式临下管理，持守正道则吉祥。'),
      line(1, 1, '咸临，吉无不利。', '以感化之道临下管理，吉利而没有什么不利。'),
      line(2, 0, '甘临，无攸利。既忧之，无咎。', '以甜言蜜语取悦于人的方式管理是没有好处的。若能对此感到忧虑而改正，则无过失。'),
      line(3, 0, '至临，无咎。', '亲自到现场去管理，与下属亲近，没有过失。'),
      line(4, 0, '知临，大君之宜，吉。', '以智慧来管理，这是英明君主的做法，吉祥。'),
      line(5, 0, '敦临，吉无咎。', '以敦厚的态度来管理，吉利而没有过失。'),
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
    guaCiTranslation: '祭祀时洗净了手但尚未献上祭品，心怀虔诚庄重。象征以观察和敬畏的态度来面对事物。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '童观，小人无咎，君子吝。', '像孩童一样幼稚地观察事物，对于普通人来说不算什么错，但对于担当大任的人而言是不够的。'),
      line(1, 0, '窥观，利女贞。', '从门缝中窥视，视野狭窄。适宜女子持守正道（但对于男子则格局太小）。'),
      line(2, 0, '观我生，进退。', '观察自己的处境和行为，以此决定进退取舍。'),
      line(3, 0, '观国之光，利用宾于王。', '观察国家的光明与繁荣，适宜作为宾客辅佐君王。'),
      line(4, 1, '观我生，君子无咎。', '审察自己的行为，有德之人不会有过失。'),
      line(5, 1, '观其生，君子无咎。', '观察他人的生活方式和处境，有德之人不会有过失。'),
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
    guaCiTranslation: '通达，适宜处理刑狱和纠纷。象征咬合与决断，去除障碍。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '屦校灭趾，无咎。', '脚上戴着刑具遮住了脚趾，但没有大的过失。提示小惩大诫。'),
      line(1, 0, '噬肤灭鼻，无咎。', '咬到了皮肤，遮住了鼻子，没有过失。提示处理问题要果断。'),
      line(2, 0, '噬腊肉，遇毒。小吝，无咎。', '咬到了腊肉，遇到了毒。有些小的遗憾但无大的过失。提示处理难题时会遇到阻碍。'),
      line(3, 1, '噬干胏，得金矢。利艰贞，吉。', '咬带骨的干肉，得到了金属箭头。适宜在艰难中持守正道，吉祥。'),
      line(4, 0, '噬干肉，得黄金。贞厉，无咎。', '咬干肉而得到了黄金。持守正道有风险但没有过失。'),
      line(5, 1, '何校灭耳，凶。', '肩上戴着枷锁遮住了耳朵，凶险。提示惩罚到了极致而不知悔改。'),
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
    guaCiTranslation: '通达，小事上有所前行是有利的。象征文饰与美化，但不可过于浮华。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '贲其趾，舍车而徒。', '装饰好自己的脚，舍弃车子而步行。提示质朴的自我约束比外在的排场更有价值。'),
      line(1, 0, '贲其须。', '装饰自己的胡须。象征只在表面上下工夫。'),
      line(2, 1, '贲如濡如，永贞吉。', '润泽而有光彩，长久持守正道则吉祥。'),
      line(3, 0, '贲如皤如，白马翰如。匪寇婚媾。', '素白如雪的装饰，骑着白马飞驰而来。来者不是强盗而是来求婚的。提示返璞归真。'),
      line(4, 0, '贲于丘园，束帛戋戋，吝，终吉。', '在田园中进行朴素的装饰，只用少许布帛。虽然看似寒酸但终归是吉祥的。'),
      line(5, 1, '白贲，无咎。', '以纯白来装饰，返璞归真，没有过失。提示最高的装饰就是不加装饰。'),
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
    guaCiTranslation: '不宜有所前往和行动。象征阳气被层层剥蚀、阴盛阳衰的时期，应当退守等待。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '剥床以足，蔑贞凶。', '从床脚开始剥落，动摇了根基，失去了正道则凶险。'),
      line(1, 0, '剥床以辨，蔑贞凶。', '剥落到了床的中间部分，进一步侵蚀了基础，失去正道更危险。'),
      line(2, 0, '剥之，无咎。', '在剥落的过程中能保持清醒独立，不会有大的过失。'),
      line(3, 0, '剥床以肤，凶。', '剥落到了床面上，已经触及皮肤，凶险。提示损害已经到了切身的地步。'),
      line(4, 0, '贯鱼以宫人宠，无不利。', '像鱼贯而入一样有序地安排事务，以柔顺之道处世，不会有什么不利。'),
      line(5, 1, '硕果不食，君子得舆，小人剥庐。', '丰硕的果实没有被吃，有德之人得到车乘（受人拥戴），而普通人却连屋舍都被剥离了。提示在衰落时，有德者仍能得到拥护。'),
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
    guaCiTranslation: '通达。出入没有障碍，朋友来了也没有问题。循环往复是自然的规律，七天一个周期就会恢复。适宜有所行动。象征一阳来复、否极泰来。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '不远复，无祗悔，元吉。', '走得不远就回来了，不会有大的悔恨，大吉。提示及时回头。'),
      line(1, 0, '休复，吉。', '自然而然回归正道，吉祥。提示顺势而返。'),
      line(2, 0, '频复，厉，无咎。', '屡次反复，虽有风险但无大的过失。提示需要坚持不懈地修正。'),
      line(3, 0, '中行独复。', '在行进中独自回归正道。提示即使众人皆醉也要独自从善。'),
      line(4, 0, '敦复，无悔。', '以敦厚笃实的态度回归，没有悔恨。'),
      line(5, 0, '迷复，凶，有灾眚。用行师，终有大败，以其国君凶，至于十年不克征。', '迷失了回归的路，凶险，会有灾祸。此时若出兵，最终必然惨败。因为连国君都迷失了方向，十年之内都无法恢复力量。'),
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
    guaCiTranslation: '创始通达，适宜持守正道。如果动机不纯就会有问题，不宜贸然前行。象征顺其自然、不妄为。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '无妄，往吉。', '保持不妄为的心态前行，吉祥。'),
      line(1, 0, '不耕获，不菑畬，则利有攸往。', '不耕种却想收获，不开荒却想得到良田，这样是不行的。提示要脚踏实地。'),
      line(2, 0, '无妄之灾，或系之牛，行人之得，邑人之灾。', '无缘无故的灾祸。有人把牛系在那里，过路的人牵走了，村里的人反而被怀疑。提示有时候倒霉是完全没有道理的。'),
      line(3, 1, '可贞，无咎。', '可以持守正道，没有过失。'),
      line(4, 1, '无妄之疾，勿药有喜。', '没有原因而得的小病，不用吃药自然会好。提示有些问题不用过度干预。'),
      line(5, 1, '无妄，行有眚，无攸利。', '虽然没有妄念，但若勉强行动也会有麻烦，没有任何好处。提示时机不对时不要硬来。'),
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
    guaCiTranslation: '适宜持守正道。不在家中吃闲饭（而出仕为国家效力），吉祥。适宜做大事。象征积蓄力量以图大业。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '有厉，利已。', '有风险，适宜暂时停下来。提示先积蓄再出发。'),
      line(1, 1, '舆说輹。', '车子的轮轴脱落了。提示力量还不够时不要勉强前行。'),
      line(2, 1, '良马逐，利艰贞。曰闲舆卫，利有攸往。', '良马奔驰追逐，适宜在艰难中持守正道。平时要练习驾车和护卫的技术，准备好了再行动。'),
      line(3, 0, '童牛之牿，元吉。', '给小牛戴上横木（防止它顶人），大吉。提示从小处开始约束防范。'),
      line(4, 0, '豮豕之牙，吉。', '阉猪的牙齿（虽然长但不再有攻击性），吉祥。提示从根本上化解问题。'),
      line(5, 1, '何天之衢，亨。', '通达于天的大道，四通八达。提示积蓄到了极点，一切都畅通无阻。'),
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
    guaCiTranslation: '持守正道则吉祥。观察一个人的饮食习惯和养生之道，反观自己如何获取生活所需。象征养育与自养。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '舍尔灵龟，观我朵颐，凶。', '舍弃你自己的灵龟智慧，却来看我咀嚼食物，这是不吉利的。提示不要舍本逐末。'),
      line(1, 0, '颠颐，拂经于丘颐，征凶。', '颠倒养育之道，违背常理，到高处去寻求养料，前行有风险。'),
      line(2, 0, '拂颐，贞凶，十年勿用，无攸利。', '违背了养育之道，即使持守正道也有风险。长期都不要这样做，没有任何好处。'),
      line(3, 0, '颠颐，吉。虎视眈眈，其欲逐逐，无咎。', '颠倒而养育（居上而养下），吉祥。像老虎一样专注地看护，欲望适当收敛，就没有过失。'),
      line(4, 0, '拂经，居贞吉，不可涉大川。', '虽然有些违背常理，但安居守正则吉祥。此时不宜做大事。'),
      line(5, 1, '由颐，厉吉，利涉大川。', '由他（上九）来养育天下，虽有风险但吉祥，适宜去做大事。'),
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
    guaCiTranslation: '栋梁弯曲变形了，但适宜有所行动，通达。象征事情已经超出了正常状态，需要采取非常措施。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '藉用白茅，无咎。', '用白茅草来垫底，谨慎到极致，没有过失。提示在非常时期要加倍谨慎。'),
      line(1, 1, '枯杨生稊，老夫得其女妻，无不利。', '枯老的杨树发出了新芽，年老的男子娶了年轻的妻子，没有什么不利。提示反常之中也有新的生机。'),
      line(2, 1, '栋桡，凶。', '栋梁过度弯曲了，凶险。提示独自承担太重会出问题。'),
      line(3, 1, '栋隆，吉。有它吝。', '栋梁向上隆起，吉祥。但若有其他意外因素介入则可能有麻烦。'),
      line(4, 1, '枯杨生华，老妇得其士夫，无咎无誉。', '枯老的杨树开了花，年老的妇人嫁给了年轻的丈夫。既无过失也无赞誉。提示反常之事虽无害但也不值得推崇。'),
      line(5, 0, '过涉灭顶，凶，无咎。', '涉水过深淹没了头顶，凶险。但这不是他的过错（而是形势所迫）。提示有些困境是环境造成的。'),
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
    guaCiTranslation: '重重险阻，内心保持诚信，则心中通达，行动会有所成。象征在险难中保持内心坚定。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 0, '习坎，入于坎窞，凶。', '在重重险阻中，又掉进了陷阱的深处，凶险。'),
      line(1, 1, '坎有险，求小得。', '险境中有危险，但只求小的收获是可以的。提示在险中不要贪大。'),
      line(2, 0, '来之坎坎，险且枕，入于坎窞，勿用。', '来到这个地方到处都是险阻，陷入了重重危机之中，此时不要轻举妄动。'),
      line(3, 0, '樽酒簋贰，用缶，纳约自牖，终无咎。', '用简单的酒食和瓦器，从窗户中递进去，以最简朴的方式沟通，最终没有过失。提示在险中真诚比排场更重要。'),
      line(4, 1, '坎不盈，祗既平，无咎。', '险阻并未填满，但最危险的时候已经过去，没有过失。'),
      line(5, 0, '系用徽纆，寘于丛棘，三岁不得，凶。', '被绳索捆绑起来放在荆棘之中，多年都不能脱身，凶险。'),
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
    guaCiTranslation: '适宜持守正道，通达。养育母牛，吉祥。象征依附与光明，以柔顺的方式获得力量。',
    upperTrigram: upper,
    lowerTrigram: lower,
    lines: [
      line(0, 1, '履错然，敬之无咎。', '脚步有些杂乱，保持敬畏之心，就不会有过失。'),
      line(1, 0, '黄离，元吉。', '黄色的光辉（中正之色），大吉大利。'),
      line(2, 1, '日昃之离，不鼓缶而歌，则大耋之嗟，凶。', '太阳偏西时的光辉，如果不敲着瓦器唱歌而只是哀叹年老，那就不妙了。提示珍惜当下。'),
      line(3, 1, '突如其来如，焚如，死如，弃如。', '突然地爆发，像火焰一样猛烈燃烧，然后又迅速熄灭、被丢弃。提示盛极而不可持久。'),
      line(4, 0, '出涕沱若，戚嗟若，吉。', '哭得很厉害，不断地叹息悲伤，但最终还是吉祥的。提示经历过悲伤反而能够获得警醒。'),
      line(5, 1, '王用出征，有嘉折首，获匪其丑，无咎。', '君王出征，斩杀了敌方的首领，但不去追捕一般的随从，这样就没有过失。提示区别对待。'),
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
