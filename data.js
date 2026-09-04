const ROLES = {
  venti: {
    key: "venti", name: "温迪", mark: "温", element: "风", color: "#79d7c8", region: "蒙德",
    identity: "风神巴巴托斯 · 吟游诗人",
    line: "看起来总在开玩笑、喝酒、偷懒，其实比谁都清楚自由是什么，也从不真正丢下蒙德。",
    why: [
      "你喜欢把严肃的事说得轻一点，不是不在乎，而是不想让在意变成压力。",
      "你会保留自己的节奏，别人催你也不一定快，但你答应的事不会真的落下。",
      "你身边总有人想替你安排未来，而你知道什么时候该笑一笑离开。"
    ],
    adventure: "如果你们一起冒险，他会用琴声把路边的风唤来，带你绕开麻烦，再假装是巧合。",
    gift: "一枚系着蒲公英的旧琴弦，说是‘想逃跑时看一眼就能找到风’的护身符。",
    bicker: "最容易因为你认真起来想跟他讨论正事而嘻嘻哈哈地转移话题。",
    match: "琴", rival: "迪卢克", team: "枫原万叶"
  },
  jean: {
    key: "jean", name: "琴", mark: "琴", element: "风", color: "#86c7d8", region: "蒙德",
    identity: "西风骑士团代理团长",
    line: "永远想把别人的麻烦都接过来，太习惯照顾所有人，却很少问自己累不累。",
    why: [
      "你容易接下别人的请求，哪怕不是你的责任，也会先想‘我不做谁来’。",
      "你会把情绪收好再去处理问题，周围人因此觉得你很可靠。",
      "你希望一切回到秩序，但偶尔也会羡慕能什么都不管的人。"
    ],
    adventure: "如果你们一起冒险，她会提前确认路线、装备和返程时间，然后把你安全带回城。",
    gift: "一壶她自己也没时间喝完的午后茶，叮嘱你记得休息。",
    bicker: "最容易因为她让你按时休息而你说‘再忙完这件就好’。",
    match: "钟离", rival: "温迪", team: "迪卢克"
  },
  diluc: {
    key: "diluc", name: "迪卢克", mark: "迪", element: "火", color: "#ec7a62", region: "蒙德",
    identity: "晨曦酒庄庄主 · 蒙德暗夜守望者",
    line: "话不多，事做在前面，不喜欢解释自己，却会默默替你在夜色里挡下麻烦。",
    why: [
      "你习惯一个人把问题消化完，等别人发现时，事情已经快解决了。",
      "你相信行动比承诺可靠，讨厌只说不做。",
      "你表面上平静，心里对辜负和背叛记得很清楚，只是不说。"
    ],
    adventure: "如果你们一起冒险，他会走在最可能出事的那一侧，全程少说话，却把每一处细节都看过。",
    gift: "一瓶没有标签的珍藏酒，只说‘下次再遇到难事时打开’。",
    bicker: "最容易因为你逞强说‘我没事’而被他一句‘你看起来不像没事’堵回去。",
    match: "琴", rival: "凯亚", team: "钟离"
  },
  kaeya: {
    key: "kaeya", name: "凯亚", mark: "凯", element: "冰", color: "#9be8f2", region: "蒙德",
    identity: "西风骑士团骑兵队长",
    line: "永远挂着游刃有余的笑，像一团没有破绽的谜，只有他自己知道哪句是真的。",
    why: [
      "你用玩笑和转移话题保护自己，别人越追问，你越会讲得轻巧。",
      "你观察得比说的多，很多热闹你都参与，但真正的心事很少交出去。",
      "你擅长在场面里周旋，却不允许自己被轻易看透。"
    ],
    adventure: "如果你们一起冒险，他会故意讲几个真假难辨的故事，把线索藏进玩笑里等你发现。",
    gift: "一块没有包装的冰晶吊坠，说是‘降温用，别想太多’。",
    bicker: "最容易因为他编故事骗你认真而吵起来，其实你早知道是假的。",
    match: "八重神子", rival: "迪卢克", team: "夜兰"
  },
  zhongli: {
    key: "zhongli", name: "钟离", mark: "钟", element: "岩", color: "#d3b078", region: "璃月",
    identity: "往生堂客卿 · 契约的守望者",
    line: "见过太多变迁，依然相信规则、承诺和长久的价值，稳重得像一座不会移动的山。",
    why: [
      "你重视说出口的承诺，也觉得答应别人的事就应该有始有终。",
      "你喜欢把事情讲清楚、做周全，不喜欢模棱两可。",
      "你看起来慢条斯理，其实心里早有一套自己的标准和底线。"
    ],
    adventure: "如果你们一起冒险，他会先讲清这条路的由来与风险，再从容地替你挡下最重的那一击。",
    gift: "一枚刻着古文的摩拉，说是‘结个善缘，下次有事可循契而来’。",
    bicker: "最容易因为结账时他又忘带摩拉而让你帮忙垫付。",
    match: "胡桃", rival: "艾尔海森", team: "甘雨"
  },
  hutao: {
    key: "hutao", name: "胡桃", mark: "胡", element: "火", color: "#f08a5d", region: "璃月",
    identity: "往生堂第七十七代堂主",
    line: "活泼、机灵、爱开玩笑，把别人忌讳的事说得轻松，其实她对生命认真得很。",
    why: [
      "你越是在沉重的话题里，越会用玩笑给自己和身边人松绑。",
      "你看着跳脱，心里其实早就想明白了很多别人不敢想的事。",
      "你不喜欢黏黏糊糊的告别，宁愿用笑闹把在意藏起来。"
    ],
    adventure: "如果你们一起冒险，她会一边哼着奇怪的歌，一边替你拍掉路上的晦气。",
    gift: "一颗她亲手做的平安符，说‘带着，别让它看见你哭的样子’。",
    bicker: "最容易因为她拿你的糗事写诗而追着她跑半个城。",
    match: "钟离", rival: "那维莱特", team: "宵宫"
  },
  xiao: {
    key: "xiao", name: "魈", mark: "魈", element: "风", color: "#79d7c8", region: "璃月",
    identity: "守护璃月的夜叉 · 降魔大圣",
    line: "习惯站在人群之外，说话不客气，行动却一直守在你没有看见的地方。",
    why: [
      "你不喜欢麻烦别人，很多苦都自己吞掉，只留下一句‘没事’。",
      "你表面上冷淡，其实对真正在意的人会付出得很彻底。",
      "你需要自己的空间，被逼着交心时反而会往后退。"
    ],
    adventure: "如果你们一起冒险，他不会解释为什么跟来，只会沉默地替你解决每一个潜在危险。",
    gift: "一朵不知何时采来的清心，放在你门口就离开，没留任何话。",
    bicker: "最容易因为你想替他分担而被他一句‘管好你自己’呛到。",
    match: "甘雨", rival: "胡桃", team: "枫原万叶"
  },
  ganyu: {
    key: "ganyu", name: "甘雨", mark: "甘", element: "冰", color: "#9be8f2", region: "璃月",
    identity: "月海亭秘书 · 半仙之人",
    line: "温柔、认真、责任心强，永远在帮别人善后，最不擅长为自己争取。",
    why: [
      "你习惯把自己的需求往后放，先看看别人需不需要你。",
      "你做事细致又耐心，交给你的东西很少会出乱子。",
      "你看起来好说话，其实也会累，只是你总在累到极限才承认。"
    ],
    adventure: "如果你们一起冒险，她会记得每个人的口味和忌口，把行程安排得没有破绽。",
    gift: "一盒她亲手整理的小食，附一张字条：路上记得按时吃饭。",
    bicker: "最容易因为她说‘我再加会儿班就好’而和你争执谁该先休息。",
    match: "魈", rival: "雷电将军", team: "琴"
  },
  yelan: {
    key: "yelan", name: "夜兰", mark: "夜", element: "水", color: "#6f9fe0", region: "璃月",
    identity: "特别情报官 · 璃月最神秘的执行者",
    line: "像一张你永远看不清全貌的底牌，办事干净利落，也从不在同一个身份里停留太久。",
    why: [
      "你不会轻易把真实目的亮出来，更喜欢先看清局面再出牌。",
      "你讨厌被控制，需要很多个人空间和自由行动权。",
      "你擅长观察细节，别人觉得偶然的事，你早就注意到了。"
    ],
    adventure: "如果你们一起冒险，她会提前安排好所有退路，再带你走那条最危险也最有效的路。",
    gift: "一枚看不出用途的骰子，说‘以后遇到拿不准的选择再打开’。",
    bicker: "最容易因为她明明知道答案却不说、等你绕了一圈才揭晓。",
    match: "凯亚", rival: "纳西妲", team: "八重神子"
  },
  raiden: {
    key: "raiden", name: "雷电将军", mark: "影", element: "雷", color: "#b78ce0", region: "稻妻",
    identity: "稻妻幕府将军 · 追求永恒的雷之神",
    line: "目标坚定，习惯把所有动摇都压下去，看起来无懈可击，其实只是不想再失去。",
    why: [
      "你越是在意一件事，越会表现得克制，不希望别人看到你犹豫。",
      "你给自己设了很高的标准，做决定前会反复确认这是不是最稳的路。",
      "你不是不需要人靠近，而是靠近之后又怕对方离开。"
    ],
    adventure: "如果你们一起冒险，她会负责压住全局，让你可以放心处理眼前的事。",
    gift: "一枚没有雷光的旧令牌，说‘危险时它会替我记住你在哪里’。",
    bicker: "最容易因为你劝她‘偶尔可以不那么正确’而沉默很久。",
    match: "神里绫华", rival: "温迪", team: "琴"
  },
  ayaka: {
    key: "ayaka", name: "神里绫华", mark: "绫", element: "冰", color: "#9be8f2", region: "稻妻",
    identity: "神里家大小姐 · 白鹭公主",
    line: "举止得体、心思细腻，把许多热烈藏得很深，只对真正信任的人慢慢流露。",
    why: [
      "你在人群中总保持恰到好处的礼貌，其实心里有很多没说完的话。",
      "你不想让在意的人失望，所以常常先调整自己。",
      "你容易记住别人随口说过的小事，也会偷偷为对方准备惊喜。"
    ],
    adventure: "如果你们一起冒险，她会提前练好每一条可能聊到的话题，确保你不会尴尬。",
    gift: "一把精致的纸扇，扇面上画着只有你们俩知道的某个瞬间。",
    bicker: "最容易因为她把不愉快咽下去、假装没事而让你无从开口。",
    match: "枫原万叶", rival: "八重神子", team: "甘雨"
  },
  kazuha: {
    key: "kazuha", name: "枫原万叶", mark: "枫", element: "风", color: "#79d7c8", region: "稻妻",
    identity: "流浪武士 · 诗人",
    line: "随遇而安，把离别和旧事都收进诗句里，看似轻，其实每一步都有分量。",
    why: [
      "你不喜欢被安排得太满，总想给生活留一点‘下一站再说’的余地。",
      "你重视体验多于结果，比起终点，你更在意路上看见的风。",
      "你看起来洒脱，但对过去的人和事其实记性很好。"
    ],
    adventure: "如果你们一起冒险，他会带你看很多不走主线的小路，然后在某个山顶念一句诗。",
    gift: "一片压干的红叶，上面写着‘如果迷路，就顺着风的方向想我’。",
    bicker: "最容易因为你说他‘该做正事’而他用‘现在就是正事’反驳。",
    match: "温迪", rival: "艾尔海森", team: "魈"
  },
  yae: {
    key: "yae", name: "八重神子", mark: "狐", element: "雷", color: "#c28ce0", region: "稻妻",
    identity: "鸣神大社宫司 · 八重堂主编",
    line: "聪明、爱逗人、永远掌握着谈话的主动权，温柔和锋利都藏在笑意后面。",
    why: [
      "你习惯先看透别人，再决定要不要让对方看透你。",
      "你喜欢用调侃表达关心，正经说情话反而会让你不自在。",
      "你很在意自己的节奏，讨厌被人推着走。"
    ],
    adventure: "如果你们一起冒险，她会先用几句话套出你的底牌，再假装勉为其难地帮你。",
    gift: "一本封面可疑的轻小说，说‘看完再告诉我你像哪一页的角色’。",
    bicker: "最容易因为她故意把你绕进她设计的话题而互相斗嘴。",
    match: "凯亚", rival: "神里绫华", team: "夜兰"
  },
  yoimiya: {
    key: "yoimiya", name: "宵宫", mark: "宵", element: "火", color: "#f08a5d", region: "稻妻",
    identity: "长野原烟花店店主",
    line: "热情、明亮、想到什么就去做，总能把低落的人重新拉回阳光下。",
    why: [
      "你擅长让别人觉得被在乎，却不一定记得给自己充电。",
      "你喜欢直接表达关心，不喜欢弯弯绕绕。",
      "你眼里有很多值得开心的小事，也能接住别人沉重的情绪。"
    ],
    adventure: "如果你们一起冒险，她会把最普通的赶路也变成一场热闹的夏日祭。",
    gift: "一支她亲手做的烟花，说‘难过的时候点它，天空会替你大声’。",
    bicker: "最容易因为她说干就干、不按你的计划来而互相拉扯。",
    match: "胡桃", rival: "那维莱特", team: "娜维娅"
  },
  nahida: {
    key: "nahida", name: "纳西妲", mark: "妲", element: "草", color: "#90c976", region: "须弥",
    identity: "小吉祥草王 · 须弥的智慧之神",
    line: "温和、敏锐，不急着下结论，喜欢先听懂别人没说出口的那部分。",
    why: [
      "你共情力很强，能感觉到对方语气里细微的变化。",
      "你喜欢问‘为什么’，但不带攻击性，是真的想知道。",
      "你不太会用强势的方式改变别人，更愿意陪 ta 慢慢想明白。"
    ],
    adventure: "如果你们一起冒险，她会边走边问你对每件事的看法，最后把答案织成一张清晰的图。",
    gift: "一株会在夜里发光的小草，说是‘送给好奇心还亮着的人’。",
    bicker: "最容易因为她把你不愿细想的问题问得太透而让你想跑。",
    match: "魈", rival: "艾尔海森", team: "甘雨"
  },
  alhaitham: {
    key: "alhaitham", name: "艾尔海森", mark: "艾", element: "草", color: "#90c976", region: "须弥",
    identity: "教令院书记官 · 冷静的理性主义者",
    line: "不参与没必要的热闹，不维护没必要的面子，只想把时间留给真正值得的事。",
    why: [
      "你对低效率的社交没有耐心，觉得能一句话说清就别绕三句。",
      "你边界感很强，不喜欢别人替你做决定或窥探你的安排。",
      "你看似不合群，其实很清楚自己要什么，也愿意为自己选择负责。"
    ],
    adventure: "如果你们一起冒险，他会提前算出最省力的路线，拒绝所有煽情和额外仪式。",
    gift: "一本书，扉页写着‘遇事翻翻，别来问我第二次’。",
    bicker: "最容易因为他一句‘你自己想想’而让你既生气又无可反驳。",
    match: "那维莱特", rival: "钟离", team: "夜兰"
  },
  tighnari: {
    key: "tighnari", name: "提纳里", mark: "提", element: "草", color: "#90c976", region: "须弥",
    identity: "道成林巡林官",
    line: "温和但不含糊，负责且有条理，会耐心讲清楚道理，也敢直接指出你的问题。",
    why: [
      "你习惯把照顾别人落到实处，而不是只说漂亮话。",
      "你讨厌敷衍，喜欢把安排讲清楚，让每个人都安心。",
      "你看起来好脾气，但遇到原则问题不会让步。"
    ],
    adventure: "如果你们一起冒险，他会提前提醒你毒蘑菇和危险植物，并把路线规划得明明白白。",
    gift: "一包标注好用途的野外药草，附一张字迹工整的使用说明。",
    bicker: "最容易因为你拿不确定的东西硬试而被他数落‘先问再动’。",
    match: "甘雨", rival: "流浪者", team: "赛诺"
  },
  cyno: {
    key: "cyno", name: "赛诺", mark: "赛", element: "雷", color: "#c28ce0", region: "须弥",
    identity: "大风纪官",
    line: "严肃、讲原则、不徇私情，但熟起来之后会突然讲一个没人接得住的冷笑话。",
    why: [
      "你认准的道理会一直守下去，不轻易被人情带偏。",
      "你希望事情按规则进行，讨厌投机取巧。",
      "你只是表面难接近，熟悉之后有属于自己的奇怪幽默。"
    ],
    adventure: "如果你们一起冒险，他会严格检查每一个可疑细节，绝不允许你蒙混过关。",
    gift: "一副据说很权威的七圣召唤卡牌，背面藏着冷笑话。",
    bicker: "最容易因为你没听懂他的笑话而被他认真解释第二遍。",
    match: "提纳里", rival: "胡桃", team: "艾尔海森"
  },
  wanderer: {
    key: "wanderer", name: "流浪者", mark: "流", element: "风", color: "#79d7c8", region: "须弥",
    identity: "流浪者 · 曾以散兵之名行走",
    line: "嘴上像刺猬，说不需要任何人，却总在没人注意时替别人留一份余地。",
    why: [
      "你习惯先拒绝好意，因为害怕最后会失望。",
      "你用冷淡和不耐烦挡开靠近，但真正信任后会非常护短。",
      "你不喜欢被怜悯，宁愿被说难相处，也不想显得脆弱。"
    ],
    adventure: "如果你们一起冒险，他会嫌弃你的计划漏洞百出，然后不动声色地把所有漏洞补上。",
    gift: "一件他用旧风衣折成的伞，说‘不是担心你，是怕下雨麻烦’。",
    bicker: "最容易因为你问他‘你是不是其实关心我’而立刻走开。",
    match: "八重神子", rival: "纳西妲", team: "枫原万叶"
  },
  furina: {
    key: "furina", name: "芙宁娜", mark: "芙", element: "水", color: "#6f9fe0", region: "枫丹",
    identity: "枫丹曾经的“水神” · 永远在舞台上的人",
    line: "活得非常戏剧化，爱面子又渴望被真正理解，笑闹声越大，孤独往往越深。",
    why: [
      "你习惯先撑起体面和气氛，把真实的疲惫留到散场以后。",
      "你渴望被看见，又怕被看穿后失去欣赏你的人。",
      "你嘴上总说‘这有什么’，心里却很容易为一句真诚的肯定感动。"
    ],
    adventure: "如果你们一起冒险，她会把每段路都演成一场戏，却会在你累的时候突然安静陪你。",
    gift: "一张她亲手签名的旧剧票，背面写着‘希望下次来看我时，你已经敢对我讲真话’。",
    bicker: "最容易因为她强调自己‘一点都不在意’而和你争论她其实很在意。",
    match: "那维莱特", rival: "艾尔海森", team: "胡桃"
  },
  neuvillette: {
    key: "neuvillette", name: "那维莱特", mark: "那", element: "水", color: "#6f9fe0", region: "枫丹",
    identity: "枫丹最高审判官 · 水龙",
    line: "公正、克制、观察入微，习惯用规则判断事物，偶尔会被人说‘太不近人情’。",
    why: [
      "你相信事实和程序，不喜欢凭情绪下结论。",
      "你很少说漂亮话，但会默默记住每个人行为背后的逻辑。",
      "你不是冷漠，只是表达关心的方式比较慢、比较正式。"
    ],
    adventure: "如果你们一起冒险，他会逐条评估风险，然后在最需要的时候给出准确判断。",
    gift: "一份写得像判决书的关心，结尾却写着‘若有困难，可随时来找我’。",
    bicker: "最容易因为你凭直觉行事而被他指出‘依据不足’。",
    match: "芙宁娜", rival: "胡桃", team: "艾尔海森"
  },
  navia: {
    key: "navia", name: "娜维娅", mark: "娜", element: "岩", color: "#d3b078", region: "枫丹",
    identity: "刺玫会会长",
    line: "坦率、真诚、讲义气，遇到麻烦不会躲在后面，常常第一个冲出去撑伞。",
    why: [
      "你情绪直接，开心和不开心都写在脸上，不想让朋友猜。",
      "你对认准的人会非常护短，愿意替 ta 挡麻烦。",
      "你不喜欢勾心斗角，更愿意把话说开再一起解决问题。"
    ],
    adventure: "如果你们一起冒险，她会请你吃最像样的下午茶，再拉着你一起把路平了。",
    gift: "一把她最宝贝的伞，说‘雨大的时候要记得撑开’。",
    bicker: "最容易因为你想独自硬扛而被她一把拉回来：‘这种事要一起’。",
    match: "宵宫", rival: "那维莱特", team: "琴"
  },
  mavuika: {
    key: "mavuika", name: "玛薇卡", mark: "玛", element: "火", color: "#ec7a62", region: "纳塔",
    identity: "现任火神 · 纳塔的领袖",
    line: "坚定、可靠、愿意把最重的责任扛在肩上，像火焰一样照亮别人，也烧掉自己。",
    why: [
      "你习惯先说‘交给我’，哪怕这件事会消耗你很多。",
      "你相信真正的强大不是强硬，而是能带着所有人一起往前走。",
      "你很少示弱，因为你怕一旦停住，身后的人会失去方向。"
    ],
    adventure: "如果你们一起冒险，她会走在前方确认危险，再把胜利的功劳分给所有人。",
    gift: "一块在夜里仍有余温的护符，说‘带着它，前面的路不会黑太久’。",
    bicker: "最容易因为她宁可自己熬着也不让你担心而跟你争执‘谁来守夜’。",
    match: "琴", rival: "艾尔海森", team: "迪卢克"
  },
  citlali: {
    key: "citlali", name: "茜特菈莉", mark: "茜", element: "冰", color: "#9be8f2", region: "纳塔",
    identity: "烟谜主的大萨满 · “黑曜石奶奶”",
    line: "看起来生人勿近、说话带刺，其实心里戏很多，只是嘴上永远先否认。",
    why: [
      "你会先用冷淡把别人推开，确定对方真的在意，才慢慢放下戒备。",
      "你嘴上说‘随便’、‘无所谓’，心里其实早就把细节想了很多遍。",
      "你很擅长观察别人的情绪，却不太擅长处理自己的。"
    ],
    adventure: "如果你们一起冒险，她会说你拖后腿，然后一边叹气一边替你处理所有麻烦。",
    gift: "一袋她觉得不够好的零食，说‘难吃也别告诉我，我是不会改进的’。",
    bicker: "最容易因为你当面戳穿她的关心而嘴硬否认一整路。",
    match: "八重神子", rival: "胡桃", team: "流浪者"
  }
};

