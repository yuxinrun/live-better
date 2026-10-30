/* Chapters 01–03 — meaning, not living in vain, the body */
(function () {
  "use strict";

  var add = window.LB.addChapter;

  /* ============================== 01 · 意义 ============================== */
  add({
    id: "meaning",
    num: "01",
    group: "start",
    icon: "compass",
    read: 9,
    title: { zh: "人生的意义，不是找到的，是长出来的", en: "Meaning isn't found. It grows." },
    card: {
      zh: "别急着找那个“终极答案”。先看看意义感由哪三样东西拼成，以及今天能造哪一块。",
      en: "Stop hunting for the ultimate answer. See what meaning is actually made of — and which piece you can build today."
    },
    kicker: { zh: "起点 · 人生的意义", en: "Start here · Meaning" },
    lede: {
      zh: "很多人会在某个深夜突然慌一下：我这么活着，到底为了什么？这一章不给你标准答案，只给你三块拼图，和一个现在就能做的动作。",
      en: "Most of us get ambushed at some point by a late-night question: what am I actually living for? This chapter won't hand you an answer. It offers three pieces of a puzzle, and one move you can make right now."
    },
    takeaway: {
      zh: "意义感 = 归属 + 用处 + 故事。三样都能自己造，而且今天就能造出一点点。",
      en: "Meaning = belonging + usefulness + story. All three are buildable, and you can build a little of one today."
    },
    blocks: [
      { t: "h", zh: "没有人天生带着使命", en: "Nobody is born with a mission statement" },
      {
        t: "p",
        zh: "小时候作文题叫“我的理想”，长大后换成了“你的人生规划是什么”。好像每个人抽屉里都该有一份说明书，找不到就是自己有问题。其实不是。多数人的答案不是“找”到的，是过着过着长出来的。心理学家更实在的说法是：**意义感是一种感受**，它由几样很具体的东西拼成，而不是天上掉下来的一个词。",
        en: "As kids we wrote essays about “what I want to be”. As adults we get asked about our “life plan”. It feels like everyone should have a manual in a drawer and you're broken if you can't find yours. Not true. For most people the answer isn't discovered — it accretes. Psychologists put it more plainly: **meaning is a feeling**, assembled from a few concrete parts, not a word that falls out of the sky."
      },

      { t: "h", zh: "意义感的三个零件", en: "The three parts of meaning" },
      {
        t: "p",
        zh: "研究者在问“你觉得人生有意义吗”的时候，其实在测三样东西。你可以把它当成一张体检表，看看自己缺哪一项。",
        en: "When researchers ask “does your life feel meaningful?”, they are quietly measuring three things. Treat them as a checklist: which one is thin for you?"
      },
      {
        kind: "rings",
        title: { zh: "意义感的三个零件", en: "Three parts of a meaningful life" },
        items: [
          {
            t: { zh: "归属：有人真的在乎你", en: "Belonging: someone actually cares" },
            d: { zh: "不是点赞和群里的表情包，是“他出事我会立刻赶过去”的那几个人。", en: "Not likes or group-chat emojis — the few people you'd drop everything for." }
          },
          {
            t: { zh: "用处：你让什么变好了一点", en: "Purpose: something is better because of you" },
            d: { zh: "一盆花、一个孩子、一段代码、一群客户，都算。被需要的感觉，比被夸奖持久。", en: "A plant, a kid, a piece of code, a handful of clients. Being needed lasts longer than being praised." }
          },
          {
            t: { zh: "故事：你讲得通自己的经历", en: "Story: your life makes sense to you" },
            d: { zh: "能把过去的难关讲成“所以我成了现在这样”，人就不容易碎。", en: "If you can narrate hard years as “and that's why I am who I am”, you bend instead of breaking." }
          }
        ]
      },
      {
        t: "p",
        zh: "三样缺一样，日子就会有点空：只有归属没有用处，会觉得“我只是在陪跑”；只有用处没有归属，会又累又孤独；有了前两样却讲不通自己的故事，人会反复怀疑“这一切值得吗”。",
        en: "Miss one and life feels slightly hollow: belonging without purpose feels like being a spectator; purpose without belonging is exhausting and lonely; and with both but no coherent story, you keep asking “was any of it worth it?”."
      },

      { t: "h", zh: "快乐、投入、意义，是三件不同的事", en: "Pleasure, engagement and meaning are different things" },
      {
        t: "p",
        zh: "刷两小时短视频很快乐，但不会觉得有意义；熬夜做完一个作品很累，却觉得值。判断一件事值不值得花时间，问两个问题就够了：**此刻舒不舒服**，以及**五年后还在不在乎**。",
        en: "Two hours of short videos feels good and means nothing. Staying up to finish something you made feels awful and means everything. To judge how to spend time, ask only: **does it feel good now**, and **will I still care in five years**?"
      },
      {
        kind: "matrix",
        title: { zh: "把时间放到哪个格子里", en: "Which quadrant does your time land in?" },
        sub: { zh: "横轴是当下的感受，纵轴是长期的价值", en: "Horizontally: how it feels now. Vertically: what it's worth later." },
        x: { zh: "此刻的感受：难受 ← → 享受", en: "Right now: unpleasant ← → enjoyable" },
        y: { zh: "长期的价值：低 → 高", en: "Long term: low → high" },
        quads: [
          {
            t: { zh: "值得坚持", en: "Worth the grind" },
            d: { zh: "运动、学手艺、把难说的话说清楚。当下不舒服，五年后还在给你分红。", en: "Exercise, learning a craft, saying the hard thing. Uncomfortable now, still paying you in five years." },
            tone: "good"
          },
          {
            t: { zh: "值得保护", en: "Worth protecting" },
            d: { zh: "陪家人吃饭、见朋友、做喜欢的小项目。现在舒服，将来也记得。", en: "Family dinners, seeing friends, a small project you love. Good now, remembered later." },
            tone: "good"
          },
          {
            t: { zh: "可以先放下", en: "Can let go" },
            d: { zh: "反复刷坏消息、和陌生人吵架、无意义的抱怨。难受又没用。", en: "Doomscrolling, arguing with strangers, pointless complaining. Unpleasant and useless." },
            tone: "bad"
          },
          {
            t: { zh: "偶尔为之", en: "Now and then" },
            d: { zh: "刷视频、打游戏、躺平一天。现在爽，事后有点空，适量就好。", en: "Videos, games, a whole day in bed. Fun now, a bit hollow after. Fine in moderation." },
            tone: "warn"
          }
        ]
      },

      { t: "h", zh: "具体的意义，比宏大的意义管用", en: "Small concrete meaning beats big abstract meaning" },
      {
        t: "p",
        zh: "“改变世界”太远，人听多了会麻。真正能托住一个人的，往往是具体的、有回应的、非你不可的小事。它们的共同点是：**你能看到自己的动作产生了结果**。",
        en: "“Change the world” is so distant it numbs you. What actually holds a person up tends to be small, responsive and slightly irreplaceable. The common thread: **you can see your action land somewhere**."
      },
      {
        t: "ul",
        zh: [
          "养一株活的东西，或者一只猫一只狗，每天照顾它——它会把你的存在反馈给你",
          "加入一个“有人等你”的小团体：球队、乐队、读书会、志愿者、开源项目",
          "每周做一件对具体的人有用的事：帮同事改一段文案、教邻居的孩子做题、给朋友改简历",
          "把一件事做到“能交付”：写完一首歌、做好一张桌子、跑完 5 公里、办完一次小活动"
        ],
        en: [
          "Keep something alive — a plant, a cat, a dog. It will feed your existence back to you.",
          "Join a small group that waits for you: a team, a band, a reading club, volunteers, an open-source project.",
          "Do one useful thing for one specific person each week: edit a colleague's draft, tutor a neighbour's kid, fix a friend's CV.",
          "Take one thing all the way to “deliverable”: finish the song, build the table, run the 5K, host the small event."
        ]
      },

      { t: "h", zh: "一个不太温柔、但很有用的视角", en: "A less comforting, more useful angle" },
      {
        t: "quote",
        zh: "人所拥有的任何东西都可以被剥夺，唯独在任何境遇中选择自己态度和生活方式的自由不能被剥夺。",
        en: "Everything can be taken from a person but one thing: the last of human freedoms — to choose one's attitude in any given set of circumstances.",
        by: { zh: "维克多·弗兰克尔《活出生命的意义》", en: "Viktor Frankl, Man's Search for Meaning" }
      },
      {
        t: "p",
        zh: "这句话常被误读成“乐观一点”。它其实更硬：意义不是世界发给你的任务书，而是你在限制条件下选的一个姿势。工资、城市、身体状况可能都不由你定，但“怎么对待今天”多少由你定。这已经够撑起一个人的一生了。",
        en: "This is often misread as “be optimistic”. It's harder than that: meaning isn't a task sheet handed down to you, it's a posture you choose inside constraints. You may not control your salary, your city or your health — but you mostly control how you treat today. That is enough to carry a life."
      },

      { t: "h", zh: "意义会变，这很正常", en: "Meaning changes, and that's normal" },
      {
        t: "p",
        zh: "二十岁想要证明自己，三十岁想要站稳，四十岁可能想要传承，五十岁以后可能只想要安宁。这不是你善变，是人生阶段在换题目。每隔一两年，拿一张纸回答三个问题就够了：我在乎谁、我在乎什么事、我想成为什么样的人。答案变了，就跟着调整，不必为“背叛了过去的自己”而内疚。",
        en: "At 20 you want to prove yourself; at 30, to get steady; at 40, maybe to pass something on; after 50, maybe just peace. You're not fickle — the exam paper changed. Once every year or two, answer three questions on a sheet of paper: who do I care about, what do I care about, who do I want to become. If the answers shift, adjust. No guilt about “betraying your past self”."
      },

      {
        t: "tip",
        zh: [
          "写下三个词：一个你在乎的人、一件你在乎的事、一种你想成为的人。每个只写一个词，别想太久",
          "从三个词里挑一个，今天做一件 10 分钟的小事（发一条消息、查一个课程、整理一个抽屉）",
          "睡前用一句话记下来：“今天我做了一件有意义的事，是……”"
        ],
        en: [
          "Write three words: one person you care about, one thing you care about, one kind of person you want to be. One word each — don't overthink.",
          "Pick one of the three and do a 10-minute thing today: send the message, look up the class, clear the drawer.",
          "Before sleep, write one line: “Today I did one meaningful thing, and it was…”"
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "意义是一个需要被找到的正确答案。", en: "Meaning is a correct answer waiting to be found." },
            good: { zh: "意义更像肌肉：用得越多，长得越结实。找不到答案时，先做一件有用的小事。", en: "Meaning is a muscle: the more you use it, the stronger it gets. When you can't find an answer, do one useful small thing." }
          },
          {
            bad: { zh: "有意义的人生必须很苦、很伟大。", en: "A meaningful life has to be hard and grand." },
            good: { zh: "日常的小用处就够：一盆活着的植物、一个等你回家的孩子、一个等你交稿的伙伴。", en: "Ordinary usefulness is enough: a living plant, a kid waiting for you, a teammate waiting on your draft." }
          },
          {
            bad: { zh: "没找到意义，就没法好好活。", en: "Without meaning, you can't live well." },
            good: { zh: "反过来更常见：把日子过顺了，意义才慢慢浮出来。所以先睡觉、先见人、先做完一件事。", en: "It usually works the other way: get daily life working, and meaning surfaces. So sleep, see people, finish one thing." }
          }
        ]
      }
    ]
  });

  /* ============================ 02 · 不白活 ============================== */
  add({
    id: "not-wasted",
    num: "02",
    group: "start",
    icon: "hourglass",
    read: 8,
    title: { zh: "怎样才算没白活", en: "What makes a life not wasted" },
    card: {
      zh: "临终的人最后悔的五件事，和一份“从今天就能改”的清单。",
      en: "The five regrets of the dying, and a list you can actually change starting today."
    },
    kicker: { zh: "起点 · 如何不白活", en: "Start here · No regrets" },
    lede: {
      zh: "不白活不等于成功，也不等于环游世界。它更像一道算术题：你醒着的时间，被谁拿走了？剩下的那点，你打算怎么花？",
      en: "A life not wasted isn't about success or visiting every country. It's arithmetic: who is taking your waking hours — and how will you spend the few you get back?"
    },
    takeaway: {
      zh: "把“以后再说”换成“这周几点”。人生的空白，大多是这样被填上的。",
      en: "Turn “someday” into “what time this week”. That's how most blank space in a life gets filled."
    },
    blocks: [
      { t: "h", zh: "来自临终病房的五句话", en: "Five sentences from a hospice ward" },
      {
        t: "p",
        zh: "护士布朗尼·韦尔（Bronnie Ware）在安宁病房照顾临终病人多年，记录下他们最常说的遗憾。这不是严谨的科学研究，只是观察和记录；但当同一个答案被几百个人反复说起，值得听一听。",
        en: "Nurse Bronnie Ware spent years caring for dying patients and recorded what they regretted most. It isn't a controlled study — just observation. But when hundreds of people independently say the same thing, it's worth hearing."
      },
      {
        t: "ul",
        zh: [
          "“我希望有勇气过忠于自己的生活，而不是别人期望我过的生活。”",
          "“我希望自己没有那么拼命地工作。”",
          "“我希望有勇气表达自己的感受。”",
          "“我希望和朋友们保持联系。”",
          "“我希望允许自己更快乐一点。”"
        ],
        en: [
          "“I wish I'd had the courage to live a life true to myself, not the life others expected of me.”",
          "“I wish I hadn't worked so hard.”",
          "“I wish I'd had the courage to express my feelings.”",
          "“I wish I had stayed in touch with my friends.”",
          "“I wish I had let myself be happier.”"
        ]
      },
      {
        t: "p",
        zh: "这五句里，没有一句是“我希望能多赚一点钱”或“我希望能再买一套房”。钱能解决很多问题，但它很少出现在最后的清单上——因为它解决的是**恐惧**，不是**遗憾**。",
        en: "Not one of them is “I wish I'd made more money” or “I wish I'd bought another apartment”. Money solves a lot, but it rarely makes the final list — because it buys off **fear**, not **regret**."
      },

      { t: "h", zh: "你的 24 小时，被谁拿走了", en: "Who is taking your 24 hours" },
      {
        t: "p",
        zh: "一个普通工作日大概是这样（城市上班族的粗略平均，各地差异很大，别拿它跟自己较劲）：",
        en: "A normal workday roughly looks like this (a very rough urban average — don't use it to beat yourself up):"
      },
      {
        kind: "donut",
        title: { zh: "一天的时间去向", en: "Where a day goes" },
        sub: { zh: "按 24 小时计，仅示意", en: "Out of 24 hours, illustrative" },
        center: { v: { zh: "1.5h", en: "1.5h" }, label: { zh: "真正由你支配", en: "actually yours" } },
        items: [
          { label: { zh: "睡眠", en: "Sleep" }, value: 7.5, color: "sage" },
          { label: { zh: "工作与通勤", en: "Work & commute" }, value: 9.5, color: "accent" },
          { label: { zh: "家务与琐事", en: "Chores & errands" }, value: 2.5, color: "muted" },
          { label: { zh: "屏幕娱乐", en: "Screens" }, value: 3, color: "gold" },
          { label: { zh: "自由支配", en: "Free" }, value: 1.5, color: "ink" }
        ]
      },
      {
        t: "p",
        zh: "数字不必精确，重点在最后一块：真正由你支配的可能只有一两个小时。所以“等我有空”基本等于“永远没有”。想让某件事发生，唯一可靠的办法是**把它塞进日历**，像开会一样对待它。",
        en: "The exact numbers don't matter. The last slice does: maybe an hour or two is genuinely yours. So “when I have time” usually means “never”. The only reliable way to make something happen is to **put it in the calendar** and treat it like a meeting."
      },

      { t: "h", zh: "三个检验：怎样算没白活", en: "Three tests for a life not wasted" },
      {
        t: "ol",
        zh: [
          "**回头检验**：一年后，你希望自己记得哪三件事？现在就把它写进日历，否则一年后记不起来。",
          "**当下检验**：今天有没有一个瞬间，你是真的“在”？吃饭时只吃饭，和人说话时不看手机，就算。",
          "**离开检验**：如果你明天搬走，谁会真的想你？答案里的那几个人，就是该多花时间的人。"
        ],
        en: [
          "**The look-back test**: which three things do you want to remember a year from now? Put them in the calendar now, or you won't remember them at all.",
          "**The presence test**: was there a moment today when you were actually *there*? Eating without a screen, talking without checking your phone — that counts.",
          "**The leaving test**: if you moved away tomorrow, who would genuinely miss you? Those are the people to spend more time with."
        ]
      },

      { t: "h", zh: "把愿望从“以后”搬到“这周”", en: "Move wishes from “someday” to “this week”" },
      {
        t: "p",
        zh: "大多数遗憾不是因为做不到，而是因为一直没开始。原因很简单：愿望太模糊，模糊的事永远不会被安排。把愿望改写成有**时间、地点、第一个动作**的句子，它就从愿望变成了任务。",
        en: "Most regrets aren't failures — they're things that never started. The reason is simple: wishes are vague, and vague things never get scheduled. Rewrite the wish with **a time, a place and a first action**, and it turns from a wish into a task."
      },
      {
        t: "table",
        head: { zh: ["模糊的愿望", "可执行的版本"], en: ["Vague wish", "Executable version"] },
        rows: [
          { zh: ["想学吉他", "周三 20:00，看第一节网课，只练 20 分钟"], en: ["Learn guitar", "Wed 20:00, first online lesson, practise 20 minutes only"] },
          { zh: ["想多陪爸妈", "周日晚 8 点视频 20 分钟，只聊近况"], en: ["See my parents more", "Sun 20:00, 20-minute video call, just catch up"] },
          { zh: ["想开始写作", "每天早上 7:30 写 200 字，写完就去上班"], en: ["Start writing", "Every morning 7:30, 200 words, then off to work"] },
          { zh: ["想运动", "下班到家先换鞋，出门快走 20 分钟再进门"], en: ["Get fit", "Change shoes before entering, walk 20 minutes, then go in"] }
        ]
      },

      { t: "h", zh: "一个反向提醒：别把人生过成打卡", en: "A counter-warning: don't turn life into a checklist" },
      {
        t: "p",
        zh: "“不白活”不等于“完成更多清单”。集邮式的旅行、拍照式的读书、为了发朋友圈而做的事，做完往往更空。判断标准可以很简单：**如果这件事不能告诉任何人，你还愿意做吗？** 愿意，那才是你的。",
        en: "“Not wasted” doesn't mean “more items ticked”. Stamp-collecting travel, photo-op reading, anything done for the feed tends to leave you emptier. A simple test: **would you still do it if you could never tell anyone?** If yes, it's actually yours."
      },
      {
        t: "stats",
        items: [
          { v: { zh: "78 万", en: "780k" }, label: { zh: "人生大约有多少小时（按 90 岁计）", en: "hours in a life, at 90 years" } },
          { v: { zh: "1.5", en: "1.5" }, label: { zh: "每天真正自由支配的小时数", en: "hours a day genuinely your own" } },
          { v: { zh: "5", en: "5" }, label: { zh: "临终最常见的遗憾条数", en: "regrets most often named at the end" } }
        ]
      },
      {
        t: "tip",
        zh: [
          "打开日历，本周找一个 2 小时的空格，填上一件“以后一直想做”的事",
          "给一个很久没联系的人发条消息，不用长，三句话就够",
          "今晚睡前写下今天最好的一个瞬间，一句话"
        ],
        en: [
          "Open your calendar, find a two-hour gap this week, and put in one thing you've been meaning to do “someday”.",
          "Message someone you haven't spoken to in ages. Three sentences is plenty.",
          "Tonight, write down the best moment of today in one sentence."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "清单越长，人生越值。", en: "A longer bucket list means a fuller life." },
            good: { zh: "三件真正做到的事，比三十件“计划过”的事更抗后悔。", en: "Three things actually done outweigh thirty things once planned." }
          },
          {
            bad: { zh: "必须辞职、去远方，人生才不白活。", en: "You must quit and travel far to not waste your life." },
            good: { zh: "对大多数人，把日常生活改好 10% 的收益，远大于一次壮举。", en: "For most people, improving ordinary life by 10% beats one grand gesture." }
          },
          {
            bad: { zh: "忙就是充实。", en: "Being busy means being fulfilled." },
            good: { zh: "忙有时是麻药。真正的充实，晚上回想时能说出一件具体的事。", en: "Busyness can be anaesthetic. Real fullness means naming one concrete thing when you look back at the day." }
          }
        ]
      }
    ]
  });

  /* ============================== 03 · 身体 ============================== */
  add({
    id: "health",
    num: "03",
    group: "body",
    icon: "heart",
    read: 10,
    title: { zh: "先别急着养生，把四件大事做对", en: "Skip the wellness hype. Get four basics right." },
    card: {
      zh: "睡眠、走路、吃什么、烟和酒——这四件事决定了大部分寿命差异。",
      en: "Sleep, walking, eating, smoking and drinking — four things that explain most of the gap in lifespan."
    },
    kicker: { zh: "身体 · 最低成本的续命", en: "Body · Cheapest life extension" },
    lede: {
      zh: "健康信息又贵又吵：这个补剂、那个疗法、每天八杯水。好消息是，真正起作用的，是几件免费、无聊、被反复验证过的事。",
      en: "Health advice is loud and expensive: this supplement, that therapy, eight glasses of water. The good news is that what actually works is free, boring and repeatedly verified."
    },
    takeaway: {
      zh: "睡够、常走、少吃加工食品、不抽烟。做到这四件，你已经赢过绝大多数“养生”。",
      en: "Sleep enough, walk often, eat less processed food, don't smoke. Do those four and you're ahead of most wellness routines."
    },
    blocks: [
      { t: "h", zh: "睡眠：先修这一项", en: "Sleep: fix this first" },
      {
        t: "p",
        zh: "如果只能改一件事，改睡眠。它同时影响情绪、判断力、食欲和免疫力。缺觉的人不是“意志力差”，是大脑的刹车片磨损了——所以别在没睡好的时候考验自己的人性。",
        en: "If you change one thing, change sleep. It moves mood, judgement, appetite and immunity at once. A sleep-deprived person doesn't have “weak willpower”; the brain's brakes are worn. Don't test your character on a bad night's sleep."
      },
      {
        kind: "line",
        title: { zh: "睡多久，和死亡风险的关系", en: "Sleep duration and mortality risk" },
        sub: { zh: "相对风险，以每天 7–8 小时为 1.0（越低越好）", en: "Relative risk, 7–8 hours = 1.0 (lower is better)" },
        x: ["<5h", "5–6h", "6–7h", "7–8h", "8–9h", "9–10h", ">10h"],
        yMin: 0.9,
        yMax: 1.4,
        series: [{ name: { zh: "相对风险", en: "Relative risk" }, color: "sage", values: [1.35, 1.18, 1.06, 1.0, 1.03, 1.12, 1.28], fill: true }],
        markers: [{ i: 3, v: 1.0 }],
        cap: { zh: "形状综合自多项队列研究（如 Cappuccio 等，2010）。这类研究只能说明“相关”，不能证明因果，但方向高度一致：7–8 小时附近风险最低。", en: "Shape synthesised from cohort studies (e.g. Cappuccio et al., 2010). These show correlation, not causation, but the direction is consistent: lowest risk around 7–8 hours." }
      },
      {
        t: "ul",
        zh: [
          "**固定起床时间**比固定睡觉时间更重要，周末别补超过 1 小时",
          "睡前一小时把灯调暗，手机充电器放到卧室外面（最简单也最有效）",
          "躺 20 分钟睡不着就起来，做点无聊的事，困了再回去",
          "下午 2 点以后不喝咖啡；酒精会让你更快入睡，但会毁掉后半夜的深睡"
        ],
        en: [
          "**A fixed wake-up time** matters more than a fixed bedtime. Don't sleep in more than an hour at weekends.",
          "Dim the lights an hour before bed and move the charger outside the bedroom — the simplest, most effective fix.",
          "Awake after 20 minutes? Get up, do something boring, go back when sleepy.",
          "No coffee after 2 pm. Alcohol puts you out faster and wrecks the second half of the night."
        ]
      },

      { t: "h", zh: "运动：把门槛降到鞋底", en: "Exercise: lower the barrier to your shoes" },
      {
        t: "p",
        zh: "世界卫生组织建议成年人每周 150–300 分钟中等强度活动，外加每周两次力量训练。翻译成中文就是：**每天快走 20 分钟**，再加两次十分钟的深蹲和俯卧撑。不需要健身卡，不需要换专业装备。",
        en: "The WHO suggests 150–300 minutes of moderate activity a week for adults, plus two sessions of strength work. In plain words: **walk briskly 20 minutes a day**, plus two ten-minute sessions of squats and push-ups. No gym card, no kit."
      },
      {
        t: "ul",
        zh: [
          "把运动绑在已有习惯上：早饭后、下班换鞋前、接孩子之前——绑定比决心可靠",
          "每坐 45 分钟起身走 2 分钟，血糖和腰都会感谢你",
          "选你**不讨厌**的运动。能坚持的散步，胜过去两次就放弃的搏击课",
          "每周两次力量训练，从深蹲、俯卧撑、弹力带划船开始，各 3 组"
        ],
        en: [
          "Attach movement to something you already do: after breakfast, before changing out of work clothes, before pickup. Anchors beat resolve.",
          "Stand and walk two minutes every 45 minutes of sitting. Your blood sugar and your back will thank you.",
          "Pick something you **don't hate**. A walk you keep beats two Muay Thai classes you abandon.",
          "Twice a week, do strength: squats, push-ups, band rows. Three sets each."
        ]
      },
      {
        t: "stats",
        items: [
          { v: { zh: "150", en: "150" }, label: { zh: "每周中等强度活动分钟数（下限）", en: "minutes a week, moderate (minimum)" } },
          { v: { zh: "20", en: "20" }, label: { zh: "拆到每天，只要这么多分钟", en: "per day, once you divide it" } },
          { v: { zh: "2", en: "2" }, label: { zh: "每周力量训练次数", en: "strength sessions a week" } },
          { v: { zh: "7k", en: "7k" }, label: { zh: "每天步数已达大部分收益", en: "daily steps, where most benefit is reached" } }
        ]
      },

      { t: "h", zh: "吃：只改三件，不要戒断", en: "Food: three changes, no bans" },
      {
        t: "p",
        zh: "营养学吵得很凶，但几乎所有流派都同意三件事：多吃蔬菜和豆类、少吃超加工食品、少喝含糖饮料。其他的（生酮、轻断食、碳水比例）对普通人来说，差异远小于“能不能坚持”。",
        en: "Nutrition science argues loudly, but almost every camp agrees on three things: more vegetables and beans, fewer ultra-processed foods, fewer sugary drinks. Everything else — keto, fasting, carb ratios — matters far less for ordinary people than whether you can keep it up."
      },
      {
        t: "ul",
        zh: [
          "每餐先有一份蔬菜或豆类，占盘子一半；先吃菜再吃饭，更容易饱",
          "蛋白质每餐一个手掌大：鱼、蛋、瘦肉、豆腐都行",
          "渴了喝水或无糖茶；一瓶甜饮料约等于 8–10 块方糖",
          "配料表超过五行、有一堆不认识的名字，基本就是超加工食品",
          "喜欢的零食不用戒，改成“每周一次”，比“永远不许”活得久"
        ],
        en: [
          "Start each meal with vegetables or beans — half the plate. Veg first, carbs after; you'll feel full sooner.",
          "A palm-sized portion of protein per meal: fish, eggs, lean meat, tofu.",
          "Drink water or unsweetened tea. One bottle of soft drink is roughly 8–10 sugar cubes.",
          "More than five lines of ingredients, with names you can't pronounce? That's ultra-processed.",
          "Don't ban the snacks you love. Make them “once a week” — that outlives “never”."
        ]
      },

      { t: "h", zh: "烟和酒：没有安全剂量", en: "Smoking and drinking: no safe dose" },
      {
        t: "p",
        zh: "吸烟者平均比不吸烟者少活约十年；如果能在 40 岁前戒掉，大部分损失可以挽回（Jha 等，2013）。电子烟不是“安全的替代品”，目前最有效的戒烟方式仍是**药物 + 行为支持**，可以找戒烟门诊。",
        en: "Smokers lose roughly ten years of life on average; quitting before 40 recovers most of it (Jha et al., 2013). Vaping isn't a “safe alternative”. The most effective route is still **medication plus behavioural support** — look for a smoking-cessation clinic."
      },
      {
        t: "p",
        zh: "酒精方面，世界卫生组织 2023 年的立场很清楚：就健康而言，**没有所谓的安全饮酒量**。“红酒护心”更多是酒业营销，不是医学共识。如果一定要喝，越少越好，别把“适量”当成许可证。",
        en: "On alcohol, the WHO's 2023 position is blunt: when it comes to health, **there is no safe level of drinking**. “A glass of red is good for the heart” is marketing, not consensus. If you do drink, less is better — and don't treat “moderate” as a licence."
      },

      { t: "h", zh: "体检：查该查的，别买套餐", en: "Check-ups: screen what matters, skip the packages" },
      {
        t: "p",
        zh: "体检套餐经常堆一堆用处不大的项目，又漏掉真正重要的。原则是：**按年龄和家族史查**，有异常再深入，别为“查得全”多花钱。",
        en: "Check-up packages often bundle low-value tests and miss the important ones. The principle: **screen by age and family history**, investigate further only if something shows up. Don't pay extra for “checking everything”."
      },
      {
        t: "table",
        head: { zh: ["年龄段", "值得优先做的几项"], en: ["Age", "Worth prioritising"] },
        rows: [
          { zh: ["20–30 岁", "血压、血常规、乙肝筛查、宫颈癌筛查（有性生活女性）、HPV 疫苗"], en: ["20s", "Blood pressure, full blood count, hepatitis B, cervical screening (if sexually active), HPV vaccine"] },
          { zh: ["30–40 岁", "加血糖、血脂、甲状腺功能；口腔检查每年一次"], en: ["30s", "Add blood sugar, lipids, thyroid; dental check yearly"] },
          { zh: ["40–50 岁", "加肠癌筛查（按医嘱）、乳腺检查（女性）、眼底检查"], en: ["40s", "Add colorectal screening (as advised), breast screening, eye exam"] },
          { zh: ["50 岁以上", "加骨密度（女性）、带状疱疹疫苗、吸烟者做低剂量肺 CT"], en: ["50+", "Add bone density (women), shingles vaccine, low-dose lung CT if you smoke"] }
        ]
      },
      {
        t: "p",
        zh: "这张表只是提示，不是医嘱。有家族史的人，很多项目要提前十年开始；具体做什么、多久做一次，请听医生的。",
        en: "This table is a prompt, not a prescription. With family history, many of these start a decade earlier. What to do and how often is a doctor's call."
      },

      {
        t: "tip",
        zh: [
          "今晚把手机充电器移到卧室外面（这一条的效果被严重低估）",
          "明天午饭后走 15 分钟，别带耳机，看看路边的树",
          "在冰箱里放一盒洗好的小番茄或胡萝卜，饿的时候先看到它"
        ],
        en: [
          "Tonight, move your charger out of the bedroom. This one is wildly underrated.",
          "Walk 15 minutes after lunch tomorrow — no headphones, just look at the trees.",
          "Put a box of washed cherry tomatoes or carrots at eye level in the fridge, so hunger meets them first."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "每天必须喝八杯水，还要排毒。", en: "You need eight glasses a day, plus a detox." },
            good: { zh: "身体自己会调节水分，看尿色（浅黄即可）。肝肾就是你的排毒系统，不需要买产品。", en: "Your body regulates water; check urine colour (pale straw is fine). Your liver and kidneys *are* the detox system." }
          },
          {
            bad: { zh: "保健品能补上饮食的缺口。", en: "Supplements make up for a bad diet." },
            good: { zh: "除了特定人群（如孕期补叶酸、老人补 B12 和 D），大多数人把这份钱花在菜市场更划算。", en: "Outside specific groups (folate in pregnancy, B12 and D for some older adults), that money is better spent at the market." }
          },
          {
            bad: { zh: "熬夜掉的血，周末补觉能补回来。", en: "Weekend lie-ins repay sleep debt." },
            good: { zh: "只能补一部分。长期欠账会让代谢和情绪都出问题，唯一的解法是提前睡。", en: "Only partly. Chronic debt hits metabolism and mood; the only real fix is going to bed earlier." }
          }
        ]
      }
    ]
  });
})();
