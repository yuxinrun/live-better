/* Chapters 07, 10, 11, 12 — city & home, choosing a partner,
   couple conflict & in-laws, social graces */
(function () {
  "use strict";

  var add = window.LB.addChapter;

  /* ============================== 07 · 城市与房 ============================== */
  add({
    id: "city",
    num: "07",
    group: "time",
    icon: "home",
    read: 10,
    title: { zh: "选城市和买房：先算账，再谈情", en: "Choosing a city and a home: do the maths first" },
    card: {
      zh: "城市决定你能遇见什么，房子决定你每月还能剩下多少。两件事都值得认真算一次。",
      en: "The city decides what you meet. The mortgage decides what you keep. Both deserve a real calculation."
    },
    kicker: { zh: "时间 · 城市与房子", en: "Time · City and home" },
    lede: {
      zh: "很多人把城市和房子当成“感觉”问题：喜欢就留下，看中就买。其实它们更像一次长期投资决策——影响你未来十年的收入、婚恋、孩子上学和父母看病。这一章讲怎么算，也讲什么时候可以不买。",
      en: "Most people treat city and home as feelings: stay where you like, buy what you fall for. In practice they behave like long-term investment decisions — shaping your income, your dating pool, your child's school and your parents' care for a decade. This chapter is about the arithmetic, and when it's fine not to buy at all."
    },
    takeaway: {
      zh: "先定城市，再定租买；月供不超过税后收入 30%，手里永远留半年的钱。",
      en: "Pick the city first, then rent-or-buy. Keep the payment under 30% of take-home pay and always hold six months of cash."
    },
    blocks: [
      { t: "h", zh: "城市是被低估的一次选择", en: "The city is the choice nobody talks about" },
      {
        t: "p",
        zh: "你毕业去哪座城市，往往同时决定了四件事：能找到什么工作、能遇见什么样的伴侣、孩子能上什么学校、父母生病时能挂到哪个号。它比高考志愿的影响还长——因为你可以换工作、换行业，但换城市要付出的代价大得多。",
        en: "Where you land after graduation quietly decides four things at once: the jobs you can find, the partners you meet, the schools your kids attend, and which hospital your parents can get into. It outlasts most career choices — you can change jobs or industries, but changing cities costs far more."
      },
      {
        t: "p",
        zh: "所以别用“我喜欢这里”一句话决定。至少把三个问题写下来：五年后，我希望自己的收入大概是什么水平？我希望和什么样的人组成家庭？我父母老了，我要不要接他们在身边？",
        en: "So don't settle it with “I like it here.” Write down three questions instead: what income do I roughly need in five years? What kind of person do I want to build a family with? When my parents age, do I want them nearby?"
      },
      {
        t: "table",
        head: { zh: ["城市类型", "给你的", "要你的", "适合谁"], en: ["City type", "What it gives", "What it costs", "Who it suits"] },
        rows: [
          {
            zh: ["一线（北上广深）", "岗位多、天花板高、同行密度大", "房租高、通勤长、落户难、婚育成本高", "能在高附加值行业快速积累原始资本的人"],
            en: ["Tier 1 (Beijing, Shanghai, Guangzhou, Shenzhen)", "More roles, higher ceilings, dense peer networks", "High rent, long commutes, hard residency, costly family life", "People able to build capital fast in high-value industries"]
          },
          {
            zh: ["强二线 / 新一线", "产业在长、房价收入比温和、落户友好", "头部机会略少、部分行业天花板中等", "大多数普通家庭的最优解，尤其是要孩子的人"],
            en: ["Strong tier 2 / new tier 1", "Growing industries, gentler price-to-income ratios, easier residency", "Fewer top-tier roles, mid-level ceilings in some fields", "The best fit for most ordinary families, especially with kids"]
          },
          {
            zh: ["家乡或小城", "成本低、有人情网、离父母近", "岗位少、收入低、专业匹配难、公共资源弱", "有稳定本地资源、或准备远程/自雇的人"],
            en: ["Hometown or small city", "Low costs, existing networks, close to parents", "Fewer jobs, lower pay, poor skill match, weaker public services", "People with solid local roots, or remote/self-employed work"]
          }
        ]
      },
      {
        t: "p",
        zh: "有一个信号比 GDP 好用：**年轻人用脚投票的方向**。连续多年人口净流入的城市，通常意味着岗位在增加、公共服务在扩张。反过来，人口持续流出的地方，房子再便宜也难涨，工作机会还会越来越少。",
        en: "One signal beats GDP: **where young people actually move**. Cities with years of net inflow usually have growing jobs and expanding public services. Where people keep leaving, cheap housing rarely appreciates — and work keeps shrinking."
      },

      { t: "h", zh: "租房还是买房：先算三个数", en: "Rent or buy: three numbers first" },
      {
        t: "p",
        zh: "“租不如买”是个被重复了三十年的说法，但它成立需要前提。先用三个数给自己做体检，而不是先听中介讲故事。",
        en: "“Renting is throwing money away” has been repeated for thirty years, but it only holds under conditions. Run three numbers on yourself before listening to an agent's story."
      },
      {
        kind: "flow",
        title: { zh: "买房前的三道体检", en: "Three checks before you buy" },
        steps: [
          {
            t: { zh: "月供 ≤ 税后收入的 30%", en: "Payment ≤ 30% of take-home pay" },
            d: { zh: "超过这条线，你就没有余钱应对失业、生病、生孩子。银行批贷看的是征信，不是你的生活。", en: "Above that line you have no room for a layoff, an illness or a baby. Banks approve on credit history, not on your life." }
          },
          {
            t: { zh: "首付之后还剩 6–12 个月生活费", en: "Six to twelve months of expenses left after the deposit" },
            d: { zh: "很多人把六个钱包掏空凑首付，结果是房子有了，抗风险能力归零。装修、家电、税费还要再花一笔。", en: "Many families empty every account for the deposit, then own a flat and zero resilience. Renovation, appliances and taxes cost extra." }
          },
          {
            t: { zh: "至少打算住满 5 年", en: "Plan to stay at least five years" },
            d: { zh: "买房有交易成本：契税、中介费、装修。住不满三年就卖，这些钱基本收不回来。", en: "Buying carries transaction costs: deed tax, agent fees, renovation. Sell within three years and most of it is gone." }
          }
        ]
      },
      {
        t: "table",
        head: { zh: ["你的情况", "更稳的选择"], en: ["Your situation", "The steadier choice"] },
        rows: [
          { zh: ["工作可能变动、城市还没定", "先租。把流动性留给自己，别用房子锁死下一步"], en: ["Job may change, city not settled", "Rent. Keep the mobility; don't lock your next move into a flat"] },
          { zh: ["准备结婚生子、确定长期留在这座城市", "可以买，但把月供压到 30% 以下，别买“跳一跳够得着”的那套"], en: ["Marrying, having kids, staying put", "Buy — but keep the payment under 30%, and skip the place you can only just afford"] },
          { zh: ["首付需要借遍亲戚", "先别买。房子的代价不该是全家十年没有余钱"], en: ["Deposit requires borrowing from everyone", "Wait. A flat shouldn't cost your whole family a decade of margin"] },
          { zh: ["收入不错但没有本地户口/购房资格", "用租房 + 投资账户替代，别为资格去买不该买的房"], en: ["Good income, no local residency or buying rights", "Rent and invest instead. Don't buy a bad flat just to qualify"] }
        ]
      },

      { t: "h", zh: "买房的隐性成本，中介不会主动说", en: "The hidden costs agents don't mention" },
      {
        t: "ul",
        zh: [
          "**税费与手续费**：契税、维修基金、中介费，通常是总价的 2%–4%",
          "**装修与家电**：一套 90 平米的房子，住进去还要再花十几万",
          "**物业、取暖、维修**：每年几千到上万，且逐年上涨",
          "**通勤与时间**：为省 50 万买到远郊，每天多花两小时，十年就是七千小时",
          "**机会成本**：首付如果放在别处，本来可以产生收益"
        ],
        en: [
          "**Taxes and fees**: deed tax, maintenance fund, agency commission — usually 2–4% of the price",
          "**Renovation and appliances**: a 90 m² flat easily swallows another year of savings",
          "**Upkeep**: property fees, heating, repairs — thousands a year and rising",
          "**Commute**: saving 500k by moving to the outskirts can cost two hours a day — 7,000 hours over a decade",
          "**Opportunity cost**: that deposit could have been earning somewhere else"
        ]
      },
      {
        t: "p",
        zh: "所以真正该比较的不是“租金 vs 月供”，而是**“租房 + 把差额投资” vs “买房 + 资产增值”**。在房价快速上涨的年代，后者赢；在横盘或下跌的年代，前者常常更划算。别用上一代的经验，替自己这一代做决定。",
        en: "So the real comparison isn't rent versus mortgage — it's **rent plus investing the difference** versus **buying plus appreciation**. In a boom the second wins; in a flat or falling market the first often does. Don't let the previous generation's experience make this generation's decision."
      },

      { t: "h", zh: "如果暂时买不起", en: "If you can't buy yet" },
      {
        t: "p",
        zh: "买不起不是失败，是当前现金流和资产价格不匹配。这时候最该做的不是攒首付攒到绝望，而是三件事：把租住的地方住得舒服一点、把应急金和投资账户建起来、把职业技能往上抬一档。三年后你的选择会完全不同。",
        en: "Not being able to buy isn't failure; it's a mismatch between cash flow and prices. The move isn't to save grimly for a deposit — it's to make the rented place comfortable, build an emergency fund and an investment account, and lift your skills a level. Three years later the options look entirely different."
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "租房是给房东打工。", en: "Renting is working for your landlord." },
            good: { zh: "买房是给银行打工三十年。两者都是付钱换住处，区别是谁承担风险、谁获得流动性。", en: "Buying is working for the bank for thirty years. Both pay for shelter; they differ in who carries the risk and who keeps the liquidity." }
          },
          {
            bad: { zh: "房价永远涨。", en: "House prices always go up." },
            good: { zh: "过去二十年是这样，但人口在减少、城镇化在放缓。把“永远”换成“可能”，决策就会谨慎很多。", en: "They did for twenty years — but the population is shrinking and urbanisation is slowing. Swap “always” for “maybe” and your decision gets much calmer." }
          },
          {
            bad: { zh: "没房子就结不了婚。", en: "No flat, no marriage." },
            good: { zh: "把房子当作婚前唯一门槛的人，婚后也会用同样的方式衡量你。这条筛掉的不只是房子，还有关系的质地。", en: "Someone who makes property the single gate before marriage will measure you the same way afterwards. That filter screens out more than a flat." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "写出你未来五年最可能定居的城市，以及理由（不超过三条）",
          "算一次：现在这套房的月供，占你税后收入多少？",
          "把这三个月房租之外的钱，先转进一个单独的账户"
        ],
        en: [
          "Write down the city you'll most likely live in five years from now — with no more than three reasons.",
          "Do the sum: what share of your take-home pay would this flat's payment take?",
          "Move whatever is left after rent into a separate account this month."
        ]
      }
    ]
  });

  /* ============================== 10 · 择偶 ============================== */
  add({
    id: "partner",
    num: "10",
    group: "heart",
    icon: "ring",
    read: 10,
    title: { zh: "择偶：这是你一生最大的一次杠杆", en: "Choosing a partner: the biggest leverage of your life" },
    card: {
      zh: "选错工作可以换，选错城市可以搬。选错伴侣，代价要用很多年慢慢付。",
      en: "A wrong job can be changed, a wrong city can be left. A wrong partner is paid off slowly, over years."
    },
    kicker: { zh: "关系 · 择偶", en: "Relationships · Choosing" },
    lede: {
      zh: "这一章不劝你结婚，也不劝你别结。它只讲一件事：如果你决定和一个长期共处，哪些信号比“心动”更值得看，以及怎么在婚前把该看清的看清。",
      en: "This chapter won't push you toward marriage or away from it. It makes one point: if you're going to share decades with someone, which signals matter more than chemistry — and how to see them clearly before you commit."
    },
    takeaway: {
      zh: "看三件事：他生气时怎么对你、他怎么对待帮不上他的人、他能不能和你一起处理麻烦。",
      en: "Watch three things: how they treat you when angry, how they treat people who can't help them, and whether they can handle trouble with you."
    },
    blocks: [
      { t: "h", zh: "为什么说这是最大的杠杆", en: "Why it's the biggest leverage" },
      {
        t: "p",
        zh: "假设你活到 80 岁，30 岁结婚，你和伴侣要在同一个屋檐下待五十年。这比你在一家公司待的时间长十倍，比你和父母同住的时间长三倍。它影响你的睡眠、收入、健康、社交，甚至寿命——哈佛那个持续 85 年的研究反复得出同一个结论：**关系的质量，是预测晚年幸福最有力的变量**。",
        en: "Say you live to 80 and marry at 30 — that's fifty years under one roof. Ten times longer than at any company, three times longer than you lived with your parents. It shapes your sleep, income, health, friendships, even lifespan. The Harvard study that's run 85 years keeps landing on the same finding: **relationship quality is the strongest predictor of wellbeing late in life**."
      },
      {
        t: "p",
        zh: "而这件事几乎没法“试试看”。你可以先实习再入职，可以先租房再买房，但婚姻的试错成本极高——时间、钱、孩子、两个家庭。所以值得在婚前把该问的问清楚。",
        en: "And you can't really trial it. You can intern before you're hired, rent before you buy, but marriage's cost of error is enormous — time, money, children, two families. It's worth asking the hard questions before, not after."
      },

      { t: "h", zh: "三个比“心动”更可靠的信号", en: "Three signals more reliable than butterflies" },
      {
        kind: "flow",
        title: { zh: "婚前值得观察的三幕", en: "Three scenes worth watching before marriage" },
        steps: [
          {
            t: { zh: "第一幕：他生气的时候", en: "Scene one: when they're angry" },
            d: { zh: "吵架时他会消失、翻旧账、贬低你，还是能说“我现在很生气，我需要半小时冷静，然后我们谈”？冲突里的样子，就是婚后二十年的样子。", en: "When you fight, do they vanish, drag up old grievances or belittle you — or can they say “I'm angry, I need half an hour, then let's talk”? How they behave in conflict is how they'll behave for twenty years." }
          },
          {
            t: { zh: "第二幕：他对待“没用的人”", en: "Scene two: how they treat people who can't help them" },
            d: { zh: "对服务员、外卖员、保洁、下属的态度，比对领导的态度真实得多。一个人如何对待没有权力的人，就是他在你失去价值时会怎么对你。", en: "How they treat waiters, couriers, cleaners and juniors says far more than how they treat their boss. How someone treats people without power is how they'll treat you when you have less to offer." }
          },
          {
            t: { zh: "第三幕：一起做一件麻烦事", en: "Scene three: do something annoying together" },
            d: { zh: "装修、搬家、办签证、照顾生病的家人。麻烦事最见分工、耐心和责任感——而这正是婚姻的主要内容。", en: "Renovate a flat, move house, apply for a visa, care for a sick relative. Trouble reveals division of labour, patience and responsibility — which is most of what marriage is." }
          }
        ]
      },
      {
        t: "p",
        zh: "有研究比较真实夫妻与随机配对的人，发现夫妻在价值观上的相似度明显高于随机水平，而**价值观的相似程度与婚姻质量相关**。翻译成人话：长得好看会过期，聊得来会随境遇变化，但“什么重要、什么不能做”这一层一致，能一起走很远。",
        en: "Research comparing real couples with randomly paired people finds spouses are markedly more alike in values than chance would predict — and that **value similarity tracks marital quality**. In plain terms: looks fade, shared interests shift with circumstance, but agreement on what matters and what is off-limits carries you a long way."
      },
      {
        t: "table",
        head: { zh: ["值得观察的", "容易误判的"], en: ["Worth observing", "Easy to misread"] },
        rows: [
          { zh: ["他如何花自己的钱和闲时间", "他为你花了多少钱"], en: ["How they spend their own money and free time", "How much they spend on you"] },
          { zh: ["他和父母的实际边界", "他嘴上说“我妈很好说话”"], en: ["The real boundary with their parents", "“My mum is easy-going” said out loud"] },
          { zh: ["他谈到前任时的语气", "他反复强调“我从来没这么爱过谁”"], en: ["The tone when discussing exes", "“I've never loved anyone like this”"] },
          { zh: ["他遇到挫折后的恢复方式", "他顺风时的雄心壮志"], en: ["How they recover from setbacks", "Ambition while things go well"] },
          { zh: ["他对你的朋友和家人的态度", "他对你一个人的态度"], en: ["How they treat your friends and family", "How they treat you alone"] }
        ]
      },

      { t: "h", zh: "别用清单择偶，用场景择偶", en: "Don't shop with a checklist, test with scenes" },
      {
        t: "p",
        zh: "“身高 175 以上、本科以上、有房无贷”，这类清单筛的是条件，不是生活。条件决定你们能不能开始，场景决定你们能不能过下去。与其列二十条标准，不如一起经历三件事。",
        en: "“At least 175 cm, a degree, a flat with no mortgage” screens conditions, not life. Conditions decide whether you start; scenes decide whether you last. Rather than twenty criteria, live through three situations together."
      },
      {
        t: "ul",
        zh: [
          "**一起旅行七天以上**：看计划性、情绪稳定度、意见不同时谁让步",
          "**一起做一次预算**：聊钱不尴尬，婚后就不必为钱演戏",
          "**一起照顾一次病人或小孩**：看耐心什么时候耗光，耗光了会怎样",
          "**见一次双方父母**：不是看合不合眼缘，是看他怎么处理你和父母的摩擦"
        ],
        en: [
          "**Travel together for a week or more**: watch planning, emotional steadiness, who yields when you disagree",
          "**Build a budget together**: being able to talk money now saves years of pretending later",
          "**Care for a sick person or a small child once**: see when patience runs out, and what happens then",
          "**Meet both families once**: not to check chemistry, but to watch how they handle friction between you and their parents"
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "对的人自然会懂我，不用我说。", en: "The right person just gets me. No need to say it." },
            good: { zh: "没有人会读心。会问“你现在需要我做什么”的人，比“我以为你知道”的人可靠一万倍。", en: "Nobody reads minds. Someone who asks “what do you need from me right now” is a thousand times more reliable than “I thought you knew.”" }
          },
          {
            bad: { zh: "爱能改变一个人。", en: "Love changes people." },
            good: { zh: "爱能让人愿意改，但改不改得动，看的是他自己有没有动力。你不是他的改造项目。", en: "Love can make someone willing to change — but whether they do depends on their own drive. You are not a renovation project manager." }
          },
          {
            bad: { zh: "条件好，婚姻就会好。", en: "Good credentials make a good marriage." },
            good: { zh: "学历、收入、房子能降低生活摩擦，但不能降低沟通成本。前者可以婚后赚，后者很难婚后学。", en: "Education, income and property reduce material friction, not communication costs. The former can be earned after marriage; the latter is very hard to learn then." }
          },
          {
            bad: { zh: "结婚要找最心动的人。", en: "Marry whoever gives you the strongest spark." },
            good: { zh: "心动决定开始，相处决定长久。看长期，要找“和他一起处理麻烦也不讨厌”的人。", en: "Sparks start things; compatibility sustains them. For the long run, find someone whose company you still don't mind in the middle of a mess." }
          }
        ]
      },
      {
        t: "quote",
        zh: "婚姻不是找到一个完美的人，而是和一个具体的人，把日子一天天过成能忍受、再慢慢过成不错的样子。",
        en: "Marriage isn't finding a perfect person. It's taking one specific person and turning ordinary days into something bearable — and then, slowly, into something good.",
        by: { zh: "— 这句没有出处，但很多过得不错的人都这么总结", en: "— No citation, but it's how many people who've done it well describe it" }
      },
      {
        t: "tip",
        zh: [
          "写下三条“绝对不能让步”的底线，剩下的都算可商量",
          "下次吵架时，只观察自己说了什么，不做评判",
          "找机会和对方一起做一件麻烦事，再谈下一步"
        ],
        en: [
          "Write down the three things you genuinely cannot compromise on. Everything else is negotiable.",
          "In your next argument, notice only what you say — no judging.",
          "Do one genuinely annoying task together before deciding anything bigger."
        ]
      }
    ]
  });

  /* ============================== 11 · 夫妻与婆媳 ============================== */
  add({
    id: "couple",
    num: "11",
    group: "heart",
    icon: "people",
    read: 11,
    title: { zh: "吵架不可怕，可怕的是这四种说话方式", en: "Arguing is fine. These four habits aren't." },
    card: {
      zh: "婚姻里的大部分问题解决不了，只能一起相处。学会的是相处方式，不是赢。",
      en: "Most marital problems never get solved — they get lived with. What you can learn is how, not how to win."
    },
    kicker: { zh: "关系 · 冲突与边界", en: "Relationships · Conflict and boundaries" },
    lede: {
      zh: "这一章讲两件事：夫妻怎么吵才不伤筋动骨，婆媳问题为什么本质上是边界问题而不是“两个女人不合”。如果你只记住一句话，就记住：冲突不可怕，轻蔑才可怕。",
      en: "This chapter covers two things: how to fight without doing structural damage, and why in-law trouble is really a boundary problem rather than “two women who don't get along.” If you remember one line: conflict isn't the danger — contempt is."
    },
    takeaway: {
      zh: "把“你总是……”换成“这次我……”，把“你妈……”换成“我们的小家怎么安排”。",
      en: "Swap “you always” for “this time I”. Swap “your mother” for “how our household runs”."
    },
    blocks: [
      { t: "h", zh: "先接受一个事实：大部分冲突解决不了", en: "First, accept this: most conflict never gets resolved" },
      {
        t: "p",
        zh: "婚姻研究者约翰·戈特曼追踪了数千对夫妻几十年，得出一个反直觉的结论：**约 69% 的夫妻冲突是“永久性问题”**，源于性格、原生家庭和价值观差异，吵一百次也不会消失。剩下的 31% 才是可以解决的。",
        en: "John Gottman tracked thousands of couples for decades and reached a counter-intuitive conclusion: **about 69% of marital conflict is perpetual** — rooted in temperament, family of origin and values, and it doesn't disappear after the hundredth fight. Only the remaining 31% is solvable."
      },
      {
        t: "p",
        zh: "这意味着：婚姻的目标不是“把问题解决完”，而是**带着这些问题继续好好过**。很多夫妻吵了二十年同一件事，却依然亲密——区别不在问题，在于吵完之后还能不能接上话。",
        en: "Which means the goal isn't to solve everything, but to **live well alongside the unsolved parts**. Plenty of couples argue about the same thing for twenty years and stay close. The difference isn't the problem — it's whether they can still talk afterwards."
      },
      {
        t: "p",
        zh: "戈特曼还发现一个比例：稳定的伴侣之间，**每一次负面互动，至少有五次正面互动**（一句抱怨配五句肯定、一次冷战配五次搭话）。比例跌破 1:1，关系就进入危险区。",
        en: "Gottman also found a ratio: in stable couples, **every negative interaction is offset by about five positive ones** — a complaint balanced by five affirmations, a silent hour by five small approaches. Below one to one, the relationship is in danger."
      },

      { t: "h", zh: "四种最伤人的说话方式", en: "The four most damaging ways to talk" },
      {
        t: "p",
        zh: "他把最危险的四种沟通方式叫做“末日四骑士”。它们不是脏话，而是日常里最普通、也最腐蚀关系的那几句。",
        en: "He called the four most dangerous patterns the “Four Horsemen.” None of them is profanity — they're the most ordinary sentences, and the most corrosive."
      },
      {
        t: "table",
        head: { zh: ["四骑士", "听起来像", "解药"], en: ["Horseman", "Sounds like", "Antidote"] },
        rows: [
          {
            zh: ["批评（针对人格）", "“你怎么总是这么自私”", "只谈这件事：“这次碗没洗，我有点累，能不能你来”"],
            en: ["Criticism (attacking character)", "“Why are you always so selfish?”", "Stay on the event: “The dishes weren't done tonight and I'm tired — could you take them?”"]
          },
          {
            zh: ["轻蔑（居高临下）", "翻白眼、冷笑、“你懂什么”", "每天找一个具体优点说出来，不是夸，是陈述事实"],
            en: ["Contempt (looking down)", "Eye-rolling, sneering, “what would you know”", "Name one specific good thing daily — not flattery, just fact"]
          },
          {
            zh: ["防卫（反咬一口）", "“我还不是因为你先……”", "先承认自己能承认的那 5%，再说剩下的"],
            en: ["Defensiveness (counter-attack)", "“Well I only did that because you…”", "Concede the 5% you can concede before arguing the rest"]
          },
          {
            zh: ["筑墙（关闭沟通）", "沉默、走开、玩手机、说“随便”", "说一句“我现在太满了，二十分钟后我们继续”，并真的回来"],
            en: ["Stonewalling (shutting down)", "Silence, walking out, phone, “whatever”", "Say “I'm flooded, let's resume in twenty minutes” — and actually come back"]
          }
        ]
      },
      {
        t: "p",
        zh: "注意这四种里，**轻蔑**的破坏力最大。批评还可以解释成“我在意”，轻蔑传达的是“你不值得我尊重”。一旦这层评价形成，任何沟通技巧都很难挽回。",
        en: "Of the four, **contempt** does the most damage. Criticism can still be read as caring; contempt says “you're beneath my respect.” Once that verdict forms, no communication technique can repair it."
      },

      { t: "h", zh: "吵架的正确流程", en: "A better way to fight" },
      {
        kind: "flow",
        title: { zh: "五步，把冲突从爆炸拉回对话", en: "Five steps from explosion back to conversation" },
        steps: [
          {
            t: { zh: "先停，不追", en: "Stop first, don't chase" },
            d: { zh: "心跳加速、声音变大时，大脑的理性部分已经下线。这时候说出的每句话都在伤关系。约定一个暂停词，二十分钟后一定回来。", en: "Once your heart races and your voice rises, the reasoning brain is offline. Everything said then damages the relationship. Agree on a pause word — and always return in twenty minutes." }
          },
          {
            t: { zh: "只讲事实，不讲人格", en: "Facts, not verdicts" },
            d: { zh: "“这周你有三天十点后回家”是事实，“你根本不在乎这个家”是判决。前者能谈，后者只能吵。", en: "“You were home after ten on three days this week” is a fact. “You don't care about this family” is a verdict. The first can be discussed; the second can only be fought." }
          },
          {
            t: { zh: "说感受，不说指责", en: "Feelings, not accusations" },
            d: { zh: "“我一个人吃饭的时候很空”比“你从来不陪我”更难反驳，也更容易被听见。", en: "“Eating alone felt empty” is harder to argue with — and easier to hear — than “you never spend time with me.”" }
          },
          {
            t: { zh: "提一个具体请求", en: "Make one concrete request" },
            d: { zh: "“以后加班能不能提前发条消息”是可执行的；“你多关心我一点”不是。请求越具体，越容易被答应。", en: "“Could you text when you'll be late?” is doable. “Be more attentive” isn't. The more specific the ask, the likelier the yes." }
          },
          {
            t: { zh: "给台阶，也接台阶", en: "Offer an exit, and take theirs" },
            d: { zh: "对方递过来一句“饿不饿，我下面条”，就接住。很多和解不需要道歉，需要一个共同完成的小动作。", en: "When they offer “hungry? I'll make noodles,” take it. Many reconciliations don't need an apology — they need a small shared act." }
          }
        ]
      },

      { t: "h", zh: "婆媳问题，本质是边界问题", en: "In-law trouble is a boundary problem" },
      {
        t: "p",
        zh: "中国家庭的婆媳矛盾，常被描述成“两个女人天生不合”。社会学和家庭治疗的看法更冷静：传统家庭以**代际关系**为主轴（父母—儿子），现代小家庭以**夫妻关系**为主轴。当两种秩序撞在一起，谁说了算没有默认答案，冲突就出现了。",
        en: "Chinese in-law conflict is often framed as “two women who naturally clash.” Sociology and family therapy are cooler about it: traditional families run on the **generational axis** (parents and son), modern households run on the **couple axis**. When the two orders collide, there's no default answer to who decides — and that's the conflict."
      },
      {
        t: "p",
        zh: "所以问题的关键往往不在婆婆和儿媳，而在**中间那个人**。丈夫如果只会说“你让着点我妈”或“我妈就这脾气”，等于把边界问题丢给两个女人自己打。",
        en: "So the pivotal person usually isn't the mother or the wife — it's **the man in between**. A husband who only says “just humour my mother” or “that's how she is” hands the boundary problem to two women to fight over."
      },
      {
        t: "ul",
        zh: [
          "**小家庭的决策权**：住哪、钱怎么花、假期去哪，由夫妻两人定。父母可以建议，不能拍板",
          "**育儿的话语权**：可以请老人帮忙，但要事先说清“帮忙”不是“接管”。谁带，按谁的方案；有分歧，私下和伴侣统一后再谈",
          "**经济的边界**：给父母多少、借给亲戚多少，夫妻先有共识。单方面的大额支出，是婚姻的头号地雷",
          "**居住的距离**：同城不同屋，往往比同屋不同心更容易相处。一碗汤的距离不是冷漠，是可持续",
          "**丈夫要当“门前的人”**：坏消息由他去说，好话由妻子去说。这不是骗，是减少不必要的摩擦"
        ],
        en: [
          "**Household decisions** — where to live, how money is spent, where holidays go — belong to the couple. Parents advise; they don't decide.",
          "**Parenting authority** — help from grandparents is welcome, but say upfront that help isn't takeover. Whoever is on duty follows their own plan; disagreements get settled privately between partners first.",
          "**Money boundaries** — how much goes to parents, how much is lent to relatives: agree as a couple first. One-sided large spending is the number one landmine.",
          "**Distance** — same city, different flats is often easier than same flat, different minds. A one-bowl-of-soup distance isn't coldness; it's sustainable.",
          "**The husband stands at the door** — he delivers the bad news, she delivers the good. That's not deception; it's removing needless friction."
        ]
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "好婚姻就是不吵架。", en: "A good marriage never fights." },
            good: { zh: "不吵架的婚姻，常常是一方彻底沉默了。戈特曼的数据里，最危险的不是吵得多的夫妻，是连吵都懒得吵的。", en: "A marriage with no arguments often has one person fully silenced. In Gottman's data the most endangered couples aren't the loud ones — they're the ones who can't be bothered." }
          },
          {
            bad: { zh: "婆媳问题要靠儿媳妇多忍。", en: "In-law problems are solved by the daughter-in-law enduring more." },
            good: { zh: "忍耐能换一时安静，换不来长期尊重。清晰而礼貌的边界，比无限退让更能维持关系。", en: "Endurance buys quiet, not respect. Clear, polite boundaries sustain the relationship far better than endless yielding." }
          },
          {
            bad: { zh: "吵架必须分出对错。", en: "An argument must produce a winner." },
            good: { zh: "大部分家庭冲突没有对错，只有不同的需求和习惯。争对错会把“我们一起解决问题”变成“我跟你打一场”。", en: "Most family conflict has no right side — only different needs and habits. Fighting over who's right turns “us against the problem” into “me against you.”" }
          }
        ]
      },
      {
        t: "quote",
        zh: "婚姻里最贵的不是房子和彩礼，是那些没被说出口、却一直在记账的委屈。",
        en: "The most expensive thing in a marriage isn't the flat or the bride price. It's the grievances that were never spoken — and never stopped being tallied.",
        by: { zh: "— 家庭治疗里最常见的观察", en: "— The most common observation in family therapy" }
      },
      {
        t: "tip",
        zh: [
          "和伴侣约定一个暂停词，并说好多久后回来继续",
          "这周找三个具体的时刻，说出你欣赏对方的地方（要具体）",
          "把“你妈……”换成“咱们家这件事怎么安排”，试着说一次"
        ],
        en: [
          "Agree on a pause word with your partner — and a time to resume.",
          "Three times this week, name something specific you appreciate. Specific, not generic.",
          "Say “how should we handle this in our household” instead of “your mother” — once, and notice the difference."
        ]
      }
    ]
  });

  /* ============================== 12 · 人情世故 ============================== */
  add({
    id: "etiquette",
    num: "12",
    group: "heart",
    icon: "globe",
    read: 9,
    title: { zh: "人情世故不是圆滑，是分寸", en: "Social grace isn't slickness. It's proportion." },
    card: {
      zh: "会做人不是会讨好，是知道什么时候该近、什么时候该退、什么时候该把话说清楚。",
      en: "Getting along isn't about pleasing people. It's knowing when to step close, when to step back, and when to say it plainly."
    },
    kicker: { zh: "关系 · 人情与分寸", en: "Relationships · Grace and boundaries" },
    lede: {
      zh: "“人情世故”在中文里常带一点贬义，好像等于虚伪。但它原本讲的是另一件事：在一个靠关系运转的社会里，如何既不失礼，也不失自己。这一章给几条能直接用的话术和判断标准。",
      en: "“Social grace” in Chinese often carries a whiff of hypocrisy. But it originally meant something else: how to keep your manners and your self, in a society that runs on relationships. Here are a few lines and tests you can use immediately."
    },
    takeaway: {
      zh: "人情是对等的往来，不是单方面的付出；分寸的核心是：不越界，也不让人下不来台。",
      en: "Favour is a two-way ledger, never a one-way drain. Proportion means: don't overstep, and never leave someone cornered."
    },
    blocks: [
      { t: "h", zh: "人情到底是什么", en: "What “favour” actually is" },
      {
        t: "p",
        zh: "社会学者翟学伟把中国人的关系概括为“人缘、人情、人伦”三位一体，其中**人情是核心**：它像一种可以存取的社会货币，你帮我一次，我记着；我帮你一次，账就往回走一点。它不需要立刻结清，但必须大体平衡。",
        en: "The sociologist Zhai Xuewei describes Chinese relationships as a triad of affinity, favour and hierarchy — with **favour at the centre**. It works like a social currency you can deposit and withdraw: you help me, I remember; I help you, the balance moves back. It needn't settle immediately, but it must roughly balance."
      },
      {
        t: "p",
        zh: "理解这一点，很多困惑就解开了：为什么有人送了你很贵的礼，你会觉得有压力（因为账不平）；为什么一直你付出、对方不回应，关系会慢慢断（因为账一直是单向的）。",
        en: "That explains a lot: why an expensive gift creates pressure (the ledger is unbalanced), and why a relationship where only you give slowly dies (the ledger only runs one way)."
      },
      {
        t: "p",
        zh: "“面子”是同一套系统的另一半。面子不是虚荣，是**一个人在熟人圈子里的信用评级**。所以真正会做人的人，不会当众让人难堪——不是怕他，是知道那等于把他的信用清零，从此结下死账。",
        en: "“Face” is the other half of the system. It isn't vanity; it's **a person's credit rating inside their circle**. That's why genuinely graceful people never humiliate anyone publicly — not from fear, but because it zeroes out their credit and creates a debt that never clears."
      },

      { t: "h", zh: "五条通用分寸", en: "Five rules that work almost everywhere" },
      {
        t: "ul",
        zh: [
          "**不打听三件事**：收入、婚育计划、身体状况。别人主动说，你听着；不问，就是尊重",
          "**不评价两样东西**：别人的孩子、别人的伴侣。这两样是人的自我延伸，评价等于攻击",
          "**往来要对等**：随礼、请客、帮忙，量力而行，但别长期失衡。超出能力的慷慨，最后会变成怨气",
          "**拒绝要留台阶**：不说“不行”，说“这次恐怕不行，我可以帮你想想别的办法”",
          "**不占小便宜**：蹭一次车、少付一次钱，省下的几十块，抵掉的是别人对你的长期评价"
        ],
        en: [
          "**Don't ask about three things**: income, plans for marriage and children, health. If they volunteer it, listen. Not asking is the respect.",
          "**Don't comment on two things**: other people's children, other people's partners. Both are extensions of the self; commenting reads as attacking.",
          "**Keep the ledger level**: gifts, treats, favours — do what you can afford, but don't let it drift one way. Generosity beyond your means turns into resentment.",
          "**Leave an exit when you refuse**: not “no,” but “not this time, I'm afraid — can I help you think of another route?”",
          "**Don't take small advantages**: the free ride, the skipped payment. You save a few yuan and spend a chunk of how people see you."
        ]
      },

      { t: "h", zh: "怎么拒绝而不伤人", en: "How to refuse without wounding" },
      {
        kind: "flow",
        title: { zh: "拒绝的四步", en: "Refusing in four steps" },
        steps: [
          {
            t: { zh: "先接住对方的需求", en: "Acknowledge the need first" },
            d: { zh: "“这事儿确实急，我理解你为什么找我。”让对方知道你不是没听见，而是认真考虑过。", en: "“That does sound urgent — I see why you came to me.” They need to know you heard, not that you brushed them off." }
          },
          {
            t: { zh: "明确说不，不含糊", en: "Say no clearly, no fog" },
            d: { zh: "“这次我帮不上”比“我再看看”更善良。含糊的拒绝会让人抱着希望等，最后更难受。", en: "“I can't this time” is kinder than “let me see.” A vague no keeps them waiting on hope, which hurts more." }
          },
          {
            t: { zh: "给一个真实的原因，一句话就够", en: "Give one honest reason, one sentence" },
            d: { zh: "不用编长篇。真实的一句“我这月在赶项目，抽不出整块时间”，比十个借口可信。", en: "No need for an essay. One true sentence — “I'm heads-down on a deadline this month” — beats ten excuses." }
          },
          {
            t: { zh: "提供替代方案", en: "Offer an alternative" },
            d: { zh: "帮不了钱，可以帮出主意；帮不了忙，可以介绍人。拒绝的是这件事，不是这个人。", en: "Can't lend money? Offer advice. Can't do the task? Introduce someone. You're refusing the request, not the person." }
          }
        ]
      },
      {
        t: "table",
        head: { zh: ["常见场景", "可以这么说"], en: ["Common situation", "What you can say"] },
        rows: [
          { zh: ["亲戚借钱，你不想借", "“这笔钱我确实动不了，都是定期。要是周转不开，我帮你看看有没有别的渠道？”"], en: ["A relative asks for a loan you don't want to give", "“That money is genuinely tied up. If you're short, can I help you look at other options?”"] },
          { zh: ["被催婚催生", "“我知道你们是关心我。这事儿我有安排，到时候一定第一个告诉你们。”"], en: ["Being pushed to marry or have kids", "“I know it comes from caring. I've got a plan — you'll be the first to know when there's news.”"] },
          { zh: ["同事让你帮忙背责任", "“这部分我可以配合，但责任得分清楚，我们写下来对一下。”"], en: ["A colleague wants you to share blame", "“I can support that part, but let's be clear on ownership — let's write it down.”"] },
          { zh: ["朋友让你免费做专业活", "“朋友之间我更不想糊弄你。正经做我得按流程报价，简单问几句随时都行。”"], en: ["A friend wants your professional work for free", "“With friends I'd rather not do a half job. Proper work goes through my normal quote; quick questions, anytime.”"] },
          { zh: ["饭局上被劝酒", "“我确实不能喝，医生交代过。我以茶代酒，这杯我干了。”"], en: ["Being pressed to drink at a dinner", "“I genuinely can't — doctor's orders. I'll take this one in tea and finish it.”"] }
        ]
      },
      {
        t: "p",
        zh: "有一个简单的判断标准：**如果一段关系只能靠你不断违约自己来维持，那它本来就不是关系，是消耗。** 真正的分寸感，是既不让人难堪，也不让自己委屈——这两件事可以同时做到，只是需要练习。",
        en: "A simple test: **if a relationship only survives by you repeatedly breaking your own agreements, it isn't a relationship — it's a drain.** Real proportion means neither humiliating them nor abandoning yourself. Both are possible; it just takes practice."
      },
      {
        t: "myth",
        items: [
          {
            bad: { zh: "人情世故就是会说漂亮话。", en: "Social grace means saying pretty things." },
            good: { zh: "漂亮话能赢一次饭局，赢不了十年。真正被记住的，是你在别人难的时候具体做了什么。", en: "Pretty words win a dinner, not a decade. What people remember is what you concretely did when they were in trouble." }
          },
          {
            bad: { zh: "关系要靠频繁联系维持。", en: "Relationships need constant contact." },
            good: { zh: "低质量的频繁问候，不如一年一次真正帮上忙。关系靠“关键时刻在场”，不靠聊天记录长度。", en: "A year of empty greetings is worth less than one moment of real help. Relationships run on being present at the crux, not on message history length." }
          },
          {
            bad: { zh: "老实人吃亏。", en: "Honest people finish last." },
            good: { zh: "短期看，会来事的人占便宜；拉长到十年，被信任的人拿到的机会更多——因为重要的事只会交给放心的人。", en: "In the short run, the smooth operator wins. Over ten years, the trusted person gets more opportunities — because important things only go to people you can relax around." }
          }
        ]
      },
      {
        t: "tip",
        zh: [
          "回想最近一次让你不舒服的请求，用四步法写一遍拒绝的话",
          "这周主动帮一个人一件小事，不图回报，也不提",
          "把“我再看看”从你的口头禅里删掉，换成明确的答复"
        ],
        en: [
          "Recall the last request that made you uncomfortable, and write the four-step refusal out.",
          "Help one person with one small thing this week — no return expected, no mention afterwards.",
          "Delete “let me see” from your vocabulary. Replace it with a clear answer."
        ]
      }
    ]
  });
})();