const QUESTIONS = [
  {
    id: 1, domain: "自由观",
    prompt: "“自由”对你来说，更像下面哪一种？",
    options: [
      { text: "可以不做不想做的事", scores: { venti: 1, wanderer: 1, alhaitham: 1, citlali: 1 } },
      { text: "有能力守护想守护的东西", scores: { zhongli: 1, mavuika: 1, diluc: 1, navia: 1 } },
      { text: "随时启程，也可以随时停留", scores: { kazuha: 1, venti: 1, yoimiya: 1 } },
      { text: "不必活在别人的期待里", scores: { furina: 1, ayaka: 1, alhaitham: 1, citlali: 1 } }
    ]
  },
  {
    id: 2, domain: "共情方式",
    prompt: "朋友情绪低落时，你本能的第一反应更接近？",
    options: [
      { text: "帮 ta 把问题理顺，一步一步解决", scores: { tighnari: 1, neuvillette: 1, ganyu: 1, nahida: 1 } },
      { text: "想办法让 ta 笑出来，先把情绪拉开", scores: { hutao: 1, yoimiya: 1, venti: 1, furina: 1 } },
      { text: "安静陪着，不追问，等 ta 愿意说", scores: { xiao: 1, wanderer: 1, ayaka: 1, raiden: 1 } },
      { text: "直接替 ta 把麻烦处理掉", scores: { jean: 1, diluc: 1, navia: 1, mavuika: 1 } }
    ]
  },
  {
    id: 3, domain: "人群位置",
    prompt: "在热闹的人群里，你通常更接近哪一种角色？",
    options: [
      { text: "负责带动气氛、不让场子冷下来的人", scores: { hutao: 1, yoimiya: 1, furina: 1, navia: 1 } },
      { text: "坐在旁边观察，把每个人看在眼里的人", scores: { alhaitham: 1, yelan: 1, neuvillette: 1, cyno: 1 } },
      { text: "偶尔冒一句，却能让人记很久的人", scores: { venti: 1, kaeya: 1, yae: 1, citlali: 1 } },
      { text: "陪到最后、负责收尾和照顾的人", scores: { jean: 1, ganyu: 1, nahida: 1, zhongli: 1 } }
    ]
  },
  {
    id: 4, domain: "价值排序",
    prompt: "如果必须在下面几件事里选一个最看重，你会选？",
    options: [
      { text: "承诺与契约", scores: { zhongli: 1, cyno: 1, neuvillette: 1, jean: 1 } },
      { text: "真诚与真心", scores: { nahida: 1, yoimiya: 1, navia: 1, ganyu: 1 } },
      { text: "自由与自在", scores: { venti: 1, kazuha: 1, alhaitham: 1, wanderer: 1 } },
      { text: "尊严与体面", scores: { raiden: 1, ayaka: 1, furina: 1, yae: 1 } }
    ]
  },
  {
    id: 5, domain: "困境反应",
    prompt: "遇到麻烦时，你更接近哪种反应？",
    options: [
      { text: "先自己想办法，不太想开口求助", scores: { xiao: 1, diluc: 1, yelan: 1, raiden: 1 } },
      { text: "找信任的人一起商量", scores: { nahida: 1, ganyu: 1, navia: 1, jean: 1 } },
      { text: "先笑两句，把难事说得轻一点", scores: { venti: 1, kaeya: 1, hutao: 1, citlali: 1 } },
      { text: "把它拆成规则问题，按步骤处理", scores: { alhaitham: 1, neuvillette: 1, cyno: 1, tighnari: 1 } }
    ]
  },
  {
    id: 6, domain: "自我印象",
    prompt: "你更希望别人这样记住你？",
    options: [
      { text: "靠谱，事情交给我可以放心", scores: { jean: 1, ganyu: 1, mavuika: 1, zhongli: 1 } },
      { text: "有趣，和我待着不会无聊", scores: { hutao: 1, kaeya: 1, venti: 1, yoimiya: 1 } },
      { text: "神秘，永远看不透我在想什么", scores: { yelan: 1, yae: 1, raiden: 1, wanderer: 1 } },
      { text: "温柔，靠近时不会觉得有压力", scores: { nahida: 1, tighnari: 1, ayaka: 1, citlali: 1 } }
    ]
  },
  {
    id: 7, domain: "能量来源",
    prompt: "你最有精神的时候，通常来自哪里？",
    options: [
      { text: "把计划一件件完成的成就感", scores: { jean: 1, raiden: 1, cyno: 1, mavuika: 1 } },
      { text: "人群里的火花、笑声和热闹", scores: { hutao: 1, yoimiya: 1, furina: 1, navia: 1 } },
      { text: "独处一阵之后重新完整的自己", scores: { xiao: 1, wanderer: 1, alhaitham: 1, yae: 1 } },
      { text: "被信任、被需要的感觉", scores: { zhongli: 1, ganyu: 1, nahida: 1, diluc: 1 } }
    ]
  },
  {
    id: 8, domain: "底线",
    prompt: "下面哪件事最让你受不了？",
    options: [
      { text: "约定被打破、规则被随意践踏", scores: { zhongli: 1, cyno: 1, neuvillette: 1, raiden: 1 } },
      { text: "真心被当成玩笑或利用", scores: { wanderer: 1, furina: 1, xiao: 1, diluc: 1 } },
      { text: "被当成理所当然的工具人", scores: { jean: 1, ganyu: 1, mavuika: 1, navia: 1 } },
      { text: "心事被看穿，却没有人真正在意", scores: { ayaka: 1, yae: 1, citlali: 1, nahida: 1 } }
    ]
  },
  {
    id: 9, domain: "被误解",
    prompt: "被人误解时，你通常怎么处理？",
    options: [
      { text: "把事情一次讲清楚，不留误会", scores: { tighnari: 1, neuvillette: 1, cyno: 1, zhongli: 1 } },
      { text: "不想解释，懂的人自然会懂", scores: { xiao: 1, diluc: 1, yelan: 1, wanderer: 1 } },
      { text: "笑着带过，但心里会记得", scores: { venti: 1, kaeya: 1, hutao: 1, citlali: 1 } },
      { text: "装作没事，但会慢慢疏远", scores: { raiden: 1, ayaka: 1, yae: 1, furina: 1 } }
    ]
  },
  {
    id: 10, domain: "愿望能力",
    prompt: "如果可以拥有一种额外能力，你更想要？",
    options: [
      { text: "看清真相与本质", scores: { alhaitham: 1, yelan: 1, neuvillette: 1, nahida: 1 } },
      { text: "守护重要的人免受伤害", scores: { jean: 1, diluc: 1, xiao: 1, mavuika: 1, navia: 1 } },
      { text: "让任何气氛都变得轻松", scores: { hutao: 1, yoimiya: 1, venti: 1, furina: 1 } },
      { text: "掌握自己的时间和节奏", scores: { raiden: 1, cyno: 1, yae: 1, wanderer: 1 } }
    ]
  },
  {
    id: 11, domain: "第一印象",
    prompt: "别人对你的第一印象，通常更像？",
    options: [
      { text: "认真、可靠、不太好糊弄", scores: { jean: 1, ganyu: 1, cyno: 1, zhongli: 1 } },
      { text: "好聊、亲切、容易接近", scores: { venti: 1, yoimiya: 1, hutao: 1, navia: 1 } },
      { text: "有距离感，不太好搭话", scores: { xiao: 1, raiden: 1, yelan: 1, neuvillette: 1 } },
      { text: "有点神秘，让人想多了解", scores: { yae: 1, kaeya: 1, wanderer: 1, furina: 1 } }
    ]
  },
  {
    id: 12, domain: "被辜负",
    prompt: "被真正信任的人辜负后，你更可能？",
    options: [
      { text: "以后不再轻易交出信任", scores: { diluc: 1, raiden: 1, wanderer: 1, xiao: 1 } },
      { text: "会原谅，但心里一直记得", scores: { ganyu: 1, ayaka: 1, nahida: 1, yoimiya: 1 } },
      { text: "表面说算了，实际会悄悄远离", scores: { yelan: 1, kaeya: 1, yae: 1, furina: 1 } },
      { text: "把这件事变成更努力的理由", scores: { jean: 1, zhongli: 1, mavuika: 1, cyno: 1 } }
    ]
  },
  {
    id: 13, domain: "亲密距离",
    prompt: "你最喜欢哪种陪伴状态？",
    options: [
      { text: "不用一直说话，也很自在的陪伴", scores: { xiao: 1, wanderer: 1, nahida: 1, citlali: 1 } },
      { text: "一起疯、一起笑的热闹陪伴", scores: { hutao: 1, yoimiya: 1, venti: 1, furina: 1 } },
      { text: "彼此聊想法、计划和未来的深度陪伴", scores: { alhaitham: 1, cyno: 1, tighnari: 1, neuvillette: 1 } },
      { text: "被坚定选择、被明确在乎的陪伴", scores: { ayaka: 1, ganyu: 1, navia: 1, mavuika: 1 } }
    ]
  },
  {
    id: 14, domain: "团队角色",
    prompt: "在团队里，你通常会自然站到哪个位置？",
    options: [
      { text: "出头承担、拍板决定的人", scores: { jean: 1, navia: 1, mavuika: 1, diluc: 1 } },
      { text: "提供信息和思路的军师", scores: { alhaitham: 1, yelan: 1, tighnari: 1, nahida: 1 } },
      { text: "维护气氛、照顾每个人情绪的人", scores: { yoimiya: 1, hutao: 1, venti: 1, ayaka: 1 } },
      { text: "默默完成别人忽略的细节的人", scores: { ganyu: 1, cyno: 1, zhongli: 1, raiden: 1 } }
    ]
  },
  {
    id: 15, domain: "元素共鸣",
    prompt: "如果让元素的力量回应你，你最先会偏向哪一种？",
    options: [
      { text: "风：自由、远行与变化", scores: { venti: 1, kazuha: 1, wanderer: 1, xiao: 1 } },
      { text: "岩：秩序、契约与厚重", scores: { zhongli: 1, navia: 1, cyno: 1 } },
      { text: "雷：决断、锋芒与内在力量", scores: { raiden: 1, yae: 1, kaeya: 1 } },
      { text: "水：流动、故事与包容", scores: { furina: 1, neuvillette: 1, yelan: 1 } }
    ]
  },
  {
    id: 16, domain: "朋友评价",
    prompt: "认识你久一点的朋友，最容易这样形容你？",
    options: [
      { text: "嘴硬心软，其实很会照顾人", scores: { xiao: 1, diluc: 1, raiden: 1, citlali: 1 } },
      { text: "认真靠谱，把事情交给 ta 放心", scores: { ganyu: 1, jean: 1, tighnari: 1, neuvillette: 1 } },
      { text: "脑回路很怪，总让人接不住", scores: { kaeya: 1, hutao: 1, alhaitham: 1, venti: 1 } },
      { text: "共情很强，愿意先理解别人", scores: { nahida: 1, ayaka: 1, yoimiya: 1, navia: 1 } }
    ]
  },
  {
    id: 17, domain: "吸引力",
    prompt: "你更容易被哪种人吸引？",
    options: [
      { text: "自由又温柔的人", scores: { venti: 1, kazuha: 1, nahida: 1, ganyu: 1 } },
      { text: "果断又可靠的人", scores: { diluc: 1, zhongli: 1, mavuika: 1, tighnari: 1 } },
      { text: "聪明又有边界感的人", scores: { alhaitham: 1, yae: 1, yelan: 1, neuvillette: 1 } },
      { text: "热烈又真诚的人", scores: { hutao: 1, yoimiya: 1, furina: 1, navia: 1 } }
    ]
  },
  {
    id: 18, domain: "无期待日",
    prompt: "如果有一天不再需要满足任何人的期待，你会？",
    options: [
      { text: "终于去做一直想做但没空做的事", scores: { alhaitham: 1, venti: 1, kazuha: 1, wanderer: 1 } },
      { text: "反而有点空，还是想承担点什么", scores: { jean: 1, zhongli: 1, mavuika: 1, ganyu: 1 } },
      { text: "直接去远方，不问归期", scores: { kazuha: 1, venti: 1, wanderer: 1, yoimiya: 1 } },
      { text: "重新整理自己，把生活过得更有秩序", scores: { raiden: 1, neuvillette: 1, cyno: 1, tighnari: 1 } }
    ]
  },
  {
    id: 19, domain: "深层渴望",
    prompt: "你内心深处最希望被理解的是哪一点？",
    options: [
      { text: "我其实没有看起来那么轻松", scores: { venti: 1, hutao: 1, furina: 1, citlali: 1 } },
      { text: "我其实很怕被辜负", scores: { xiao: 1, wanderer: 1, raiden: 1, diluc: 1 } },
      { text: "我其实没那么需要帮助", scores: { alhaitham: 1, yelan: 1, yae: 1, neuvillette: 1 } },
      { text: "我其实很需要你", scores: { nahida: 1, ayaka: 1, ganyu: 1, navia: 1 } }
    ]
  },
  {
    id: 20, domain: "祝福",
    prompt: "如果选一句提瓦特式的祝福送给自己，你会选？",
    options: [
      { text: "愿风指引你的道路", scores: { venti: 1, kazuha: 1, wanderer: 1, xiao: 1 } },
      { text: "契约既定，绝不反悔", scores: { zhongli: 1, cyno: 1, neuvillette: 1, raiden: 1 } },
      { text: "烟花易逝，人情长存", scores: { yoimiya: 1, hutao: 1, navia: 1, ganyu: 1 } },
      { text: "愿你的问题都有答案", scores: { nahida: 1, alhaitham: 1, tighnari: 1, ayaka: 1 } }
    ]
  }
];
