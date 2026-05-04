// Japan Family Vacation 2026 — Full Itinerary Data
// Family: Achin, Snigdha, Anagha (child), Sharanya (child) · Pure Vegetarian
// Tokyo Apt GPS: 35.7480°N, 139.8570°E (Aoto Station, Katsushika)

const TRIP_DATA = {
  meta: {
    title: "Japan Family Vacation 2026",
    dates: "18 May – 8 Jun 2026",
    pax: "4 (2 Adults + 2 Kids)",
    diet: "Pure Vegetarian",
    pnr: "8GXZOP",
    flightBooking: "IN1B1774591691421",
    tokyoApt: { name: "AO103 Tokyo Stay Spacious Apt", address: "Shamrock 103, Katsushika 125-0062", confirmation: "6802.586.981", pin: "8637" }
  },

  // Starting location for map chains, per region
  regionStart: {
    tokyo:   "Aoto Station, Katsushika, Tokyo",
    kyoto:   "Kyoto Station, Kyoto",
    osaka:   "Namba Station, Osaka",
    transit: "previous location"
  },

  days: [

    // ─── DAY 0 — DEPARTURE ───────────────────────────────────────────────
    {
      day: 0, date: "2026-05-18", dayOfWeek: "Mon",
      city: "Pune → Delhi → Tokyo", theme: "Departure Day ✈", region: "transit", confirmed: true,
      startLocation: "Pune International Airport",
      activities: [
        { name: "Depart PNQ: Flight NH6936", time: "08:45", cost: "Confirmed",
          notes: "Pune Airport Terminal 1. Check in 2 hrs early. 2 checked bags per person.", location: "Indira Gandhi International Airport T3 Delhi", ticket: "No transit needed" },
        { name: "DEL → HND: Flight NH838", time: "18:00 → 05:35+1", cost: "Confirmed",
          notes: "Seat 21K (Achin). 8h 35min. Vegetarian meals pre-requested on ticket.", location: "Haneda Airport Terminal 2 Tokyo", ticket: "No transit needed" }
      ],
      food: [],
      shopping: [],
      facts: ["Tokyo Haneda (HND) is one of the world's most punctual airports — ANA has a 95%+ on-time rate."],
      hacks: ["Carry kids' snacks from Pune — Japanese convenience stores sell good snacks but familiar food helps for the flight.", "Charge all devices at the gate lounge — Japan adapters are Type A (same as India but flat pins)."]
    },

    // ─── DAY 1 — ARRIVAL TOKYO ───────────────────────────────────────────
    {
      day: 1, date: "2026-05-19", dayOfWeek: "Tue",
      city: "Tokyo (Arrive HND)", theme: "Arrival & Settle In", region: "tokyo", confirmed: true,
      startLocation: "Haneda Airport Terminal 2 Tokyo",
      activities: [
        { name: "Immigration + Arrivals", time: "05:35–07:00", cost: "Free",
          notes: "Fill immigration card on plane. Biometric fingerprint scan at entry. Pick up pre-ordered pocket WiFi / SIM at arrivals hall (HND T2 has collection counters open from 6am). Change ¥20,000 at airport for first 2 days.",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Not yet needed" },
        { name: "Buy Suica IC Cards + Store Bags", time: "07:00–07:30", cost: "¥2,000 deposit each",
          notes: "Buy at HND station ticket machine → tap '英語' (English). Load ¥3,000 per card. These cards pay for all trains, buses, and convenience stores. Store bags in HND coin lockers (¥400–600) — check-in isn't until 17:00.",
          location: "Haneda Airport Station Tokyo", ticket: "Just buying the Suica now" },
        { name: "Relax at HND or Nearby Café", time: "07:30–16:00", cost: "~¥2,000",
          notes: "HND International Terminal food court has good vegetarian options. Or take Keikyu to Keihin-Kawasaki for a gentle first morning. Rest — you've been flying all night!",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Suica IC Card · Keikyu Line ¥310" },
        { name: "Route to AO103 Apt, Aoto", time: "16:00", cost: "~¥700/person",
          notes: "Keikyu Line → Shinagawa (¥410) → JR Yamanote → Nippori → Keisei Line → Aoto (~65 min). OR taxi ¥5,000–6,000 for heavy luggage. Ask driver 'Aoto station, please' (アオト駅).",
          location: "Aoto Station Katsushika Tokyo", ticket: "Suica IC Card · Keikyu + JR Yamanote + Keisei" },
        { name: "Check in AO103 Apt", time: "From 17:00", cost: "Confirmed ₹63,645",
          notes: "Conf: 6802.586.981 | PIN: 8637. Full kitchen, washing machine, A/C, hot tub, ground floor, direct bus to Disneyland and Haneda. Pick up keys per booking instructions.",
          location: "Aoto Station Katsushika Tokyo", ticket: "Walk from Aoto Station" }
      ],
      food: [
        { name: "Onigiri (rice balls)", where: "Any 7-Eleven / FamilyMart", price: "¥120–180", notes: "Tuna-free options: umeboshi (plum), konbu (seaweed), cheese. Look for 梅 or 昆布." },
        { name: "Vegetable Curry", where: "Airport food court", price: "~¥900", notes: "Japanese curry is mild and usually has a vegetarian option. Ask: 肉なし (niku nashi = no meat)." }
      ],
      shopping: [
        { name: "Suica Card + SIM", where: "Haneda Airport Station / arrivals", price: "¥2,000 deposit", notes: "Most important purchase of the trip — covers almost all transport and konbini shopping." }
      ],
      facts: ["Aoto station is on the Keisei Line — the same line that connects to Narita Airport and Asakusa.","Japan's convenience stores (konbini) are genuinely excellent — fresh food, ATMs, printing, and friendly staff."],
      hacks: ["💰 Mobile Suica via Apple/Google Wallet means no deposit and you can top up from your phone.", "💰 7-Eleven ATMs accept all foreign Visa/Mastercard cards — withdraw large amounts to avoid multiple fees.", "🎉 Kids find the konbini drink section magical — budget ¥300 for an 'explore the drinks' moment on day 1."]
    },

    // ─── DAY 2 — ASAKUSA + YANAKA ────────────────────────────────────────
    {
      day: 2, date: "2026-05-20", dayOfWeek: "Wed",
      city: "Tokyo", theme: "Asakusa + Yanaka Old Town", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Senso-ji Temple, Asakusa", time: "08:00", cost: "Free",
          notes: "Tokyo's oldest temple (628 AD). Giant red Kaminarimon lantern gate. Nakamise shopping street opens 10am — ningyo-yaki (fish-shaped cake filled with bean paste) ¥150. Beautiful incense burner: waft smoke over the kids for good luck!",
          location: "Sensoji Temple Asakusa Tokyo", ticket: "Suica · Keisei Line → Aoto → Asakusa (~25 min, ¥240)" },
        { name: "Nakamise Shopping Street", time: "10:00", cost: "~¥500–1,000 snacks",
          notes: "250m arcade of traditional stalls. Get: ningyo-yaki ¥150, agemunji (fried dough with sesame) ¥200, kaminari-okoshi (rice cracker) ¥300. All vegetarian! Don't buy 'ninja swords' — kids will fence each other all trip.",
          location: "Nakamise Shopping Street Asakusa Tokyo", ticket: "Walk from Senso-ji" },
        { name: "Yanaka Ginza Old Town", time: "12:00", cost: "Free",
          notes: "Tokyo's last pre-war neighbourhood. Shotengai with resident cats, pottery studios, old-fashioned candy shops. Melon-pan ¥200. Walk: 10 min from Nippori station. The cemetery is actually lovely — peaceful stroll under old trees.",
          location: "Yanaka Ginza Tokyo", ticket: "Suica · Walk from Nippori (Keisei Line, ¥150)" },
        { name: "Ueno Park + Shinobazu Pond", time: "14:30", cost: "Free",
          notes: "Lotus-covered pond, swan boats ¥700/30 min. Tokyo National Museum (kids: mummy room!) ¥630 adult. Ameyoko street market for cheap snacks and goods.",
          location: "Ueno Park Tokyo", ticket: "Walk 7 min from Yanaka" }
      ],
      food: [
        { name: "Ningyo-yaki", where: "Nakamise Street, Asakusa", price: "¥150 each", notes: "Bean-paste filled rice cakes shaped like Kaminarimon lanterns. Freshly made, warm — kids love them." },
        { name: "Melon Pan", where: "Yanaka Ginza stalls", price: "¥200", notes: "Sweet bread with a crispy sugar crust. Best eaten warm. Classic Tokyo snack." },
        { name: "Vegetable ramen", where: "Soranoiro near Asakusa", price: "~¥1,200", notes: "One of Tokyo's few dedicated veg ramen spots. Try the tomato veg ramen." }
      ],
      shopping: [
        { name: "Traditional crafts / tenugui", where: "Nakamise / Yanaka shops", price: "¥500–2,000", notes: "Tenugui (thin Japanese towel/cloth) make great gifts and are lightweight." },
        { name: "Agemunji rice crackers", where: "Nakamise Asakusa", price: "¥300", notes: "Traditional Tokyo sweet — bring some back for Pune!" }
      ],
      facts: ["Senso-ji receives over 30 million visitors a year — more than any other religious site in Japan.", "Yanaka survived the 1923 earthquake and WWII bombing raids — making it a genuinely pre-war neighbourhood, unlike the rest of Tokyo."],
      hacks: ["💰 Visit Senso-ji before 8am — completely empty, zero charge. Temple is open 24/7.", "🎉 Let kids pull an omikuji (fortune paper) from the box at Senso-ji — ¥100 and absolutely thrilling.","💰 Ueno Park is free and has multiple museums — pick one if it rains."]
    },

    // ─── DAY 3 — DISNEYLAND ──────────────────────────────────────────────
    {
      day: 3, date: "2026-05-21", dayOfWeek: "Thu",
      city: "Tokyo", theme: "Tokyo Disneyland — Full Day 🎡", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Tokyo Disneyland — Full Day", time: "08:00–21:00", cost: "¥9,400 adult / ¥5,800 child (4–11)",
          notes: "Fantasyland (kids!): Peter Pan's Flight, Dumbo, Pooh, Carousel. Tomorrowland: Space Mountain, Buzz Lightyear. Big Thunder Mountain (kids' favourite!). Haunted Mansion — Achin & Snigdha ride while kids watch. Electrical Parade at dusk — perfect evening ending. 31 Ice Cream ¥31 scoops on your birthday number! Vegetarian: fries, corn, fruit cups, popcorn carts everywhere.",
          location: "Tokyo Disneyland Urayasu Chiba", officialUrl: "https://www.tokyodisneyresort.jp/en/tdl.html",
          ticket: "Suica + JR Keiyo Line · Nippori → Maihama (25 min, ¥420) OR direct bus from near apt" }
      ],
      food: [
        { name: "Popcorn (seasonal flavours!)", where: "Popcorn carts around park", price: "¥400–500", notes: "Caramel, curry, milk tea flavours. Vegetarian and amazing! Get a bucket." },
        { name: "Gyoza Man (veg version)", where: "Fantasyland counter", price: "¥600", notes: "Ask specifically for vegetable version at the Fantasyland counter near Cinderella Castle." },
        { name: "Soft serve ice cream", where: "Various carts", price: "¥300–500", notes: "Seasonal flavours — May often has melon or strawberry." }
      ],
      shopping: [
        { name: "Disney character goods", where: "World Bazaar entrance", price: "¥500–3,000", notes: "Buy on the WAY OUT at World Bazaar (entrance area) — same selection, you'll have carried it all day otherwise." },
        { name: "Mickey popcorn bucket", where: "Popcorn carts", price: "¥2,400", notes: "Reusable bucket with refills ¥400. Worth it for a long day." }
      ],
      facts: ["Tokyo Disneyland is the most visited theme park in Asia and the second most visited in the world.", "The Japanese attention to detail extends to Disney — cast members can often speak English and the park has the lowest litter rate of any Disney resort."],
      hacks: ["💰 PRE-BOOK tickets at tokyodisneyresort.jp (60-day window). Never buy at the gate — no physical booths.", "🎉 Use the My Disney Experience app to check wait times. Head to Space Mountain or Big Thunder Mountain first — queues double by 10am.", "💰 Pack your own water bottle — free water refills at all restaurants inside.", "🎉 The nighttime Electrical Parade is unmissable for kids — stake out a spot 45 min before it starts."]
    },

    // ─── DAY 4 — TEAMLAB + ODAIBA ────────────────────────────────────────
    {
      day: 4, date: "2026-05-22", dayOfWeek: "Fri",
      city: "Tokyo", theme: "teamLab Planets + Odaiba", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        {
          name: 'LEGOLAND Discovery Center Tokyo',
          time: 'Morning (2–3 hours)',
          cost: '¥2,300 per person',
          notes: 'Indoor LEGO-themed attraction ideal for children. Adults must be with a child. Features rides, 4D cinema, Miniland, and building areas. Book online for discount.',
          location: 'Decks Tokyo Beach, Odaiba',
          ticket: 'Book online in advance for priority entry.',
        },
        { name: "teamLab Planets, Toyosu", time: "09:00 (PRE-BOOKED SLOT)", cost: "¥3,200 adult / ¥800 child (4–12)",
          notes: "6 immersive digital art rooms. Knee-deep koi pond (kids FREAK OUT, in the best way!). Infinite Crystal Universe. Floating Flower Garden — walk under 10,000 hanging orchids. Roll trousers to knees. Go barefoot throughout. Allow 90 min.",
          location: "teamLab Planets Toyosu Tokyo", officialUrl: "https://www.teamlab.art/e/planets/",
          ticket: "Suica · Yurakucho Line → Toyosu (¥240)" },
        { name: "Life-size Gundam Statue, Odaiba", time: "12:00", cost: "Free",
          notes: "18m tall, it MOVES. Incredible photo spot at DiverCity mall plaza. Built for the 40th anniversary of the Gundam franchise. Even non-fans are stunned.",
          location: "DiverCity Tokyo Plaza Odaiba", ticket: "Suica · Yurikamome Line from Shimbashi → Odaiba-kaihin-koen (¥320)" },
        { name: "Odaiba Beach + Rainbow Bridge", time: "14:00", cost: "Free",
          notes: "Artificial beach with stunning views of Rainbow Bridge and the Tokyo skyline. Best sunset spot in the city. Venus Fort shopping mall nearby.",
          location: "Odaiba Seaside Park Tokyo", ticket: "Walk from DiverCity (~10 min)" },
        { name: "Palette Town / Joypolis", time: "16:00", cost: "¥500–2,000",
          notes: "Sega Joypolis indoor theme park for kids. Or explore Aqua City Odaiba mall and its rooftop with Statue of Liberty replica and bridge views.",
          location: "Aqua City Odaiba Tokyo", ticket: "Walk in Odaiba area" }
      ],
      food: [
        { name: "Veggie sushi set", where: "Conveyor belt sushi near Toyosu market", price: "¥800–1,200", notes: "Kappa (cucumber), avocado, pickled plum rolls are all vegetarian. Say 'vegetarian' (ベジタリアン) to staff." },
        { name: "Crepes", where: "Odaiba mall food court", price: "¥600–800", notes: "Strawberry + cream crepes are always vegetarian and a hit with kids." }
      ],
      shopping: [
        { name: "Unique digital art goods", where: "teamLab shop (exit)", price: "¥1,000–3,000", notes: "Beautiful art prints, notebooks, scarves in the teamLab aesthetic." }
      ],
      facts: ["teamLab Planets has welcomed over 3 million visitors since opening in 2018.", "Odaiba was built on artificial islands in Tokyo Bay — the landfill used to fortify Tokyo against American warships in the 1850s."],
      hacks: ["💰 Book teamLab via teamlabplanets.dmm.com directly — cheaper than Klook by ~¥200. Book 9am slot to beat crowds.", "🎉 Wear dark-coloured clothing for teamLab — the art shows better against dark outfits.", "💰 Yurikamome Line day pass ¥820 covers the whole Odaiba loop — worth it if spending the afternoon there."]
    },

    // ─── DAY 5 — MEIJI + HARAJUKU + SHIBUYA ─────────────────────────────
    {
      day: 5, date: "2026-05-23", dayOfWeek: "Sat",
      city: "Tokyo", theme: "Meiji Shrine + Harajuku + Shibuya", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Meiji Shrine", time: "08:00", cost: "Free",
          notes: "Sacred forested path through 100,000 trees — astonishing quiet in the middle of 14m-person Tokyo. Arrive before 8am. Writing a wish on an ema (wooden plaque) is ¥600 — kids love it. The sake barrel display near the entrance is iconic.",
          location: "Meiji Jingu Shrine Harajuku Tokyo", officialUrl: "https://www.meijijingu.or.jp/en/",
          ticket: "Suica · JR Yamanote → Harajuku Stn (¥200 from Nippori)" },
        { name: "Harajuku Takeshita Street", time: "10:30", cost: "Free to browse",
          notes: "Tokyo's most bonkers fashion street. Crepes ¥400–600 (strawberry cream is always vegetarian). Rainbow cotton candy ¥600. Pastel colour everything. Kids will want everything — set a budget before entering!",
          location: "Takeshita Street Harajuku Tokyo", ticket: "3-min walk from Harajuku Stn" },
        { name: "Omotesando Boulevard", time: "11:30", cost: "Window shopping",
          notes: "Tokyo's Champs-Élysées. High-end boutiques (Louis Vuitton, Prada) in architecturally stunning buildings. Free to walk and admire. Great Café for lunch.",
          location: "Omotesando Boulevard Tokyo", ticket: "5-min walk from Takeshita" },
        { name: "Shibuya Scramble Crossing", time: "14:00", cost: "Free",
          notes: "The most famous crossing in the world — up to 3,000 people cross from all directions simultaneously. Stand and wait for the light to change. Best viewed from Starbucks on the 2nd floor (arrive early for window seat). Pokémon Center Shibuya — free entry, largest Pokémon merch selection.",
          location: "Shibuya Scramble Crossing Tokyo", ticket: "Suica · JR Yamanote → Shibuya (¥160)" },
        { name: "Shibuya Sky Observatory", time: "17:30 (sunset!)", cost: "¥2,000 adult / ¥1,200 child",
          notes: "Japan's highest open-air rooftop deck. 360° views at golden hour — absolutely stunning. Buy tickets online in advance. Bring a light jacket — it's windy up top!",
          location: "Shibuya Sky Observatory Tokyo", officialUrl: "https://www.shibuya-scramble-square.com/sky/",
          ticket: "Walk from Shibuya Station" }
      ],
      food: [
        { name: "Harajuku crepes", where: "Any crepe stand on Takeshita St", price: "¥400–600", notes: "Strawberry + cream, matcha + red bean, banana + Nutella. All have veg options." },
        { name: "Komeda Coffee breakfast", where: "Near Harajuku station", price: "~¥700", notes: "Free thick toast with any morning drink before 11am. Real filling breakfast hack." },
        { name: "Shibuya food basement (depachika)", where: "Shibuya Hikarie B2F", price: "¥500–1,500", notes: "Incredible prepared foods. Get onigiri sets, veggie bento, matcha sweets before the observatory." }
      ],
      shopping: [
        { name: "Pokémon merchandise", where: "Pokémon Center Shibuya (free entry)", price: "¥500–5,000", notes: "Three floors of Pokémon everything. Kids will go berserk — set a budget and browse freely." },
        { name: "Pastel fashion items", where: "Takeshita Street boutiques", price: "¥1,000–3,000", notes: "Headbands, accessories, quirky socks — inexpensive and very Tokyo." }
      ],
      facts: ["Shibuya Scramble has over 1 billion crossings per year — more than any intersection on Earth.", "The trees in Meiji Shrine forest were donated by people from all 47 Japanese prefectures when the shrine was built in 1920."],
      hacks: ["💰 Saturday Scramble is busiest around 6–8pm — go at 2pm for photos, return at sunset for Sky.", "🎉 The Starbucks above Scramble Crossing: arrive 30 min before your preferred time to get a window seat.", "💰 Suica card pays for scramble-adjacent vending machines — Japan's vending machines are an experience in themselves!"]
    },

    // ─── DAY 6 — AKIHABARA + RENKOJI ─────────────────────────────────────
    {
      day: 6, date: "2026-05-24", dayOfWeek: "Sun",
      city: "Tokyo", theme: "Akihabara + Renkoji Temple", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Akihabara Electric Town", time: "10:00", cost: "Free to browse",
          notes: "Tokyo's legendary electronics and anime district. Multi-floor retro game stores, anime figurine shops, manga cafés. Pokémon Center DX (7th floor, Yodobashi AKB): free entry, largest in Japan. Radio Kaikan building has 9 floors of collectibles. Gacha machines on every corner — ¥200–500 per try.",
          location: "Akihabara Electric Town Tokyo", ticket: "Suica · JR Yamanote → Akihabara (¥200 from Aoto via Nippori)" },
        { name: "Don Quijote, Akihabara", time: "12:00", cost: "Browsing free",
          notes: "6-floor discount mega-store open 24/7. Cheap snacks, Japanese cosmetics, electronics, costume items, souvenirs at below-retail prices. Great for picking up omiyage (gifts) for Pune.",
          location: "Don Quijote Akihabara Tokyo", ticket: "3-min walk from JR Akihabara" },
        { name: "Renkoji Temple (Netaji Bose Memorial)", time: "15:00", cost: "Free",
          notes: "A uniquely moving stop — the ashes of Netaji Subhas Chandra Bose are interred here since 1945. A small, serene temple that represents the deep India–Japan friendship during WWII. 10-min walk from Higashi-Koenji station. Few tourists.",
          location: "Renkoji Temple Koenji Tokyo", ticket: "Suica · Tokyo Metro Marunouchi Line → Higashi-Koenji (¥200)" },
        { name: "Indian Dinner at AO103 Apt Kitchen", time: "Evening", cost: "¥1,500 groceries",
          notes: "Use the full kitchen. Dal, sabzi, rice — saves ₹2,000+ vs restaurant. Pick up groceries at Seiyu supermarket near Aoto station (5 min walk). Also restocking day: do laundry in the apt washing machine.",
          location: "Aoto Station Katsushika Tokyo", ticket: "Suica · Return to Aoto" }
      ],
      food: [
        { name: "Maid café experience", where: "@home café, Akihabara", price: "¥1,500–2,000 cover", notes: "Unique Tokyo experience — costumed maids draw on your omurice (omelette rice). Vegetarian option available." },
        { name: "Don Quijote instant food", where: "Don Quijote Akihabara", price: "¥200–400", notes: "Japanese instant noodles, rice crackers, exotic Kit Kats for kids — cheap and fun haul." }
      ],
      shopping: [
        { name: "Gacha machine capsule toys", where: "Akihabara (everywhere!)", price: "¥200–500 per try", notes: "Budget ¥1,500–2,000 per child. Pokémon, Sanrio, Studio Ghibli gacha available." },
        { name: "Souvenir snacks", where: "Don Quijote", price: "¥200–500/pack", notes: "Pocky, Tokyo Banana, Royce chocolate, Matcha Kit Kat — good value vs airport." }
      ],
      facts: ["Renkoji Temple's priest performed prayers for Netaji's spirit — the India-Japan connection here dates to 1945.", "Akihabara's name means 'Field of Autumn Leaves' — it had nothing to do with electronics until post-WWII black market radios transformed it."],
      hacks: ["💰 Buy souvenirs at Don Quijote — cheaper than Narita airport and better selection.", "🎉 Gacha machines: research what series are in stock at 'gacha gacha no mise' stores for more variety.", "💰 Supermarket after 7pm: look for orange ½価 (hanprice) stickers for 50% off premium items."]
    },

    // ─── DAY 7 — NIKKO ───────────────────────────────────────────────────
    {
      day: 7, date: "2026-05-25", dayOfWeek: "Mon",
      city: "Nikko Day Trip", theme: "Nikko UNESCO — Full Day ⛩", region: "tokyo", confirmed: false,
      startLocation: "Asakusa Station Tokyo",
      activities: [
        { name: "Tobu Line: Asakusa → Nikko", time: "Depart 07:30", cost: "Tobu 2-day pass ¥2,720 adult / ¥1,360 child",
          notes: "Buy Tobu Nikko 2-Day Pass at Asakusa station. Covers train AND bus in Nikko. Express Revaty train is comfortable (1h 50min). Buy from the Tobu Sightseeing Service Center at Asakusa station.",
          location: "Nikko Station Tochigi", ticket: "Tobu Nikko 2-Day Pass (includes bus to all sites)" },
        { name: "Toshogu Shrine (UNESCO)", time: "09:30", cost: "¥1,300 adult / ¥450 child",
          notes: "Japan's most ornate shrine — gold leaf, intricate carvings, 5,000 artworks. Famous 3 Wise Monkeys (Mizaru, Kikazaru, Iwazaru). Sleeping Cat (Nemuri-neko) carving. Allow 90 min to explore properly.",
          location: "Nikko Toshogu Shrine Tochigi", officialUrl: "https://www.nikko-toshogu.jp/english/",
          ticket: "Bus from Nikko Stn (5 min, included in 2-Day Pass)" },
        { name: "Shinkyo Sacred Bridge", time: "11:30", cost: "Free to view / ¥300 to cross",
          notes: "Bright vermilion lacquered bridge over the Daiya River. One of Japan's three most beautiful bridges. Cross if you want the best photo angle.",
          location: "Shinkyo Sacred Bridge Nikko Tochigi", ticket: "3-min walk from Toshogu bus stop" },
        { name: "Kegon Falls", time: "12:30", cost: "¥570 elevator to base",
          notes: "97m waterfall — Japan's most famous. Take the elevator for the base viewpoint — stunning full view. May means snowmelt is at its peak — maximum water flow!",
          location: "Kegon Falls Nikko Tochigi", ticket: "Bus from Nikko Stn → Chuzenji-ko (30 min, included in Pass)" },
        { name: "Lake Chuzenji", time: "14:00", cost: "Free / Boat ¥1,000",
          notes: "Stunning mountain lake at 1,269m altitude. Boat rides available. Walk along the shore for calm mountain views. Try black-sesame soft serve at the lake stalls ¥350.",
          location: "Lake Chuzenji Nikko Tochigi", ticket: "Walk from Kegon Falls (2 min)" },
        { name: "Return to Tokyo", time: "16:00", cost: "Included in Pass",
          notes: "⚠️ LAST NIGHT at AO103 Apt! Pack bags tonight. Return by 19:00, cook quick dinner, prep for checkout tomorrow at 10am.",
          location: "Asakusa Station Tokyo", ticket: "Tobu Line: Nikko → Asakusa" }
      ],
      food: [
        { name: "Yuba (tofu skin) cuisine", where: "Nikko restaurants near shrine", price: "¥1,200–1,800 set", notes: "Nikko is famous for yuba (tofu skin). Veg tofu skin tempura set is delicious and easy to find." },
        { name: "Black sesame soft serve", where: "Lake Chuzenji stalls", price: "¥350", notes: "Rich, nutty flavour. Also try the frozen lemon from stalls near the shrine." }
      ],
      shopping: [
        { name: "Nikko's miso and pickled veg", where: "Souvenir shops near Toshogu", price: "¥500–1,500", notes: "Great quality regional miso paste and pickled mountain vegetables. Lightweight to carry." }
      ],
      facts: ["Toshogu took 15,000 craftsmen over 2 years to build in 1636.", "Nikko has a saying: 'Never say kekkō (magnificent) until you've seen Nikkō' — it's so beautiful the word became the slogan for the entire region."],
      hacks: ["💰 Tobu 2-Day Pass is the best value — covers train AND all buses. Buy at Asakusa station before boarding.", "🎉 Pack lunch from AO103 kitchen — restaurants near Toshogu are pricey. A good bento saves ¥2,000.", "⚠️ Pack bags tonight — checkout tomorrow is 10am!"]
    },

    // ─── DAY 8 — TRANSIT: TOKYO → HAKONE → KYOTO ─────────────────────────
    {
      day: 8, date: "2026-05-26", dayOfWeek: "Tue",
      city: "Tokyo → Hakone → Kyoto", theme: "Checkout + Hakone Stopover → Arrive Kyoto", region: "transit", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Check out AO103 Apt (10:00)", time: "10:00", cost: "",
          notes: "Leave apartment clean, return key per booking instructions. Leave bags at Shinjuku Station coin lockers (¥500) — easier to access for Romancecar.",
          location: "Shinjuku Station Tokyo", ticket: "Suica · Keisei → Nippori → JR Yamanote → Shinjuku" },
        { name: "Odakyu Romancecar: Shinjuku → Hakone-Yumoto", time: "~11:00", cost: "Hakone Free Pass ¥7,100 adult / ¥3,550 child + ¥1,200 Romancecar surcharge",
          notes: "Scenic, comfortable express train with panoramic windows. Buy Hakone Free Pass at Shinjuku Odakyu counter (covers all transport in Hakone). Romancecar surcharge ¥1,200 adult — book window seats!",
          location: "Hakone-Yumoto Station Kanagawa", officialUrl: "https://www.odakyu.jp/english/",
          ticket: "Hakone Free Pass + Romancecar surcharge" },
        { name: "Hakone Ropeway over Owakudani", time: "13:00", cost: "Included in Free Pass",
          notes: "Float over active volcanic vents! Sulphur steam rising below. Buy kuro-tamago (black volcanic eggs, hardboiled in the vents) ¥600/5 eggs. Said to add 7 years to your life per egg. Kids love it!",
          location: "Owakudani Ropeway Station Hakone", ticket: "Hakone Tozan Bus → Sounzan → Ropeway (all included in Pass)" },
        { name: "Lake Ashi Pirate Boat", time: "14:30", cost: "Included in Free Pass",
          notes: "30-min scenic cruise on a replica pirate ship across the lake. Mt. Fuji visible in good weather (check tenki.jp/en). Great photo ops! Boats run every 30 min.",
          location: "Hakone-machi Port Lake Ashi", ticket: "Hakone Tozan Bus from Owakudani → Togendai Ferry Terminal" },
        { name: "Odawara → Shinkansen → Kyoto", time: "~17:00", cost: "JR Pass covers Hikari",
          notes: "Bus from Moto-Hakone-ko → Odawara Station (~50 min, included in Pass). Hikari Shinkansen Odawara → Kyoto (~90 min). Arrive Kyoto ~19:30. Check in hotel.",
          location: "Kyoto Station Kyoto", ticket: "JR Pass: Odawara → Kyoto on Hikari Shinkansen" }
      ],
      food: [
        { name: "Kuro-tamago (black volcanic eggs)", where: "Owakudani ropeway stop", price: "¥600/5 eggs", notes: "Hardboiled in volcanic sulphur springs. Jet black shell, normal inside. Each adds 7 years to life according to legend!" },
        { name: "Ekiben (train bento)", where: "Odawara or Shinkansen platform shops", price: "¥1,200–1,500", notes: "Traditional train bento box. Veg options usually include tofu, pickles, rice, vegetable tempura sets." }
      ],
      shopping: [],
      facts: ["Owakudani ('Great Boiling Valley') was created by a volcanic explosion 3,000 years ago.", "The Tokaido Shinkansen line carries 450,000 passengers every day — more than any high-speed rail line in the world."],
      hacks: ["💰 Hakone Free Pass is excellent value — covers ropeway, boat, and ALL buses. Buy at Shinjuku Odakyu stn.", "🎉 Mt. Fuji visibility: check tenki.jp/en the night before — mornings are clearest.", "💰 Store bags at Shinjuku coin lockers (¥500) rather than Hakone-Yumoto (¥600) — easier for the Romancecar."]
    },

    // ─── DAY 9 — ARASHIYAMA ──────────────────────────────────────────────
    {
      day: 9, date: "2026-05-27", dayOfWeek: "Wed",
      city: "Kyoto", theme: "Arashiyama Full Day 🎋", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        {
          name: 'Nintendo Museum',
          time: 'Afternoon',
          cost: '¥3,300 per person',
          notes: "Nintendo's official museum in Uji, Kyoto. Interactive exhibits celebrating Nintendo's gaming history. Must book tickets in advance via Nintendo website.",
          location: 'Uji City, Kyoto (30 min from Kyoto Station via JR Nara Line)',
          ticket: 'Book well in advance at museum.nintendo.com — sells out weeks ahead.',
        },
        { name: "Arashiyama Bamboo Grove (EARLY!)", time: "06:00", cost: "FREE — Always open",
          notes: "Go at 6am — completely deserted, sunlight filtering through 30m bamboo stalks. One of the most photogenic places in Japan. By 8:30am it's crowded. It's free 24/7 — no gate, no ticket.",
          location: "Arashiyama Bamboo Grove Sagano Kyoto", ticket: "Suica · JR Sagano Line → Saga-Arashiyama Stn (¥240 from Kyoto Stn)" },
        { name: "Tenryu-ji Zen Garden (UNESCO)", time: "08:30", cost: "¥500/person",
          notes: "700-year-old Zen garden with Mt. Arashiyama as its 'borrowed scenery'. The pond reflects the mountain — deeply peaceful. Shigetsu restaurant inside serves shojin ryori (Buddhist veg cuisine) — book in advance for lunch ¥5,000.",
          location: "Tenryuji Temple Arashiyama Kyoto", officialUrl: "https://www.tenryuji.com/en/",
          ticket: "3-min walk from Bamboo Grove" },
        { name: "Monkey Park Iwatayama", time: "10:00", cost: "¥550 adult / ¥250 child",
          notes: "Steep 15-min hike up (go slow with kids). At top: 170 free-roaming Japanese macaques! You can hand-feed them through a mesh window with apple slices ¥100. The monkeys will stare you down. Incredible panoramic view of Kyoto.",
          location: "Iwatayama Monkey Park Arashiyama Kyoto", officialUrl: "https://www.monkeypark.jp/",
          ticket: "Walk 5 min from Tenryu-ji" },
        { name: "Togetsukyo Bridge + Bike Ride", time: "12:30", cost: "¥1,000/bike rental",
          notes: "Flat cycling path along the Katsura River. Beautiful mountain backdrop. Rental shop by the bridge. Easy for kids on their own bike or tandem.",
          location: "Togetsukyo Bridge Arashiyama Kyoto", ticket: "Walk from Monkey Park (~8 min)" },
        { name: "Shojin Ryori Lunch (Buddhist Veg)", time: "13:00", cost: "¥1,500–2,500 set",
          notes: "Try Shigetsu at Tenryu-ji (book ahead) or Tofuya-Ukai (closer to bridge). Traditional 6-course Buddhist veg meal: tofu, yuba, seasonal mountain veg, miso. No meat, no fish, no eggs.",
          location: "Tenryuji Temple area Arashiyama Kyoto", ticket: "Walk from Togetsukyo Bridge" }
      ],
      food: [
        { name: "Shojin Ryori (Buddhist cuisine)", where: "Shigetsu at Tenryu-ji or area restaurants", price: "¥1,500–5,000", notes: "Pure Buddhist vegetarian — absolutely no meat, no fish, no eggs. Elegant presentation. Kids enjoy the tofu." },
        { name: "Yuba (tofu skin) soft serve", where: "Stalls near bamboo grove", price: "¥350", notes: "Unique Kyoto flavour. Rich, creamy. Also try matcha soft serve everywhere here." },
        { name: "Warabi mochi", where: "Wagashi shops near Togetsukyo", price: "¥400–600", notes: "Jelly-like rice cake dusted in kinako (roasted soy powder) and sugar. 100% vegetarian traditional sweet." }
      ],
      shopping: [
        { name: "Kyoto ceramics & pottery", where: "Arashiyama souvenir shops", price: "¥500–3,000", notes: "Handmade cups, small plates in traditional Kyoto patterns. Lighter than you think — good gifts." },
        { name: "Bamboo crafts", where: "Shops near Bamboo Grove", price: "¥300–1,500", notes: "Bamboo chopstick sets, small baskets, kids' bamboo toys — unique to this area." }
      ],
      facts: ["The Arashiyama Bamboo Grove was listed by the Japanese government as one of the '100 Soundscapes of Japan' for the sound of wind through the stalks.", "Tenryu-ji was built by shogun Ashikaga Takauji in 1339 to comfort the spirit of Emperor Go-Daigo."],
      hacks: ["💰 Bamboo Grove is FREE and open 24/7 — arrive at 6am for magical emptiness.", "🎉 Monkey Park: feed monkeys through the mesh window with apple slices ¥100 — kids absolutely love it.", "💰 Bike rental: ¥1,000 for the whole afternoon and covers more ground than walking."]
    },

    // ─── DAY 10 — FUSHIMI INARI + KINKAKUJI CIRCUIT ──────────────────────
    {
      day: 10, date: "2026-05-28", dayOfWeek: "Thu",
      city: "Kyoto", theme: "Fushimi Inari → Kiyomizudera → Golden Temple", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "Fushimi Inari Taisha (EARLY!)", time: "06:00", cost: "FREE — Open 24/7",
          notes: "Thousands of vermilion torii gates winding 4km up the mountain. Open 24/7, completely free. Hike to Yotsutsuji intersection (1 hr) for the panoramic city view — perfect for kids. The foxes (kitsune statues) are Inari's messengers. Don't miss the small stalls selling inari sushi ¥200.",
          location: "Fushimi Inari Taisha Kyoto", officialUrl: "https://inari.jp/en/",
          ticket: "Suica · JR Nara Line → Inari Stn (5 min, ¥150 from Kyoto Stn)" },
        { name: "Kiyomizudera Temple", time: "09:30", cost: "¥500 adult / ¥200 child",
          notes: "Hillside temple with a massive wooden stage jutting over the valley — no nails used! Stunning views. The approach (Ninenzaka & Sannenzaka lanes) is lined with matcha shops, pottery stores, traditional sweets. Budget ¥500 for snacks on the way up.",
          location: "Kiyomizudera Temple Higashiyama Kyoto",
          ticket: "Suica · Bus #100 from Kyoto Stn → Gojo-zaka (¥230)" },
        { name: "Ninenzaka & Sannenzaka Historic Lanes", time: "11:00", cost: "Free",
          notes: "Cobblestone lanes with preserved Edo-period townhouses. Best photo streets in Kyoto! Matcha soft serve ¥300. Yatsuhashi (cinnamon mochi) shop every 5 steps. Kids love the old street feel.",
          location: "Ninenzaka Sannenzaka Higashiyama Kyoto", ticket: "Walk from Kiyomizudera" },
        { name: "Kinkakuji — Golden Pavilion", time: "14:00", cost: "¥500 adult / ¥300 child",
          notes: "The most photographed sight in Japan — gold-leaf covered pavilion reflected in a perfect pond. Go after lunch when tour buses have thinned. Allow 45 min. Beautiful zen garden circuit around the lake.",
          location: "Kinkakuji Temple Kita-ku Kyoto",
          ticket: "Suica · Bus #205 or #101 from Gion → Kinkakuji-michi (¥230)" },
        { name: "Ryoanji Rock Garden", time: "15:30", cost: "¥600 adult / ¥300 child",
          notes: "The world's most celebrated zen rock garden — 15 stones on white gravel, one always hidden. The puzzle that has fascinated monks for 500 years. Very peaceful. Adjacent pond garden is beautiful.",
          location: "Ryoanji Temple Kyoto",
          ticket: "Walk 15 min from Kinkakuji" }
      ],
      food: [
        { name: "Inari sushi (kitsune sushi)", where: "Stalls at Fushimi Inari entrance", price: "¥200/3 pieces", notes: "Sweet fried tofu pouches filled with rice — a Kyoto specialty named after Inari foxes. 100% vegetarian!" },
        { name: "Matcha soft serve", where: "Every shop on Ninenzaka/Sannenzaka", price: "¥300", notes: "Rich, bitter-sweet matcha ice cream. Kyoto matcha is the best in Japan. Get the double cone — matcha + hojicha." },
        { name: "Yatsuhashi", where: "Nishio Yatsuhashi on Ninenzaka", price: "¥400–800 per box", notes: "Kyoto's most famous sweet — raw mochi in cinnamon or matcha flavour, folded around bean paste. Totally vegetarian." }
      ],
      shopping: [
        { name: "Yatsuhashi boxes (gifts)", where: "Ninenzaka shops", price: "¥800–1,500/box", notes: "Best Kyoto souvenir and very popular gift for Pune. Buy the original cinnamon AND the matcha version." },
        { name: "Kyoto ceramics", where: "Ninenzaka/Sannenzaka boutiques", price: "¥500–3,000", notes: "The Higashiyama area has Kyoto's best pottery shops. Hand-decorated small plates are ¥800 and beautiful." }
      ],
      facts: ["Kinkakuji was burned down by a monk in 1950 — the incident was famously fictionalised in Mishima's novel 'The Temple of the Golden Pavilion'.", "The 15 stones of Ryoanji's rock garden are arranged so only 14 are visible from any angle — the 15th is only visible when you achieve enlightenment."],
      hacks: ["💰 Fushimi Inari is free and open 24/7 — 6am is magical and empty.", "🎉 Bus #100 'Raku' bus is designed for tourists — stops at Kiyomizudera, Ginkakuji, Kinkakuji. Day pass ¥600.", "💰 Kyoto City Bus 1-day pass ¥700 covers unlimited rides — worth it if doing multiple bus routes."]
    },

    // ─── DAY 11 — NARA ────────────────────────────────────────────────────
    {
      day: 11, date: "2026-05-29", dayOfWeek: "Fri",
      city: "Nara (Day Trip)", theme: "Nara Deer Park + Todai-ji Giant Buddha", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "JR to Nara", time: "08:30", cost: "¥1,140 return adult / ¥570 child",
          notes: "JR Nara Line: Kyoto → Nara (50 min). JR Pass covers this. Buy deer cracker crackers (shika senbei ¥200) just OUTSIDE the park from official vendors in paper bags — not inside the park.",
          location: "Nara Station Nara", ticket: "JR Pass / Suica · JR Nara Line (50 min, ¥710 one way)" },
        { name: "Nara Deer Park", time: "09:30–all day", cost: "FREE",
          notes: "1,200 wild sika deer roam freely. They BOW when they see crackers (trained behaviour). They will steal crackers from your bag — hold tight! Kids will be in absolute heaven. Don't run — deer chase runners.",
          location: "Nara Deer Park Nara", ticket: "Walk 5 min from Nara Station" },
        { name: "Todai-ji Temple — Giant Buddha", time: "10:30", cost: "¥600 adult / ¥300 child (under 15)",
          notes: "World's largest bronze Buddha (15m high, 500 tonnes!). World's largest wooden building. Find the pillar with a hole the size of the Buddha's nostril — crawling through brings enlightenment! Kids line up for it.",
          location: "Todaiji Temple Nara", officialUrl: "https://www.todaiji.or.jp/english/",
          ticket: "Walk 15 min through deer park from Nara Stn" },
        { name: "Kasuga Taisha Shrine", time: "12:30", cost: "Free grounds / ¥500 inner shrine",
          notes: "3,000 lanterns lining the path — ancient and atmospheric even in daylight. The forested approach through deer park is beautiful. Free to walk to the main torii.",
          location: "Kasuga Taisha Shrine Nara", ticket: "Walk 10 min from Todaiji" },
        { name: "Naramachi Old Town", time: "14:30", cost: "Free",
          notes: "Historic merchant district with machiya wooden townhouses. Matcha dessert cafés, Nara-themed crafts, a famous old textile district. Nara no Kakinoha-zushi (persimmon leaf sushi — veg options) is the local delicacy.",
          location: "Naramachi Nara City", ticket: "Walk 10 min south from Todaiji" }
      ],
      food: [
        { name: "Shojin ryori / Buddhist veg lunch", where: "Edosan Restaurant near Todaiji", price: "¥1,500–2,500", notes: "Nara's oldest restaurant serves traditional Buddhist vegetarian sets. Tofu, mountain vegetables, rice, miso." },
        { name: "Nara matcha warabi mochi", where: "Naramachi cafés", price: "¥500–800", notes: "Jelly-like mochi in matcha flavour, dusted with kinako powder. Light and delicious." },
        { name: "Mitarashi dango", where: "Stalls near Kasuga Taisha", price: "¥150–300", notes: "Sweet sticky rice dumplings on a skewer with sweet soy glaze. Vegetarian. Perfect snack." }
      ],
      shopping: [
        { name: "Shika (deer) themed goods", where: "Naramachi shops", price: "¥300–1,500", notes: "Deer are Nara's symbol — themed cards, ceramics, keychains. Light and perfect as gifts." },
        { name: "Nara ink sticks and brushes", where: "Traditional shops in Naramachi", price: "¥500–2,000", notes: "Nara has a 1,300-year tradition of making Indian ink — beautiful craft items." }
      ],
      facts: ["Nara's deer are considered sacred messengers of the gods — killing one was punishable by death until 1637.", "The Great Buddha at Todaiji took 9 years and 2.6 million people to build, completed in 752 AD."],
      hacks: ["💰 JR Pass covers the Kyoto–Nara round trip — free if you have it!", "🎉 Deer crackers: buy OUTSIDE the park from vendors in paper bags ¥200 — cheaper and same product.", "🎉 The pillar hole at Todaiji: kids queue to crawl through — arrive early for shorter wait."]
    },

    // ─── DAY 12 — PHILOSOPHER'S PATH + KIMONO ────────────────────────────
    {
      day: 12, date: "2026-05-30", dayOfWeek: "Sat",
      city: "Kyoto", theme: "Philosopher's Path + Kimono Evening 👘", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "Ginkakuji — Silver Pavilion", time: "08:30", cost: "¥500 adult / ¥300 child",
          notes: "Elegant tea house pavilion. Famous 'sea of silver' sand cone in the garden (2m high, replicas lunar landscape!). Opens 8:30am — go early. The hillside garden trail has beautiful Kyoto views.",
          location: "Ginkakuji Silver Pavilion Sakyo Kyoto",
          ticket: "Suica · Bus #5 from Kyoto Stn → Ginkakuji-michi (¥230)" },
        { name: "Philosopher's Path Canal Walk", time: "10:00", cost: "Free",
          notes: "Gentle 2km canal walk between Ginkakuji and Nanzenji. Named after philosopher Nishida Kitaro who walked it daily. Late May: lush greenery and occasional late azaleas. Lined with cafés and boutiques.",
          location: "Philosophers Path Kyoto", ticket: "Walk from Ginkakuji south to Nanzenji" },
        { name: "Nanzenji Temple", time: "11:00", cost: "Free (grounds) / ¥600 hojo garden",
          notes: "Massive sanmon gate (¥600 climb for views). The stone aqueduct bisecting the temple complex is stunning — a Victorian-era red-brick structure built over an ancient Buddhist complex. Very photogenic.",
          location: "Nanzenji Temple Sakyo Kyoto", ticket: "Walk from Philosopher's Path end" },
        { name: "Kimono Rental in Gion (4 hrs)", time: "14:00–18:00", cost: "~¥14,000 family of 4 (incl. hair styling)",
          notes: "Pre-book at Yumeyakata or Okamoto Rental. Girls get hair styling included. Walk through Gion's cobblestone Hanamikoji street in full kimono — the most unforgettable photo experience of the trip. Book the 2pm slot for perfect golden-hour light around 5pm.",
          location: "Gion District Hanamikoji Kyoto", officialUrl: "https://www.yumeyakata.com/en/",
          ticket: "Suica · Bus #100 → Gion bus stop (¥230)" },
        { name: "Gion Golden Hour Walk", time: "17:00", cost: "Free",
          notes: "Stroll Hanamikoji and Shirakawa canal in kimono at golden hour. If lucky, spot a geisha (maiko) heading to an engagement — Gion is the last active geisha district in Japan. NEVER follow or photograph them up close.",
          location: "Hanamikoji Street Gion Kyoto", ticket: "Walking area" }
      ],
      food: [
        { name: "Tofu kaiseki set lunch", where: "Restaurants along Philosopher's Path", price: "¥1,500–3,000", notes: "Many restaurants on the Path serve beautiful tofu-based vegetarian set lunches. Tousuiro near Nanzenji has a dedicated vegan set." },
        { name: "Matcha parfait", where: "Café Kissa Sawarabi near Ginkakuji", price: "¥900", notes: "Layers of matcha jelly, bean paste, rice cake, ice cream in a parfait glass. Peak Kyoto experience." }
      ],
      shopping: [
        { name: "Kimono accessories", where: "Rental shop exit / Gion shops", price: "¥500–2,000", notes: "Hair pins, folded fans, small pouches in kimono-print fabric. Great for girls." },
        { name: "Wagashi sweets box", where: "Shops along Philosopher's Path", price: "¥1,000–2,500", notes: "Seasonally crafted traditional sweets — beautiful handmade creations. Perfect gift boxes available." }
      ],
      facts: ["The Philosopher's Path was designated one of Japan's 100 most beautiful roads.", "Gion has been a geisha district since the 17th century — today about 80 geiko (Kyoto term for geisha) and maiko still practice there."],
      hacks: ["💰 Kimono rental includes hair styling — book early morning for best hair styling appointment.", "🎉 Kimono golden hour in Gion at 5pm = the best photos of the entire trip. Don't skip this!", "🎉 Look for a maiko walking to work between 5:30–7pm in Gion — pure luck but magical if you spot one."]
    },

    // ─── DAY 13 — NIJO CASTLE + NISHIKI ──────────────────────────────────
    {
      day: 13, date: "2026-05-31", dayOfWeek: "Sun",
      city: "Kyoto", theme: "Nijo Castle + Heian Shrine + Nishiki Market", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "Nijo Castle", time: "09:00", cost: "¥1,030 adult / ¥350 child",
          notes: "Former shogun's palace. Famous 'nightingale floors' squeak with every step (anti-assassin security). Kids will test EVERY floorboard. Ornate painted screens. Beautiful garden with 800 plum and cherry trees. Allow 90 min.",
          location: "Nijo Castle Nakagyo Kyoto",
          ticket: "Suica · Subway Tozai Line → Nijo-jo-mae Stn (¥210)" },
        { name: "Kyoto Imperial Palace Park", time: "11:00", cost: "Free",
          notes: "Free walk through massive forested imperial grounds. The palace itself needs advance registration (free) — the park is open to all. Huge green space in central Kyoto.",
          location: "Kyoto Imperial Palace Kamigyo Kyoto", ticket: "Subway Karasuma Line → Imadegawa (¥210)" },
        { name: "Heian Shrine", time: "12:30", cost: "Free grounds / ¥600 garden",
          notes: "One of Japan's largest torii gates (24m high) marks the entrance. Built in 1895, relatively young for Kyoto. The garden (¥600) has a stunning pond with stepping stones and a covered bridge — beautiful in late May.",
          location: "Heian Shrine Okazaki Kyoto",
          ticket: "Suica · Bus → Okazaki-koen (¥230)" },
        { name: "Nishiki Market", time: "15:00", cost: "Free + snacks ¥500–1,000",
          notes: "Kyoto's Kitchen — 5 blocks of 100+ stalls. Must-tries: fresh yudofu (warm tofu set) ¥500, pickled vegetables ¥300–800, tamagoyaki (egg roll) ¥200, mochi ¥150, matcha drinks. All the vendors speak tourist-friendly Japanese. Watch your elbows on weekends.",
          location: "Nishiki Market Nakagyo Kyoto",
          ticket: "Suica · Subway or walk from Kawaramachi" },
        { name: "Pontocho Alley", time: "18:00", cost: "Free",
          notes: "Atmospheric lantern-lit alley along the Kamo River. Restaurants on decks over the river (called yuka). Even without eating, the evening stroll is magical. Best from 6–8pm.",
          location: "Pontocho Alley Nakagyo Kyoto", ticket: "Walk from Nishiki Market (10 min)" }
      ],
      food: [
        { name: "Nishiki Market snack crawl", where: "Nishiki Market", price: "¥150–500 per item", notes: "Dashi tamago ¥200 (skip — has egg), try: warabi mochi ¥300, Kyoto pickles ¥400, mochi with bean paste ¥150, fresh tofu with dipping soy ¥400." },
        { name: "Tofu hot pot (yudofu)", where: "Restaurants near Nijo area", price: "¥1,500–2,000 set", notes: "Classic Kyoto dish — tofu gently simmered in kombu broth, served with small sides. Deeply comforting." }
      ],
      shopping: [
        { name: "Kyoto pickles (tsukemono)", where: "Nishiki Market stalls", price: "¥300–800/packet", notes: "Best gift from Kyoto — beautifully packaged, lightweight, unique. Try: Shibazuke (purple), Kabu (turnip), Nasu (eggplant)." },
        { name: "Kyo-yasai (Kyoto vegetables) miso", where: "Nishiki Market", price: "¥600–1,500", notes: "Kyoto special misos and sauces — delicious vegetarian cooking ingredients to bring back." }
      ],
      facts: ["The nightingale floors at Nijo were built with tiny metal clamps under the boards that rub against nails — creating sound as a security system against assassins.", "Pontocho Alley is only 2m wide and 500m long — one of Japan's most famous restaurant streets."],
      hacks: ["💰 Nishiki Market is free to walk — only pay for what you taste. Budget ¥500–800 for a full snack crawl.", "🎉 Nijo Castle: let kids try to walk silently on the nightingale floors — impossible! They squeak from every angle.", "💰 Kyoto city day bus pass ¥700 covers all buses — worth it for a day with multiple stops."]
    },

    // ─── DAY 14 — UJI → OSAKA ────────────────────────────────────────────
    {
      day: 14, date: "2026-06-01", dayOfWeek: "Mon",
      city: "Uji → Osaka", theme: "Uji Matcha Day + Move to Osaka 🍵", region: "osaka", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "Byodoin Phoenix Hall, Uji", time: "09:00", cost: "¥600 adult / ¥300 child",
          notes: "The temple on the ¥10 coin! UNESCO World Heritage. Built 1053 AD. The Phoenix Hall is perfectly reflected in the pond — one of Japan's most beautiful buildings. Inner hall tour (extra ¥300) shows the original gilded Amida Buddha.",
          location: "Byodoin Temple Uji Kyoto", officialUrl: "https://www.byodoin.or.jp/en/",
          ticket: "JR Pass / Suica · JR Nara Line → Uji Stn (¥460 from Kyoto, 18 min)" },
        { name: "Mimurotoji Temple — HYDRANGEAS ⭐", time: "10:30", cost: "¥500/person",
          notes: "Early June = PEAK hydrangea season — 10,000 plants in bloom across tiered hillside gardens. One of Japan's top hydrangea spots. The timing this trip is absolutely perfect. Also has wisteria arch (may still be late blooming).",
          location: "Mimurotoji Temple Uji Kyoto",
          ticket: "Walk 15 min from Uji Station OR local bus" },
        { name: "Matcha Lunch + Soft Serve", time: "12:00", cost: "¥300–1,500",
          notes: "Uji is Japan's matcha capital. Every shop serves matcha soba, matcha parfait, matcha soft serve, matcha beer (adults). Nakamura Tokichi (founded 1854) is the most famous — worth the queue.",
          location: "Uji Bridge Uji Kyoto", ticket: "Walk from Mimurotoji to Uji Bridge area" },
        { name: "Travel to Osaka + Check in", time: "15:00", cost: "¥570/person",
          notes: "JR from Uji → Kyoto (18 min) → Osaka Stn or Namba (15 min). Collect bags from Kyoto hotel. Arrive Osaka by 5–6pm. Stock kitchen at Kuromon Ichiba Market (closes 6pm) on the way from station.",
          location: "Namba Station Osaka", ticket: "JR Pass / Suica · Uji → Kyoto → Osaka (JR Kyoto Line, ¥570 total)" },
        { name: "Dotonbori Evening Walk", time: "Evening", cost: "Free",
          notes: "Glico Man running sign! Neon reflections in the canal. Huge mechanical crab, giant blowfish signs. Best at night — neon is overwhelming (in the best way). Don't miss: Don Quijote (DQ) from the canal side for photos.",
          location: "Dotonbori Osaka", ticket: "Walk from Namba Station (5 min)" }
      ],
      food: [
        { name: "Matcha soba (cold)", where: "Nakamura Tokichi or Tsuen, Uji", price: "¥1,200–1,500", notes: "Cold soba noodles in matcha-infused broth with veg toppings. Unique to Uji. Intensely green." },
        { name: "Matcha soft serve (double cone)", where: "Every shop in Uji", price: "¥350–500", notes: "Get the double — matcha + vanilla or matcha + hojicha. The matcha here is stronger than Tokyo versions." },
        { name: "Dotonbori veg okonomiyaki", where: "Mizuno Restaurant, Dotonbori", price: "¥1,200", notes: "Osaka-style savory pancake with cheese + veg filling. Ask for 肉なし (niku nashi = no meat)." }
      ],
      shopping: [
        { name: "Premium matcha + tea sets", where: "Nakamura Tokichi Uji", price: "¥800–3,000", notes: "Best quality matcha to bring home for Pune. Beautiful gift packaging available." }
      ],
      facts: ["Uji has been the centre of Japanese tea cultivation since the 12th century — monks first brought tea seeds from China.", "Dotonbori's Glico Man sign (running finish-line pose) has been a landmark since 1935 — it celebrates Glico candy's founder who ran the marathon."],
      hacks: ["🌸 Hydrangeas at Mimurotoji peak first 2 weeks of June — the timing of this trip is PERFECT!", "💰 JR Pass covers Uji→Kyoto→Osaka — free if you have it.", "🎉 Get Nakamura Tokichi's famous matcha parfait if the queue is under 20 people — worth it."]
    },

    // ─── DAY 15 — USJ ────────────────────────────────────────────────────
    {
      day: 15, date: "2026-06-02", dayOfWeek: "Tue",
      city: "Osaka", theme: "Universal Studios Japan 🎮", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Universal Studios Japan — Full Day", time: "08:30–21:00", cost: "¥8,600 adult / ¥5,600 child",
          notes: "Super Nintendo World first (open at 8am, shorter morning queue). Mario Kart: Bowser's Challenge — incredible motion-tracking ride! Power-up band ¥3,500 lets you collect coins physically. Harry Potter Wizarding World: Butterbeer is vegetarian! Minions Park. Sing on Street live show (free). June weekday = shorter queues, no Express Pass likely needed. Get Nintendo World timed entry via the USJ app when you enter.",
          location: "Universal Studios Japan Osaka", officialUrl: "https://www.usj.co.jp/web/en/us",
          ticket: "Suica · JR Yumesaki Line → Universal City Stn (¥180 from Namba area)" }
      ],
      food: [
        { name: "Butterbeer (HP World)", where: "Three Broomsticks, Wizarding World", price: "¥790", notes: "Non-alcoholic butterscotch cream drink. Completely vegetarian. Hot or frozen. Kids go crazy for it." },
        { name: "Nintendo mushroom popcorn", where: "Super Nintendo World popcorn stand", price: "¥500", notes: "Mushroom-shaped popcorn bucket with caramel or cheese popcorn. Vegetarian! Great souvenir too." },
        { name: "Minion banana crepes", where: "Minion Park", price: "¥600", notes: "Banana-flavoured crepes with Minion-themed packaging. Vegetarian and delicious." }
      ],
      shopping: [
        { name: "Nintendo Power-up Band", where: "Super Nintendo World shop", price: "¥3,500", notes: "Interactive wristband that lets you collect coins throughout Mario land — KIDS LOVE IT. Buy at opening." },
        { name: "HP wands (replica)", where: "Olivanders, Wizarding World", price: "¥6,000–7,000", notes: "Ollivanders experience + own wand. Each wand has a spell location in the HP area." }
      ],
      facts: ["USJ's Super Nintendo World is the only 'real-life' Mario Kart ride in the world.", "USJ's Wizarding World of Harry Potter is widely considered the best of any HP park globally for immersive detail."],
      hacks: ["💰 PRE-BOOK via usj.co.jp or Klook — NO ticket booths on site!", "🎉 Get Super Nintendo World timed entry via the USJ app the moment you enter the park — slots fill within 30 min of park opening.", "💰 June weekday = 30–40% shorter queues than weekends. No Express Pass needed!", "🎉 Butterbeer frozen is better than the hot version — get it early before the line builds."]
    },

    // ─── DAY 16 — CASTLE + AQUARIUM ──────────────────────────────────────
    {
      day: 16, date: "2026-06-03", dayOfWeek: "Wed",
      city: "Osaka", theme: "Osaka Castle + Kaiyukan Aquarium 🦈", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Osaka Castle Park", time: "09:00", cost: "Free park / ¥600 museum (under-15 FREE)",
          notes: "Beautiful castle grounds — lush green in June, moat full. Castle museum traces Osaka's history under Toyotomi Hideyoshi. Elevator to 8th floor for panoramic views. Kids under 15 are FREE for the museum!",
          location: "Osaka Castle Park Chuo Osaka",
          ticket: "Suica · Subway Tanimachi or Chuo Line → Osakajo-koen Stn (¥200)" },
        { name: "Kaiyukan Aquarium", time: "13:00", cost: "¥2,400 adult / ¥1,200 child",
          notes: "One of the world's largest aquariums. The central 8m tank houses a whale shark — the only one in Japan! 14 zones following the Pacific Rim. Sea otters (kids' absolute favourite), penguins, manta rays. Route spirals DOWN — very clever design. Allow 2 hrs.",
          location: "Kaiyukan Aquarium Minato Osaka", officialUrl: "https://www.kaiyukan.com/language/eng/",
          ticket: "Suica · Subway Chuo Line → Osaka-ko Stn (¥230 from castle)" },
        { name: "Tempozan Ferris Wheel", time: "15:30", cost: "¥800 adult / ¥400 child",
          notes: "Right next to Kaiyukan. Transparent gondolas available! Panoramic view of Osaka Bay and the city. 15-min ride. One of Japan's largest ferris wheels.",
          location: "Tempozan Ferris Wheel Osaka",
          ticket: "Walk 2 min from Kaiyukan" },
        { name: "Indian Dinner at Apt Kitchen", time: "Evening", cost: "Groceries ¥1,500",
          notes: "Cook dal tadka, sabzi and rice in Osaka apt kitchen. Saves ₹2,500. Good supermarket: Seiyu or Fresco near Namba.",
          location: "Namba Station Osaka", ticket: "Suica · Subway back to Namba" }
      ],
      food: [
        { name: "Veg ekiben at castle park", where: "Pack from konbini before leaving", price: "¥600–900", notes: "Pick up a bento from 7-Eleven before heading to castle — much cheaper than castle-area restaurants." },
        { name: "Kaiyukan café veg options", where: "Inside Kaiyukan", price: "¥800–1,200", notes: "Vegetable curry and udon available. Ask counter staff for '肉なし' (no meat)." }
      ],
      shopping: [
        { name: "Aquarium themed goods", where: "Kaiyukan gift shop", price: "¥500–2,000", notes: "Whale shark stuffed toys are a Kaiyukan exclusive — only sold here. Kids love them." }
      ],
      facts: ["Kaiyukan's central whale shark tank holds 5,400 tonnes of water — one of the largest in the world.", "Osaka Castle has been rebuilt three times — the current concrete reconstruction dates to 1931."],
      hacks: ["💰 Buy Kaiyukan tickets at konbini kiosks (7-Eleven, FamilyMart) to skip the entry queue entirely.", "💰 Kids under 15 are FREE at Osaka Castle museum — save ¥600+ per child!", "🎉 Transparent gondola on Tempozan: arrive 15 min early and request it — stunning views straight down."]
    },

    // ─── DAY 17 — POKEMON CAFE + SHINSEKAI ───────────────────────────────
    {
      day: 17, date: "2026-06-04", dayOfWeek: "Thu",
      city: "Osaka", theme: "Pokémon Cafe + Shinsekai + Den Den Town ⚡", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "⭐ Pokémon Cafe Osaka (PRE-BOOKED)", time: "Booked slot (11:00 or 12:00)", cost: "~¥3,000/person",
          notes: "⚠️ ALARM: 6 May at 6am JST = booking opens exactly 30 days before! Official only: cafe.pokemon.co.jp. Pokémon-shaped pancakes, character drinks, themed menu. Absolutely magical for kids. Each reservation comes with a character coaster.",
          location: "Pokemon Cafe Osaka Namba", officialUrl: "https://cafe.pokemon.co.jp/en/",
          ticket: "Walk from Namba Station (5 min)" },
        { name: "Den Den Town (Osaka's Akihabara)", time: "14:00", cost: "Free",
          notes: "Nipponbashi — electronics, anime, cosplay, vintage manga. More laid-back than Tokyo's Akihabara. Cheaper prices on anime figures. Great for finding older/rarer Pokémon games.",
          location: "Den Den Town Nipponbashi Osaka",
          ticket: "Suica · Subway Sakaisuji Line → Ebisucho Stn (¥200)" },
        { name: "Shinsekai Retro District", time: "16:00", cost: "Free",
          notes: "Osaka's old entertainment district from the 1920s. Neon signs, retro arcades, old-school restaurants. Tsutenkaku Tower ¥1,000 (kids love the quirky Billiken luck statue at the top). America-Mura street art nearby.",
          location: "Shinsekai Osaka",
          ticket: "Walk 10 min from Den Den Town" },
        { name: "Kuromon Ichiba Market", time: "17:30", cost: "Free to browse",
          notes: "Osaka's famous covered food market. Closes 6pm — go before then. Fresh tofu, veg tempura, Kyoto pickles, tofu donuts. Stock up the apt kitchen. Also try: grilled corn ¥300.",
          location: "Kuromon Ichiba Market Osaka",
          ticket: "Suica · Walk from Shinsekai or Subway Sakaisuji Line → Nipponbashi" }
      ],
      food: [
        { name: "Pokémon Cafe character pancakes", where: "Pokémon Cafe Osaka", price: "¥1,200–1,800", notes: "Pikachu pancakes, themed omelette sets. Ask staff for vegetarian option — egg-based but no meat." },
        { name: "Veg kushikatsu", where: "Shinsekai area restaurants", price: "¥100–200/skewer", notes: "Deep-fried breaded vegetables on skewers: potato, pumpkin, lotus root, onion. Ask for veg only (やさいのみ). The strict rule: never double-dip the sauce!" },
        { name: "Kuromon tofu donuts", where: "Kuromon Ichiba Market", price: "¥100–150 each", notes: "Freshly fried tofu donuts in various flavours. Hot and crispy. Completely vegetarian." }
      ],
      shopping: [
        { name: "Pokémon Cafe exclusive merch", where: "Pokémon Cafe shop", price: "¥500–3,000", notes: "Cafe-exclusive plushies and items only available at the café. Buy at the end of your meal." },
        { name: "Tsutenkaku omiyage", where: "Tsutenkaku Tower souvenir shop", price: "¥300–800", notes: "Billiken (Osaka's lucky god) themed goods are unique to Shinsekai and not found elsewhere." }
      ],
      facts: ["Shinsekai means 'New World' — it was built in 1912 modeled after two districts: Paris (south) and New York (north).", "The Billiken statue at Tsutenkaku is considered Osaka's symbol of luck — rubbing his feet is said to grant wishes."],
      hacks: ["⚠️ Pokémon Cafe: set phone alarm for 6 May at 6am JST — books in seconds! Official site ONLY.", "🎉 Kushikatsu: the double-dip rule is serious — violating it causes genuine offense. Dip once only!", "💰 Den Den Town has better prices on anime figures and older games than Akihabara."]
    },

    // ─── DAY 18 — SHOPPING ───────────────────────────────────────────────
    {
      day: 18, date: "2026-06-05", dayOfWeek: "Fri",
      city: "Osaka", theme: "Sumiyoshi Shrine + Shopping Day 🛍️", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Sumiyoshi Taisha Shrine", time: "09:00", cost: "Free",
          notes: "One of Japan's oldest and most important shrines (3rd century!). Unique architectural style (sumiyoshi-zukuri) found nowhere else. Beautiful arched bridge. Very peaceful with almost no tourists. The grounds are huge and tranquil.",
          location: "Sumiyoshi Taisha Shrine Osaka",
          ticket: "Suica · Nankai Honsen Line → Sumiyoshi-taisha Stn (¥250 from Namba)" },
        { name: "Shinsaibashi Shopping Arcade", time: "11:30", cost: "Tax-free on ¥5,000+",
          notes: "580m covered arcade — Osaka's main shopping street. Fashion boutiques, Kiddyland (for kids' toys), Uniqlo, cosmetics. Show passport at department stores for 10% tax-free refund on ¥5,000+ per transaction. Good for: Japanese skincare, Uniqlo basics, unique snacks.",
          location: "Shinsaibashi Shopping Arcade Osaka",
          ticket: "Suica · Subway Midosuji Line → Shinsaibashi Stn (¥350)" },
        { name: "Amerika-Mura Street Art", time: "14:00", cost: "Free",
          notes: "Osaka's hipster quarter in America Village (Amerikamura). Street art, vintage fashion, indie music shops, food trucks. Very different vibe from the rest of Osaka. Big Amerika Park has a small Statue of Liberty!",
          location: "Amerikamura Osaka",
          ticket: "Walk 5 min from Shinsaibashi" },
        { name: "Dotonbori Farewell Walk", time: "Evening", cost: "Free",
          notes: "Final evening stroll under the neon lights. Take all the photos you missed on Day 1. The canal boat ride (¥900 adult) gives a unique low-angle view of all the neon signs.",
          location: "Dotonbori Osaka",
          ticket: "Walk from Shinsaibashi area" },
        { name: "Depachika Basement Food Hunt", time: "After 19:00", cost: "Half-price deals!",
          notes: "Department store food basements (Takashimaya B2F, Daimaru B1F). After 7pm: look for orange ½価 (han-ka = half price) stickers on premium wagashi, bento, French pastries. Premium sweets for ¥200–400. Truly excellent late-night hack.",
          location: "Takashimaya Department Store Namba Osaka",
          ticket: "Walk from Dotonbori (5 min)" }
      ],
      food: [
        { name: "Veg tempura set lunch", where: "Restaurants near Shinsaibashi", price: "¥1,200–1,800", notes: "Vegetable tempura teishoku: seasonal veg, rice, miso, pickles. Light and satisfying." },
        { name: "Depachika wagashi (after 7pm)", where: "Takashimaya or Daimaru basement", price: "¥200–400 after discount", notes: "Wait for the ½価 stickers — premium sweets like Yatsuhashi, wagashi sets, éclair at half price." }
      ],
      shopping: [
        { name: "Souvenirs for Pune", where: "Don Quijote / Shinsaibashi", price: "¥200–500/item", notes: "Matcha Kit Kat, Tokyo Banana, Royce chocolate, wasabi peas, pocky sets — great for gifts, well-priced." },
        { name: "Uniqlo Heattech / LifeWear", where: "Uniqlo Shinsaibashi", price: "¥990–2,990", notes: "Tax-free applies on ¥5,000+ spend. Japanese Uniqlo has first-run items not yet in India." }
      ],
      facts: ["Sumiyoshi Taisha's style — separate male/female deities in separate shrines connected by a bridge — influenced over 2,300 shrines across Japan.", "Don Quijote (fondly called 'Donki') is open 24 hours and sells literally everything — it has been called Japan's most chaotic and wonderful store."],
      hacks: ["💰 Tax-free at Shinsaibashi: show passport, min ¥5,000 spend per store = 10% back instantly.", "💰 Depachika after 7pm = best food deals in Osaka. Keep ¥2,000 cash for this.", "🎉 Canal boat in Dotonbori: ¥900 for 20 min — worth it for the unique low-angle neon photos."]
    },

    // ─── DAY 19 — UMEDA SKY + FINAL OSAKA ────────────────────────────────
    {
      day: 19, date: "2026-06-06", dayOfWeek: "Sat",
      city: "Osaka", theme: "Umeda Sky Building + Final Osaka Moments 🌆", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Umeda Sky Building Floating Garden", time: "09:00 (or at sunset)", cost: "¥1,500 adult / ¥700 child",
          notes: "Two towers connected at 173m by an 'air corridor'. The 360° open-air roof deck gives panoramic views of Osaka. The underground food hall (Takimi-koji) is a 1920s-style lantern-lit market. Open until 10:30pm — also stunning at night!",
          location: "Umeda Sky Building Kita Osaka", officialUrl: "https://www.kuchu-teien.com/en/",
          ticket: "Suica · JR Osaka Loop Line or Subway → Umeda/Osaka Stn (¥200 from Namba)" },
        { name: "Tenjinbashisuji Covered Arcade", time: "11:00", cost: "Free",
          notes: "Japan's longest covered shopping arcade at 2.6km. More local and less touristy than Shinsaibashi. Great for everyday Japanese items, kitchen goods, local food. Has a fun house-museum at one end.",
          location: "Tenjinbashisuji Shopping Street Kita Osaka",
          ticket: "Subway Tanimachi Line → Tenjimbashisuji 6-chome (¥200)" },
        { name: "Final Konbini Snack Haul", time: "Afternoon", cost: "¥3,000–5,000",
          notes: "Last chance to stock up on Japanese snacks for Pune. Vacuum-packed items: matcha Kit Kat, Pocky sets, Royce chocolate (buy frozen pouch from store). Kirin/Suntory special drinks for adults. 7-Eleven or FamilyMart near apt.",
          location: "FamilyMart near Namba Osaka", ticket: "Walk from hotel" },
        { name: "Pack Bags for Early Departure", time: "Evening", cost: "",
          notes: "⚠️ Must pack tonight — travel to Haneda tomorrow morning! Confirm HND hotel booking. Put all omiyage (gifts) in checked bags carefully.",
          location: "Hotel Osaka", ticket: "" }
      ],
      food: [
        { name: "Takimi-koji underground market", where: "Umeda Sky Building basement", price: "¥800–1,500", notes: "Atmospheric 1920s market design in the basement. Several veg-friendly options including tofu hot pot and veg curry." }
      ],
      shopping: [
        { name: "Royce Chocolate (buy from store only)", where: "7-Eleven or airport", price: "¥1,500–3,000/box", notes: "Keep refrigerated — get a cold pouch from the store. The nama chocolate is famous and best as a gift." },
        { name: "Vacuum-packed matcha goods", where: "Any konbini", price: "¥300–800/pack", notes: "Matcha Kit Kats, Matcha Oreos, Maccha Yan Yan — best airline-friendly gifts." }
      ],
      facts: ["The Tenjinbashisuji arcade covers all of Tenjinbashi street — walking its full 2.6km length is a Osaka bucket list item.", "Umeda Sky's Floating Garden was designed by architect Hiroshi Hara and completed in 1993 — it was revolutionary for its connected sky walkway."],
      hacks: ["⚠️ PACK TONIGHT — leave for Haneda tomorrow morning!", "💰 Royce chocolate: buy from the store with the cold pack — not airport, where it's marked up 30%.", "🎉 Umeda Sky at dusk (around 7pm in June): best of both day views AND the lit-up city. Open till 10:30pm."]
    },

    // ─── DAY 20 — OSAKA → HANEDA ─────────────────────────────────────────
    {
      day: 20, date: "2026-06-07", dayOfWeek: "Sun",
      city: "Osaka → Haneda", theme: "Travel Day: Osaka to Haneda ✈", region: "transit", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Check out Osaka Hotel", time: "By 11:00", cost: "",
          notes: "Settle any final charges. Store bags if checkout is before transport time.",
          location: "Shin-Osaka Station Osaka", ticket: "Suica · Subway to Shin-Osaka" },
        { name: "Shin-Osaka → Shinagawa (Shinkansen Hikari)", time: "~11:30", cost: "JR Pass covers Hikari (¥6,740 adult / ¥3,370 child without)",
          notes: "~2h 15min on Hikari Shinkansen. Book window seats (A/E side) for Mt. Fuji view around Shin-Fuji station! NOTE: JR Pass does NOT cover Nozomi — use Hikari.",
          location: "Shinagawa Station Tokyo", ticket: "JR Pass: Shin-Osaka → Shinagawa on Hikari" },
        { name: "Shinagawa → Haneda Terminal 2 (Keikyu)", time: "~14:00", cost: "¥470/person",
          notes: "Keikyu Airport Line from Shinagawa: 14 min, very frequent. Easy with luggage.",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Suica · Keikyu Airport Express (¥470)" },
        { name: "Check in HND-area Hotel", time: "Afternoon", cost: "⚠️ TO BE BOOKED",
          notes: "Must be within 15 min of HND Terminal 2. Flight tomorrow 11:00 — arrive airport by 08:00.",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Hotel shuttle or walk" },
        { name: "HND Duty-Free Shopping", time: "Evening", cost: "Budget ¥5,000–10,000",
          notes: "HND International Terminal T3 is a short bus/train from T2. Excellent duty free: Japanese whisky, cosmetics, confectionery, matcha everything. Last Japan shopping!",
          location: "Haneda International Terminal Tokyo", ticket: "Free shuttle between HND terminals" }
      ],
      food: [
        { name: "Shinkansen ekiben", where: "Shin-Osaka platform shops", price: "¥1,200–1,800", notes: "Buy a bento at the platform before boarding. Veg options: vegetable rice box, tofu box sets." }
      ],
      shopping: [
        { name: "Japanese whisky / sake", where: "HND duty free", price: "¥3,000–8,000", notes: "Yamazaki, Hibiki, Nikka at better prices than India. Popular gift." },
        { name: "Last matcha goods", where: "HND duty free", price: "¥500–2,000", notes: "Airport has good selection of matcha Kit Kat, Pocky, and branded confectionery boxes." }
      ],
      facts: ["The Tokaido Shinkansen route from Osaka to Tokyo is 515km — the world's busiest high-speed rail corridor.", "Mt. Fuji is visible from the shinkansen for about 90 seconds — it appears on the LEFT side (seat A) going Tokyo-bound."],
      hacks: ["🗻 Mt. Fuji from shinkansen: sit on LEFT side (A seat) going Tokyo-bound, look between Shin-Fuji and Mishima stations (~45 min from Shin-Osaka).", "⚠️ JR Pass: USE HIKARI not Nozomi — Nozomi is not covered by JR Pass!", "💰 HND duty free: Japanese whisky significantly cheaper here than India."]
    },

    // ─── DAY 21 — FLY HOME ───────────────────────────────────────────────
    {
      day: 21, date: "2026-06-08", dayOfWeek: "Mon",
      city: "Tokyo Haneda → Delhi → Pune", theme: "Fly Home! ✈ Sayonara Japan!", region: "transit", confirmed: true,
      startLocation: "Haneda Airport Terminal 2 Tokyo",
      activities: [
        { name: "Arrive HND Terminal 2 by 08:00", time: "08:00", cost: "",
          notes: "ANA check-in counter opens 3 hrs before. PNR: 8GXZOP. Check in all bags. 2 checked bags per person per leg. Request vegetarian meals confirmed.",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Hotel shuttle or walk to terminal" },
        { name: "Tax Refund at Departure Customs", time: "Before security (08:30)", cost: "REFUND — bring all receipts!",
          notes: "Collect consumption tax (10%) refund at the customs tax-refund counter BEFORE going through security. Bring: passport, all tax-free purchase receipts, and the goods (unopened). Worth doing for large purchases!",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "" },
        { name: "Board NH837: HND → DEL", time: "11:00 → 16:30", cost: "Confirmed",
          notes: "Seat 21K (Achin). Terminal 2. Arrive Delhi Terminal 3.",
          location: "Indira Gandhi International Airport Delhi T3", ticket: "No transit" },
        { name: "Delhi: T3 → T2 Terminal Transfer", time: "~17:00", cost: "Free shuttle",
          notes: "Terminal 3 (international) → Terminal 2 (domestic). Use free inter-terminal transfer bus. Allow 45–60 min transit. DigiYatra works for domestic check-in at T2.",
          location: "Indira Gandhi International Airport Delhi T2", ticket: "Free inter-terminal bus" },
        { name: "Board NH6935: DEL → PNQ", time: "19:10 → 21:15", cost: "Confirmed",
          notes: "Seat 30F (Achin). Arrive Pune 21:15. 🙏 Sayonara Japan — the most beautiful country your family has ever visited!",
          location: "Pune International Airport", ticket: "" }
      ],
      food: [
        { name: "HND T2 Airport food", where: "Terminal 2 F&B before security", price: "¥800–1,500", notes: "Last Japanese meal! Try a proper bowl of ramen or katsu curry before boarding." }
      ],
      shopping: [
        { name: "Last minute duty free", where: "After security, HND", price: "As needed", notes: "Post-security duty free is same products, sometimes slightly different prices. Check both sides." }
      ],
      facts: ["ANA (All Nippon Airways) has won the Skytrax 5-star rating for 7 consecutive years.", "Haneda handles 85+ million passengers annually — one of the world's busiest airports."],
      hacks: ["⏰ Be at T2 by 8am sharp — 3 hours before departure is ANA's recommendation.", "💰 Tax refund: do this BEFORE security — the counter is in the departures hall. Don't forget receipts!", "🙏 Final tip: keep one ¥10 coin as a souvenir — it has Byodoin Temple on it!"]
    }

  ] // end days
}; // end TRIP_DATA

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getDayByDate(dateStr) {
  return TRIP_DATA.days.find(d => d.date === dateStr) || null;
}

