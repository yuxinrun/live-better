/* Chapters 07–09 — mind, people, work */
(function () {
  "use strict";

  var add = window.LB.addChapter;

  /* ============================== 08 · 情绪 ============================== */
  add({
    id: "mind",
    num: "08",
    group: "heart",
    icon: "wave",
    read: 9,
    title: { zh: "情绪不是敌人，是信号", en: "Emotions aren't enemies. They're signals." },
    card: {
      zh: "焦虑、低落、愤怒都在告诉你一件事。听懂它，比压住它有用。",
      en: "Anxiety, low mood and anger are all telling you something. Listening works better than suppressing."
    },
    kicker: { zh: "内心 · 情绪与韧性", en: "Mind · Emotions" },
    lede: {
      zh: "没有人能一直开心。真正的差别不在于谁的情绪更少，而在于情绪来的时候，你手里有没有工具。",
      en: "Nobody is happy all the time. The difference isn't who feels less — it's whether you have tools when the feeling arrives."
    },
    takeaway: {
      zh: "情绪来了，先照顾身体（呼吸、走动、睡觉），再处理事情。顺序反了，事情会越弄越糟。",
      en: "When emotion hits, tend the body first — breathe, move, sleep — then handle the situation. Reverse the order and it gets worse."
    },
    blocks: [
      { t: "h", zh: "先分清三样东西", en: "Separate three things" },
      {
        t: "p",
        zh: "同样一件事，不同的人会有完全不同的情绪，因为中间隔着一层“解读”。同事没回你消息：一种解读是“他讨厌我”，另一种是“他在忙”。事实只有一个，解读可以有很多个，情绪跟着解读走。",
        en: "The same event produces different feelings in different people because a layer of interpretation sits in between. A colleague hasn't replied: one reading is “he dislikes me”, another is “he's busy”. One fact, many readings — and feelings follow the reading."
      },
      {
        t: "ul",
        zh: [
          "**事实**：他没有回复（可核对）",
          "**想法**：他是不是对我有意见（推测，可能是错的）",
          "**情绪**：焦虑、委屈（真实的，需要被照顾）"
        ],
        en: [
          "**Fact**: he hasn't replied (verifiable).",
          "**Thought**: maybe he has a problem with me (a guess, possibly wrong).",
          "**Emotion**: anxiety, hurt (real, and worth tending)."
        ]
      },
      {
        t: "p",
        zh: "把三样分开写下来，情绪强度往往会先降一半。这不是自我安慰，是让大脑从“被情绪淹没”切回“可以思考”。",
        en: "Write the three apart and the intensity often drops by half. This isn't wishful thinking; it moves the brain from flooded to thinking."
      },

      { t: "h", zh: "情绪急救：四步", en: "Emotional first aid: four steps" },
      {
        kind: "flow",
        title: { zh: "情绪上来时的四步", en: "Four steps when it hits" },
        steps: [
          { t: { zh: "先让身体慢下来", en: "Slow the body first" }, d: { zh: "做三次“长呼气”——吸两下，呼一口长的。生理上这会直接降低心率。", en: "Three long exhales — two short inhales, one long out. Physiologically this drops your heart rate." } },
          { t: { zh: "给情绪起个名字", en: "Name the feeling" }, d: { zh: "“我现在是委屈，不只是生气。”能说清的情绪，强度会降低。", en: "“This is hurt, not just anger.” Feelings you can name lose intensity." } },
          { t: { zh: "判断现在需要什么", en: "Decide what's needed now" }, d: { zh: "是需要处理事情，还是需要先照顾自己？大多数时候是后者，处理事情可以等 20 分钟。", en: "Do you need to solve something, or to take care of yourself? Usually the latter — solving can wait 20 minutes." } },
          { t: { zh: "找一个人说出声", en: "Say it out loud to someone" }, d: { zh: "不需要对方解决问题，只需要被听见。十分钟就够。", en: "They don't need to fix it, only to hear it. Ten minutes is enough." } }
        ]
      },

      { t: "h", zh: "反刍：最耗电的习惯", en: "Rumination: the most expensive habit" },
      {
        t: "p",
        zh: "反刍是同一段难受在心里反复播放，像卡住的唱片。它看起来像在“思考”，其实只是在消耗。研究发现，反刍习惯强的人，抑郁和焦虑的风险明显更高。",
        en: "Rumination is the same painful scene replaying on a loop, like a stuck record. It feels like thinking; it's only spending. People who ruminate heavily have clearly higher rates of depression and anxiety."
      },
      {
        t: "ul",
        zh: [
          "**设一个担心时段**：每天固定 15 分钟专门担心，其他时间出现担心就先记下来",
          "**问三个问题**：这件事我能控制吗？最坏会怎样？下一步是什么？",
          "**把“如果……怎么办”改成“如果……我就……”**：给每个担心配一个动作，担心就变成了预案",
          "**用身体打断**：冷水洗手、快走十分钟、做家务——身体一动，循环就断"
        ],
        en: [
          "**Schedule worry**: 15 fixed minutes a day. When worry shows up outside that window, write it down and move on.",
          "**Ask three questions**: can I control this? What's the worst case? What's the next step?",
          "**Turn “what if…” into “if… then…”**: give each worry an action and it becomes a plan.",
          "**Interrupt with the body**: cold water on your hands, a ten-minute walk, washing up. Motion breaks the loop."
        ]
      },

      { t: "h", zh: "什么时候该找人帮忙", en: "When to get help" },
      {
        t: "p",
        zh: "情绪问题不是“想开点”就能解决的，就像骨折不是“想站直”就能好的。下面这些信号出现，说明该找专业的人了——这不是软弱，是常识。",
        en: "Emotional problems aren't solved by “cheering up”, any more than a broken leg is fixed by “standing straighter”. These signals mean it's time for a professional. That's not weakness; it's common sense."
      },
      {
        t: "checklist",
        zh: [
          "情绪低落或焦虑几乎每天出现，持续两周以上",
          "睡眠、食欲、体重发生明显变化",
          "对以前喜欢的事失去兴趣，什么都提不起劲",
          "无法正常工作或上学，开始躲着人",
          "出现“活着没意思”“不如消失”的念头——这一条请立刻求助"
        ],
        en: [
          "Low mood or anxiety almost daily for more than two weeks",
          "Clear changes in sleep, appetite or weight",
          "Losing interest in things you used to enjoy",
          "Unable to work or study; withdrawing from people",
          "Thoughts that life isn't worth living — with this one, get help immediately"
        ]
      },
      {
        t: "p",
        zh: "在中国大陆，可以拨打全国统一心理援助热线 **12356**，或到正规医院的精神心理科就诊。如果身边有人正在危机中，不要让他独处，陪着他，把可能伤人的东西收起来，并联系专业机构。",
        en: "In mainland China you can call the national psychological support hotline **12356**, or visit a psychiatric department at a public hospital. If someone near you is in crisis, don't leave them alone, remove means of harm, and contact professionals."
      },
      {
        t: "quote",
        zh: "你不需要变得更坚强，你需要被支持。",
        en: "You don't need to be stronger. You need support.",
        by: { zh: "一句值得贴在冰箱上的话", en: "Worth sticking on the fridge" }
      },

      {
        t: "tip",
        zh: [
          "现在做三次长呼气：吸两下，呼一口长的",
          "把此刻的情绪写成一个词，存在手机备忘录里",
          "把一个求助电话存进通讯录，命名为“需要时打”"
        ],
        en: [
          "Do three long exhales right now: two short in, one long out.",
          "Name what you're feeling in one word and save it in your notes.",
          "Save one helpline in your contacts and name it “call when needed”."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "负面情绪要压住，忍一忍就过去了。", en: "Push bad feelings down; they'll pass." },
            good: { zh: "压住的部分常以失眠、胃痛、易怒的形式回来。说出来、写下来，才是真的过去。", en: "Suppressed feelings return as insomnia, stomach aches or a short fuse. Naming them is what lets them pass." }
          },
          {
            bad: { zh: "看心理医生说明我有精神病。", en: "Seeing a therapist means I'm mentally ill." },
            good: { zh: "心理咨询也服务普通的压力、选择困难、关系问题。就像健身教练，不是只有病人才需要。", en: "Therapy also serves ordinary stress, hard decisions and relationship problems. Like a coach, it isn't only for the ill." }
          },
          {
            bad: { zh: "积极思考能解决一切。", en: "Positive thinking solves everything." },
            good: { zh: "允许自己难受，反而恢复得更快。硬要开心，是第二种压力。", en: "Allowing the bad feeling speeds recovery. Forcing cheerfulness is just a second stressor." }
          }
        ]
      }
    ]
  });

  /* ============================== 09 · 关系 ============================== */
  add({
    id: "people",
    num: "09",
    group: "heart",
    icon: "people",
    read: 9,
    title: { zh: "决定晚年过得好不好的，是这几个人", en: "Your late life depends on a handful of people" },
    card: {
      zh: "八十五年的哈佛研究：关系质量比胆固醇更能预测健康。社交不是性格问题，是健康问题。",
      en: "An 85-year Harvard study: relationship quality predicts health better than cholesterol. Social life is a health issue."
    },
    kicker: { zh: "关系 · 幸福的最大变量", en: "People · The biggest variable" },
    lede: {
      zh: "这一章可能是全书最重要的一章。因为它讲的不是技巧，而是那个反复被研究指向的答案：人过得好不好，很大程度上取决于身边有谁。",
      en: "This may be the most important chapter here. Not because of techniques, but because it points at what study after study finds: how life goes depends heavily on who is around you."
    },
    takeaway: {
      zh: "每周一次真实的见面，比一百个点赞有用。关系不怕少，怕断。",
      en: "One real meeting a week beats a hundred likes. Relationships don't need to be many — they need not to lapse."
    },
    blocks: [
      { t: "h", zh: "一个跑了八十五年的研究", en: "A study that has run for 85 years" },
      {
        t: "p",
        zh: "哈佛成人发展研究从 1938 年开始跟踪一群人，一跟踪就是八十多年，换了四任负责人。研究者最初以为，胆固醇、血压、收入这些指标最能预测晚年是否健康幸福。结果不是。**最能预测 80 岁状态的是 50 岁时对亲密关系的满意度**。",
        en: "The Harvard Study of Adult Development began tracking a group of men in 1938 and has kept going for over eighty years under four directors. Researchers expected cholesterol, blood pressure or income to predict late-life health. They didn't. **The best predictor of how people were doing at 80 was their satisfaction with close relationships at 50.**"
      },
      {
        t: "stats",
        items: [
          { v: { zh: "85+", en: "85+" }, label: { zh: "研究持续的年数", en: "years of follow-up" } },
          { v: { zh: "50→80", en: "50→80" }, label: { zh: "中年关系满意度预测晚年健康", en: "midlife satisfaction predicts later health" } },
          { v: { zh: "1", en: "1" }, label: { zh: "最关键的变量：关系质量", en: "the key variable: relationship quality" } }
        ]
      },
      {
        t: "quote",
        zh: "好的关系让我们更快乐、更健康。就这样。",
        en: "Good relationships keep us happier and healthier. Period.",
        by: { zh: "罗伯特·瓦尔丁格，研究现任负责人", en: "Robert Waldinger, current director" }
      },
      {
        t: "p",
        zh: "另一个大样本分析发现，社交关系弱的人，生存概率明显更低——影响幅度和每天抽十几支烟差不多。注意，这里说的不是“朋友多”，而是**关系质量**：有没有人能说真话，有没有人在你出事时会来。",
        en: "Another large meta-analysis found that people with weaker social ties have significantly lower survival odds — on a par with smoking about fifteen cigarettes a day. Note: this isn't about having many friends, but about **quality** — is there anyone you can be honest with, anyone who would show up?"
      },

      { t: "h", zh: "关系是有层级的", en: "Relationships have layers" },
      {
        t: "p",
        zh: "人类学家邓巴提出，人的社交圈大致呈同心圆结构，从里到外人数递增、亲密度递减。你不需要维护所有层，但最里面那两层一旦空了，人会很脆。",
        en: "Anthropologist Robin Dunbar described social circles as concentric rings: more people, less intimacy as you move out. You don't need to maintain every layer, but if the innermost two empty out, people become fragile."
      },
      {
        kind: "rings",
        title: { zh: "你的社交同心圆", en: "Your social circles" },
        items: [
          { t: { zh: "150 人：认识的人", en: "150: people you know" }, d: { zh: "见面能叫出名字，偶尔点个赞。这一层靠缘分，不用刻意。", en: "You know their names, you might like a post. Chance maintains this layer." } },
          { t: { zh: "50 人：会互相帮忙的人", en: "50: people who'd help" }, d: { zh: "借个工具、问个专业问题、搬家搭把手。靠“重复出现”维持。", en: "Borrow a tool, ask for advice, help them move. Maintained by showing up repeatedly." } },
          { t: { zh: "15 人：能一起吃饭的人", en: "15: people you'd eat with" }, d: { zh: "不用找话题也不尴尬。这一层决定了你周末有没有去处。", en: "Silence isn't awkward. This layer decides whether your weekend has anywhere to go." } },
          { t: { zh: "5 人：深夜能打电话的人", en: "5: people you could call at midnight" }, d: { zh: "出事时你第一个想到的人。这一层是健康资产，要主动维护。", en: "The first person you'd think of in trouble. This layer is a health asset — maintain it deliberately." } }
        ]
      },
      {
        t: "p",
        zh: "维护关系不需要社交天赋，秘诀只有两个字：**重复**。同一个时间、同一件事、同一群人，比一次盛大的聚会有效得多。",
        en: "Maintaining relationships doesn't take charisma. The secret is one word: **repetition**. Same time, same activity, same people beats one big party."
      },

      { t: "h", zh: "六个具体动作", en: "Six concrete moves" },
      {
        t: "ul",
        zh: [
          "**固定“每周一人”**：周三晚饭、周末散步，固定在日历上，像开会一样",
          "**记住三件事**：对方在乎的人、正在做的事、最近的难处。下次开口就有话说",
          "**主动发起，别等别人约**：发起的人最受欢迎，因为大家都怕麻烦别人",
          "**说具体的好话**：不说“你真好”，说“上次你提醒我那句，帮我避了个坑”",
          "**冲突时先复述**：“我听到的是……我理解得对吗？”再讲自己的感受",
          "**一年一次关系盘点**：谁让你变好，谁让你总是消耗——前者多花时间，后者设边界"
        ],
        en: [
          "**One person a week**: Wednesday dinner, a weekend walk — fixed in the calendar like a meeting.",
          "**Remember three things**: who they care about, what they're working on, what's hard right now. You'll always have an opener.",
          "**Initiate**: people who organise are the most welcome, because everyone else fears imposing.",
          "**Praise specifically**: not “you're great” but “that thing you pointed out last week saved me from a mess”.",
          "**In conflict, reflect first**: “What I heard was… did I get it right?” Then say how you feel.",
          "**Audit once a year**: who makes you better, who consistently drains you. Spend more on the first, set boundaries with the second."
        ]
      },

      { t: "h", zh: "关于家人：最难也最值得", en: "Family: hardest, and worth it" },
      {
        t: "p",
        zh: "家人关系最难，因为不能选，也不能轻易退出。有三条经验比较管用：减少“应该”，增加“具体请求”；界限不是冷漠，而是把能帮和不能帮说清楚；以及——重要的话不要等到葬礼上才说。",
        en: "Family is hardest because you can't choose it or easily leave. Three things help: replace “you should” with specific requests; boundaries aren't coldness, they're clarity about what you can and can't do; and don't save the important sentences for the funeral."
      },
      {
        t: "tip",
        title: { zh: "这周就能做的三件事", en: "Three things this week" },
        zh: [
          "现在给一个人发消息，不问“最近怎样”，直接约一个具体时间",
          "把“下次一起吃饭”改成“下周四 7 点，老地方”",
          "给父母打个电话，只聊 10 分钟，问一件具体的小事"
        ],
        en: [
          "Message someone now — not “how are you”, but a specific invitation.",
          "Change “let's grab lunch sometime” into “Thursday 7 pm, the usual place”.",
          "Call your parents for ten minutes and ask one specific small question."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "内向的人不需要关系。", en: "Introverts don't need people." },
            good: { zh: "内向的人同样需要，只是要少而深：两三个能说真话的人，胜过二十个饭局。", en: "Introverts need them too, just fewer and deeper: two or three honest relationships beat twenty dinners." }
          },
          {
            bad: { zh: "社交就是会来事、会敬酒。", en: "Social skill means working a room." },
            good: { zh: "最有用的是重复的、小的、无目的的相处：一起走路、一起做饭、一起打球。", en: "What works is repeated, small, purposeless time: walking, cooking, playing together." }
          },
          {
            bad: { zh: "老朋友自然会一直在。", en: "Old friends stay by default." },
            good: { zh: "不维护就会散。友谊的消失通常不是因为吵架，而是因为“下次再说”。", en: "They don't. Friendships rarely end in a fight; they end in “sometime later”." }
          }
        ]
      }
    ]
  });

  /* ============================== 13 · 工作 ============================== */
  add({
    id: "work",
    num: "13",
    group: "life",
    icon: "briefcase",
    read: 9,
    title: { zh: "工作是手段，不是身份", en: "Work is a means, not an identity" },
    card: {
      zh: "怎么选、怎么学、怎么不被工作吃掉——三个问题，一套可迁移的技能。",
      en: "How to choose, how to learn, and how not to be eaten by it — three questions and a set of portable skills."
    },
    kicker: { zh: "工作 · 技能与选择", en: "Work · Choosing and learning" },
    lede: {
      zh: "工作占据你三分之一醒着的时间。它值得被认真设计，但不值得成为你的全部。这一章讲怎么选、怎么学，以及下班之后怎么把自己捞回来。",
      en: "Work takes a third of your waking hours. It deserves design — but not your whole identity. This chapter covers choosing, learning, and reclaiming yourself after 6 pm."
    },
    takeaway: {
      zh: "找一个“能积累”的方向，然后持续做三年。复利在工作上同样成立。",
      en: "Find a direction where things accumulate, then stay three years. Compounding works at work too."
    },
    blocks: [
      { t: "h", zh: "选工作，问三个问题", en: "Choosing a job: three questions" },
      {
        t: "ol",
        zh: [
          "**三年后我会更值钱吗？** 看技能、作品、人脉有没有积累，而不只是看现在的薪水",
          "**我能忍受它的日常吗？** 工作不是看职位描述，是看通勤、会议、汇报、老板的具体样子",
          "**它和我想过的生活兼容吗？** 时间、地点、强度，会不会把其他重要的东西挤掉"
        ],
        en: [
          "**Will I be worth more in three years?** Look at skills, portfolio and network — not just today's salary.",
          "**Can I stand its ordinary days?** A job is not the description; it's the commute, the meetings, the reporting, the boss.",
          "**Does it fit the life I want?** Hours, location, intensity — will it crowd out everything else that matters?"
        ]
      },
      {
        t: "p",
        zh: "三个问题里，只要有两个是“否”，就该认真考虑换。钱很重要，但一份持续消耗你的工作，会以健康、关系和情绪的形式把差额收回去。",
        en: "If two of the three answers are “no”, it's worth seriously considering a change. Money matters, but a job that drains you collects the difference in health, relationships and mood."
      },

      { t: "h", zh: "什么技能不容易被淘汰", en: "Which skills survive" },
      {
        t: "p",
        zh: "技术会变，岗位会消失，但有些能力到哪里都能用。判断标准是三条：**能迁移**（换个行业还有用）、**需要判断**（不是照流程点按钮）、**和人有关系**（说服、理解、协作）。",
        en: "Tools change and roles disappear, but some abilities travel. Three tests: **portable** (useful in another industry), **judgement-heavy** (not just clicking through a process), and **human** (persuading, understanding, coordinating)."
      },
      {
        t: "ul",
        zh: [
          "**把复杂的事说清楚**：写作、汇报、做一页能看懂的图。这是最被低估的通用技能",
          "**理解和影响人**：销售、谈判、带团队，本质都是搞清对方要什么",
          "**数据与逻辑基础**：看得懂表格、算得清比例、知道相关不等于因果",
          "**一门具体的手艺**：修东西、做饭、剪辑、种植、编程——能交付实物的能力让人踏实",
          "**把事情推完的能力**：项目管理不是什么高级技能，但极稀缺"
        ],
        en: [
          "**Explaining complexity**: writing, presenting, one chart people understand. The most underrated general skill.",
          "**Understanding and moving people**: sales, negotiation, managing — all are about knowing what the other side wants.",
          "**Basic data and logic**: reading a table, working out a ratio, knowing correlation isn't causation.",
          "**One concrete craft**: fixing, cooking, editing, growing, coding. Making a real thing keeps you grounded.",
          "**Finishing things**: project management isn't glamorous, and it's rare."
        ]
      },

      { t: "h", zh: "学习要“以用为始”", en: "Start learning from use, not from courses" },
      {
        t: "p",
        zh: "成年人最常犯的学习错误是先上课：买课、收藏、看完、忘掉。更有效的方式是先定义一个**能交付的小项目**，边做边查。这样做有两个好处：学的东西马上用得上，而且你有一条可以给别人看的成果。",
        en: "The classic adult learning mistake is starting with a course: buy, bookmark, watch, forget. Better: define a **small deliverable**, then learn inside it. You use what you learn immediately, and you end up with something to show."
      },
      {
        t: "table",
        head: { zh: ["想学的东西", "三个月的最小计划"], en: ["What you want", "Smallest three-month plan"] },
        rows: [
          { zh: ["写作", "每周 3 篇 300 字，发在一个固定的地方，不删不改"], en: ["Writing", "Three 300-word pieces a week, posted in one place — no deleting"] },
          { zh: ["编程", "做一个自己每天会用的小工具，边做边查文档"], en: ["Coding", "Build one small tool you'll use daily; learn from the docs as you go"] },
          { zh: ["英语", "每天 20 分钟听力 + 每周一次真人对话"], en: ["English", "20 minutes of listening daily + one real conversation a week"] },
          { zh: ["做饭", "每周学 2 道菜，每道重复做三次"], en: ["Cooking", "Two dishes a week, each cooked three times"] }
        ]
      },
      {
        t: "p",
        zh: "另外两个被验证过的学习技巧：**分散练习**（每天 30 分钟胜过周末 3 小时）和**自己讲一遍**（能讲清楚才算真的懂）。至于“我是视觉型学习者”这类说法，研究并不支持，别拿它当借口。",
        en: "Two more evidence-backed techniques: **spacing** (30 minutes daily beats three hours on Sunday) and **explaining it yourself** (if you can't teach it, you don't have it). And “I'm a visual learner” isn't supported by research — don't use it as an excuse."
      },

      { t: "h", zh: "下班之后，把自己捞回来", en: "Getting yourself back after work" },
      {
        t: "ul",
        zh: [
          "**下班仪式**：换衣服、走一段路、听一首固定的歌。给大脑一个“切换”的信号",
          "**消息延迟**：明确告诉同事“晚上九点后我不看工作群”，大部分人其实能接受",
          "**一年一问**：这份工作还值得吗？看四件事——薪水、成长、关系、健康",
          "**留一件和工作无关的事**：乐队、球局、种菜、手作。它是你的另一个身份，也是失业时的缓冲"
        ],
        en: [
          "**A shutdown ritual**: change clothes, walk a stretch, play one specific song. Give your brain a switch.",
          "**Delayed replies**: tell colleagues “I don't check work chat after 9 pm”. Most people cope fine.",
          "**One question a year**: is this job still worth it? Check salary, growth, relationships, health.",
          "**Keep one thing unrelated to work**: a band, a team, a garden, a craft. It's another identity, and a buffer if the job goes."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "找到热爱的工作，就再也不会累。", en: "Find your passion and you'll never feel tired." },
            good: { zh: "热爱也会累，区别在于“可控”和“有意义”。先找可控，再谈热爱。", en: "Passion is tiring too. What differs is control and meaning. Find control first." }
          },
          {
            bad: { zh: "必须搞个副业才算有出路。", en: "You need a side hustle to be safe." },
            good: { zh: "主业没做好就开副业，通常两头空。副业最好从已有兴趣长出来，而不是从焦虑长出来。", en: "A side hustle built on a shaky main job usually sinks both. Let it grow from interest, not anxiety." }
          },
          {
            bad: { zh: "过了 35 岁就没机会了。", en: "After 35 it's over." },
            good: { zh: "被淘汰的是“只会一个系统”的人，不是 35 岁的人。可迁移的技能越早攒越好。", en: "What gets obsolete is being able to do only one system's buttons — not being 35. Build portable skills early." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "写下你现在拥有的三个可迁移技能，各配一个具体例子",
          "选一个三个月能完成的小项目，今天就做第一步",
          "今晚给自己设一个“关机仪式”，哪怕只是绕小区走一圈"
        ],
        en: [
          "Write down three portable skills you have, each with one concrete example.",
          "Pick a small three-month project and take the first step today.",
          "Tonight, invent a shutdown ritual — even a lap around the block."
        ]
      }
    ]
  });
})();
