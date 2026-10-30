/* Chapters 14, 15, 18, 19 — children, parenting for the AI age,
   retirement, and a happy life */
(function () {
  "use strict";

  var add = window.LB.addChapter;

  /* ============================== 14 · 生育 ============================== */
  add({
    id: "kids",
    num: "14",
    group: "life",
    icon: "sprout",
    read: 10,
    title: { zh: "要不要孩子，要几个：一笔二十年的账", en: "Children, and how many: a twenty-year balance sheet" },
    card: {
      zh: "这一章不劝你生，也不劝你不生。它只把账摊开，让你自己算。",
      en: "This chapter won't push you to have children or not. It just lays the ledger out for you to read."
    },
    kicker: { zh: "家庭 · 生育决策", en: "Family · The decision" },
    lede: {
      zh: "生育是少数几个不可逆的决定之一：做了很难撤回，不做也未必后悔。所以最值得做的不是听谁的，而是把三种理由分清，把四类成本看清。",
      en: "Having a child is one of the few genuinely irreversible decisions: hard to undo once made, and not necessarily regretted if never made. So the useful work isn't picking a side — it's separating three kinds of reasons and naming four kinds of cost."
    },
    takeaway: {
      zh: "只有“我自己想要”能撑住二十年；“应该要”和“养儿防老”都撑不住。",
      en: "Only “I want this” lasts twenty years. “I ought to” and “someone to care for me later” do not."
    },
    blocks: [
      { t: "h", zh: "先把三种理由分开", en: "Separate the three reasons first" },
      {
        t: "p",
        zh: "很多人不是“想不想要孩子”想不清楚，而是把三种完全不同的理由混成了一团。分开看，答案往往自己就浮出来了。",
        en: "Most people aren't confused about wanting a child — they've merged three very different reasons into one blur. Separate them and the answer usually surfaces on its own."
      },
      {
        kind: "flow",
        title: { zh: "三种理由，只有一种能撑二十年", en: "Three reasons, one of which lasts twenty years" },
        steps: [
          {
            t: { zh: "第一种：我自己想要", en: "One: I genuinely want this" },
            d: { zh: "看到小孩会想抱，会想象教他骑车、陪他长大。这种愿望不依赖别人怎么看，也不指望回报。它是唯一能在凌晨三点被哭声叫醒后仍然成立的理由。", en: "You want to hold babies, picture teaching one to ride a bike, imagine watching them grow. This wish doesn't depend on approval and expects no return. It's the only reason that still holds at 3 a.m. with a screaming infant." }
          },
          {
            t: { zh: "第二种：觉得应该要", en: "Two: it feels expected" },
            d: { zh: "父母催、同龄人都生了、怕被人议论、怕老了孤单。这些是外部压力，不是愿望。压力能推你做出决定，但推不动往后十八年的日常。", en: "Parents push, peers have already done it, you dread being talked about, you fear dying alone. That's external pressure, not desire. Pressure can force a decision; it can't carry eighteen years of daily life." }
          },
          {
            t: { zh: "第三种：当作一笔投资", en: "Three: treating it as an investment" },
            d: { zh: "“养儿防老”“多一个孩子多一份保障”。在今天，这个逻辑已经很脆弱：孩子大概率会去别的城市，养老主要靠社保和自己的积蓄。把孩子当保单，双方都容易失望。", en: "“A child will support me later,” “more children, more security.” That logic is thin now: children usually move away, and old age is funded by pensions and savings. Treat a child as an insurance policy and both sides end up disappointed." }
          }
        ]
      },

      { t: "h", zh: "成本不止是钱", en: "The cost isn't only money" },
      {
        t: "p",
        zh: "一份全国生育调查问“为什么不打算再生育”，排前三的是：经济负担重（77.4%）、年龄太大（45.6%）、没人带孩子。注意第三个——**时间和人力，往往比钱更卡人**。",
        en: "A national fertility survey asked why people didn't plan another child. The top three answers: financial burden (77.4%), being too old (45.6%), and nobody to look after the child. Note the third — **time and hands bind harder than money**."
      },
      {
        t: "table",
        head: { zh: ["成本类型", "具体表现", "能不能外包"], en: ["Type of cost", "What it looks like", "Outsourceable?"] },
        rows: [
          { zh: ["钱", "从出生到大学毕业，几十万到上百万；教育支出占比最大", "部分可以（公立学校、少报班）"], en: ["Money", "From birth to university, hundreds of thousands and up; education dominates", "Partly — public schools, fewer classes"] },
          { zh: ["时间", "前三年几乎没有完整的夜晚和周末，之后是接送、作业、家长会", "很难（陪伴无法代购）"], en: ["Time", "Three years without a full night or weekend, then pickups, homework, parents' meetings", "Barely — presence can't be bought"] },
          { zh: ["职业", "对女性影响尤其明显：晋升中断、收入下降、重返职场困难", "很难，只能靠伴侣和制度分担"], en: ["Career", "Especially for women: interrupted promotion, lower pay, hard re-entry", "Barely — only partners and policy can share it"] },
          { zh: ["关系", "夫妻独处时间锐减，育儿分歧成为新的冲突源", "可以，但需要刻意安排"], en: ["Relationship", "Couple time collapses; parenting disagreements become a new fault line", "Yes, but only by deliberate design"] }
        ]
      },
      {
        kind: "donut",
        title: { zh: "养大一个孩子，钱花在哪", en: "Where the money goes" },
        sub: { zh: "示意性结构，不同城市差异很大", en: "Illustrative shares; they vary widely by city" },
        center: { v: "18 年", label: { zh: "大约的时间跨度", en: "the rough span" } },
        items: [
          { label: { zh: "教育（学费、课外、用品）", en: "Education (fees, classes, supplies)" }, value: 40, color: "accent" },
          { label: { zh: "生活（吃穿、日用）", en: "Living (food, clothes, daily)" }, value: 25, color: "gold" },
          { label: { zh: "住房（多一间房的钱）", en: "Housing (the extra room)" }, value: 20, color: "sage" },
          { label: { zh: "医疗与其他", en: "Health and everything else" }, value: 15, color: "ink" }
        ]
      },

      { t: "h", zh: "二胎：多一个孩子的边际变化", en: "A second child: what actually changes" },
      {
        t: "p",
        zh: "“要不要二胎”是一个完全不同的问题。它不是“再要一个孩子”，而是“把一个孩子的家庭，改造成两个孩子的家庭”。有几笔账会变便宜，有几笔会变贵。",
        en: "Whether to have a second is a different question entirely. It isn't “one more child,” it's converting a one-child household into a two-child one. Some lines get cheaper; some get much dearer."
      },
      {
        t: "ul",
        zh: [
          "**变便宜的**：衣服、玩具、婴儿床可以复用；你已经会带了，焦虑少一半；两个孩子能互相作伴，你的“陪玩工时”会下降",
          "**变贵的**：房子可能要换大；教育支出直接翻倍且不能打折；接送、家长会、生病的时间成本不是简单相加，而是相乘",
          "**最容易被忽略的**：老大的心理落差、母亲的职业中断第二次、夫妻独处时间接近于零",
          "**真实收益**：很多二孩家庭的调查里，多数人表示“不后悔”，家庭氛围更热闹；兄弟姐妹关系是孩子一生的长期资产"
        ],
        en: [
          "**Cheaper**: clothes, toys and cots get reused; you already know what you're doing, so the anxiety halves; two children entertain each other, so your hours as a playmate drop",
          "**Dearer**: you may need a bigger flat; education costs double with no discount; the time cost of pickups, meetings and sick days doesn't add — it multiplies",
          "**Most overlooked**: the older child's displacement, the mother's second career interruption, and couple time falling close to zero",
          "**The real gain**: in most surveys of two-child families, the majority say they don't regret it and the house feels more alive; a sibling is a lifelong asset for the child"
        ]
      },
      {
        t: "p",
        zh: "所以在做决定前，问自己五个问题，而不是问“别人都生几个”。",
        en: "So before deciding, ask yourself five questions — not “how many do other people have.”"
      },
      {
        kind: "flow",
        title: { zh: "五个问题，比任何建议都准", en: "Five questions more useful than advice" },
        steps: [
          { t: { zh: "谁带？", en: "Who looks after them?" }, d: { zh: "不是“有空就带”，是每天早七点到晚九点的具体人名。说不出名字，就先别急。", en: "Not “whoever's free” — a specific name for 7 a.m. to 9 p.m. If no name comes, wait." } },
          { t: { zh: "钱够不够到 18 岁？", en: "Is there enough until they're 18?" }, d: { zh: "按现在的开销往上加三成算。别用“到时候自然有办法”，那是把风险推给未来的自己。", en: "Take today's spending and add 30%. Don't rely on “we'll figure it out” — that's billing your future self." } },
          { t: { zh: "我的职业能不能承受？", en: "Can my career absorb it?" }, d: { zh: "尤其是女性：产假、哺乳、可能的降薪或离职。提前和伴侣谈好怎么分担，而不是生完再吵。", en: "Especially for women: leave, breastfeeding, possible demotion or exit. Agree on the division beforehand, not in the middle." } },
          { t: { zh: "我们的关系撑得住吗？", en: "Can the relationship carry it?" }, d: { zh: "调查显示，第一个孩子出生后婚姻满意度会明显下降。有准备和没准备，差别很大。", en: "Surveys consistently show satisfaction drops sharply after the first child. Preparation changes how far." } },
          { t: { zh: "如果孩子不健康、不聪明、不听话，我还能接受吗？", en: "If they're unwell, unremarkable or defiant, can I still accept them?" }, d: { zh: "这一条最难，但最能测出你想要的到底是一个孩子，还是一个“理想的孩子”。", en: "The hardest question, and the one that reveals whether you want a child or an idealised one." } }
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "生了自然就会爱。", en: "Love arrives automatically once they're born." },
            good: { zh: "很多父母一开始只有责任感和疲惫，爱是后来一天天长出来的。允许自己“暂时没感觉”，不说明你不合格。", en: "Many parents start with duty and exhaustion; love accretes later. Allowing yourself to feel nothing at first doesn't make you unfit." }
          },
          {
            bad: { zh: "生二胎是给老大一个伴。", en: "A second child gives the first one a companion." },
            good: { zh: "有时是伴，有时是对手。兄弟姐妹关系好是礼物，不好是长期消耗。这件事你控制不了，别把它当决策依据。", en: "Sometimes a companion, sometimes a rival. A good sibling bond is a gift, a bad one is a lifelong drain. You don't control it — so don't make it your reason." }
          },
          {
            bad: { zh: "越早生越好。", en: "Earlier is always better." },
            good: { zh: "生理上确实有窗口，但心理和经济的准备同样重要。25 岁仓促生和 32 岁准备好生，是两种完全不同的育儿质量。", en: "There is a biological window, but readiness matters as much. A rushed birth at 25 and a prepared one at 32 are two different qualities of parenting." }
          },
          {
            bad: { zh: "不生孩子人生就不完整。", en: "A life without children is incomplete." },
            good: { zh: "完整是你自己定义的。有人从孩子身上获得意义，有人从创作、教学、照顾他人中获得。没有哪一种更高级。", en: "Completeness is yours to define. Some find meaning in children, some in making things, teaching or caring for others. None ranks higher." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "把“谁带”写成具体的人名和时间表，看能不能填满",
          "算一次从出生到 18 岁的大致支出，再往上加三成",
          "和伴侣聊一次：如果只能要一个，我们要不要？"
        ],
        en: [
          "Write the childcare schedule with real names. See whether the gaps can be filled.",
          "Estimate the cost from birth to 18, then add 30%.",
          "Ask your partner once: if we could only have one, would we?"
        ]
      }
    ]
  });

  /* ============================== 15 · 教育 ============================== */
  add({
    id: "parenting",
    num: "15",
    group: "life",
    icon: "sprout",
    read: 12,
    title: { zh: "把孩子养到 2045 年：AI 时代的教育账", en: "Raising a child for 2045: education in the AI age" },
    card: {
      zh: "你现在替他选的路，要十年后才见效。所以真正该押注的不是某个专业，而是几种不会被替代的能力。",
      en: "The road you choose for them now pays off a decade later. So the bet isn't a major — it's a handful of capabilities that don't get replaced."
    },
    kicker: { zh: "家庭 · 教育规划", en: "Family · Education" },
    lede: {
      zh: "世界经济论坛估计，到 2030 年全球约 39% 的岗位技能会被改写或淘汰。这意味着：你现在能教给他的具体知识，大概率会过期；而某些更底层的能力，会一直保值。这一章讲后者，也讲二十年怎么分阶段。",
      en: "The World Economic Forum estimates that by 2030 about 39% of workers' skills will be rewritten or made obsolete. Which means the specific knowledge you can hand down now will likely expire — while some deeper capacities hold their value. This chapter is about those, and how to stage them across twenty years."
    },
    takeaway: {
      zh: "别押注某个专业，押注五件事：会提问、能自学、能合作、能把事做完、情绪稳。",
      en: "Don't bet on a major. Bet on five things: asking good questions, self-teaching, collaborating, finishing, and emotional steadiness."
    },
    blocks: [
      { t: "h", zh: "先看清楚，AI 到底替代了什么", en: "First, see what AI actually replaces" },
      {
        t: "p",
        zh: "被替代的往往不是“整份工作”，而是工作里**标准化的那部分**：整理资料、写出初稿、翻译、做表格、按规则判断。留下来的部分是：定义问题、判断哪个答案靠谱、和人打交道、在信息不全时做决定。",
        en: "What gets replaced usually isn't a whole job but **the standardised part of it**: summarising, drafting, translating, tabulating, applying rules. What remains is defining the problem, judging which answer is sound, working with people, and deciding with incomplete information."
      },
      {
        t: "p",
        zh: "有一个反直觉的发现：最不容易被自动化的工作，往往需要**在混乱现场快速判断、并承担后果**——急诊医生、麻醉护士、护理、维修、教师、销售。它们的共同点不是“高深”，而是“要为人负责”。",
        en: "There's a counter-intuitive finding: the jobs least exposed to automation tend to require **fast judgement in messy situations, plus accountability for the outcome** — emergency physicians, nurse anaesthetists, carers, repair technicians, teachers, salespeople. Their common trait isn't sophistication; it's responsibility for a person."
      },

      { t: "h", zh: "五件不会过期的能力", en: "Five capabilities that don't expire" },
      {
        t: "ul",
        zh: [
          "**会提问**：能把模糊的困扰拆成一个具体问题。AI 时代，问对问题比找到答案值钱",
          "**能自学**：给他一个陌生领域和一星期，他能自己搭出框架。这比任何一门课都重要",
          "**能合作**：说清需求、听懂反对、处理冲突。这些目前还不能外包给模型",
          "**能把事做完**：从想法到交付，中间那些琐碎、枯燥、没人看见的部分，才是真正的分水岭",
          "**情绪稳**：能识别自己的状态、能等、能承受失败。这是所有能力的底座"
        ],
        en: [
          "**Asking questions**: turning a vague unease into a specific question. In the AI age, framing beats answering.",
          "**Self-teaching**: give them an unfamiliar field and a week, and they can build their own scaffold. Worth more than any single course.",
          "**Collaborating**: stating needs, hearing objections, handling friction. Not yet outsourced to a model.",
          "**Finishing**: the tedious, dull, unseen middle between idea and delivery is the real divide.",
          "**Emotional steadiness**: noticing your own state, being able to wait, surviving failure. The base layer under everything else."
        ]
      },
      {
        kind: "line",
        title: { zh: "不同能力的学习窗口不一样", en: "Different capacities have different windows" },
        sub: { zh: "示意曲线：横轴为年龄（岁），纵轴是机会窗口的相对宽度", en: "Illustrative curves: horizontal axis is age, vertical axis is relative openness" },
        x: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"],
        yMin: 0,
        yMax: 1,
        series: [
          { name: { zh: "母语与语音", en: "First language & sound" }, values: [1, 1, 0.95, 0.85, 0.7, 0.55, 0.4, 0.28, 0.2, 0.14, 0.1], color: "accent", fill: true },
          { name: { zh: "逻辑与抽象", en: "Logic & abstraction" }, values: [0.15, 0.2, 0.3, 0.45, 0.6, 0.75, 0.85, 0.9, 0.85, 0.75, 0.65], color: "sage" },
          { name: { zh: "社交与情绪调节", en: "Social & emotional regulation" }, values: [0.3, 0.45, 0.6, 0.75, 0.85, 0.9, 0.88, 0.82, 0.75, 0.68, 0.6], color: "gold" }
        ],
        cap: { zh: "读法：语言窗口开得最早、关得也最早；情绪与逻辑的窗口更长，但需要持续的练习环境。", en: "How to read it: the language window opens earliest and closes earliest; emotion and logic stay open longer but need ongoing practice." }
      },

      { t: "h", zh: "二十年，分五段", en: "Twenty years in five stages" },
      {
        t: "table",
        head: { zh: ["阶段", "最该投资的一件事", "可以不做的"], en: ["Stage", "Invest in this", "You can skip"] },
        rows: [
          { zh: ["0–6 岁", "稳定的照护关系 + 大量说话和玩耍。语言、安全感、好奇心都在这里打底", "识字班、英语班、各种“启蒙”"], en: ["0–6", "Stable caregiving plus lots of talk and play. Language, security and curiosity are laid down here", "Literacy drills, English classes, “enrichment” of every kind"] },
          { zh: ["7–12 岁", "养成阅读习惯 + 至少一项长期爱好。学会坚持一件枯燥的事", "把周末排满的补习班"], en: ["7–12", "A reading habit plus one long-running interest. Learn to persist at something dull", "Weekends packed with tutoring"] },
          { zh: ["13–15 岁", "学习方法本身：怎么拆解、怎么自测、怎么找资料。元认知开始起作用", "为了排名牺牲睡眠和运动"], en: ["13–15", "Method itself: how to break things down, self-test, find sources. Metacognition kicks in", "Sacrificing sleep and sport for rank"] },
          { zh: ["16–18 岁", "真实的项目经验 + 一次自己做主的决定。让他知道“我能推动一件事”", "替他选专业、选学校、选朋友"], en: ["16–18", "Real project experience and one decision they own. Let them learn “I can move something”", "Choosing their major, school or friends for them"] },
          { zh: ["19–24 岁", "试错的空间 + 一项能换钱的硬技能。允许换方向，但要求解释理由", "把“稳定”当成唯一标准"], en: ["19–24", "Room to try and fail, plus one skill someone will pay for. Changing direction is fine — with reasons", "Treating “stable” as the only criterion"] }
        ]
      },
      {
        t: "p",
        zh: "这张表最重要的一列其实是右边那列。**大部分教育焦虑，来自做了不必做的事，却没时间做真正重要的事。** 六岁前的识字班，抵不过每天二十分钟的认真对话；初中排满的补习，抵不过一个他一直想搞明白的问题。",
        en: "The most important column is the right one. **Most education anxiety comes from doing unnecessary things and having no time left for the essential ones.** A literacy class at six is worth less than twenty minutes of real conversation a day; a packed schedule in middle school is worth less than one question the child genuinely wants answered."
      },

      { t: "h", zh: "把 AI 当工具，别当答案机", en: "Use AI as a tool, not an answer machine" },
      {
        t: "ul",
        zh: [
          "**当私教**：让他追问“为什么”，直到自己讲明白。检验标准是能不能不用 AI 复述一遍",
          "**当陪练**：让 AI 扮演面试官、辩论对手、外国笔友，练的是临场反应",
          "**当审稿人**：先自己写完，再让 AI 挑毛病。顺序反了，练的就是复制粘贴",
          "**教他识别错误**：让 AI 讲一件他熟悉的事，一起找出说得不对的地方。这是最重要的媒介素养",
          "**约定使用边界**：作业可以查资料，不能代写；可以用 AI 学习，不能用来骗过老师"
        ],
        en: [
          "**As a tutor**: let them keep asking why until they can explain it themselves. The test is whether they can retell it without the AI.",
          "**As a sparring partner**: have it play interviewer, debate opponent or pen pal. That trains live thinking.",
          "**As an editor**: write first, then ask for criticism. Reverse the order and you're practising copy-paste.",
          "**Teach them to spot errors**: ask the AI about something they know well and hunt for the mistakes together. That's the core media literacy now.",
          "**Set boundaries**: research yes, ghostwriting no; learning yes, fooling the teacher no."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "以后都是 AI，学编程最重要。", en: "It's all AI now — coding matters most." },
            good: { zh: "会写代码像会写字：有用，但不是护城河。真正的护城河是知道要造什么、为谁造、值不值得造。", en: "Coding is like literacy: useful, not a moat. The moat is knowing what to build, for whom, and whether it's worth building." }
          },
          {
            bad: { zh: "文科没用了。", en: "The humanities are useless now." },
            good: { zh: "AI 最擅长产出“正确但平庸”的文字。判断什么值得说、对谁说、说到什么程度，恰恰是文科训练的东西。", en: "AI excels at producing text that's correct and forgettable. Judging what's worth saying, to whom, and how far — that's exactly what the humanities train." }
          },
          {
            bad: { zh: "不能输在起跑线。", en: "You can't lose at the starting line." },
            good: { zh: "人生是四十年的长跑，起跑线上的抢跑常常用掉了本该用于睡眠、运动和社会情绪的神经资源。", en: "It's a forty-year run. Jumping the start often spends neural resources that belonged to sleep, movement and social-emotional development." }
          },
          {
            bad: { zh: "孩子开心就好，什么都不用管。", en: "Just let them be happy — no structure needed." },
            good: { zh: "放任和自由是两件事。真正的自由是在有边界、有节奏的环境里长出来的自我管理能力。", en: "Neglect and freedom are different. Real freedom is self-management grown inside boundaries and rhythm." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "本周和孩子认真聊一次他最近着迷的东西，只问不教",
          "选一项他愿意坚持三年的爱好，别管有没有用",
          "和他一起用 AI 做一件小事，然后一起找出它错在哪"
        ],
        en: [
          "This week, ask your child about whatever currently fascinates them. Only ask — don't teach.",
          "Pick one interest they'd keep for three years, regardless of usefulness.",
          "Do one small task with AI together, then hunt for where it got things wrong."
        ]
      }
    ]
  });

  /* ============================== 18 · 养老 ============================== */
  add({
    id: "retirement",
    num: "18",
    group: "last",
    icon: "hourglass",
    read: 10,
    title: { zh: "养老：为最后二十年做准备", en: "Retirement: preparing for the last twenty years" },
    card: {
      zh: "养老不是六十岁才想的事，是三十岁开始每十年补一次的账。",
      en: "Retirement isn't a question for sixty. It's a ledger you revisit every decade from thirty."
    },
    kicker: { zh: "长远 · 养老", en: "The long run · Retirement" },
    lede: {
      zh: "到 2025 年末，中国基本养老保险覆盖约 10.76 亿人，是全球最大的养老保障网。但“有养老金”和“够花”是两件事——尤其在需要护理的那几年。这一章讲三个账户、三个数字和六件现在就能做的事。",
      en: "By the end of 2025, China's basic pension scheme covered roughly 1.076 billion people — the largest such safety net in the world. But “having a pension” and “having enough” are different things, especially in the years when you need care. This chapter covers three accounts, three numbers, and six things you can start now."
    },
    takeaway: {
      zh: "养老靠三样：一笔能生钱的本金、一副能自理的身体、几个真会来看你的人。",
      en: "Retirement rests on three things: capital that earns, a body that still works, and people who actually show up."
    },
    blocks: [
      { t: "h", zh: "三个账户，别只靠第一个", en: "Three accounts — and the first isn't enough" },
      {
        t: "p",
        zh: "中国的养老体系分三层：第一层是基本养老保险（国家兜底，覆盖面最广）；第二层是企业年金或职业年金（有单位的才有，覆盖率低）；第三层是个人养老金和自己的储蓄投资（自愿，最灵活）。",
        en: "China's system has three layers: basic pension (state-backed, widest coverage), occupational annuities (only where an employer provides one, low coverage), and personal pensions plus your own savings and investments (voluntary, most flexible)."
      },
      {
        kind: "bars",
        title: { zh: "三支柱的覆盖差距", en: "The coverage gap between the three pillars" },
        sub: { zh: "按覆盖人数估算的比例，用于说明结构差异", en: "Estimated share of the population covered — to show the structural gap" },
        max: 80,
        items: [
          { label: { zh: "第一支柱：基本养老保险", en: "Pillar 1: basic pension" }, value: 76, display: "≈10.76 亿人", color: "accent" },
          { label: { zh: "第二支柱：企业/职业年金", en: "Pillar 2: occupational annuity" }, value: 5, display: "少数在职者", color: "gold" },
          { label: { zh: "第三支柱：个人养老金", en: "Pillar 3: personal pension" }, value: 4, display: "约 6,000 万人", color: "sage" }
        ],
        cap: { zh: "结论很直接：如果你不在体制内或大企业，第二支柱基本没有，第三支柱就得自己补上。", en: "The conclusion is blunt: if you're not in the public sector or a large firm, pillar two is basically absent — so you have to build pillar three yourself." }
      },

      { t: "h", zh: "三个数字，决定你够不够", en: "Three numbers that decide whether it's enough" },
      {
        t: "ul",
        zh: [
          "**替代率**：退休后每月收入 ÷ 退休前月收入。国际上常提 60%–70% 才能维持原有生活水平，而基本养老金通常只能提供 40% 左右，差额要自己补",
          "**护理成本**：失能之后请护工或住养老机构，是养老支出里最陡的一段。很多城市每月数千到上万，且可能持续数年。长期护理保险目前在部分城市试点，尚未全国覆盖",
          "**医疗自付**：医保报销有目录和比例，进口药、康复、护理往往要自费。建议单独留一笔“医疗专用金”，不动用"
        ],
        en: [
          "**Replacement rate**: retirement income divided by pre-retirement income. International guidance suggests 60–70% to maintain your standard, while the basic pension typically provides around 40% — you cover the gap.",
          "**Care costs**: the steepest climb is after you lose independence — home carers or residential care run thousands to tens of thousands a month in major cities, sometimes for years. Long-term care insurance is still piloting in selected cities, not nationwide.",
          "**Out-of-pocket medical**: reimbursement follows catalogues and ratios; imported drugs, rehab and nursing are often self-paid. Keep a separate medical fund you never touch."
        ]
      },
      {
        t: "p",
        zh: "算一笔简单的账：假设你现在 30 岁，希望 60 岁后有相当于今天每月 8,000 元的购买力。基本养老金可能给到 3,000 左右，剩下 5,000 要自己出。按 4% 的提取率反推，需要约 150 万的可投资资产。数字吓人，但从 30 岁开始，每月存 2,000 元、年化 5%，三十年后大约接近这个数——**复利怕的不是收益率低，是开始得晚**。",
        en: "A simple calculation: suppose you're 30 and want the equivalent of 8,000 yuan a month at 60. The basic pension might cover 3,000; you need 5,000. At a 4% withdrawal rate that implies about 1.5 million in investable assets. It sounds brutal, but starting at 30 with 2,000 a month at 5% annual return gets close in thirty years — **compounding's enemy isn't a low return, it's a late start**."
      },

      { t: "h", zh: "人：老了以后谁在你身边", en: "People: who will actually be there" },
      {
        t: "p",
        zh: "哈佛成人发展研究追踪了 85 年，最稳定的结论是：**晚年过得好不好，关系质量比财富和名声更能预测**。而关系是会贬值的资产——你不维护，它就悄悄清零。",
        en: "The Harvard Study of Adult Development has run 85 years, and its steadiest finding is that **relationship quality predicts late-life wellbeing better than wealth or fame**. But relationships are a depreciating asset: unmaintained, they quietly go to zero."
      },
      {
        t: "p",
        zh: "具体一点：老了以后真正能帮上你的，通常不超过五个人——伴侣、一两个子女或晚辈、一两个还能来往的朋友。这不是社交广度问题，是深度问题。所以中年以后，把时间从“认识更多人”转向“维护好这几个人”，回报要高得多。",
        en: "Concretely: at most five people will genuinely be able to help you late in life — a partner, one or two children or younger relatives, one or two friends still in touch. It's not a question of breadth but depth. After midlife, moving time from “meeting more people” to “maintaining these few” pays far better."
      },

      { t: "h", zh: "现在就能做的六件事", en: "Six things you can start now" },
      {
        t: "checklist",
        zh: [
          "查一次自己的社保缴费记录，确认年限和个人账户余额",
          "开一个个人养老金账户，哪怕每年只放一点（还能抵税）",
          "把应急金之外的长期资金，配一份不折腾的指数基金定投",
          "每年做一次体检，重点看血压、血糖、血脂——这三项决定了后半生的失能风险",
          "现在就练一项能练到八十岁的运动：走路、游泳、太极、力量训练都行",
          "和伴侣或家人谈一次“万一我失能，怎么办”，把意愿写下来"
        ],
        en: [
          "Check your social insurance record once: contribution years and personal account balance.",
          "Open a personal pension account, even if you only put in a little each year — it's also tax-deductible.",
          "Beyond your emergency fund, set up an unexciting monthly index-fund contribution for long-term money.",
          "Get an annual check-up that covers blood pressure, blood sugar and lipids — these three drive most late-life disability risk.",
          "Start one form of exercise you could still do at eighty: walking, swimming, tai chi, strength work.",
          "Have one conversation about “if I lose independence, what then” — and write your wishes down."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "养儿防老。", en: "Children are your pension." },
            good: { zh: "孩子很可能在另一个城市、有自己的家庭和压力。情感支持可以有，经济依赖要谨慎。", en: "Your child will likely live in another city with their own family and pressures. Emotional support, yes; financial dependence, be careful." }
          },
          {
            bad: { zh: "离得还远，到时候再说。", en: "It's far off. I'll deal with it then." },
            good: { zh: "复利只奖励早开始的人。三十岁每月两千，和四十岁每月五千，结果差很多。", en: "Compounding only rewards the early. Two thousand a month at thirty differs sharply from five thousand at forty." }
          },
          {
            bad: { zh: "只要有钱，养老不是问题。", en: "With enough money, ageing is solved." },
            good: { zh: "钱能买到护理，买不到“有人愿意来看你”。没有关系，钱只能买到服务，买不到在场。", en: "Money buys care, not someone who wants to visit. Without relationships you purchase service, never presence." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "本周查一次社保缴费记录，看清自己的年限",
          "算一下：你现在的储蓄率，退休后能替代多少收入？",
          "给一个三年没联系的老朋友发条消息"
        ],
        en: [
          "Look up your social insurance record this week and note the years contributed.",
          "Work out what share of your income your current savings rate would replace.",
          "Message one old friend you haven't spoken to in three years."
        ]
      }
    ]
  });

  /* ============================== 19 · 幸福 ============================== */
  add({
    id: "happiness",
    num: "19",
    group: "last",
    icon: "compass",
    read: 11,
    title: { zh: "怎样才能幸福地过一辈子", en: "How to be happy for a whole life" },
    card: {
      zh: "幸福不是一种运气，是一套可以设计、也需要维护的结构。",
      en: "Happiness isn't luck. It's a structure you can design — and have to maintain."
    },
    kicker: { zh: "长远 · 幸福", en: "The long run · Wellbeing" },
    lede: {
      zh: "《世界幸福报告》每年问同一个问题：你对自己的生活打几分？各国排名的差异，主要来自六件事——人均收入、社会支持、健康寿命、自由度、慷慨程度、对腐败的感知。注意，收入只是六分之一。这一章讲剩下的六分之五，以及一辈子怎么排。",
      en: "The World Happiness Report asks the same question every year: how satisfied are you with your life? Differences between countries come down to six things — income per person, social support, healthy life expectancy, freedom, generosity, and perceptions of corruption. Note that income is one sixth. This chapter is about the other five sixths, and how to sequence a life."
    },
    takeaway: {
      zh: "幸福 = 稳定的关系 + 能动的身体 + 一点自主 + 一件在乎的事。四个都能主动经营。",
      en: "Wellbeing = steady relationships + a body that works + some autonomy + something you care about. All four are yours to manage."
    },
    blocks: [
      { t: "h", zh: "幸福不是状态，是结构", en: "Happiness isn't a state. It's a structure" },
      {
        t: "p",
        zh: "把幸福当成“感觉”，你就会一直追着它跑：升职了开心三个月，买房了开心半年，然后回到原点。这叫**享乐适应**——人对好事的兴奋会迅速衰减。",
        en: "Treat happiness as a feeling and you'll chase it forever: a promotion delights you for three months, a flat for six, then you're back where you were. This is **hedonic adaptation** — excitement about good things decays fast."
      },
      {
        t: "p",
        zh: "但如果把幸福当成“结构”，事情就变得可操作了：你每天见谁、身体怎么样、能不能决定自己的时间、有没有一件在乎的事。这四根柱子立着，情绪起伏就只是天气，不是气候。",
        en: "Treat it as a structure and it becomes actionable: who you see daily, how your body is, whether you control your time, and whether you care about something. With those four pillars standing, mood swings are weather, not climate."
      },
      {
        t: "p",
        zh: "关于钱也有个更新的答案。早年研究说“年收入超过 7.5 万美元，情绪就不再变好”；2023 年一项更大的研究发现：**对大多数人不快乐的那部分人来说，钱一直有用到十万美元以上**，但对已经很幸福的人，作用确实会趋缓。翻译成人话：钱主要是在消除痛苦，而不是制造快乐。",
        en: "There's a newer answer on money too. Early work suggested emotional wellbeing flattened above $75,000 a year; a larger 2023 study found that **for the unhappiest group, money kept helping well past $100,000**, while for those already content, the effect did level off. In plain terms: money mostly removes pain rather than creating joy."
      },
      {
        kind: "line",
        title: { zh: "幸福感随年龄的走向", en: "How wellbeing moves across a life" },
        sub: { zh: "示意曲线：横轴为年龄（岁），多项大型调查的常见形状", en: "Illustrative: horizontal axis is age; the shape seen in several large surveys" },
        x: ["18", "25", "32", "39", "46", "53", "60", "67", "74", "80"],
        yMin: 5,
        yMax: 9,
        series: [
          { name: { zh: "生活满意度（示意）", en: "Life satisfaction (illustrative)" }, values: [7.2, 6.9, 6.5, 6.2, 6.1, 6.4, 7.0, 7.5, 7.8, 7.9], color: "accent", fill: true },
          { name: { zh: "压力水平（示意）", en: "Stress (illustrative)" }, values: [5.6, 6.4, 7.2, 7.6, 7.3, 6.5, 5.4, 4.6, 4.1, 3.9], color: "sage", dashed: true }
        ],
        markers: [{ i: 4, v: 6.1 }],
        cap: { zh: "中年那段低点很常见：责任最重、时间最少。知道它会过去，本身就是一种安慰。", en: "The midlife dip is common: peak responsibility, minimum time. Knowing it passes is itself a comfort." }
      },

      { t: "h", zh: "五个高回报的投入", en: "Five investments with high returns" },
      {
        t: "ul",
        zh: [
          "**关系**：每周至少一次面对面、不带手机的交谈。质量比数量重要，深度比频次重要",
          "**身体**：每周 150 分钟中等强度活动 + 两次力量训练 + 每晚 7 小时睡眠。这是所有幸福的生理底座",
          "**自主**：能决定自己的时间怎么用。哪怕只是每天留一小时的“不被打扰”，也对幸福感有明显作用",
          "**意义**：有一件事，你做它不是为了钱，也不是为了给人看。哪怕很小：养花、教小孩、修东西",
          "**体验**：把钱花在经历上，比花在物品上更持久。旅行、演出、一顿认真的饭，都会留在记忆里反复取用"
        ],
        en: [
          "**Relationships**: at least one face-to-face, phone-free conversation a week. Quality over quantity, depth over frequency.",
          "**Body**: 150 minutes of moderate activity a week, two strength sessions, seven hours of sleep a night. The physiological base of everything.",
          "**Autonomy**: control over how your time is spent. Even one protected hour a day measurably helps.",
          "**Meaning**: something you do not for money and not for an audience — however small: plants, teaching a child, fixing things.",
          "**Experiences**: money spent on experiences outlasts money spent on objects. A trip, a show, a serious meal gets reused in memory."
        ]
      },

      { t: "h", zh: "三个最耗人的陷阱", en: "Three traps that drain people" },
      {
        t: "ul",
        zh: [
          "**比较**：和同事比收入、和同学比孩子、和网上的人比生活。你比较的对象，是别人精心剪过的片段",
          "**适应**：一升级就回归基线。破解办法是主动制造变化，而不是不断提高标准",
          "**把幸福当目标**：越盯着“我开心吗”，越不开心。幸福更像副产品——认真做一件事、认真陪一个人时，它自己出现"
        ],
        en: [
          "**Comparison**: income against colleagues, children against classmates, life against the internet. You're comparing to other people's edited highlights.",
          "**Adaptation**: every upgrade returns you to baseline. The fix is creating variation, not raising the bar.",
          "**Making happiness the goal**: the more you check “am I happy,” the less you are. It behaves like a by-product — it appears while you're absorbed in something or someone."
        ]
      },

      { t: "h", zh: "一辈子怎么排", en: "How to sequence a life" },
      {
        t: "table",
        head: { zh: ["阶段", "主线", "最值得做的", "最容易后悔的"], en: ["Stage", "Main thread", "Worth doing", "Most regretted"] },
        rows: [
          { zh: ["20 多岁", "试错", "多试几份工作、几个城市，尽快搞清楚自己不适合什么", "为了“稳定”过早锁死一条路"], en: ["Twenties", "Experiments", "Try several jobs and cities; learn quickly what you're not suited to", "Locking into one path too early for the sake of stability"] },
          { zh: ["30 多岁", "建立", "把一件事做深、选定长期伴侣、把身体习惯定下来", "用健康和关系换职位"], en: ["Thirties", "Building", "Go deep on one thing, choose a long-term partner, fix your health habits", "Trading health and relationships for a title"] },
          { zh: ["40 多岁", "平衡", "守住关系、把孩子养好、把养老账户补上", "把所有时间给了工作，孩子已经长大"], en: ["Forties", "Balance", "Protect relationships, raise the children, top up retirement", "Giving all your time to work until the children are already grown"] },
          { zh: ["50 多岁", "转身", "培养一个能带到晚年的爱好，开始交接权力与责任", "等到退休才发现没有生活"], en: ["Fifties", "Turning", "Grow a hobby that can last into old age; start handing over power and duty", "Discovering at retirement that you have no life"] },
          { zh: ["60 岁以后", "在场", "维持五个以内的深关系，保持能自理的体力，做点有用的事", "把自己关起来，等别人来看你"], en: ["Sixties and beyond", "Presence", "Keep five deep relationships, stay strong enough to manage, do something useful", "Shutting yourself in and waiting for visitors"] }
        ]
      },

      { t: "h", zh: "每天十分钟，四个动作", en: "Ten minutes a day, four moves" },
      {
        t: "checklist",
        zh: [
          "早上：说出今天最重要的一件事，只一件",
          "白天：和人有一次真正的对话（不是工作群）",
          "傍晚：出门走十分钟，最好有太阳",
          "睡前：写下今天三件具体的好事（要具体，不要写“今天还行”）"
        ],
        en: [
          "Morning: name the one thing that matters most today. One.",
          "Daytime: have one real conversation with a person — not a work group chat.",
          "Evening: walk for ten minutes, ideally in daylight.",
          "Before bed: write three specific good things about today. Specific — not “it was fine.”"
        ]
      },
      {
        t: "quote",
        zh: "幸福的生活，不是拥有得多，而是需要的少，同时在意的几件事都还在。",
        en: "A good life isn't about having more. It's about needing less — while the few things you care about are still there.",
        by: { zh: "— 这是很多长期研究指向的共同结论", en: "— Where a lot of the long-term research points" }
      },
      {
        t: "tip",
        zh: [
          "这周约一个朋友面对面吃饭，把手机收起来",
          "把一件“以后要做”的事，安排到日历上具体的日子",
          "今晚写三件具体的好事，坚持七天看看变化"
        ],
        en: [
          "Book one meal with a friend this week. Phones away.",
          "Take one “someday” item and put it on the calendar with a date.",
          "Write three specific good things tonight — and try it for seven days."
        ]
      }
    ]
  });
})();
