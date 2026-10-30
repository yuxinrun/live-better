/* Chapters 10–12 — daily rhythm, safety, 30-day plan */
(function () {
  "use strict";

  var add = window.LB.addChapter;

  /* ============================== 16 · 节奏 ============================== */
  add({
    id: "rhythm",
    num: "16",
    group: "life",
    icon: "sun",
    read: 8,
    title: { zh: "把日子设计成“自动运行”", en: "Design your days to run on autopilot" },
    card: {
      zh: "早晨、白天、晚上各改一处，生活就不必天天靠意志力硬撑。",
      en: "Change one thing in the morning, one in the day, one at night — and stop relying on willpower."
    },
    kicker: { zh: "日常 · 生活方式设计", en: "Everyday · Lifestyle design" },
    lede: {
      zh: "好生活不是靠每天重新决定，而是靠一套默认设置。这一章讲三个时间点、一个周末模板，和手机的边界。",
      en: "A good life isn't re-decided every morning; it runs on defaults. Here are three moments of the day, one weekend template, and a border for your phone."
    },
    takeaway: {
      zh: "改三个时间点：起床后 30 分钟、午饭后 15 分钟、睡前 60 分钟。",
      en: "Change three windows: 30 minutes after waking, 15 after lunch, 60 before bed."
    },
    blocks: [
      { t: "h", zh: "早晨：别在第一时间交出注意力", en: "Morning: don't hand over your attention first" },
      {
        t: "p",
        zh: "醒来后的第一个动作，往往决定了这一天的基调。如果第一件事是刷手机，你就是先处理别人的议程；如果第一件事是喝水、拉开窗帘、写下三件事，你先处理自己的。差别看起来很小，但一天会放大它。",
        en: "Your first move after waking sets the tone. If it's your phone, you're handling other people's agendas first. If it's water, daylight and three lines, you handle your own. It looks small; the day magnifies it."
      },
      {
        t: "ul",
        zh: [
          "**起床后 30 分钟内不刷手机**：把手机放在够不到的地方，或者干脆放客厅充电",
          "**先见光**：拉开窗帘，或出门走五分钟。光线是校准生物钟最强的信号",
          "**一杯水**，然后**写下今天最重要的三件事**，只做第一件",
          "**早餐有蛋白质**：鸡蛋、豆浆、酸奶，比只吃面包更抗饿、更稳"
        ],
        en: [
          "**No phone for the first 30 minutes.** Put it out of reach, or charge it in the living room.",
          "**Get light first**: open the curtains or step outside for five minutes. Light is the strongest signal for your body clock.",
          "**A glass of water**, then **write today's three most important things** — and start with the first.",
          "**Protein at breakfast**: eggs, soy milk, yoghurt. It holds you steadier than bread alone."
        ]
      },

      { t: "h", zh: "白天：一个块 + 一次走动", en: "Daytime: one block, one walk" },
      {
        t: "ul",
        zh: [
          "**上午一个 90 分钟专注块**，做最费脑的那件事，中间不切窗口",
          "**每 45 分钟起身**，接水、看窗外、走两分钟",
          "**午饭离开屏幕**：吃饭时吃饭，是和大脑的一次小型和解",
          "**下午低点处理杂事**：回消息、填表、报销，别在低点硬啃难题"
        ],
        en: [
          "**One 90-minute focus block in the morning** for the hardest thing. No window switching.",
          "**Stand up every 45 minutes**: water, window, two minutes of walking.",
          "**Lunch away from screens.** Eating while eating is a small truce with your brain.",
          "**Do errands in the afternoon dip**: replies, forms, expenses. Don't gnaw on hard problems there."
        ]
      },

      { t: "h", zh: "晚上：为明天铺路", en: "Evening: pave tomorrow" },
      {
        t: "ul",
        zh: [
          "**睡前 60 分钟调暗灯光**，把大灯换成小灯，屏幕调暖色",
          "**收拾 10 分钟**：桌面、厨房、第二天要带的东西。第二天的你会感谢现在的你",
          "**写下明天第一件事**，写在纸上或便签上，不要写在手机里",
          "**固定上床时间**，误差不超过半小时。周末也一样"
        ],
        en: [
          "**Dim the lights an hour before bed**: lamps instead of ceiling lights, warm screen settings.",
          "**Tidy for ten minutes**: desk, kitchen, bag for tomorrow. Tomorrow-you will be grateful.",
          "**Write tomorrow's first task** on paper or a sticky note — not in your phone.",
          "**Fixed bedtime**, within half an hour. Weekends included."
        ]
      },

      { t: "h", zh: "一个周末模板", en: "A weekend template" },
      {
        t: "p",
        zh: "周末最容易过成“瘫着刷手机 + 突然焦虑”。给两天各定一个形状，比列一堆计划有用。",
        en: "Weekends easily become “collapse and scroll, then sudden anxiety”. Give each day a shape instead of a to-do list."
      },
      {
        t: "table",
        head: { zh: ["时间", "做点什么"], en: ["When", "What"] },
        rows: [
          { zh: ["周六上午", "一件要动手的事：打扫、做饭、修东西、种花"], en: ["Sat morning", "Something hands-on: cleaning, cooking, fixing, planting"] },
          { zh: ["周六下午", "见人或出门：朋友、展览、球场、公园"], en: ["Sat afternoon", "People or outside: friends, a show, a court, a park"] },
          { zh: ["周日上午", "慢：菜市场、散步、看书，不安排效率"], en: ["Sun morning", "Slow: market, walk, read. No efficiency allowed"] },
          { zh: ["周日晚上", "15 分钟：回顾这周，安排下周最重要的一件事"], en: ["Sun evening", "15 minutes: review the week, schedule next week's one big thing"] }
        ]
      },

      { t: "h", zh: "给手机画一条边界", en: "Draw a border for your phone" },
      {
        t: "p",
        zh: "大多数人的注意力不是被大事夺走的，是被每天几百次的小解锁磨掉的。不需要戒断手机，只需要**让它离你远一点、慢一点**。",
        en: "Most attention isn't stolen by big events; it's sanded off by hundreds of small unlocks. You don't need a digital detox — just more distance and more friction."
      },
      {
        t: "ul",
        zh: [
          "**主屏幕只放工具类 App**，社交和视频放到第二屏或文件夹里",
          "**关闭所有非人通知**，只留电话和家人的消息",
          "**设置屏幕时间上限**，并让家人设密码（比自我约束有效）",
          "**吃饭时手机反面朝上**，或者放到另一个房间",
          "**卧室不放手机**。闹钟买一个 30 块钱的就解决了"
        ],
        en: [
          "**Tools on the home screen only**; social and video go to page two or a folder.",
          "**No notifications except humans** — calls and family messages.",
          "**Set app limits** and let someone else hold the passcode. More effective than resolve.",
          "**Phone face down at meals**, or in another room.",
          "**No phone in the bedroom.** A ¥30 alarm clock solves it."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "五点起床才叫自律。", en: "Real discipline means 5 am." },
            good: { zh: "找到自己的节律，固定下来就好。有人是晨型，有人是夜型，硬改反而伤身。", en: "Find your rhythm and keep it steady. Some are morning people, some aren't; forcing it is harmful." }
          },
          {
            bad: { zh: "周末要补觉。", en: "Weekends are for catching up on sleep." },
            good: { zh: "最多多睡一小时，其余用早睡来补。睡到中午会把手表拨乱，周一更难受。", en: "Sleep in at most an hour; repay the rest by going to bed earlier. Sleeping till noon shifts your clock and ruins Monday." }
          },
          {
            bad: { zh: "生活要有仪式感（主要为了发朋友圈）。", en: "Life needs rituals — mostly for the feed." },
            good: { zh: "真正的仪式是为了降低摩擦：固定位置、固定顺序、固定时间。它服务于你，不是观众。", en: "Real rituals reduce friction: fixed places, fixed order, fixed times. They serve you, not an audience." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "今晚把手机充电器移出卧室",
          "明早起床先喝一杯水，再看手机",
          "周日晚花 15 分钟，写下下周最重要的一件事"
        ],
        en: [
          "Tonight, move the charger out of the bedroom.",
          "Tomorrow, drink water before you look at your phone.",
          "Sunday evening, spend 15 minutes writing down next week's one important thing."
        ]
      }
    ]
  });

  /* ============================== 17 · 安全 ============================== */
  add({
    id: "safety",
    num: "17",
    group: "last",
    icon: "shield",
    read: 9,
    title: { zh: "关键时刻的十秒钟", en: "The ten seconds that matter" },
    card: {
      zh: "急救、账号、法律：三类事，平时花十分钟，出事时救命。",
      en: "First aid, accounts, law: ten minutes of prep now, a life saved later."
    },
    kicker: { zh: "底线 · 安全常识", en: "Ground rules · Safety" },
    lede: {
      zh: "这一章讲的是“不希望用到，但必须知道”的东西。不用背，读完做两件事就够：把急救步骤看一遍，把账号的双重验证打开。",
      en: "This chapter is about things you hope never to use but must know. Don't memorise it — read it once and do two things: review the first-aid steps, and turn on two-factor authentication."
    },
    takeaway: {
      zh: "有人倒下：先确认安全、喊人打 120、立刻按压。其余的都可以等。",
      en: "Someone collapses: check safety, shout for 120, start compressions. Everything else can wait."
    },
    blocks: [
      { t: "h", zh: "有人倒下，先做什么", en: "Someone collapses: what to do first" },
      {
        t: "p",
        zh: "心脏骤停后，每延迟一分钟，存活率下降约 7%–10%。你不需要是医生，你只需要做对顺序。中国有研究显示，八成以上的院外心脏骤停发生在家中——你救的第一个大概率是家人。",
        en: "After cardiac arrest, survival drops roughly 7–10% for every minute of delay. You don't need to be a doctor, just to get the order right. Studies in China find that more than four in five out-of-hospital cardiac arrests happen at home — the first person you save is probably family."
      },
      {
        kind: "flow",
        title: { zh: "心肺复苏：四步", en: "CPR: four steps" },
        steps: [
          { t: { zh: "确认环境安全，拍肩呼喊", en: "Check safety, tap and shout" }, d: { zh: "先看有没有车流、火、电。拍他肩膀大声问“你还好吗”，没有反应才算意识丧失。", en: "Look for traffic, fire, electricity. Tap their shoulders and shout. No response means unresponsive." } },
          { t: { zh: "叫人打 120，取 AED", en: "Get 120 called, get an AED" }, d: { zh: "指定具体的人：“穿蓝衣服的，你打 120；你去找 AED。”不要对着人群喊。", en: "Point at individuals: “You in blue, call 120. You, find an AED.” Never shout at a crowd." } },
          { t: { zh: "没有正常呼吸就按压", en: "No normal breathing? Compress" }, d: { zh: "只有濒死喘息也算没有呼吸。双手叠放胸骨下半段，100–120 次/分，深度 5–6 厘米，让胸口完全回弹。", en: "Gasping counts as not breathing. Stack your hands on the lower half of the sternum, 100–120 per minute, 5–6 cm deep, full recoil." } },
          { t: { zh: "AED 到了就开机", en: "AED arrives? Turn it on" }, d: { zh: "跟着语音做，贴片贴好，它自己判断要不要电击。电击前后都别碰人。", en: "Follow the voice prompts, apply the pads, let it decide. Don't touch the person during shock or analysis." } }
        ]
      },

      { t: "h", zh: "噎住、烫伤、大出血", en: "Choking, burns, bleeding" },
      {
        t: "ul",
        zh: [
          "**噎住（成人）**：站其身后，一手握拳放在肚脐上方，另一手包住拳头，快速向内向上冲击。能咳嗽就鼓励他咳，不要拍背",
          "**噎住（婴儿）**：面朝下托在前臂，拍背 5 次；翻过来按压胸部 5 次，交替进行",
          "**烫伤**：立刻用流动冷水冲 20 分钟。不涂牙膏、酱油、香油——这些会让医生更难看清楚",
          "**大出血**：直接用干净的布用力压住伤口，压住别松手，再加压包扎。不要频繁掀开看",
          "**中暑**：移到阴凉处，解开衣物，用凉水擦身、扇风，意识不清立刻送医"
        ],
        en: [
          "**Choking (adult)**: stand behind, fist above the navel, other hand over it, quick inward-and-upward thrusts. If they can cough, encourage coughing — don't slap their back.",
          "**Choking (infant)**: face down on your forearm, five back blows; turn over, five chest thrusts; alternate.",
          "**Burns**: cool under running water for 20 minutes. No toothpaste, soy sauce or oil — they make it harder for doctors to see.",
          "**Severe bleeding**: press hard directly on the wound with clean cloth, don't release, then bandage with pressure. Don't keep peeking.",
          "**Heat stroke**: shade, loosen clothing, cool with water and fanning. Call for help if confused or unconscious."
        ]
      },

      { t: "h", zh: "账号安全：今天就能做完", en: "Account security: finish it today" },
      {
        t: "p",
        zh: "账号被盗是普通人最常见的“被抢”方式：登录不了的微信、被借去贷款的身份证、被转走的银行卡。防护手段就那么几个，做完能挡掉绝大多数攻击。",
        en: "Account theft is the most common way ordinary people get robbed: a locked-out WeChat, an ID used for a loan, a drained bank card. A handful of defences blocks the overwhelming majority of attacks."
      },
      {
        t: "checklist",
        zh: [
          "主邮箱和微信开启双重验证（验证码或通行密钥）",
          "重要账号用不同密码，交给密码管理器记，别用生日和手机号",
          "手机设锁屏密码，SIM 卡设 PIN 码（防补卡攻击）",
          "支付软件关掉小额免密，设置单笔限额",
          "每年查一次名下有几张银行卡、几张电话卡，不用的注销",
          "不点短信里的链接，不把验证码念给任何人，包括自称客服的"
        ],
        en: [
          "Turn on two-factor authentication for your main email and WeChat.",
          "Use different passwords for important accounts, kept in a password manager — never birthdays or phone numbers.",
          "Set a phone lock screen and a SIM PIN (blocks SIM-swap attacks).",
          "Disable small-amount password-free payments; set a per-transaction limit.",
          "Once a year, check how many bank cards and phone numbers are registered to you; cancel the unused ones.",
          "Never click links in SMS, and never read a verification code aloud — including to “customer service”."
        ]
      },

      { t: "h", zh: "几条普通人最容易踩的法律红线", en: "Legal lines ordinary people cross by accident" },
      {
        t: "ul",
        zh: [
          "**出借银行卡、手机号帮人“走账”**：可能构成帮助信息网络犯罪活动罪，哪怕你没拿好处",
          "**帮忙刷单、代收代付、代提现**：钱一旦涉及诈骗资金，你就成了链条上的一环",
          "**转发未核实的“求助”“曝光”信息**：可能侵犯名誉权，严重的要担责",
          "**给朋友做担保签字**：不是犯罪，但对方还不上，钱真的要你还",
          "**网上辱骂、造谣、传播他人隐私**：轻则民事赔偿，重则治安处罚甚至刑责"
        ],
        en: [
          "**Lending your bank card or phone number so someone can “move money”**: this can amount to aiding cybercrime, even unpaid.",
          "**Fake-order tasks, collecting payments for others, cashing out for others**: once the money is fraud proceeds, you're part of the chain.",
          "**Forwarding unverified “appeals” or “exposés”**: potential defamation, with real liability at the serious end.",
          "**Co-signing a guarantee for a friend**: not a crime, but if they default, you genuinely pay.",
          "**Insults, rumours, or sharing someone's private information online**: civil damages at best, police penalties or criminal charges at worst."
        ]
      },
      {
        t: "p",
        zh: "遇到麻烦的第一原则：**不要自己扛，先找一个懂的人问**。律师咨询费几百块，比事后补救便宜太多。",
        en: "The first rule when trouble hits: **don't carry it alone — ask someone who knows**. An hour with a lawyer costs far less than cleaning up afterwards."
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "急救是医生的事，我不敢动。", en: "First aid is for doctors; I'd better not touch anyone." },
            good: { zh: "心脏骤停不按压，存活率每分钟下降约 10%。在等救护车的时间里，按压是唯一有效的动作。", en: "Without compressions, survival falls about 10% a minute. While the ambulance comes, compressions are the only thing that works." }
          },
          {
            bad: { zh: "密码复杂到自己都记不住才安全。", en: "A password is safe only if you can't remember it." },
            good: { zh: "随机且每个网站不同 + 密码管理器，既安全又不折磨人。", en: "Random, unique per site, stored in a manager: safer and less painful." }
          },
          {
            bad: { zh: "帮朋友个举手之劳，不会有事。", en: "Doing a friend a small favour can't hurt me." },
            good: { zh: "“借张卡收个钱”“帮我签个字”是普通人被卷进刑案最常见的入口。学会说不。", en: "“Lend me your card to receive money” and “just sign here” are the classic doorways into criminal cases. Learn to say no." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "现在打开两个账号的双重验证，五分钟能搞定",
          "在手机地图里收藏最近的社区医院和急诊",
          "报名一次红十字会或医院的免费急救课，两小时"
        ],
        en: [
          "Turn on two-factor authentication for two accounts now — five minutes.",
          "Save the nearest clinic and emergency department in your maps app.",
          "Book a free two-hour first-aid class with the Red Cross or a local hospital."
        ]
      }
    ]
  });

  /* ============================== 20 · 行动 ============================== */
  add({
    id: "action",
    num: "20",
    group: "last",
    icon: "flag",
    read: 7,
    title: { zh: "30 天，把生活扳回来一点", en: "Thirty days to nudge your life back" },
    card: {
      zh: "四张周卡，每天十分钟。不用一次改完，一次只改一件。",
      en: "Four weekly cards, ten minutes a day. Don't fix everything — fix one thing."
    },
    kicker: { zh: "行动 · 30 天计划", en: "Action · A 30-day plan" },
    lede: {
      zh: "读到这里，你已经知道了足够多的道理。剩下的只有一件事：把它变成日历上的一格。这一章是一个最小的版本，不追求彻底改变，只追求“真的开始”。",
      en: "By now you know plenty. What's left is one move: put it in the calendar. This chapter is the smallest possible version — not transformation, just an actual start."
    },
    takeaway: {
      zh: "一次只改一件事，坚持 30 天，比同时改十件更有效。",
      en: "One change for thirty days beats ten changes for three."
    },
    blocks: [
      { t: "h", zh: "为什么是 30 天", en: "Why thirty days" },
      {
        t: "p",
        zh: "研究显示，一个行为变成“自动”平均需要两个多月，但**头两周是最难的**。30 天不够形成永久习惯，但足够跨过最难受的那段，让你看到一点效果——而效果，才是继续下去的理由。",
        en: "Research suggests a behaviour takes a couple of months on average to feel automatic, but **the first two weeks are the hard part**. Thirty days won't make a permanent habit, but it gets you past the worst stretch and shows a result — and results are what keep you going."
      },
      {
        kind: "line",
        title: { zh: "习惯的形成：最难的是第 8–12 天", en: "Habit formation: days 8–12 are the wall" },
        sub: { zh: "纵轴：自动程度（示意）；横轴：天数", en: "Vertical: automaticity (illustrative). Horizontal: days." },
        x: ["1", "4", "8", "12", "16", "20", "24", "30"],
        yMin: 0,
        yMax: 1,
        series: [{ name: { zh: "自动程度", en: "Automaticity" }, color: "sage", values: [0.12, 0.3, 0.42, 0.4, 0.52, 0.64, 0.74, 0.86], fill: true }],
        markers: [{ i: 2, v: 0.42 }],
        cap: { zh: "形状参考 Lally 等（2010）的习惯形成研究：前期上升快，中期会有明显的平台或回落。撑过这一段，后面省力得多。", en: "Shape follows Lally et al. (2010): fast early gains, then a plateau or dip. Survive that and it gets much cheaper." }
      },

      { t: "h", zh: "四周安排", en: "The four weeks" },
      {
        t: "table",
        head: { zh: ["周次", "主题", "每天 10 分钟做什么"], en: ["Week", "Theme", "Ten minutes a day"] },
        rows: [
          { zh: ["第 1 周", "睡眠", "固定起床时间；睡前把手机放到卧室外面"], en: ["Week 1", "Sleep", "Fixed wake time; phone sleeps outside the bedroom"] },
          { zh: ["第 2 周", "身体", "20 分钟快走；每餐先吃一份蔬菜"], en: ["Week 2", "Body", "A 20-minute walk; vegetables first at each meal"] },
          { zh: ["第 3 周", "关系", "每天给一个人发一条真诚的消息，或约一次见面"], en: ["Week 3", "People", "One genuine message a day, or book one meeting"] },
          { zh: ["第 4 周", "意义", "写下今天做得最好的一件事，和明天想做的一件小事"], en: ["Week 4", "Meaning", "Write the best thing you did today and one small thing for tomorrow"] }
        ]
      },
      {
        t: "p",
        zh: "注意：这四周是**叠加**的，不是替换。第二周开始，第一周的习惯要继续。到了第四周，你手上会有四件小事同时运行——这就是“生活被扳回来一点”的样子。",
        en: "Note: these weeks **stack**, they don't replace. From week two you keep week one going. By week four, four small things run at once — that's what “nudged back” looks like."
      },

      { t: "h", zh: "30 天之后", en: "After thirty days" },
      {
        t: "checklist",
        zh: [
          "留下最有效的两件，其余允许放弃——放弃不是失败，是筛选",
          "写下三句“我发现自己……”（例：我早上效率比晚上高）",
          "把其中一件变成默认设置（固定时间、固定地点、固定触发动作）",
          "再选下一个 30 天的主题，只选一个"
        ],
        en: [
          "Keep the two that worked; let the others go — dropping is filtering, not failing",
          "Write three lines starting “I noticed that I…” (e.g. I'm sharper in the morning)",
          "Turn one of them into a default: fixed time, fixed place, fixed trigger",
          "Choose one theme for the next thirty days — only one"
        ]
      },

      { t: "h", zh: "如果你只想做一件事", en: "If you only do one thing" },
      {
        t: "p",
        zh: "那就选睡觉。睡眠是其他所有事的底座：睡好的人更容易运动、更少情绪化、更能做出好判断、更愿意和人相处。它免费、不需要设备、今晚就能开始，而且失败的成本极低——大不了明天再试一次。",
        en: "Choose sleep. Sleep underpins everything else: better sleep makes exercise likelier, moods steadier, judgement clearer and other people easier. It's free, needs no equipment, starts tonight, and the cost of failing is almost zero — you simply try again tomorrow."
      },
      {
        t: "quote",
        zh: "你不需要一个完美的人生，只需要一个还在变好的人生。",
        en: "You don't need a perfect life. You need one that's still getting better.",
        by: { zh: "这本书的全部意思", en: "The whole point of this book" }
      },
      {
        t: "stats",
        items: [
          { v: { zh: "30", en: "30" }, label: { zh: "天，先做一件小事", en: "days, one small thing" } },
          { v: { zh: "10", en: "10" }, label: { zh: "每天需要的分钟数", en: "minutes a day" } },
          { v: { zh: "2", en: "2" }, label: { zh: "30 天后值得保留的习惯数", en: "habits worth keeping afterwards" } }
        ]
      },
      {
        t: "tip",
        zh: [
          "今天只在日历上放一件事：明早固定时间起床",
          "把这一页的四周安排截图，存在手机相册第一张",
          "30 天后再回来读这一章，看看哪句话现在才看懂"
        ],
        en: [
          "Put exactly one thing in your calendar: a fixed wake-up time tomorrow.",
          "Screenshot the four weeks and keep it as the first photo in your album.",
          "Come back to this chapter in thirty days and see which line finally lands."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "要么彻底改变，要么没有意义。", en: "Either total transformation or it doesn't count." },
            good: { zh: "微小的改变会累积。每天十分钟，一年是六十多个小时——够学会一样东西。", en: "Small changes compound. Ten minutes a day is sixty hours a year — enough to learn something real." }
          },
          {
            bad: { zh: "中途断了就等于失败。", en: "Breaking the streak means failure." },
            good: { zh: "研究里，偶尔漏一天对长期结果影响很小。真正的失败是“断了就不再开始”。", en: "Missing a day barely matters long-term. The only real failure is not restarting." }
          },
          {
            bad: { zh: "我要等准备好了再开始。", en: "I'll start when I'm ready." },
            good: { zh: "准备是开始之后才有的东西。今晚把手机移出卧室，这就是开始。", en: "Readiness comes after starting. Move the phone out tonight — that's the start." }
          }
        ]
      }
    ]
  });
})();