// Build Google Maps transit link with "less walking" hint
// origin and destination are place-name strings
function mapsLink(origin, destination) {
  if (!destination) return null;
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=transit`;
}

// Google Image search link for a place
function photosLink(query) {
  return `https://www.google.com/search?q=${encodeURIComponent(query + ' Japan')}&tbm=isch`;
}

// Region theme
const REGION_COLORS = {
  tokyo:   { bg: "#EEF8F2", accent: "#2D7A4F", label: "🗼 Tokyo"   },
  kyoto:   { bg: "#FDF5E8", accent: "#C06B1A", label: "⛩ Kyoto"   },
  osaka:   { bg: "#FDF0F3", accent: "#B83A52", label: "🏯 Osaka"   },
  transit: { bg: "#EEF5FD", accent: "#1F6BB5", label: "✈ Transit" }
};

// ─── Japanese Phrases ─────────────────────────────────────────────────────────
// Shared by phrases.html (display) and search.html (search index)
const PHRASES = [

  // ── BASICS ──────────────────────────────────────────────────────────────
  { cat:'basics', jp:'こんにちは', romaji:'Konnichiwa', en:'Hello (daytime)', tip:'Use until about 6pm. Say it with a slight bow.' },
  { cat:'basics', jp:'おはようございます', romaji:'Ohayou gozaimasu', en:'Good morning', tip:'More polite version. Informal: just おはよう (ohayou).' },
  { cat:'basics', jp:'こんばんは', romaji:'Konbanwa', en:'Good evening', tip:'Use after about 6pm.' },
  { cat:'basics', jp:'ありがとうございます', romaji:'Arigatou gozaimasu', en:'Thank you (polite)', tip:'The go-to thank you. Casual: ありがとう (arigatou).' },
  { cat:'basics', jp:'すみません', romaji:'Sumimasen', en:'Excuse me / Sorry', tip:'The most useful word in Japan. Use to get attention, apologise, and say thanks.' },
  { cat:'basics', jp:'はい', romaji:'Hai', en:'Yes', tip:'Also used as "I understand" or "I\'m listening" during conversations.' },
  { cat:'basics', jp:'いいえ', romaji:'Iie', en:'No', tip:'Japanese often avoid saying no directly — shaking your head also works.' },
  { cat:'basics', jp:'わかりません', romaji:'Wakarimasen', en:'I don\'t understand', tip:'Say this clearly and staff will often find someone who speaks English.' },
  { cat:'basics', jp:'英語を話せますか？', romaji:'Eigo wo hanasemasu ka?', en:'Do you speak English?', tip:'Most young people in tourist areas do.' },
  { cat:'basics', jp:'もう一度お願いします', romaji:'Mou ichido onegaishimasu', en:'Please say that again', tip:'Point to this phrase to ask someone to repeat themselves.' },
  { cat:'basics', jp:'〜はどこですか？', romaji:'~ wa doko desu ka?', en:'Where is ~ ?', tip:'Replace ~ with any place name. Works everywhere!' },
  { cat:'basics', jp:'トイレはどこですか？', romaji:'Toire wa doko desu ka?', en:'Where is the toilet?', tip:'Toilets in Japan are incredibly clean — don\'t be shy asking!' },
  { cat:'basics', jp:'写真を撮っても良いですか？', romaji:'Shashin wo totte mo ii desu ka?', en:'May I take a photo?', tip:'Always ask before photographing people. Never photograph geisha.' },

  // ── TRANSPORT ────────────────────────────────────────────────────────────
  { cat:'transport', jp:'〜はどこですか？', romaji:'~ Eki wa doko desu ka?', en:'Where is ~ station?', tip:'Replace ~ with station name. e.g. "Aoto Eki wa doko desu ka?"' },
  { cat:'transport', jp:'〜まで一枚ください', romaji:'~ made ichimai kudasai', en:'One ticket to ~, please', tip:'Show the destination name on your phone screen.' },
  { cat:'transport', jp:'この電車は〜に止まりますか？', romaji:'Kono densha wa ~ ni tomarimasu ka?', en:'Does this train stop at ~?', tip:'Very useful when you\'re not sure if you\'re on the right train.' },
  { cat:'transport', jp:'次は〜ですか？', romaji:'Tsugi wa ~ desu ka?', en:'Is the next stop ~?', tip:'Ask fellow passengers — Japanese people will often help.' },
  { cat:'transport', jp:'ICカードに2000円チャージしてください', romaji:'IC caado ni nisen en chaaji shite kudasai', en:'Please charge ¥2,000 on my IC card', tip:'Say this at any station staffed counter.' },
  { cat:'transport', jp:'乗り換えはどこですか？', romaji:'Norikawe wa doko desu ka?', en:'Where do I transfer?', tip:'Show your destination — staff will point to the right platform.' },
  { cat:'transport', jp:'タクシーを呼んでください', romaji:'Takushii wo yonde kudasai', en:'Please call a taxi', tip:'Hotels will always call a taxi for you.' },
  { cat:'transport', jp:'空港まで行ってください', romaji:'Kuukou made itte kudasai', en:'Please take me to the airport', tip:'Show the kanji to the driver: 羽田空港 (Haneda) or 成田空港 (Narita).' },

  // ── FOOD ─────────────────────────────────────────────────────────────────
  { cat:'food', jp:'ベジタリアンです', romaji:'Bejitarian desu', en:'I am vegetarian', tip:'Japan is not as vegetarian-friendly as India — always clarify!' },
  { cat:'food', jp:'肉は食べられません', romaji:'Niku wa taberaremasen', en:'I cannot eat meat', tip:'Very important. Meat = 肉 (niku). Fish = 魚 (sakana).' },
  { cat:'food', jp:'魚も食べられません', romaji:'Sakana mo taberaremasen', en:'I cannot eat fish either', tip:'Japanese "vegetarian" often includes fish. Say this too!' },
  { cat:'food', jp:'これは肉が入っていますか？', romaji:'Kore wa niku ga haitte imasu ka?', en:'Does this contain meat?', tip:'Show the dish and ask. Staff will usually check the kitchen for you.' },
  { cat:'food', jp:'野菜だけのものはありますか？', romaji:'Yasai dake no mono wa arimasu ka?', en:'Do you have anything with only vegetables?', tip:'Very useful at restaurants without English menus.' },
  { cat:'food', jp:'おいしい！', romaji:'Oishii!', en:'Delicious!', tip:'Say this after eating — the chef or staff will be absolutely delighted!' },
  { cat:'food', jp:'お会計をお願いします', romaji:'Okaikei wo onegaishimasu', en:'The bill please', tip:'Or just mime signing a check in the air — universally understood.' },
  { cat:'food', jp:'お水をください', romaji:'Omizu wo kudasai', en:'Water please', tip:'In Japan, water is always free at restaurants. Just ask!' },
  { cat:'food', jp:'辛くないものをください', romaji:'Karakunai mono wo kudasai', en:'Please give me something not spicy', tip:'For the kids — Japanese food is mild but some dishes surprise!' },
  { cat:'food', jp:'これと同じものをください', romaji:'Kore to onaji mono wo kudasai', en:'Same as this please', tip:'Point to another diner\'s food — completely acceptable in Japan!' },

  // ── SHOPPING ─────────────────────────────────────────────────────────────
  { cat:'shopping', jp:'いくらですか？', romaji:'Ikura desu ka?', en:'How much is this?', tip:'For any item. Point and ask.' },
  { cat:'shopping', jp:'これをください', romaji:'Kore wo kudasai', en:'I\'ll take this one', tip:'Point at the item + say this. Done!' },
  { cat:'shopping', jp:'免税になりますか？', romaji:'Menzei ni narimasu ka?', en:'Can this be tax-free?', tip:'Show your passport — many shops offer 10% back on ¥5,000+ purchases.' },
  { cat:'shopping', jp:'袋に入れてください', romaji:'Fukuro ni irete kudasai', en:'Please put it in a bag', tip:'Japanese shops often ask if you want a bag.' },
  { cat:'shopping', jp:'カードは使えますか？', romaji:'Kaado wa tsukaemasu ka?', en:'Do you accept cards?', tip:'Most large shops do. Smaller shops and food stalls are often cash only.' },
  { cat:'shopping', jp:'少し安くなりますか？', romaji:'Sukoshi yasuku narimasu ka?', en:'Can it be a little cheaper?', tip:'Bargaining is NOT normal in Japan. Only try at flea markets or antique shops.' },
  { cat:'shopping', jp:'〜色はありますか？', romaji:'~ iro wa arimasu ka?', en:'Do you have it in ~ colour?', tip:'e.g. "Aka iro" (red), "Ao iro" (blue), "Shiro" (white), "Kuro" (black).' },

  // ── HOTEL ────────────────────────────────────────────────────────────────
  { cat:'hotel', jp:'チェックインをお願いします', romaji:'Chekkuin wo onegaishimasu', en:'Check in please', tip:'Show booking confirmation on your phone.' },
  { cat:'hotel', jp:'チェックアウトをお願いします', romaji:'Chekkuauto wo onegaishimasu', en:'Check out please', tip:'' },
  { cat:'hotel', jp:'Wi-Fiのパスワードを教えてください', romaji:'Wai-fai no passuwaado wo oshiete kudasai', en:'Please tell me the WiFi password', tip:'' },
  { cat:'hotel', jp:'荷物を預かってもらえますか？', romaji:'Nimotsu wo azukatte moraemasu ka?', en:'Can you store my luggage?', tip:'Most hotels store bags for free before check-in and after check-out.' },
  { cat:'hotel', jp:'タオルをもう一枚ください', romaji:'Taoru wo mou ichimai kudasai', en:'One more towel please', tip:'' },
  { cat:'hotel', jp:'エアコンの使い方を教えてください', romaji:'Eakon no tsukaikata wo oshiete kudasai', en:'Please show me how to use the AC', tip:'Japanese AC remotes can be confusing. Just ask!' },

  // ── EMERGENCY ────────────────────────────────────────────────────────────
  { cat:'emergency', jp:'助けてください！', romaji:'Tasukete kudasai!', en:'Help me please!', tip:'Say loudly. Japanese people will respond quickly.' },
  { cat:'emergency', jp:'救急車を呼んでください', romaji:'Kyuukyuusha wo yonde kudasai', en:'Please call an ambulance', tip:'Emergency number in Japan: 119 (ambulance/fire), 110 (police).' },
  { cat:'emergency', jp:'警察を呼んでください', romaji:'Keisatsu wo yonde kudasai', en:'Please call the police', tip:'Emergency number: 110' },
  { cat:'emergency', jp:'迷子になりました', romaji:'Maigo ni narimashita', en:'I am lost', tip:'Say this at any police box (koban — small blue police stations everywhere).' },
  { cat:'emergency', jp:'気分が悪いです', romaji:'Kibun ga warui desu', en:'I feel sick', tip:'Japan has excellent pharmacies (薬局 yakkyoku) on every street.' },
  { cat:'emergency', jp:'アレルギーがあります', romaji:'Arerugii ga arimasu', en:'I have allergies', tip:'Combined with the food phrases above — very important for vegetarians.' },
  { cat:'emergency', jp:'病院に連れて行ってください', romaji:'Byouin ni tsurete itte kudasai', en:'Please take me to a hospital', tip:'' },
  { cat:'emergency', jp:'パスポートを紛失しました', romaji:'Pasupooto wo funshitsu shimashita', en:'I lost my passport', tip:'Go to the nearest police box (koban) first, then your embassy.' },

  // ── KIDS ─────────────────────────────────────────────────────────────────
  { cat:'kids', jp:'かわいい！', romaji:'Kawaii!', en:'Cute! (kids say this all the time)', tip:'Japanese people will love hearing this from kids about anything!' },
  { cat:'kids', jp:'おいしい！', romaji:'Oishii!', en:'Yummy / Delicious!', tip:'The word kids use most in Japan. Say it about everything!' },
  { cat:'kids', jp:'ありがとう！', romaji:'Arigatou!', en:'Thanks! (casual)', tip:'Teach kids this from day 1 — they\'ll use it constantly.' },
  { cat:'kids', jp:'これ何ですか？', romaji:'Kore nan desu ka?', en:'What is this?', tip:'Kids can point and ask — most vendors love explaining.' },
  { cat:'kids', jp:'お手洗いはどこですか？', romaji:'Otearai wa doko desu ka?', en:'Where is the bathroom?', tip:'More polite version for kids to use.' },
  { cat:'kids', jp:'一緒に写真撮ってもいいですか？', romaji:'Issho ni shashin totte mo ii desu ka?', en:'Can we take a photo together?', tip:'Japanese people sometimes ask kids this! This is how to ask back.' },
  { cat:'kids', jp:'ポケモン好きです！', romaji:'Pokémon suki desu!', en:'I like Pokémon!', tip:'Instant friendship with any Japanese child. Magic words.' },
  { cat:'kids', jp:'つまらない…', romaji:'Tsumaranai...', en:'I\'m bored... (use with caution)', tip:'Teach kids this for the shinkansen. Though Japan will keep them entertained!' },

  // ── NUMBERS ──────────────────────────────────────────────────────────────
  { cat:'numbers', jp:'一 (ichi) / 二 (ni) / 三 (san)', romaji:'ichi / ni / san', en:'1 / 2 / 3', tip:'' },
  { cat:'numbers', jp:'四 (shi/yon) / 五 (go) / 六 (roku)', romaji:'shi·yon / go / roku', en:'4 / 5 / 6', tip:'4 is unlucky (sounds like "death") — so shi is avoided, use yon.' },
  { cat:'numbers', jp:'七 (nana) / 八 (hachi) / 九 (ku) / 十 (juu)', romaji:'nana / hachi / ku / juu', en:'7 / 8 / 9 / 10', tip:'' },
  { cat:'numbers', jp:'百 (hyaku) / 千 (sen) / 万 (man)', romaji:'hyaku / sen / man', en:'100 / 1,000 / 10,000', tip:'¥10,000 = ichiman en. ¥1,000 = sen en.' },
  { cat:'numbers', jp:'一つ (hitotsu) / 二つ (futatsu)', romaji:'hitotsu / futatsu', en:'One (thing) / Two (things)', tip:'When ordering food: "hitotsu kudasai" = one please.' },
  { cat:'numbers', jp:'何番線ですか？', romaji:'Nani bansen desu ka?', en:'Which platform number?', tip:'Extremely useful at train stations. Show destination, ask this.' }
];
