/* Chapters 04–06 — energy, time, money */
(function () {
  "use strict";

  var add = window.LB.addChapter;

  /* ============================== 04 · 精力 ============================== */
  add({
    id: "energy",
    num: "04",
    group: "body",
    icon: "battery",
    read: 8,
    title: { zh: "一天只有四小时是“高配”的", en: "You get about four good hours a day" },
    card: {
      zh: "精力会波动，不是无限的。按波安排，比按意志硬扛省力得多。",
      en: "Energy rises and falls. Schedule around the waves instead of fighting them with willpower."
    },
    kicker: { zh: "身体 · 精力管理", en: "Body · Managing energy" },
    lede: {
      zh: "你不是懒，是精力被切碎了。这一章讲怎么把注意力从漏勺变成水桶——以及为什么“休息”本身也是工作的一部分。",
      en: "You're not lazy; your energy is being shredded. This chapter is about turning a sieve into a bucket, and why rest is part of the work."
    },
    takeaway: {
      zh: "保护上午第一个 90 分钟，一天就有了骨头。",
      en: "Protect the first 90 minutes of your morning and the day grows a spine."
    },
    blocks: [
      { t: "h", zh: "先认自己的精力曲线", en: "Learn your own energy curve" },
      {
        t: "p",
        zh: "大多数人起床后两到四小时是高峰，午饭后有一段低谷，傍晚小幅回升，晚上再往下走。少数人（大约四分之一）是“夜猫子”，曲线整体往后推两三个小时。两种都正常，别硬改。",
        en: "Most people peak two to four hours after waking, dip after lunch, get a small second wind in the evening, then slide. About a quarter of us are night owls whose whole curve sits two or three hours later. Both are normal — don't force a rewrite."
      },
      {
        kind: "line",
        title: { zh: "一天中的精力变化（示意）", en: "Energy across a day (illustrative)" },
        sub: { zh: "纵轴：可用精力；横轴：时刻", en: "Vertical: available energy. Horizontal: hour of day." },
        x: ["6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
        yMin: 0,
        yMax: 1.1,
        series: [{ name: { zh: "精力", en: "Energy" }, color: "accent", values: [0.3, 0.95, 0.75, 0.45, 0.6, 0.42, 0.12], fill: true }],
        markers: [{ i: 1, v: 0.95 }],
        cap: { zh: "曲线因人而异。先用一周记录自己“最清醒的两个小时”在几点，再安排任务。", en: "Your curve differs. Log your two sharpest hours for a week, then schedule around them." }
      },
      {
        t: "p",
        zh: "排任务的原则只有一句：**把最费脑的事放进高峰，把机械的事放进低谷**。多数人反着做——上午回邮件、开例会，把写方案留到晚上，然后用“今天好累”收场。",
        en: "One rule is enough: **hard thinking at the peak, mechanical work in the trough**. Most people do the reverse — email and meetings in the morning, real work at night — then conclude they're exhausted."
      },

      { t: "h", zh: "四个常见的漏点", en: "Four common leaks" },
      {
        t: "ul",
        zh: [
          "**通知**：每一次被打断，平均要二十多分钟才能回到原来的深度。一天被打断五次，上午就没了",
          "**多任务**：一边开会一边回消息，两件事都做得更差，还更累",
          "**人际负债**：没回的消息、拖着没道的歉、欠着的人情，会在后台一直耗电",
          "**小决定**：早上穿什么、中午吃什么、先做哪件——每个小决定都在偷偷扣费"
        ],
        en: [
          "**Notifications**: after an interruption it takes roughly twenty minutes to get back to depth. Five interruptions and the morning is gone.",
          "**Multitasking**: answering messages during a meeting makes both worse and leaves you more tired.",
          "**Social debt**: unanswered messages, an apology you keep postponing, a favour owed. They run in the background and drain the battery.",
          "**Micro-decisions**: what to wear, what to eat, what to start with. Each one quietly charges a fee."
        ]
      },

      { t: "h", zh: "三个补丁，今天就能打", en: "Three patches you can install today" },
      {
        t: "ol",
        zh: [
          "**关掉所有非人的通知**，只留电话和家人。微信、邮件改成“我主动看”，不是“它随时叫我”",
          "**90 分钟一个块**：块内只做一件事，结束后真的休息 10 分钟（走动、看远处，不是刷手机）",
          "**每天留一个“杂事时段”**：下午四点后统一处理回消息、填表、报销，别让它们全天插队"
        ],
        en: [
          "**Kill every non-human notification.** Keep calls and family only. Check messages when *you* decide, not when they ping.",
          "**Work in 90-minute blocks**, one thing per block, then actually rest for 10 minutes — walk, look far away, not scroll.",
          "**Keep one errand window**: after 4 pm, batch replies, forms and expenses. Don't let them cut the queue all day."
        ]
      },
      {
        t: "p",
        zh: "如果只能做一件，做第一件。通知是精力的主要漏水口，而它最容易关。",
        en: "If you only do one, do the first. Notifications are the main leak, and they're the easiest to shut."
      },

      { t: "h", zh: "休息不是奖励，是零件", en: "Rest is a component, not a reward" },
      {
        t: "p",
        zh: "很多人把休息当成“干完活才配拥有的东西”，于是永远没有。其实恢复精力是有技术含量的：真正能回血的是**身体移动、看远处、和人闲聊、发呆、二十分钟以内的小睡**；而刷手机是换一种输入，大脑还在处理信息，往往越刷越累。",
        en: "Many treat rest as something you earn after finishing — so it never comes. Recovery is a skill: what actually restores you is **movement, looking into the distance, chatting about nothing, spacing out, a nap under twenty minutes**. Scrolling is just different input; the brain keeps processing, and you end up more tired."
      },
      {
        t: "stats",
        items: [
          { v: { zh: "90", en: "90" }, label: { zh: "一个专注块的分钟数", en: "minutes per focus block" } },
          { v: { zh: "23", en: "23" }, label: { zh: "被打断后回到状态平均需要的分钟", en: "minutes to recover after an interruption" } },
          { v: { zh: "20", en: "20" }, label: { zh: "小睡上限，超过会更昏", en: "minute nap cap; longer leaves you groggy" } }
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "刷手机就是休息。", en: "Scrolling is rest." },
            good: { zh: "换一种输入不等于休息。想回血，先让身体动起来、眼睛看远处。", en: "Different input isn't rest. Move your body and look far away." }
          },
          {
            bad: { zh: "咖啡喝得越多越清醒。", en: "More coffee means more focus." },
            good: { zh: "咖啡因半衰期约五到六小时。下午两点后的一杯，会偷走你晚上的深睡，第二天更累。", en: "Caffeine's half-life is five to six hours. A 2 pm cup steals deep sleep, and tomorrow is worse." }
          },
          {
            bad: { zh: "撑不住是因为意志力不够。", en: "Running out of steam means weak willpower." },
            good: { zh: "更常见的原因是睡眠不足、任务太重、环境太吵。改环境，比改性格容易。", en: "More often it's short sleep, oversized tasks, or a noisy room. Change the environment, not your personality." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "明天上午第一件事，先做最重要的那件，再打开微信",
          "现在关掉三个最吵的 App 通知",
          "设一个 90 分钟计时器，中间不切窗口；响了就起身走一圈"
        ],
        en: [
          "Tomorrow, do the most important thing before opening WeChat.",
          "Right now, turn off notifications from your three loudest apps.",
          "Set a 90-minute timer, don't switch windows, and walk a lap when it rings."
        ]
      }
    ]
  });

  /* =============================== 05 · 时间 ============================= */
  add({
    id: "time",
    num: "05",
    group: "time",
    icon: "clock",
    read: 8,
    title: { zh: "拖延不是懒，是情绪问题", en: "Procrastination isn't laziness. It's emotion." },
    card: {
      zh: "你拖的不是那件事，是那件事带来的不舒服。先处理感受，任务才会动。",
      en: "You're not avoiding the task. You're avoiding how it makes you feel. Settle the feeling and the task moves."
    },
    kicker: { zh: "时间 · 拖延与专注", en: "Time · Procrastination" },
    lede: {
      zh: "越重要的事越容易拖，因为它让你担心做不好。所以对付拖延，得先对付那份不舒服，而不是再买一个效率 App。",
      en: "The more something matters, the more we stall — because we're afraid of doing it badly. So deal with the discomfort first, not with another productivity app."
    },
    takeaway: {
      zh: "把任务缩到“两分钟就能开始”，拖延就失去了抓手。",
      en: "Shrink the task until it takes two minutes to start. Procrastination loses its grip."
    },
    blocks: [
      { t: "h", zh: "拖延的真相", en: "What procrastination actually is" },
      {
        t: "p",
        zh: "大脑在短期舒服和长期收益之间，总是偏向短期。写方案让你想到“可能被批评”，于是它给你一个更安全的选择：先整理桌面。这不是品格问题，是**情绪调节**：拖延是在用逃避换取片刻安宁。",
        en: "Between short-term comfort and long-term payoff, the brain picks comfort. Writing the proposal reminds you it might be criticised, so it offers something safer: tidy the desk. This isn't a character flaw; it's **emotion regulation** — avoidance bought with a moment of calm."
      },
      {
        t: "quote",
        zh: "拖延不是时间管理问题，是情绪管理问题。",
        en: "Procrastination is not a time-management problem. It's an emotion-management problem.",
        by: { zh: "蒂姆·皮切尔，拖延研究者", en: "Tim Pychyl, procrastination researcher" }
      },

      { t: "h", zh: "五个立刻有效的办法", en: "Five things that work right away" },
      {
        t: "ol",
        zh: [
          "**两分钟启动**：只要求自己做两分钟。打开文档写个标题也算。开始之后，继续往往比开始容易",
          "**实施意图**：把“我要写方案”改成“如果现在是 9 点，我就在书桌前打开方案文件写第一段”",
          "**环境前置**：前一晚把要用的东西放桌上，把手机放到另一个房间。减少一步摩擦，就多一分成功",
          "**拆到能交付**：下一步必须是“动词 + 对象”，比如“给三个人发问卷”，而不是“推进项目”",
          "**公开承诺**：告诉一个人你几点交。被期待的感觉，比自我要求有力"
        ],
        en: [
          "**Two-minute start**: commit to two minutes only. Opening the file and typing a title counts. Continuing is usually easier than starting.",
          "**Implementation intention**: swap “I need to write the proposal” for “if it's 9 am, I'm at the desk with the file open, writing paragraph one”.",
          "**Set the environment**: put what you need on the desk the night before, and the phone in another room. One less step of friction is one more chance of success.",
          "**Cut to a deliverable**: the next step must be verb + object — “send the survey to three people”, not “advance the project”.",
          "**Public commitment**: tell someone when you'll deliver. Being expected beats self-expectation."
        ]
      },
      {
        t: "p",
        zh: "还有一条最被低估的：**允许自己先做得很烂**。初稿烂是正常的，好稿子是改出来的。很多人不是不能开始，是不能接受不完美的开始。",
        en: "And the most underrated one: **give yourself permission to do it badly**. Bad first drafts are the process; good work is edited work. Many people can't start because they can't accept an imperfect start."
      },

      { t: "h", zh: "三个时间黑洞", en: "Three time sinkholes" },
      {
        t: "table",
        head: { zh: ["黑洞", "常见消耗", "换一种做法"], en: ["Sinkhole", "Typical cost", "Do this instead"] },
        rows: [
          { zh: ["睡前刷手机", "每晚 40–60 分钟", "手机放客厅充电，床头放一本纸质书或播客"], en: ["Phone before bed", "40–60 min a night", "Charge it in the living room; keep a paper book or podcast by the bed"] },
          { zh: ["没有议程的会", "每次 45–60 分钟", "先问“需要我做什么”，没有明确角色就申请不参加"], en: ["Meetings with no agenda", "45–60 min each", "Ask “what do you need from me?”; if no clear role, decline"] },
          { zh: ["通勤", "每天 1–2 小时", "听播客/有声书，或和公司谈每周一天远程"], en: ["Commute", "1–2 h a day", "Podcasts or audiobooks; negotiate one remote day a week"] },
          { zh: ["无限下拉的信息流", "每天 1–2 小时", "设定固定查看时间，删掉 App 只留网页版"], en: ["Infinite feeds", "1–2 h a day", "Set fixed check-in times; delete the app, keep the website"] }
        ]
      },

      { t: "h", zh: "关于“高效”的一个提醒", en: "A warning about being efficient" },
      {
        t: "p",
        zh: "效率不是目的。省下来的时间如果没有去处，很快会被新的杂事填满——这是很多人的真实体验：越高效，越忙。所以省时间之前，先想清楚：**省下来做什么？** 如果答案是“做更多工作”，那不叫自由。",
        en: "Efficiency isn't the goal. If the time you save has no destination, new chores will claim it — which is why many efficient people feel busier. Before you optimise, decide: **what is the saved time for?** If the answer is “more work”, that isn't freedom."
      },
      {
        t: "p",
        zh: "另一件事：慢下来做一件重要的事，往往比快速做完十件琐事更值。真正改变生活的，是那些没被切碎的大块时间。",
        en: "Also: doing one important thing slowly usually beats finishing ten small things fast. What changes a life is uninterrupted blocks of time."
      },
      {
        t: "stats",
        items: [
          { v: { zh: "2", en: "2" }, label: { zh: "启动所需分钟数，越小越好", en: "minutes to start — keep it tiny" } },
          { v: { zh: "66", en: "66" }, label: { zh: "一个习惯变自动的平均天数", en: "days on average for a habit to feel automatic" } },
          { v: { zh: "1", en: "1" }, label: { zh: "每天只安排一件最重要的事", en: "most important thing per day" } }
        ]
      },
      {
        t: "tip",
        zh: [
          "选一件拖了很久的事，只做两分钟，然后允许自己停",
          "在日历上给“最重要的一件事”占一个 90 分钟的格子",
          "退订一个从不看的邮件列表，退一个从不说话的群"
        ],
        en: [
          "Pick the thing you've avoided for weeks. Do two minutes, then you're allowed to stop.",
          "Block 90 minutes in your calendar for the one thing that matters.",
          "Unsubscribe from one newsletter you never read; leave one silent group chat."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "我只是需要更强的自制力。", en: "I just need more self-discipline." },
            good: { zh: "自制力是消耗品。把手机放远、把任务拆小，比每天和自己打仗划算得多。", en: "Willpower is consumable. Moving the phone and shrinking the task beats a daily war with yourself." }
          },
          {
            bad: { zh: "等状态好一点再开始。", en: "I'll start when I feel ready." },
            good: { zh: "状态是做事做出来的，不是等出来的。先做五分钟，动机常常随后到。", en: "Readiness comes from doing, not waiting. Start for five minutes and motivation usually follows." }
          },
          {
            bad: { zh: "时间管理就是把手上的事做得更快。", en: "Time management means doing things faster." },
            good: { zh: "更重要的是决定“哪些事不做”。删掉一件事，比优化十件事省力。", en: "Deciding what not to do matters more. Deleting one thing beats optimising ten." }
          }
        ]
      }
    ]
  });

  /* =============================== 06 · 钱 =============================== */
  add({
    id: "money",
    num: "06",
    group: "time",
    icon: "coins",
    read: 9,
    title: { zh: "钱买不到幸福，但能买走大部分恐惧", en: "Money can't buy happiness, but it buys off fear" },
    card: {
      zh: "应急金、年化利率、保险——三件事解决大部分财务焦虑，顺序比技巧重要。",
      en: "A buffer, an interest-rate habit, and the right insurance. Order matters more than tricks."
    },
    kicker: { zh: "钱 · 安全感", en: "Money · Security" },
    lede: {
      zh: "这一章不讲怎么暴富。只讲普通人最容易踩的三个坑，以及手里钱不多时，先做哪几件最有用的事。",
      en: "This chapter isn't about getting rich. It's about the three traps ordinary people fall into, and what to do first when money is tight."
    },
    takeaway: {
      zh: "先攒三到六个月的“不慌钱”，再谈投资；任何收益，先换算成年化。",
      en: "Build a three-to-six month buffer before investing, and convert every return into an annual rate."
    },
    blocks: [
      { t: "h", zh: "为什么收入涨了，还是不宽裕", en: "Why a bigger salary still feels tight" },
      {
        t: "p",
        zh: "收入涨一点，消费跟着涨一点：换更好的房子、更好的手机、更贵的补习班。这叫生活方式膨胀。它不是道德问题——周围人都在升级，你很难不跟。但它意味着：**涨薪不会自动带来安全感**，除非你主动把多出来的一部分留下来。",
        en: "Earn a bit more and spending rises to match: a nicer flat, a newer phone, pricier classes. This is lifestyle creep. It isn't a moral failing — everyone around you is upgrading — but it means **a raise doesn't create security by itself** unless you deliberately keep some of the difference."
      },
      {
        kind: "line",
        title: { zh: "每月存 1000 元，时间会做什么", en: "What time does to ¥1,000 a month" },
        sub: { zh: "假设年化 5%，按月复利，单位：万元", en: "Assuming 5% a year, compounded monthly, in ¥10k" },
        x: ["5y", "10y", "15y", "20y", "25y", "30y"],
        yMin: 0,
        yMax: 90,
        series: [
          { name: { zh: "本金", en: "Contributions" }, color: "muted", values: [6, 12, 18, 24, 30, 36], dashed: true, dots: false },
          { name: { zh: "总额", en: "Total" }, color: "sage", values: [6.8, 15.5, 26.7, 41.1, 59.5, 83.2], fill: true }
        ],
        cap: { zh: "算例，用于说明复利的形状，不是收益承诺；5% 是税前、未扣通胀的假设。", en: "An illustration of compounding's shape, not a promise. 5% is a pre-tax assumption, before inflation." }
      },
      {
        t: "p",
        zh: "注意这条曲线的形状：前十年几乎看不出效果，后面越来越陡。这解释了为什么大多数人存不下来——反馈太慢。**把注意力放在“每月自动扣款”上**，而不是每天看收益。",
        en: "Look at the shape: the first decade barely moves, then it steepens. That's why most people quit — the feedback is too slow. **Automate the monthly transfer** and stop checking the balance daily."
      },

      { t: "h", zh: "先做什么：一个顺序", en: "The order of operations" },
      {
        t: "ol",
        zh: [
          "**记 30 天账**，只分五类（住、吃、行、人情、其他）。目标不是省钱，是知道钱去哪了",
          "**攒应急金**：三到六个月的必要开支，放活期或货币基金，随时能取",
          "**还高息债**：信用卡分期、消费贷的年化常在 15% 以上，还它等于稳赚",
          "**买对的保险**：只保“扛不住”的风险——医疗、重疾、意外，家庭支柱加定期寿险",
          "**再谈投资**：低成本指数基金定投，长期、分散，别借钱炒"
        ],
        en: [
          "**Track 30 days** in five categories (housing, food, transport, people, other). The goal isn't frugality, it's knowing where money goes.",
          "**Build the buffer**: three to six months of essential spending, in cash or a money-market fund you can access instantly.",
          "**Kill high-interest debt**: card instalments and consumer loans often run above 15% a year. Repaying them is a guaranteed return.",
          "**Buy the right insurance**: only against what you couldn't survive — medical, critical illness, accident; term life for the breadwinner.",
          "**Then invest**: low-cost index funds, regularly, for the long term. Never with borrowed money."
        ]
      },
      {
        t: "p",
        zh: "这个顺序的意义在于：先处理“出事会不会垮”，再处理“能不能变富”。很多人反过来，应急金还没有，先冲进股市，一次意外就把筹码全部卖掉。",
        en: "The point of the order: secure against catastrophe first, chase growth second. Many do the reverse — no buffer, straight into the market, then a single emergency forces them to sell at the bottom."
      },

      { t: "h", zh: "三个必须会做的换算", en: "Three conversions you need" },
      {
        t: "ul",
        zh: [
          "**日息换年化**：日息 0.05% ≈ 年化 18%。销售说“每天只要几毛”，你要听成“借一万，一年利息一千八”",
          "**订阅换年支出**：每月 30 元的会员 = 每年 360 元。把自动续费列出来，一年能省出一次旅行",
          "**价格换工时**：月薪 ÷ 21.75 ÷ 8 = 时薪。再问“这件东西值我几小时命”"
        ],
        en: [
          "**Daily to annual**: 0.05% a day is roughly 18% a year. When a seller says “just a few cents a day”, hear “borrow ¥10,000, pay ¥1,800 a year”.",
          "**Subscriptions to yearly**: ¥30 a month is ¥360 a year. List every auto-renewal; the total often pays for a trip.",
          "**Price to hours**: monthly salary ÷ 21.75 ÷ 8 = hourly rate. Then ask how many hours of your life that thing costs."
        ]
      },
      {
        t: "stats",
        items: [
          { v: { zh: "18%", en: "18%" }, label: { zh: "日息 0.05% 的真实年化", en: "annual rate of 0.05% a day" } },
          { v: { zh: "3–6", en: "3–6" }, label: { zh: "应急金应覆盖的月数", en: "months of expenses to hold" } },
          { v: { zh: "0", en: "0" }, label: { zh: "适合借钱去做的投资数量", en: "investments worth borrowing for" } }
        ]
      },

      { t: "h", zh: "一个反直觉的结论：时间比东西值钱", en: "A counter-intuitive finding: time beats stuff" },
      {
        t: "p",
        zh: "关于钱和幸福的研究大致有两个共识：一是收入在满足基本需求之后，对幸福的作用明显变缓；二是“总觉得没时间”这种时间贫困，对幸福的伤害比缺钱更直接。所以对不少城市人来说，**花钱买时间**（少加班、请人打扫、住得离公司近一点）比买东西更值。",
        en: "Research on money and happiness broadly agrees on two things: past the point of meeting basic needs, more income adds less and less; and “time poverty” — always feeling rushed — hurts wellbeing more directly than being short of money. For many city dwellers, **buying time** (less overtime, paid cleaning, living closer to work) pays better than buying things."
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "理财就是买对产品。", en: "Personal finance is about picking products." },
            good: { zh: "八成的问题出在现金流：收入多少、花在哪、有没有缓冲。产品只占很小一部分。", en: "Eighty percent is cash flow: what comes in, where it goes, is there a buffer. Products are a small part." }
          },
          {
            bad: { zh: "保险买得越多越安全。", en: "More insurance means more safety." },
            good: { zh: "只保“扛不住”的风险。为丢手机、修空调买保险，长期一定亏。", en: "Insure only what you couldn't absorb. Insuring a lost phone or a broken AC loses money over time." }
          },
          {
            bad: { zh: "会花钱才会赚钱。", en: "You have to spend to earn." },
            good: { zh: "对绝大多数人，是“会攒才有选择”。存款买的不是利息，是拒绝的底气。", en: "For most of us, saving is what creates options. Savings don't buy interest — they buy the right to say no." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "列出所有自动续费，今天关掉一个",
          "算一次自己的时薪，然后看最近一笔大额消费值几小时",
          "开一个单独的账户，设自动转入，起名“不慌钱”"
        ],
        en: [
          "List every auto-renewal and cancel one today.",
          "Work out your hourly rate, then price your last big purchase in hours.",
          "Open a separate account, automate a transfer, and name it “buffer”."
        ]
      }
    ]
  });
})();
