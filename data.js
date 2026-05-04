// Japan Family Vacation 2026 ÃÂ¢ÃÂÃÂ Full Itinerary Data
// Family: Achin, Snigdha, Anagha (child), Sharanya (child) ÃÂÃÂ· Pure Vegetarian
// Tokyo Apt GPS: 35.7480ÃÂÃÂ°N, 139.8570ÃÂÃÂ°E (Aoto Station, Katsushika)

const TRIP_DATA = {
  meta: {
    title: "Japan Family Vacation 2026",
    dates: "18 May ÃÂ¢ÃÂÃÂ 8 Jun 2026",
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

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 0 ÃÂ¢ÃÂÃÂ DEPARTURE ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 0, date: "2026-05-18", dayOfWeek: "Mon",
      city: "Pune ÃÂ¢ÃÂÃÂ Delhi ÃÂ¢ÃÂÃÂ Tokyo", theme: "Departure Day ÃÂ¢ÃÂÃÂ", region: "transit", confirmed: true,
      startLocation: "Pune International Airport",
      activities: [
        { name: "Depart PNQ: Flight NH6936", time: "08:45", cost: "Confirmed",
          notes: "Pune Airport Terminal 1. Check in 2 hrs early. 2 checked bags per person.", location: "Indira Gandhi International Airport T3 Delhi", ticket: "No transit needed" },
        { name: "DEL ÃÂ¢ÃÂÃÂ HND: Flight NH838", time: "18:00 ÃÂ¢ÃÂÃÂ 05:35+1", cost: "Confirmed",
          notes: "Seat 21K (Achin). 8h 35min. Vegetarian meals pre-requested on ticket.", location: "Haneda Airport Terminal 2 Tokyo", ticket: "No transit needed" }
      ],
      food: [],
      shopping: [],
      facts: ["Tokyo Haneda (HND) is one of the world's most punctual airports ÃÂ¢ÃÂÃÂ ANA has a 95%+ on-time rate."],
      hacks: ["Carry kids' snacks from Pune ÃÂ¢ÃÂÃÂ Japanese convenience stores sell good snacks but familiar food helps for the flight.", "Charge all devices at the gate lounge ÃÂ¢ÃÂÃÂ Japan adapters are Type A (same as India but flat pins)."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 1 ÃÂ¢ÃÂÃÂ ARRIVAL TOKYO ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 1, date: "2026-05-19", dayOfWeek: "Tue",
      city: "Tokyo (Arrive HND)", theme: "Arrival & Settle In", region: "tokyo", confirmed: true,
      startLocation: "Haneda Airport Terminal 2 Tokyo",
      activities: [
        {
          name: 'Senso-ji Temple (Asakusa) & Nakamise-dori',
          time: 'Late Morning/Lunchtime (approx. 11:00 AM - 2:00 PM)',
          cost: 'Â¥0 (free admission)',
          notes: 'After arriving at Haneda, take the Keikyu Airport Line to Daimon, then Toei Asakusa Line to Asakusa Station. Explore Tokyo\'s oldest temple, walk through Kaminarimon Gate and Nakamise-dori shopping street. Enjoy pure vegetarian lunch at Marugoto Vegan Dining Asakusa, SEKAI Cafe Asakusa, or Kaemon Asakusa. Afterwards, take the Toei Asakusa Line directly to Aoto Station for apartment check-in at 3 PM.',
          location: 'Asakusa, Taito-ku, Tokyo',
          ticket: 'N/A'
        },
        { name: "Immigration + Arrivals", time: "05:35ÃÂ¢ÃÂÃÂ07:00", cost: "Free",
          notes: "Fill immigration card on plane. Biometric fingerprint scan at entry. Pick up pre-ordered pocket WiFi / SIM at arrivals hall (HND T2 has collection counters open from 6am). Change ÃÂÃÂ¥20,000 at airport for first 2 days.",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Not yet needed" },
        { name: "Buy Suica IC Cards + Store Bags", time: "07:00ÃÂ¢ÃÂÃÂ07:30", cost: "ÃÂÃÂ¥2,000 deposit each",
          notes: "Buy at HND station ticket machine ÃÂ¢ÃÂÃÂ tap 'ÃÂ¨ÃÂÃÂ±ÃÂ¨ÃÂªÃÂ' (English). Load ÃÂÃÂ¥3,000 per card. These cards pay for all trains, buses, and convenience stores. Store bags in HND coin lockers (ÃÂÃÂ¥400ÃÂ¢ÃÂÃÂ600) ÃÂ¢ÃÂÃÂ check-in isn't until 17:00.",
          location: "Haneda Airport Station Tokyo", ticket: "Just buying the Suica now" },
        { name: "Relax at HND or Nearby CafÃÂÃÂ©", time: "07:30ÃÂ¢ÃÂÃÂ16:00", cost: "~ÃÂÃÂ¥2,000",
          notes: "HND International Terminal food court has good vegetarian options. Or take Keikyu to Keihin-Kawasaki for a gentle first morning. Rest ÃÂ¢ÃÂÃÂ you've been flying all night!",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Suica IC Card ÃÂÃÂ· Keikyu Line ÃÂÃÂ¥310" },
        { name: "Route to AO103 Apt, Aoto", time: "16:00", cost: "~ÃÂÃÂ¥700/person",
          notes: "Keikyu Line ÃÂ¢ÃÂÃÂ Shinagawa (ÃÂÃÂ¥410) ÃÂ¢ÃÂÃÂ JR Yamanote ÃÂ¢ÃÂÃÂ Nippori ÃÂ¢ÃÂÃÂ Keisei Line ÃÂ¢ÃÂÃÂ Aoto (~65 min). OR taxi ÃÂÃÂ¥5,000ÃÂ¢ÃÂÃÂ6,000 for heavy luggage. Ask driver 'Aoto station, please' (ÃÂ£ÃÂÃÂ¢ÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂÃÂ©ÃÂ§ÃÂ).",
          location: "Aoto Station Katsushika Tokyo", ticket: "Suica IC Card ÃÂÃÂ· Keikyu + JR Yamanote + Keisei" },
        { name: "Check in AO103 Apt", time: "From 17:00", cost: "Confirmed ÃÂ¢ÃÂÃÂ¹63,645",
          notes: "Conf: 6802.586.981 | PIN: 8637. Full kitchen, washing machine, A/C, hot tub, ground floor, direct bus to Disneyland and Haneda. Pick up keys per booking instructions.",
          location: "Aoto Station Katsushika Tokyo", ticket: "Walk from Aoto Station" }
      ],
      food: [
        { name: "Onigiri (rice balls)", where: "Any 7-Eleven / FamilyMart", price: "ÃÂÃÂ¥120ÃÂ¢ÃÂÃÂ180", notes: "Tuna-free options: umeboshi (plum), konbu (seaweed), cheese. Look for ÃÂ¦ÃÂ¢ÃÂ or ÃÂ¦ÃÂÃÂÃÂ¥ÃÂ¸ÃÂ." },
        { name: "Vegetable Curry", where: "Airport food court", price: "~ÃÂÃÂ¥900", notes: "Japanese curry is mild and usually has a vegetarian option. Ask: ÃÂ¨ÃÂÃÂÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂ (niku nashi = no meat)." }
      ],
      shopping: [
        { name: "Suica Card + SIM", where: "Haneda Airport Station / arrivals", price: "ÃÂÃÂ¥2,000 deposit", notes: "Most important purchase of the trip ÃÂ¢ÃÂÃÂ covers almost all transport and konbini shopping." }
      ],
      facts: ["Aoto station is on the Keisei Line ÃÂ¢ÃÂÃÂ the same line that connects to Narita Airport and Asakusa.","Japan's convenience stores (konbini) are genuinely excellent ÃÂ¢ÃÂÃÂ fresh food, ATMs, printing, and friendly staff."],
      hacks: [
        '💡 Early check-in at AO103 apartment is confirmed for 3:00 PM today. Plan your activities to allow for this.',"ÃÂ°ÃÂÃÂÃÂ° Mobile Suica via Apple/Google Wallet means no deposit and you can top up from your phone.", "ÃÂ°ÃÂÃÂÃÂ° 7-Eleven ATMs accept all foreign Visa/Mastercard cards ÃÂ¢ÃÂÃÂ withdraw large amounts to avoid multiple fees.", "ÃÂ°ÃÂÃÂÃÂ Kids find the konbini drink section magical ÃÂ¢ÃÂÃÂ budget ÃÂÃÂ¥300 for an 'explore the drinks' moment on day 1."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 2 ÃÂ¢ÃÂÃÂ ASAKUSA + YANAKA ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 2, date: "2026-05-20", dayOfWeek: "Wed",
      city: "Tokyo", theme: "Asakusa + Yanaka Old Town", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Senso-ji Temple, Asakusa", time: "08:00", cost: "Free",
          notes: "Tokyo's oldest temple (628 AD). Giant red Kaminarimon lantern gate. Nakamise shopping street opens 10am ÃÂ¢ÃÂÃÂ ningyo-yaki (fish-shaped cake filled with bean paste) ÃÂÃÂ¥150. Beautiful incense burner: waft smoke over the kids for good luck!",
          location: "Sensoji Temple Asakusa Tokyo", ticket: "Suica ÃÂÃÂ· Keisei Line ÃÂ¢ÃÂÃÂ Aoto ÃÂ¢ÃÂÃÂ Asakusa (~25 min, ÃÂÃÂ¥240)" },
        { name: "Nakamise Shopping Street", time: "10:00", cost: "~ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ1,000 snacks",
          notes: "250m arcade of traditional stalls. Get: ningyo-yaki ÃÂÃÂ¥150, agemunji (fried dough with sesame) ÃÂÃÂ¥200, kaminari-okoshi (rice cracker) ÃÂÃÂ¥300. All vegetarian! Don't buy 'ninja swords' ÃÂ¢ÃÂÃÂ kids will fence each other all trip.",
          location: "Nakamise Shopping Street Asakusa Tokyo", ticket: "Walk from Senso-ji" },
        { name: "Yanaka Ginza Old Town", time: "12:00", cost: "Free",
          notes: "Tokyo's last pre-war neighbourhood. Shotengai with resident cats, pottery studios, old-fashioned candy shops. Melon-pan ÃÂÃÂ¥200. Walk: 10 min from Nippori station. The cemetery is actually lovely ÃÂ¢ÃÂÃÂ peaceful stroll under old trees.",
          location: "Yanaka Ginza Tokyo", ticket: "Suica ÃÂÃÂ· Walk from Nippori (Keisei Line, ÃÂÃÂ¥150)" },
        { name: "Ueno Park + Shinobazu Pond", time: "14:30", cost: "Free",
          notes: "Lotus-covered pond, swan boats ÃÂÃÂ¥700/30 min. Tokyo National Museum (kids: mummy room!) ÃÂÃÂ¥630 adult. Ameyoko street market for cheap snacks and goods.",
          location: "Ueno Park Tokyo", ticket: "Walk 7 min from Yanaka" }
      ],
      food: [
        { name: "Ningyo-yaki", where: "Nakamise Street, Asakusa", price: "ÃÂÃÂ¥150 each", notes: "Bean-paste filled rice cakes shaped like Kaminarimon lanterns. Freshly made, warm ÃÂ¢ÃÂÃÂ kids love them." },
        { name: "Melon Pan", where: "Yanaka Ginza stalls", price: "ÃÂÃÂ¥200", notes: "Sweet bread with a crispy sugar crust. Best eaten warm. Classic Tokyo snack." },
        { name: "Vegetable ramen", where: "Soranoiro near Asakusa", price: "~ÃÂÃÂ¥1,200", notes: "One of Tokyo's few dedicated veg ramen spots. Try the tomato veg ramen." }
      ],
      shopping: [
        { name: "Traditional crafts / tenugui", where: "Nakamise / Yanaka shops", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ2,000", notes: "Tenugui (thin Japanese towel/cloth) make great gifts and are lightweight." },
        { name: "Agemunji rice crackers", where: "Nakamise Asakusa", price: "ÃÂÃÂ¥300", notes: "Traditional Tokyo sweet ÃÂ¢ÃÂÃÂ bring some back for Pune!" }
      ],
      facts: ["Senso-ji receives over 30 million visitors a year ÃÂ¢ÃÂÃÂ more than any other religious site in Japan.", "Yanaka survived the 1923 earthquake and WWII bombing raids ÃÂ¢ÃÂÃÂ making it a genuinely pre-war neighbourhood, unlike the rest of Tokyo."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Visit Senso-ji before 8am ÃÂ¢ÃÂÃÂ completely empty, zero charge. Temple is open 24/7.", "ÃÂ°ÃÂÃÂÃÂ Let kids pull an omikuji (fortune paper) from the box at Senso-ji ÃÂ¢ÃÂÃÂ ÃÂÃÂ¥100 and absolutely thrilling.","ÃÂ°ÃÂÃÂÃÂ° Ueno Park is free and has multiple museums ÃÂ¢ÃÂÃÂ pick one if it rains."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 3 ÃÂ¢ÃÂÃÂ DISNEYLAND ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 3, date: "2026-05-21", dayOfWeek: "Thu",
      city: "Tokyo", theme: "Tokyo Disneyland ÃÂ¢ÃÂÃÂ Full Day ÃÂ°ÃÂÃÂÃÂ¡", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Tokyo Disneyland ÃÂ¢ÃÂÃÂ Full Day", time: "08:00ÃÂ¢ÃÂÃÂ21:00", cost: "ÃÂÃÂ¥9,400 adult / ÃÂÃÂ¥5,800 child (4ÃÂ¢ÃÂÃÂ11)",
          notes: "Fantasyland (kids!): Peter Pan's Flight, Dumbo, Pooh, Carousel. Tomorrowland: Space Mountain, Buzz Lightyear. Big Thunder Mountain (kids' favourite!). Haunted Mansion ÃÂ¢ÃÂÃÂ Achin & Snigdha ride while kids watch. Electrical Parade at dusk ÃÂ¢ÃÂÃÂ perfect evening ending. 31 Ice Cream ÃÂÃÂ¥31 scoops on your birthday number! Vegetarian: fries, corn, fruit cups, popcorn carts everywhere.",
          location: "Tokyo Disneyland Urayasu Chiba", officialUrl: "https://www.tokyodisneyresort.jp/en/tdl.html",
          ticket: "Suica + JR Keiyo Line ÃÂÃÂ· Nippori ÃÂ¢ÃÂÃÂ Maihama (25 min, ÃÂÃÂ¥420) OR direct bus from near apt" }
      ],
      food: [
        { name: "Popcorn (seasonal flavours!)", where: "Popcorn carts around park", price: "ÃÂÃÂ¥400ÃÂ¢ÃÂÃÂ500", notes: "Caramel, curry, milk tea flavours. Vegetarian and amazing! Get a bucket." },
        { name: "Gyoza Man (veg version)", where: "Fantasyland counter", price: "ÃÂÃÂ¥600", notes: "Ask specifically for vegetable version at the Fantasyland counter near Cinderella Castle." },
        { name: "Soft serve ice cream", where: "Various carts", price: "ÃÂÃÂ¥300ÃÂ¢ÃÂÃÂ500", notes: "Seasonal flavours ÃÂ¢ÃÂÃÂ May often has melon or strawberry." }
      ],
      shopping: [
        { name: "Disney character goods", where: "World Bazaar entrance", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ3,000", notes: "Buy on the WAY OUT at World Bazaar (entrance area) ÃÂ¢ÃÂÃÂ same selection, you'll have carried it all day otherwise." },
        { name: "Mickey popcorn bucket", where: "Popcorn carts", price: "ÃÂÃÂ¥2,400", notes: "Reusable bucket with refills ÃÂÃÂ¥400. Worth it for a long day." }
      ],
      facts: ["Tokyo Disneyland is the most visited theme park in Asia and the second most visited in the world.", "The Japanese attention to detail extends to Disney ÃÂ¢ÃÂÃÂ cast members can often speak English and the park has the lowest litter rate of any Disney resort."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° PRE-BOOK tickets at tokyodisneyresort.jp (60-day window). Never buy at the gate ÃÂ¢ÃÂÃÂ no physical booths.", "ÃÂ°ÃÂÃÂÃÂ Use the My Disney Experience app to check wait times. Head to Space Mountain or Big Thunder Mountain first ÃÂ¢ÃÂÃÂ queues double by 10am.", "ÃÂ°ÃÂÃÂÃÂ° Pack your own water bottle ÃÂ¢ÃÂÃÂ free water refills at all restaurants inside.", "ÃÂ°ÃÂÃÂÃÂ The nighttime Electrical Parade is unmissable for kids ÃÂ¢ÃÂÃÂ stake out a spot 45 min before it starts."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 4 ÃÂ¢ÃÂÃÂ TEAMLAB + ODAIBA ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 4, date: "2026-05-22", dayOfWeek: "Fri",
      city: "Tokyo", theme: "teamLab Planets + Odaiba", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        {
          name: 'LEGOLAND Discovery Center Tokyo',
          time: 'Full day (approx. 2-3 hours inside)',
          cost: 'ÃÂÃÂ¥2300 per person (online booking recommended for discount)',
          notes: 'Indoor LEGO-themed attraction, ideal for children aged 3-10. Adults must be accompanied by a child. Features rides, 4D cinema, Miniland, and building areas. Located in Odaiba.',
          location: 'Decks Tokyo Beach, Odaiba',
          ticket: 'Purchase online in advance for a discount and priority entry.'
        },
        { name: "teamLab Planets, Toyosu", time: "09:00 (PRE-BOOKED SLOT)", cost: "ÃÂÃÂ¥3,200 adult / ÃÂÃÂ¥800 child (4ÃÂ¢ÃÂÃÂ12)",
          notes: "6 immersive digital art rooms. Knee-deep koi pond (kids FREAK OUT, in the best way!). Infinite Crystal Universe. Floating Flower Garden ÃÂ¢ÃÂÃÂ walk under 10,000 hanging orchids. Roll trousers to knees. Go barefoot throughout. Allow 90 min.",
          location: "teamLab Planets Toyosu Tokyo", officialUrl: "https://www.teamlab.art/e/planets/",
          ticket: "Suica ÃÂÃÂ· Yurakucho Line ÃÂ¢ÃÂÃÂ Toyosu (ÃÂÃÂ¥240)" },
        { name: "Life-size Gundam Statue, Odaiba", time: "12:00", cost: "Free",
          notes: "18m tall, it MOVES. Incredible photo spot at DiverCity mall plaza. Built for the 40th anniversary of the Gundam franchise. Even non-fans are stunned.",
          location: "DiverCity Tokyo Plaza Odaiba", ticket: "Suica ÃÂÃÂ· Yurikamome Line from Shimbashi ÃÂ¢ÃÂÃÂ Odaiba-kaihin-koen (ÃÂÃÂ¥320)" },
        { name: "Odaiba Beach + Rainbow Bridge", time: "14:00", cost: "Free",
          notes: "Artificial beach with stunning views of Rainbow Bridge and the Tokyo skyline. Best sunset spot in the city. Venus Fort shopping mall nearby.",
          location: "Odaiba Seaside Park Tokyo", ticket: "Walk from DiverCity (~10 min)" },
        { name: "Palette Town / Joypolis", time: "16:00", cost: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ2,000",
          notes: "Sega Joypolis indoor theme park for kids. Or explore Aqua City Odaiba mall and its rooftop with Statue of Liberty replica and bridge views.",
          location: "Aqua City Odaiba Tokyo", ticket: "Walk in Odaiba area" }
      ],
      food: [
        { name: "Veggie sushi set", where: "Conveyor belt sushi near Toyosu market", price: "ÃÂÃÂ¥800ÃÂ¢ÃÂÃÂ1,200", notes: "Kappa (cucumber), avocado, pickled plum rolls are all vegetarian. Say 'vegetarian' (ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¸ÃÂ£ÃÂÃÂ¿ÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂ¢ÃÂ£ÃÂÃÂ³) to staff." },
        { name: "Crepes", where: "Odaiba mall food court", price: "ÃÂÃÂ¥600ÃÂ¢ÃÂÃÂ800", notes: "Strawberry + cream crepes are always vegetarian and a hit with kids." }
      ],
      shopping: [
        { name: "Unique digital art goods", where: "teamLab shop (exit)", price: "ÃÂÃÂ¥1,000ÃÂ¢ÃÂÃÂ3,000", notes: "Beautiful art prints, notebooks, scarves in the teamLab aesthetic." }
      ],
      facts: ["teamLab Planets has welcomed over 3 million visitors since opening in 2018.", "Odaiba was built on artificial islands in Tokyo Bay ÃÂ¢ÃÂÃÂ the landfill used to fortify Tokyo against American warships in the 1850s."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Book teamLab via teamlabplanets.dmm.com directly ÃÂ¢ÃÂÃÂ cheaper than Klook by ~ÃÂÃÂ¥200. Book 9am slot to beat crowds.", "ÃÂ°ÃÂÃÂÃÂ Wear dark-coloured clothing for teamLab ÃÂ¢ÃÂÃÂ the art shows better against dark outfits.", "ÃÂ°ÃÂÃÂÃÂ° Yurikamome Line day pass ÃÂÃÂ¥820 covers the whole Odaiba loop ÃÂ¢ÃÂÃÂ worth it if spending the afternoon there."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 5 ÃÂ¢ÃÂÃÂ MEIJI + HARAJUKU + SHIBUYA ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 5, date: "2026-05-23", dayOfWeek: "Sat",
      city: "Tokyo", theme: "Meiji Shrine + Harajuku + Shibuya", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Meiji Shrine", time: "08:00", cost: "Free",
          notes: "Sacred forested path through 100,000 trees ÃÂ¢ÃÂÃÂ astonishing quiet in the middle of 14m-person Tokyo. Arrive before 8am. Writing a wish on an ema (wooden plaque) is ÃÂÃÂ¥600 ÃÂ¢ÃÂÃÂ kids love it. The sake barrel display near the entrance is iconic.",
          location: "Meiji Jingu Shrine Harajuku Tokyo", officialUrl: "https://www.meijijingu.or.jp/en/",
          ticket: "Suica ÃÂÃÂ· JR Yamanote ÃÂ¢ÃÂÃÂ Harajuku Stn (ÃÂÃÂ¥200 from Nippori)" },
        { name: "Harajuku Takeshita Street", time: "10:30", cost: "Free to browse",
          notes: "Tokyo's most bonkers fashion street. Crepes ÃÂÃÂ¥400ÃÂ¢ÃÂÃÂ600 (strawberry cream is always vegetarian). Rainbow cotton candy ÃÂÃÂ¥600. Pastel colour everything. Kids will want everything ÃÂ¢ÃÂÃÂ set a budget before entering!",
          location: "Takeshita Street Harajuku Tokyo", ticket: "3-min walk from Harajuku Stn" },
        { name: "Omotesando Boulevard", time: "11:30", cost: "Window shopping",
          notes: "Tokyo's Champs-ÃÂÃÂlysÃÂÃÂ©es. High-end boutiques (Louis Vuitton, Prada) in architecturally stunning buildings. Free to walk and admire. Great CafÃÂÃÂ© for lunch.",
          location: "Omotesando Boulevard Tokyo", ticket: "5-min walk from Takeshita" },
        { name: "Shibuya Scramble Crossing", time: "14:00", cost: "Free",
          notes: "The most famous crossing in the world ÃÂ¢ÃÂÃÂ up to 3,000 people cross from all directions simultaneously. Stand and wait for the light to change. Best viewed from Starbucks on the 2nd floor (arrive early for window seat). PokÃÂÃÂ©mon Center Shibuya ÃÂ¢ÃÂÃÂ free entry, largest PokÃÂÃÂ©mon merch selection.",
          location: "Shibuya Scramble Crossing Tokyo", ticket: "Suica ÃÂÃÂ· JR Yamanote ÃÂ¢ÃÂÃÂ Shibuya (ÃÂÃÂ¥160)" },
        { name: "Shibuya Sky Observatory", time: "17:30 (sunset!)", cost: "ÃÂÃÂ¥2,000 adult / ÃÂÃÂ¥1,200 child",
          notes: "Japan's highest open-air rooftop deck. 360ÃÂÃÂ° views at golden hour ÃÂ¢ÃÂÃÂ absolutely stunning. Buy tickets online in advance. Bring a light jacket ÃÂ¢ÃÂÃÂ it's windy up top!",
          location: "Shibuya Sky Observatory Tokyo", officialUrl: "https://www.shibuya-scramble-square.com/sky/",
          ticket: "Walk from Shibuya Station" }
      ],
      food: [
        { name: "Harajuku crepes", where: "Any crepe stand on Takeshita St", price: "ÃÂÃÂ¥400ÃÂ¢ÃÂÃÂ600", notes: "Strawberry + cream, matcha + red bean, banana + Nutella. All have veg options." },
        { name: "Komeda Coffee breakfast", where: "Near Harajuku station", price: "~ÃÂÃÂ¥700", notes: "Free thick toast with any morning drink before 11am. Real filling breakfast hack." },
        { name: "Shibuya food basement (depachika)", where: "Shibuya Hikarie B2F", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ1,500", notes: "Incredible prepared foods. Get onigiri sets, veggie bento, matcha sweets before the observatory." }
      ],
      shopping: [
        { name: "PokÃÂÃÂ©mon merchandise", where: "PokÃÂÃÂ©mon Center Shibuya (free entry)", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ5,000", notes: "Three floors of PokÃÂÃÂ©mon everything. Kids will go berserk ÃÂ¢ÃÂÃÂ set a budget and browse freely." },
        { name: "Pastel fashion items", where: "Takeshita Street boutiques", price: "ÃÂÃÂ¥1,000ÃÂ¢ÃÂÃÂ3,000", notes: "Headbands, accessories, quirky socks ÃÂ¢ÃÂÃÂ inexpensive and very Tokyo." }
      ],
      facts: ["Shibuya Scramble has over 1 billion crossings per year ÃÂ¢ÃÂÃÂ more than any intersection on Earth.", "The trees in Meiji Shrine forest were donated by people from all 47 Japanese prefectures when the shrine was built in 1920."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Saturday Scramble is busiest around 6ÃÂ¢ÃÂÃÂ8pm ÃÂ¢ÃÂÃÂ go at 2pm for photos, return at sunset for Sky.", "ÃÂ°ÃÂÃÂÃÂ The Starbucks above Scramble Crossing: arrive 30 min before your preferred time to get a window seat.", "ÃÂ°ÃÂÃÂÃÂ° Suica card pays for scramble-adjacent vending machines ÃÂ¢ÃÂÃÂ Japan's vending machines are an experience in themselves!"]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 6 ÃÂ¢ÃÂÃÂ AKIHABARA + RENKOJI ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 6, date: "2026-05-24", dayOfWeek: "Sun",
      city: "Tokyo", theme: "Akihabara + Renkoji Temple", region: "tokyo", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Akihabara Electric Town", time: "10:00", cost: "Free to browse",
          notes: "Tokyo's legendary electronics and anime district. Multi-floor retro game stores, anime figurine shops, manga cafÃÂÃÂ©s. PokÃÂÃÂ©mon Center DX (7th floor, Yodobashi AKB): free entry, largest in Japan. Radio Kaikan building has 9 floors of collectibles. Gacha machines on every corner ÃÂ¢ÃÂÃÂ ÃÂÃÂ¥200ÃÂ¢ÃÂÃÂ500 per try.",
          location: "Akihabara Electric Town Tokyo", ticket: "Suica ÃÂÃÂ· JR Yamanote ÃÂ¢ÃÂÃÂ Akihabara (ÃÂÃÂ¥200 from Aoto via Nippori)" },
        { name: "Don Quijote, Akihabara", time: "12:00", cost: "Browsing free",
          notes: "6-floor discount mega-store open 24/7. Cheap snacks, Japanese cosmetics, electronics, costume items, souvenirs at below-retail prices. Great for picking up omiyage (gifts) for Pune.",
          location: "Don Quijote Akihabara Tokyo", ticket: "3-min walk from JR Akihabara" },
        { name: "Renkoji Temple (Netaji Bose Memorial)", time: "15:00", cost: "Free",
          notes: "A uniquely moving stop ÃÂ¢ÃÂÃÂ the ashes of Netaji Subhas Chandra Bose are interred here since 1945. A small, serene temple that represents the deep IndiaÃÂ¢ÃÂÃÂJapan friendship during WWII. 10-min walk from Higashi-Koenji station. Few tourists.",
          location: "Renkoji Temple Koenji Tokyo", ticket: "Suica ÃÂÃÂ· Tokyo Metro Marunouchi Line ÃÂ¢ÃÂÃÂ Higashi-Koenji (ÃÂÃÂ¥200)" },
        { name: "Indian Dinner at AO103 Apt Kitchen", time: "Evening", cost: "ÃÂÃÂ¥1,500 groceries",
          notes: "Use the full kitchen. Dal, sabzi, rice ÃÂ¢ÃÂÃÂ saves ÃÂ¢ÃÂÃÂ¹2,000+ vs restaurant. Pick up groceries at Seiyu supermarket near Aoto station (5 min walk). Also restocking day: do laundry in the apt washing machine.",
          location: "Aoto Station Katsushika Tokyo", ticket: "Suica ÃÂÃÂ· Return to Aoto" }
      ],
      food: [
        { name: "Maid cafÃÂÃÂ© experience", where: "@home cafÃÂÃÂ©, Akihabara", price: "ÃÂÃÂ¥1,500ÃÂ¢ÃÂÃÂ2,000 cover", notes: "Unique Tokyo experience ÃÂ¢ÃÂÃÂ costumed maids draw on your omurice (omelette rice). Vegetarian option available." },
        { name: "Don Quijote instant food", where: "Don Quijote Akihabara", price: "ÃÂÃÂ¥200ÃÂ¢ÃÂÃÂ400", notes: "Japanese instant noodles, rice crackers, exotic Kit Kats for kids ÃÂ¢ÃÂÃÂ cheap and fun haul." }
      ],
      shopping: [
        { name: "Gacha machine capsule toys", where: "Akihabara (everywhere!)", price: "ÃÂÃÂ¥200ÃÂ¢ÃÂÃÂ500 per try", notes: "Budget ÃÂÃÂ¥1,500ÃÂ¢ÃÂÃÂ2,000 per child. PokÃÂÃÂ©mon, Sanrio, Studio Ghibli gacha available." },
        { name: "Souvenir snacks", where: "Don Quijote", price: "ÃÂÃÂ¥200ÃÂ¢ÃÂÃÂ500/pack", notes: "Pocky, Tokyo Banana, Royce chocolate, Matcha Kit Kat ÃÂ¢ÃÂÃÂ good value vs airport." }
      ],
      facts: ["Renkoji Temple's priest performed prayers for Netaji's spirit ÃÂ¢ÃÂÃÂ the India-Japan connection here dates to 1945.", "Akihabara's name means 'Field of Autumn Leaves' ÃÂ¢ÃÂÃÂ it had nothing to do with electronics until post-WWII black market radios transformed it."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Buy souvenirs at Don Quijote ÃÂ¢ÃÂÃÂ cheaper than Narita airport and better selection.", "ÃÂ°ÃÂÃÂÃÂ Gacha machines: research what series are in stock at 'gacha gacha no mise' stores for more variety.", "ÃÂ°ÃÂÃÂÃÂ° Supermarket after 7pm: look for orange ÃÂÃÂ½ÃÂ¤ÃÂ¾ÃÂ¡ (hanprice) stickers for 50% off premium items."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 7 ÃÂ¢ÃÂÃÂ NIKKO ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 7, date: "2026-05-25", dayOfWeek: "Mon",
      city: "Nikko Day Trip", theme: "Nikko UNESCO ÃÂ¢ÃÂÃÂ Full Day ÃÂ¢ÃÂÃÂ©", region: "tokyo", confirmed: false,
      startLocation: "Asakusa Station Tokyo",
      activities: [
        { name: "Tobu Line: Asakusa ÃÂ¢ÃÂÃÂ Nikko", time: "Depart 07:30", cost: "Tobu 2-day pass ÃÂÃÂ¥2,720 adult / ÃÂÃÂ¥1,360 child",
          notes: "Buy Tobu Nikko 2-Day Pass at Asakusa station. Covers train AND bus in Nikko. Express Revaty train is comfortable (1h 50min). Buy from the Tobu Sightseeing Service Center at Asakusa station.",
          location: "Nikko Station Tochigi", ticket: "Tobu Nikko 2-Day Pass (includes bus to all sites)" },
        { name: "Toshogu Shrine (UNESCO)", time: "09:30", cost: "ÃÂÃÂ¥1,300 adult / ÃÂÃÂ¥450 child",
          notes: "Japan's most ornate shrine ÃÂ¢ÃÂÃÂ gold leaf, intricate carvings, 5,000 artworks. Famous 3 Wise Monkeys (Mizaru, Kikazaru, Iwazaru). Sleeping Cat (Nemuri-neko) carving. Allow 90 min to explore properly.",
          location: "Nikko Toshogu Shrine Tochigi", officialUrl: "https://www.nikko-toshogu.jp/english/",
          ticket: "Bus from Nikko Stn (5 min, included in 2-Day Pass)" },
        { name: "Shinkyo Sacred Bridge", time: "11:30", cost: "Free to view / ÃÂÃÂ¥300 to cross",
          notes: "Bright vermilion lacquered bridge over the Daiya River. One of Japan's three most beautiful bridges. Cross if you want the best photo angle.",
          location: "Shinkyo Sacred Bridge Nikko Tochigi", ticket: "3-min walk from Toshogu bus stop" },
        { name: "Kegon Falls", time: "12:30", cost: "ÃÂÃÂ¥570 elevator to base",
          notes: "97m waterfall ÃÂ¢ÃÂÃÂ Japan's most famous. Take the elevator for the base viewpoint ÃÂ¢ÃÂÃÂ stunning full view. May means snowmelt is at its peak ÃÂ¢ÃÂÃÂ maximum water flow!",
          location: "Kegon Falls Nikko Tochigi", ticket: "Bus from Nikko Stn ÃÂ¢ÃÂÃÂ Chuzenji-ko (30 min, included in Pass)" },
        { name: "Lake Chuzenji", time: "14:00", cost: "Free / Boat ÃÂÃÂ¥1,000",
          notes: "Stunning mountain lake at 1,269m altitude. Boat rides available. Walk along the shore for calm mountain views. Try black-sesame soft serve at the lake stalls ÃÂÃÂ¥350.",
          location: "Lake Chuzenji Nikko Tochigi", ticket: "Walk from Kegon Falls (2 min)" },
        { name: "Return to Tokyo", time: "16:00", cost: "Included in Pass",
          notes: "ÃÂ¢ÃÂÃÂ ÃÂ¯ÃÂ¸ÃÂ LAST NIGHT at AO103 Apt! Pack bags tonight. Return by 19:00, cook quick dinner, prep for checkout tomorrow at 10am.",
          location: "Asakusa Station Tokyo", ticket: "Tobu Line: Nikko ÃÂ¢ÃÂÃÂ Asakusa" }
      ],
      food: [
        { name: "Yuba (tofu skin) cuisine", where: "Nikko restaurants near shrine", price: "ÃÂÃÂ¥1,200ÃÂ¢ÃÂÃÂ1,800 set", notes: "Nikko is famous for yuba (tofu skin). Veg tofu skin tempura set is delicious and easy to find." },
        { name: "Black sesame soft serve", where: "Lake Chuzenji stalls", price: "ÃÂÃÂ¥350", notes: "Rich, nutty flavour. Also try the frozen lemon from stalls near the shrine." }
      ],
      shopping: [
        { name: "Nikko's miso and pickled veg", where: "Souvenir shops near Toshogu", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ1,500", notes: "Great quality regional miso paste and pickled mountain vegetables. Lightweight to carry." }
      ],
      facts: ["Toshogu took 15,000 craftsmen over 2 years to build in 1636.", "Nikko has a saying: 'Never say kekkÃÂÃÂ (magnificent) until you've seen NikkÃÂÃÂ' ÃÂ¢ÃÂÃÂ it's so beautiful the word became the slogan for the entire region."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Tobu 2-Day Pass is the best value ÃÂ¢ÃÂÃÂ covers train AND all buses. Buy at Asakusa station before boarding.", "ÃÂ°ÃÂÃÂÃÂ Pack lunch from AO103 kitchen ÃÂ¢ÃÂÃÂ restaurants near Toshogu are pricey. A good bento saves ÃÂÃÂ¥2,000.", "ÃÂ¢ÃÂÃÂ ÃÂ¯ÃÂ¸ÃÂ Pack bags tonight ÃÂ¢ÃÂÃÂ checkout tomorrow is 10am!"]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 8 ÃÂ¢ÃÂÃÂ TRANSIT: TOKYO ÃÂ¢ÃÂÃÂ HAKONE ÃÂ¢ÃÂÃÂ KYOTO ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 8, date: "2026-05-26", dayOfWeek: "Tue",
      city: "Tokyo ÃÂ¢ÃÂÃÂ Hakone ÃÂ¢ÃÂÃÂ Kyoto", theme: "Checkout + Hakone Stopover ÃÂ¢ÃÂÃÂ Arrive Kyoto", region: "transit", confirmed: false,
      startLocation: "Aoto Station Katsushika Tokyo",
      activities: [
        { name: "Check out AO103 Apt (10:00)", time: "10:00", cost: "",
          notes: "Leave apartment clean, return key per booking instructions. Leave bags at Shinjuku Station coin lockers (ÃÂÃÂ¥500) ÃÂ¢ÃÂÃÂ easier to access for Romancecar.",
          location: "Shinjuku Station Tokyo", ticket: "Suica ÃÂÃÂ· Keisei ÃÂ¢ÃÂÃÂ Nippori ÃÂ¢ÃÂÃÂ JR Yamanote ÃÂ¢ÃÂÃÂ Shinjuku" },
        { name: "Odakyu Romancecar: Shinjuku ÃÂ¢ÃÂÃÂ Hakone-Yumoto", time: "~11:00", cost: "Hakone Free Pass ÃÂÃÂ¥7,100 adult / ÃÂÃÂ¥3,550 child + ÃÂÃÂ¥1,200 Romancecar surcharge",
          notes: "Scenic, comfortable express train with panoramic windows. Buy Hakone Free Pass at Shinjuku Odakyu counter (covers all transport in Hakone). Romancecar surcharge ÃÂÃÂ¥1,200 adult ÃÂ¢ÃÂÃÂ book window seats!",
          location: "Hakone-Yumoto Station Kanagawa", officialUrl: "https://www.odakyu.jp/english/",
          ticket: "Hakone Free Pass + Romancecar surcharge" },
        { name: "Hakone Ropeway over Owakudani", time: "13:00", cost: "Included in Free Pass",
          notes: "Float over active volcanic vents! Sulphur steam rising below. Buy kuro-tamago (black volcanic eggs, hardboiled in the vents) ÃÂÃÂ¥600/5 eggs. Said to add 7 years to your life per egg. Kids love it!",
          location: "Owakudani Ropeway Station Hakone", ticket: "Hakone Tozan Bus ÃÂ¢ÃÂÃÂ Sounzan ÃÂ¢ÃÂÃÂ Ropeway (all included in Pass)" },
        { name: "Lake Ashi Pirate Boat", time: "14:30", cost: "Included in Free Pass",
          notes: "30-min scenic cruise on a replica pirate ship across the lake. Mt. Fuji visible in good weather (check tenki.jp/en). Great photo ops! Boats run every 30 min.",
          location: "Hakone-machi Port Lake Ashi", ticket: "Hakone Tozan Bus from Owakudani ÃÂ¢ÃÂÃÂ Togendai Ferry Terminal" },
        { name: "Odawara ÃÂ¢ÃÂÃÂ Shinkansen ÃÂ¢ÃÂÃÂ Kyoto", time: "~17:00", cost: "JR Pass covers Hikari",
          notes: "Bus from Moto-Hakone-ko ÃÂ¢ÃÂÃÂ Odawara Station (~50 min, included in Pass). Hikari Shinkansen Odawara ÃÂ¢ÃÂÃÂ Kyoto (~90 min). Arrive Kyoto ~19:30. Check in hotel.",
          location: "Kyoto Station Kyoto", ticket: "JR Pass: Odawara ÃÂ¢ÃÂÃÂ Kyoto on Hikari Shinkansen" }
      ],
      food: [
        { name: "Kuro-tamago (black volcanic eggs)", where: "Owakudani ropeway stop", price: "ÃÂÃÂ¥600/5 eggs", notes: "Hardboiled in volcanic sulphur springs. Jet black shell, normal inside. Each adds 7 years to life according to legend!" },
        { name: "Ekiben (train bento)", where: "Odawara or Shinkansen platform shops", price: "ÃÂÃÂ¥1,200ÃÂ¢ÃÂÃÂ1,500", notes: "Traditional train bento box. Veg options usually include tofu, pickles, rice, vegetable tempura sets." }
      ],
      shopping: [],
      facts: ["Owakudani ('Great Boiling Valley') was created by a volcanic explosion 3,000 years ago.", "The Tokaido Shinkansen line carries 450,000 passengers every day ÃÂ¢ÃÂÃÂ more than any high-speed rail line in the world."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Hakone Free Pass is excellent value ÃÂ¢ÃÂÃÂ covers ropeway, boat, and ALL buses. Buy at Shinjuku Odakyu stn.", "ÃÂ°ÃÂÃÂÃÂ Mt. Fuji visibility: check tenki.jp/en the night before ÃÂ¢ÃÂÃÂ mornings are clearest.", "ÃÂ°ÃÂÃÂÃÂ° Store bags at Shinjuku coin lockers (ÃÂÃÂ¥500) rather than Hakone-Yumoto (ÃÂÃÂ¥600) ÃÂ¢ÃÂÃÂ easier for the Romancecar."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 9 ÃÂ¢ÃÂÃÂ ARASHIYAMA ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 9, date: "2026-05-27", dayOfWeek: "Wed",
      city: "Kyoto", theme: "Arashiyama Full Day ÃÂ°ÃÂÃÂÃÂ", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        {
          name: 'Nintendo Museum',
          time: 'Allow 2-3 hours',
          cost: 'ÃÂ¥3,300 (adults), ÃÂ¥2,200 (youth), ÃÂ¥1,100 (children)',
          notes: 'Explore the history of Nintendo with interactive exhibits and exclusive merchandise. CafÃÂ© offers a vegetarian mushroom burger. Requires advance lottery booking, apply 3 months prior to visit. Closed Tuesdays.',
          location: 'Uji City, Kyoto (near Ogura Station)',
          ticket: 'Advance lottery booking required via Nintendo Museum ticketing website'
        },
        { name: "Arashiyama Bamboo Grove (EARLY!)", time: "06:00", cost: "FREE ÃÂ¢ÃÂÃÂ Always open",
          notes: "Go at 6am ÃÂ¢ÃÂÃÂ completely deserted, sunlight filtering through 30m bamboo stalks. One of the most photogenic places in Japan. By 8:30am it's crowded. It's free 24/7 ÃÂ¢ÃÂÃÂ no gate, no ticket.",
          location: "Arashiyama Bamboo Grove Sagano Kyoto", ticket: "Suica ÃÂÃÂ· JR Sagano Line ÃÂ¢ÃÂÃÂ Saga-Arashiyama Stn (ÃÂÃÂ¥240 from Kyoto Stn)" },
        { name: "Tenryu-ji Zen Garden (UNESCO)", time: "08:30", cost: "ÃÂÃÂ¥500/person",
          notes: "700-year-old Zen garden with Mt. Arashiyama as its 'borrowed scenery'. The pond reflects the mountain ÃÂ¢ÃÂÃÂ deeply peaceful. Shigetsu restaurant inside serves shojin ryori (Buddhist veg cuisine) ÃÂ¢ÃÂÃÂ book in advance for lunch ÃÂÃÂ¥5,000.",
          location: "Tenryuji Temple Arashiyama Kyoto", officialUrl: "https://www.tenryuji.com/en/",
          ticket: "3-min walk from Bamboo Grove" },
        { name: "Monkey Park Iwatayama", time: "10:00", cost: "ÃÂÃÂ¥550 adult / ÃÂÃÂ¥250 child",
          notes: "Steep 15-min hike up (go slow with kids). At top: 170 free-roaming Japanese macaques! You can hand-feed them through a mesh window with apple slices ÃÂÃÂ¥100. The monkeys will stare you down. Incredible panoramic view of Kyoto.",
          location: "Iwatayama Monkey Park Arashiyama Kyoto", officialUrl: "https://www.monkeypark.jp/",
          ticket: "Walk 5 min from Tenryu-ji" },
        { name: "Togetsukyo Bridge + Bike Ride", time: "12:30", cost: "ÃÂÃÂ¥1,000/bike rental",
          notes: "Flat cycling path along the Katsura River. Beautiful mountain backdrop. Rental shop by the bridge. Easy for kids on their own bike or tandem.",
          location: "Togetsukyo Bridge Arashiyama Kyoto", ticket: "Walk from Monkey Park (~8 min)" },
        { name: "Shojin Ryori Lunch (Buddhist Veg)", time: "13:00", cost: "ÃÂÃÂ¥1,500ÃÂ¢ÃÂÃÂ2,500 set",
          notes: "Try Shigetsu at Tenryu-ji (book ahead) or Tofuya-Ukai (closer to bridge). Traditional 6-course Buddhist veg meal: tofu, yuba, seasonal mountain veg, miso. No meat, no fish, no eggs.",
          location: "Tenryuji Temple area Arashiyama Kyoto", ticket: "Walk from Togetsukyo Bridge" }
      ],
      food: [
        { name: "Shojin Ryori (Buddhist cuisine)", where: "Shigetsu at Tenryu-ji or area restaurants", price: "ÃÂÃÂ¥1,500ÃÂ¢ÃÂÃÂ5,000", notes: "Pure Buddhist vegetarian ÃÂ¢ÃÂÃÂ absolutely no meat, no fish, no eggs. Elegant presentation. Kids enjoy the tofu." },
        { name: "Yuba (tofu skin) soft serve", where: "Stalls near bamboo grove", price: "ÃÂÃÂ¥350", notes: "Unique Kyoto flavour. Rich, creamy. Also try matcha soft serve everywhere here." },
        { name: "Warabi mochi", where: "Wagashi shops near Togetsukyo", price: "ÃÂÃÂ¥400ÃÂ¢ÃÂÃÂ600", notes: "Jelly-like rice cake dusted in kinako (roasted soy powder) and sugar. 100% vegetarian traditional sweet." }
      ],
      shopping: [
        { name: "Kyoto ceramics & pottery", where: "Arashiyama souvenir shops", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ3,000", notes: "Handmade cups, small plates in traditional Kyoto patterns. Lighter than you think ÃÂ¢ÃÂÃÂ good gifts." },
        { name: "Bamboo crafts", where: "Shops near Bamboo Grove", price: "ÃÂÃÂ¥300ÃÂ¢ÃÂÃÂ1,500", notes: "Bamboo chopstick sets, small baskets, kids' bamboo toys ÃÂ¢ÃÂÃÂ unique to this area." }
      ],
      facts: ["The Arashiyama Bamboo Grove was listed by the Japanese government as one of the '100 Soundscapes of Japan' for the sound of wind through the stalks.", "Tenryu-ji was built by shogun Ashikaga Takauji in 1339 to comfort the spirit of Emperor Go-Daigo."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Bamboo Grove is FREE and open 24/7 ÃÂ¢ÃÂÃÂ arrive at 6am for magical emptiness.", "ÃÂ°ÃÂÃÂÃÂ Monkey Park: feed monkeys through the mesh window with apple slices ÃÂÃÂ¥100 ÃÂ¢ÃÂÃÂ kids absolutely love it.", "ÃÂ°ÃÂÃÂÃÂ° Bike rental: ÃÂÃÂ¥1,000 for the whole afternoon and covers more ground than walking."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 10 ÃÂ¢ÃÂÃÂ FUSHIMI INARI + KINKAKUJI CIRCUIT ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 10, date: "2026-05-28", dayOfWeek: "Thu",
      city: "Kyoto", theme: "Fushimi Inari ÃÂ¢ÃÂÃÂ Kiyomizudera ÃÂ¢ÃÂÃÂ Golden Temple", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "Fushimi Inari Taisha (EARLY!)", time: "06:00", cost: "FREE ÃÂ¢ÃÂÃÂ Open 24/7",
          notes: "Thousands of vermilion torii gates winding 4km up the mountain. Open 24/7, completely free. Hike to Yotsutsuji intersection (1 hr) for the panoramic city view ÃÂ¢ÃÂÃÂ perfect for kids. The foxes (kitsune statues) are Inari's messengers. Don't miss the small stalls selling inari sushi ÃÂÃÂ¥200.",
          location: "Fushimi Inari Taisha Kyoto", officialUrl: "https://inari.jp/en/",
          ticket: "Suica ÃÂÃÂ· JR Nara Line ÃÂ¢ÃÂÃÂ Inari Stn (5 min, ÃÂÃÂ¥150 from Kyoto Stn)" },
        { name: "Kiyomizudera Temple", time: "09:30", cost: "ÃÂÃÂ¥500 adult / ÃÂÃÂ¥200 child",
          notes: "Hillside temple with a massive wooden stage jutting over the valley ÃÂ¢ÃÂÃÂ no nails used! Stunning views. The approach (Ninenzaka & Sannenzaka lanes) is lined with matcha shops, pottery stores, traditional sweets. Budget ÃÂÃÂ¥500 for snacks on the way up.",
          location: "Kiyomizudera Temple Higashiyama Kyoto",
          ticket: "Suica ÃÂÃÂ· Bus #100 from Kyoto Stn ÃÂ¢ÃÂÃÂ Gojo-zaka (ÃÂÃÂ¥230)" },
        { name: "Ninenzaka & Sannenzaka Historic Lanes", time: "11:00", cost: "Free",
          notes: "Cobblestone lanes with preserved Edo-period townhouses. Best photo streets in Kyoto! Matcha soft serve ÃÂÃÂ¥300. Yatsuhashi (cinnamon mochi) shop every 5 steps. Kids love the old street feel.",
          location: "Ninenzaka Sannenzaka Higashiyama Kyoto", ticket: "Walk from Kiyomizudera" },
        { name: "Kinkakuji ÃÂ¢ÃÂÃÂ Golden Pavilion", time: "14:00", cost: "ÃÂÃÂ¥500 adult / ÃÂÃÂ¥300 child",
          notes: "The most photographed sight in Japan ÃÂ¢ÃÂÃÂ gold-leaf covered pavilion reflected in a perfect pond. Go after lunch when tour buses have thinned. Allow 45 min. Beautiful zen garden circuit around the lake.",
          location: "Kinkakuji Temple Kita-ku Kyoto",
          ticket: "Suica ÃÂÃÂ· Bus #205 or #101 from Gion ÃÂ¢ÃÂÃÂ Kinkakuji-michi (ÃÂÃÂ¥230)" },
        { name: "Ryoanji Rock Garden", time: "15:30", cost: "ÃÂÃÂ¥600 adult / ÃÂÃÂ¥300 child",
          notes: "The world's most celebrated zen rock garden ÃÂ¢ÃÂÃÂ 15 stones on white gravel, one always hidden. The puzzle that has fascinated monks for 500 years. Very peaceful. Adjacent pond garden is beautiful.",
          location: "Ryoanji Temple Kyoto",
          ticket: "Walk 15 min from Kinkakuji" }
      ],
      food: [
        { name: "Inari sushi (kitsune sushi)", where: "Stalls at Fushimi Inari entrance", price: "ÃÂÃÂ¥200/3 pieces", notes: "Sweet fried tofu pouches filled with rice ÃÂ¢ÃÂÃÂ a Kyoto specialty named after Inari foxes. 100% vegetarian!" },
        { name: "Matcha soft serve", where: "Every shop on Ninenzaka/Sannenzaka", price: "ÃÂÃÂ¥300", notes: "Rich, bitter-sweet matcha ice cream. Kyoto matcha is the best in Japan. Get the double cone ÃÂ¢ÃÂÃÂ matcha + hojicha." },
        { name: "Yatsuhashi", where: "Nishio Yatsuhashi on Ninenzaka", price: "ÃÂÃÂ¥400ÃÂ¢ÃÂÃÂ800 per box", notes: "Kyoto's most famous sweet ÃÂ¢ÃÂÃÂ raw mochi in cinnamon or matcha flavour, folded around bean paste. Totally vegetarian." }
      ],
      shopping: [
        { name: "Yatsuhashi boxes (gifts)", where: "Ninenzaka shops", price: "ÃÂÃÂ¥800ÃÂ¢ÃÂÃÂ1,500/box", notes: "Best Kyoto souvenir and very popular gift for Pune. Buy the original cinnamon AND the matcha version." },
        { name: "Kyoto ceramics", where: "Ninenzaka/Sannenzaka boutiques", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ3,000", notes: "The Higashiyama area has Kyoto's best pottery shops. Hand-decorated small plates are ÃÂÃÂ¥800 and beautiful." }
      ],
      facts: ["Kinkakuji was burned down by a monk in 1950 ÃÂ¢ÃÂÃÂ the incident was famously fictionalised in Mishima's novel 'The Temple of the Golden Pavilion'.", "The 15 stones of Ryoanji's rock garden are arranged so only 14 are visible from any angle ÃÂ¢ÃÂÃÂ the 15th is only visible when you achieve enlightenment."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Fushimi Inari is free and open 24/7 ÃÂ¢ÃÂÃÂ 6am is magical and empty.", "ÃÂ°ÃÂÃÂÃÂ Bus #100 'Raku' bus is designed for tourists ÃÂ¢ÃÂÃÂ stops at Kiyomizudera, Ginkakuji, Kinkakuji. Day pass ÃÂÃÂ¥600.", "ÃÂ°ÃÂÃÂÃÂ° Kyoto City Bus 1-day pass ÃÂÃÂ¥700 covers unlimited rides ÃÂ¢ÃÂÃÂ worth it if doing multiple bus routes."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 11 ÃÂ¢ÃÂÃÂ NARA ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 11, date: "2026-05-29", dayOfWeek: "Fri",
      city: "Nara (Day Trip)", theme: "Nara Deer Park + Todai-ji Giant Buddha", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "JR to Nara", time: "08:30", cost: "ÃÂÃÂ¥1,140 return adult / ÃÂÃÂ¥570 child",
          notes: "JR Nara Line: Kyoto ÃÂ¢ÃÂÃÂ Nara (50 min). JR Pass covers this. Buy deer cracker crackers (shika senbei ÃÂÃÂ¥200) just OUTSIDE the park from official vendors in paper bags ÃÂ¢ÃÂÃÂ not inside the park.",
          location: "Nara Station Nara", ticket: "JR Pass / Suica ÃÂÃÂ· JR Nara Line (50 min, ÃÂÃÂ¥710 one way)" },
        { name: "Nara Deer Park", time: "09:30ÃÂ¢ÃÂÃÂall day", cost: "FREE",
          notes: "1,200 wild sika deer roam freely. They BOW when they see crackers (trained behaviour). They will steal crackers from your bag ÃÂ¢ÃÂÃÂ hold tight! Kids will be in absolute heaven. Don't run ÃÂ¢ÃÂÃÂ deer chase runners.",
          location: "Nara Deer Park Nara", ticket: "Walk 5 min from Nara Station" },
        { name: "Todai-ji Temple ÃÂ¢ÃÂÃÂ Giant Buddha", time: "10:30", cost: "ÃÂÃÂ¥600 adult / ÃÂÃÂ¥300 child (under 15)",
          notes: "World's largest bronze Buddha (15m high, 500 tonnes!). World's largest wooden building. Find the pillar with a hole the size of the Buddha's nostril ÃÂ¢ÃÂÃÂ crawling through brings enlightenment! Kids line up for it.",
          location: "Todaiji Temple Nara", officialUrl: "https://www.todaiji.or.jp/english/",
          ticket: "Walk 15 min through deer park from Nara Stn" },
        { name: "Kasuga Taisha Shrine", time: "12:30", cost: "Free grounds / ÃÂÃÂ¥500 inner shrine",
          notes: "3,000 lanterns lining the path ÃÂ¢ÃÂÃÂ ancient and atmospheric even in daylight. The forested approach through deer park is beautiful. Free to walk to the main torii.",
          location: "Kasuga Taisha Shrine Nara", ticket: "Walk 10 min from Todaiji" },
        { name: "Naramachi Old Town", time: "14:30", cost: "Free",
          notes: "Historic merchant district with machiya wooden townhouses. Matcha dessert cafÃÂÃÂ©s, Nara-themed crafts, a famous old textile district. Nara no Kakinoha-zushi (persimmon leaf sushi ÃÂ¢ÃÂÃÂ veg options) is the local delicacy.",
          location: "Naramachi Nara City", ticket: "Walk 10 min south from Todaiji" }
      ],
      food: [
        { name: "Shojin ryori / Buddhist veg lunch", where: "Edosan Restaurant near Todaiji", price: "ÃÂÃÂ¥1,500ÃÂ¢ÃÂÃÂ2,500", notes: "Nara's oldest restaurant serves traditional Buddhist vegetarian sets. Tofu, mountain vegetables, rice, miso." },
        { name: "Nara matcha warabi mochi", where: "Naramachi cafÃÂÃÂ©s", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ800", notes: "Jelly-like mochi in matcha flavour, dusted with kinako powder. Light and delicious." },
        { name: "Mitarashi dango", where: "Stalls near Kasuga Taisha", price: "ÃÂÃÂ¥150ÃÂ¢ÃÂÃÂ300", notes: "Sweet sticky rice dumplings on a skewer with sweet soy glaze. Vegetarian. Perfect snack." }
      ],
      shopping: [
        { name: "Shika (deer) themed goods", where: "Naramachi shops", price: "ÃÂÃÂ¥300ÃÂ¢ÃÂÃÂ1,500", notes: "Deer are Nara's symbol ÃÂ¢ÃÂÃÂ themed cards, ceramics, keychains. Light and perfect as gifts." },
        { name: "Nara ink sticks and brushes", where: "Traditional shops in Naramachi", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ2,000", notes: "Nara has a 1,300-year tradition of making Indian ink ÃÂ¢ÃÂÃÂ beautiful craft items." }
      ],
      facts: ["Nara's deer are considered sacred messengers of the gods ÃÂ¢ÃÂÃÂ killing one was punishable by death until 1637.", "The Great Buddha at Todaiji took 9 years and 2.6 million people to build, completed in 752 AD."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° JR Pass covers the KyotoÃÂ¢ÃÂÃÂNara round trip ÃÂ¢ÃÂÃÂ free if you have it!", "ÃÂ°ÃÂÃÂÃÂ Deer crackers: buy OUTSIDE the park from vendors in paper bags ÃÂÃÂ¥200 ÃÂ¢ÃÂÃÂ cheaper and same product.", "ÃÂ°ÃÂÃÂÃÂ The pillar hole at Todaiji: kids queue to crawl through ÃÂ¢ÃÂÃÂ arrive early for shorter wait."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 12 ÃÂ¢ÃÂÃÂ PHILOSOPHER'S PATH + KIMONO ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 12, date: "2026-05-30", dayOfWeek: "Sat",
      city: "Kyoto", theme: "Philosopher's Path + Kimono Evening ÃÂ°ÃÂÃÂÃÂ", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "Ginkakuji ÃÂ¢ÃÂÃÂ Silver Pavilion", time: "08:30", cost: "ÃÂÃÂ¥500 adult / ÃÂÃÂ¥300 child",
          notes: "Elegant tea house pavilion. Famous 'sea of silver' sand cone in the garden (2m high, replicas lunar landscape!). Opens 8:30am ÃÂ¢ÃÂÃÂ go early. The hillside garden trail has beautiful Kyoto views.",
          location: "Ginkakuji Silver Pavilion Sakyo Kyoto",
          ticket: "Suica ÃÂÃÂ· Bus #5 from Kyoto Stn ÃÂ¢ÃÂÃÂ Ginkakuji-michi (ÃÂÃÂ¥230)" },
        { name: "Philosopher's Path Canal Walk", time: "10:00", cost: "Free",
          notes: "Gentle 2km canal walk between Ginkakuji and Nanzenji. Named after philosopher Nishida Kitaro who walked it daily. Late May: lush greenery and occasional late azaleas. Lined with cafÃÂÃÂ©s and boutiques.",
          location: "Philosophers Path Kyoto", ticket: "Walk from Ginkakuji south to Nanzenji" },
        { name: "Nanzenji Temple", time: "11:00", cost: "Free (grounds) / ÃÂÃÂ¥600 hojo garden",
          notes: "Massive sanmon gate (ÃÂÃÂ¥600 climb for views). The stone aqueduct bisecting the temple complex is stunning ÃÂ¢ÃÂÃÂ a Victorian-era red-brick structure built over an ancient Buddhist complex. Very photogenic.",
          location: "Nanzenji Temple Sakyo Kyoto", ticket: "Walk from Philosopher's Path end" },
        { name: "Kimono Rental in Gion (4 hrs)", time: "14:00ÃÂ¢ÃÂÃÂ18:00", cost: "~ÃÂÃÂ¥14,000 family of 4 (incl. hair styling)",
          notes: "Pre-book at Yumeyakata or Okamoto Rental. Girls get hair styling included. Walk through Gion's cobblestone Hanamikoji street in full kimono ÃÂ¢ÃÂÃÂ the most unforgettable photo experience of the trip. Book the 2pm slot for perfect golden-hour light around 5pm.",
          location: "Gion District Hanamikoji Kyoto", officialUrl: "https://www.yumeyakata.com/en/",
          ticket: "Suica ÃÂÃÂ· Bus #100 ÃÂ¢ÃÂÃÂ Gion bus stop (ÃÂÃÂ¥230)" },
        { name: "Gion Golden Hour Walk", time: "17:00", cost: "Free",
          notes: "Stroll Hanamikoji and Shirakawa canal in kimono at golden hour. If lucky, spot a geisha (maiko) heading to an engagement ÃÂ¢ÃÂÃÂ Gion is the last active geisha district in Japan. NEVER follow or photograph them up close.",
          location: "Hanamikoji Street Gion Kyoto", ticket: "Walking area" }
      ],
      food: [
        { name: "Tofu kaiseki set lunch", where: "Restaurants along Philosopher's Path", price: "ÃÂÃÂ¥1,500ÃÂ¢ÃÂÃÂ3,000", notes: "Many restaurants on the Path serve beautiful tofu-based vegetarian set lunches. Tousuiro near Nanzenji has a dedicated vegan set." },
        { name: "Matcha parfait", where: "CafÃÂÃÂ© Kissa Sawarabi near Ginkakuji", price: "ÃÂÃÂ¥900", notes: "Layers of matcha jelly, bean paste, rice cake, ice cream in a parfait glass. Peak Kyoto experience." }
      ],
      shopping: [
        { name: "Kimono accessories", where: "Rental shop exit / Gion shops", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ2,000", notes: "Hair pins, folded fans, small pouches in kimono-print fabric. Great for girls." },
        { name: "Wagashi sweets box", where: "Shops along Philosopher's Path", price: "ÃÂÃÂ¥1,000ÃÂ¢ÃÂÃÂ2,500", notes: "Seasonally crafted traditional sweets ÃÂ¢ÃÂÃÂ beautiful handmade creations. Perfect gift boxes available." }
      ],
      facts: ["The Philosopher's Path was designated one of Japan's 100 most beautiful roads.", "Gion has been a geisha district since the 17th century ÃÂ¢ÃÂÃÂ today about 80 geiko (Kyoto term for geisha) and maiko still practice there."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Kimono rental includes hair styling ÃÂ¢ÃÂÃÂ book early morning for best hair styling appointment.", "ÃÂ°ÃÂÃÂÃÂ Kimono golden hour in Gion at 5pm = the best photos of the entire trip. Don't skip this!", "ÃÂ°ÃÂÃÂÃÂ Look for a maiko walking to work between 5:30ÃÂ¢ÃÂÃÂ7pm in Gion ÃÂ¢ÃÂÃÂ pure luck but magical if you spot one."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 13 ÃÂ¢ÃÂÃÂ NIJO CASTLE + NISHIKI ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 13, date: "2026-05-31", dayOfWeek: "Sun",
      city: "Kyoto", theme: "Nijo Castle + Heian Shrine + Nishiki Market", region: "kyoto", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "Nijo Castle", time: "09:00", cost: "ÃÂÃÂ¥1,030 adult / ÃÂÃÂ¥350 child",
          notes: "Former shogun's palace. Famous 'nightingale floors' squeak with every step (anti-assassin security). Kids will test EVERY floorboard. Ornate painted screens. Beautiful garden with 800 plum and cherry trees. Allow 90 min.",
          location: "Nijo Castle Nakagyo Kyoto",
          ticket: "Suica ÃÂÃÂ· Subway Tozai Line ÃÂ¢ÃÂÃÂ Nijo-jo-mae Stn (ÃÂÃÂ¥210)" },
        { name: "Kyoto Imperial Palace Park", time: "11:00", cost: "Free",
          notes: "Free walk through massive forested imperial grounds. The palace itself needs advance registration (free) ÃÂ¢ÃÂÃÂ the park is open to all. Huge green space in central Kyoto.",
          location: "Kyoto Imperial Palace Kamigyo Kyoto", ticket: "Subway Karasuma Line ÃÂ¢ÃÂÃÂ Imadegawa (ÃÂÃÂ¥210)" },
        { name: "Heian Shrine", time: "12:30", cost: "Free grounds / ÃÂÃÂ¥600 garden",
          notes: "One of Japan's largest torii gates (24m high) marks the entrance. Built in 1895, relatively young for Kyoto. The garden (ÃÂÃÂ¥600) has a stunning pond with stepping stones and a covered bridge ÃÂ¢ÃÂÃÂ beautiful in late May.",
          location: "Heian Shrine Okazaki Kyoto",
          ticket: "Suica ÃÂÃÂ· Bus ÃÂ¢ÃÂÃÂ Okazaki-koen (ÃÂÃÂ¥230)" },
        { name: "Nishiki Market", time: "15:00", cost: "Free + snacks ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ1,000",
          notes: "Kyoto's Kitchen ÃÂ¢ÃÂÃÂ 5 blocks of 100+ stalls. Must-tries: fresh yudofu (warm tofu set) ÃÂÃÂ¥500, pickled vegetables ÃÂÃÂ¥300ÃÂ¢ÃÂÃÂ800, tamagoyaki (egg roll) ÃÂÃÂ¥200, mochi ÃÂÃÂ¥150, matcha drinks. All the vendors speak tourist-friendly Japanese. Watch your elbows on weekends.",
          location: "Nishiki Market Nakagyo Kyoto",
          ticket: "Suica ÃÂÃÂ· Subway or walk from Kawaramachi" },
        { name: "Pontocho Alley", time: "18:00", cost: "Free",
          notes: "Atmospheric lantern-lit alley along the Kamo River. Restaurants on decks over the river (called yuka). Even without eating, the evening stroll is magical. Best from 6ÃÂ¢ÃÂÃÂ8pm.",
          location: "Pontocho Alley Nakagyo Kyoto", ticket: "Walk from Nishiki Market (10 min)" }
      ],
      food: [
        { name: "Nishiki Market snack crawl", where: "Nishiki Market", price: "ÃÂÃÂ¥150ÃÂ¢ÃÂÃÂ500 per item", notes: "Dashi tamago ÃÂÃÂ¥200 (skip ÃÂ¢ÃÂÃÂ has egg), try: warabi mochi ÃÂÃÂ¥300, Kyoto pickles ÃÂÃÂ¥400, mochi with bean paste ÃÂÃÂ¥150, fresh tofu with dipping soy ÃÂÃÂ¥400." },
        { name: "Tofu hot pot (yudofu)", where: "Restaurants near Nijo area", price: "ÃÂÃÂ¥1,500ÃÂ¢ÃÂÃÂ2,000 set", notes: "Classic Kyoto dish ÃÂ¢ÃÂÃÂ tofu gently simmered in kombu broth, served with small sides. Deeply comforting." }
      ],
      shopping: [
        { name: "Kyoto pickles (tsukemono)", where: "Nishiki Market stalls", price: "ÃÂÃÂ¥300ÃÂ¢ÃÂÃÂ800/packet", notes: "Best gift from Kyoto ÃÂ¢ÃÂÃÂ beautifully packaged, lightweight, unique. Try: Shibazuke (purple), Kabu (turnip), Nasu (eggplant)." },
        { name: "Kyo-yasai (Kyoto vegetables) miso", where: "Nishiki Market", price: "ÃÂÃÂ¥600ÃÂ¢ÃÂÃÂ1,500", notes: "Kyoto special misos and sauces ÃÂ¢ÃÂÃÂ delicious vegetarian cooking ingredients to bring back." }
      ],
      facts: ["The nightingale floors at Nijo were built with tiny metal clamps under the boards that rub against nails ÃÂ¢ÃÂÃÂ creating sound as a security system against assassins.", "Pontocho Alley is only 2m wide and 500m long ÃÂ¢ÃÂÃÂ one of Japan's most famous restaurant streets."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Nishiki Market is free to walk ÃÂ¢ÃÂÃÂ only pay for what you taste. Budget ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ800 for a full snack crawl.", "ÃÂ°ÃÂÃÂÃÂ Nijo Castle: let kids try to walk silently on the nightingale floors ÃÂ¢ÃÂÃÂ impossible! They squeak from every angle.", "ÃÂ°ÃÂÃÂÃÂ° Kyoto city day bus pass ÃÂÃÂ¥700 covers all buses ÃÂ¢ÃÂÃÂ worth it for a day with multiple stops."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 14 ÃÂ¢ÃÂÃÂ UJI ÃÂ¢ÃÂÃÂ OSAKA ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 14, date: "2026-06-01", dayOfWeek: "Mon",
      city: "Uji ÃÂ¢ÃÂÃÂ Osaka", theme: "Uji Matcha Day + Move to Osaka ÃÂ°ÃÂÃÂÃÂµ", region: "osaka", confirmed: false,
      startLocation: "Kyoto Station Kyoto",
      activities: [
        { name: "Byodoin Phoenix Hall, Uji", time: "09:00", cost: "ÃÂÃÂ¥600 adult / ÃÂÃÂ¥300 child",
          notes: "The temple on the ÃÂÃÂ¥10 coin! UNESCO World Heritage. Built 1053 AD. The Phoenix Hall is perfectly reflected in the pond ÃÂ¢ÃÂÃÂ one of Japan's most beautiful buildings. Inner hall tour (extra ÃÂÃÂ¥300) shows the original gilded Amida Buddha.",
          location: "Byodoin Temple Uji Kyoto", officialUrl: "https://www.byodoin.or.jp/en/",
          ticket: "JR Pass / Suica ÃÂÃÂ· JR Nara Line ÃÂ¢ÃÂÃÂ Uji Stn (ÃÂÃÂ¥460 from Kyoto, 18 min)" },
        { name: "Mimurotoji Temple ÃÂ¢ÃÂÃÂ HYDRANGEAS ÃÂ¢ÃÂ­ÃÂ", time: "10:30", cost: "ÃÂÃÂ¥500/person",
          notes: "Early June = PEAK hydrangea season ÃÂ¢ÃÂÃÂ 10,000 plants in bloom across tiered hillside gardens. One of Japan's top hydrangea spots. The timing this trip is absolutely perfect. Also has wisteria arch (may still be late blooming).",
          location: "Mimurotoji Temple Uji Kyoto",
          ticket: "Walk 15 min from Uji Station OR local bus" },
        { name: "Matcha Lunch + Soft Serve", time: "12:00", cost: "ÃÂÃÂ¥300ÃÂ¢ÃÂÃÂ1,500",
          notes: "Uji is Japan's matcha capital. Every shop serves matcha soba, matcha parfait, matcha soft serve, matcha beer (adults). Nakamura Tokichi (founded 1854) is the most famous ÃÂ¢ÃÂÃÂ worth the queue.",
          location: "Uji Bridge Uji Kyoto", ticket: "Walk from Mimurotoji to Uji Bridge area" },
        { name: "Travel to Osaka + Check in", time: "15:00", cost: "ÃÂÃÂ¥570/person",
          notes: "JR from Uji ÃÂ¢ÃÂÃÂ Kyoto (18 min) ÃÂ¢ÃÂÃÂ Osaka Stn or Namba (15 min). Collect bags from Kyoto hotel. Arrive Osaka by 5ÃÂ¢ÃÂÃÂ6pm. Stock kitchen at Kuromon Ichiba Market (closes 6pm) on the way from station.",
          location: "Namba Station Osaka", ticket: "JR Pass / Suica ÃÂÃÂ· Uji ÃÂ¢ÃÂÃÂ Kyoto ÃÂ¢ÃÂÃÂ Osaka (JR Kyoto Line, ÃÂÃÂ¥570 total)" },
        { name: "Dotonbori Evening Walk", time: "Evening", cost: "Free",
          notes: "Glico Man running sign! Neon reflections in the canal. Huge mechanical crab, giant blowfish signs. Best at night ÃÂ¢ÃÂÃÂ neon is overwhelming (in the best way). Don't miss: Don Quijote (DQ) from the canal side for photos.",
          location: "Dotonbori Osaka", ticket: "Walk from Namba Station (5 min)" }
      ],
      food: [
        { name: "Matcha soba (cold)", where: "Nakamura Tokichi or Tsuen, Uji", price: "ÃÂÃÂ¥1,200ÃÂ¢ÃÂÃÂ1,500", notes: "Cold soba noodles in matcha-infused broth with veg toppings. Unique to Uji. Intensely green." },
        { name: "Matcha soft serve (double cone)", where: "Every shop in Uji", price: "ÃÂÃÂ¥350ÃÂ¢ÃÂÃÂ500", notes: "Get the double ÃÂ¢ÃÂÃÂ matcha + vanilla or matcha + hojicha. The matcha here is stronger than Tokyo versions." },
        { name: "Dotonbori veg okonomiyaki", where: "Mizuno Restaurant, Dotonbori", price: "ÃÂÃÂ¥1,200", notes: "Osaka-style savory pancake with cheese + veg filling. Ask for ÃÂ¨ÃÂÃÂÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂ (niku nashi = no meat)." }
      ],
      shopping: [
        { name: "Premium matcha + tea sets", where: "Nakamura Tokichi Uji", price: "ÃÂÃÂ¥800ÃÂ¢ÃÂÃÂ3,000", notes: "Best quality matcha to bring home for Pune. Beautiful gift packaging available." }
      ],
      facts: ["Uji has been the centre of Japanese tea cultivation since the 12th century ÃÂ¢ÃÂÃÂ monks first brought tea seeds from China.", "Dotonbori's Glico Man sign (running finish-line pose) has been a landmark since 1935 ÃÂ¢ÃÂÃÂ it celebrates Glico candy's founder who ran the marathon."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ¸ Hydrangeas at Mimurotoji peak first 2 weeks of June ÃÂ¢ÃÂÃÂ the timing of this trip is PERFECT!", "ÃÂ°ÃÂÃÂÃÂ° JR Pass covers UjiÃÂ¢ÃÂÃÂKyotoÃÂ¢ÃÂÃÂOsaka ÃÂ¢ÃÂÃÂ free if you have it.", "ÃÂ°ÃÂÃÂÃÂ Get Nakamura Tokichi's famous matcha parfait if the queue is under 20 people ÃÂ¢ÃÂÃÂ worth it."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 15 ÃÂ¢ÃÂÃÂ USJ ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 15, date: "2026-06-02", dayOfWeek: "Tue",
      city: "Osaka", theme: "Universal Studios Japan ÃÂ°ÃÂÃÂÃÂ®", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Universal Studios Japan ÃÂ¢ÃÂÃÂ Full Day", time: "08:30ÃÂ¢ÃÂÃÂ21:00", cost: "ÃÂÃÂ¥8,600 adult / ÃÂÃÂ¥5,600 child",
          notes: "Super Nintendo World first (open at 8am, shorter morning queue). Mario Kart: Bowser's Challenge ÃÂ¢ÃÂÃÂ incredible motion-tracking ride! Power-up band ÃÂÃÂ¥3,500 lets you collect coins physically. Harry Potter Wizarding World: Butterbeer is vegetarian! Minions Park. Sing on Street live show (free). June weekday = shorter queues, no Express Pass likely needed. Get Nintendo World timed entry via the USJ app when you enter.",
          location: "Universal Studios Japan Osaka", officialUrl: "https://www.usj.co.jp/web/en/us",
          ticket: "Suica ÃÂÃÂ· JR Yumesaki Line ÃÂ¢ÃÂÃÂ Universal City Stn (ÃÂÃÂ¥180 from Namba area)" }
      ],
      food: [
        { name: "Butterbeer (HP World)", where: "Three Broomsticks, Wizarding World", price: "ÃÂÃÂ¥790", notes: "Non-alcoholic butterscotch cream drink. Completely vegetarian. Hot or frozen. Kids go crazy for it." },
        { name: "Nintendo mushroom popcorn", where: "Super Nintendo World popcorn stand", price: "ÃÂÃÂ¥500", notes: "Mushroom-shaped popcorn bucket with caramel or cheese popcorn. Vegetarian! Great souvenir too." },
        { name: "Minion banana crepes", where: "Minion Park", price: "ÃÂÃÂ¥600", notes: "Banana-flavoured crepes with Minion-themed packaging. Vegetarian and delicious." }
      ],
      shopping: [
        { name: "Nintendo Power-up Band", where: "Super Nintendo World shop", price: "ÃÂÃÂ¥3,500", notes: "Interactive wristband that lets you collect coins throughout Mario land ÃÂ¢ÃÂÃÂ KIDS LOVE IT. Buy at opening." },
        { name: "HP wands (replica)", where: "Olivanders, Wizarding World", price: "ÃÂÃÂ¥6,000ÃÂ¢ÃÂÃÂ7,000", notes: "Ollivanders experience + own wand. Each wand has a spell location in the HP area." }
      ],
      facts: ["USJ's Super Nintendo World is the only 'real-life' Mario Kart ride in the world.", "USJ's Wizarding World of Harry Potter is widely considered the best of any HP park globally for immersive detail."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° PRE-BOOK via usj.co.jp or Klook ÃÂ¢ÃÂÃÂ NO ticket booths on site!", "ÃÂ°ÃÂÃÂÃÂ Get Super Nintendo World timed entry via the USJ app the moment you enter the park ÃÂ¢ÃÂÃÂ slots fill within 30 min of park opening.", "ÃÂ°ÃÂÃÂÃÂ° June weekday = 30ÃÂ¢ÃÂÃÂ40% shorter queues than weekends. No Express Pass needed!", "ÃÂ°ÃÂÃÂÃÂ Butterbeer frozen is better than the hot version ÃÂ¢ÃÂÃÂ get it early before the line builds."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 16 ÃÂ¢ÃÂÃÂ CASTLE + AQUARIUM ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 16, date: "2026-06-03", dayOfWeek: "Wed",
      city: "Osaka", theme: "Osaka Castle + Kaiyukan Aquarium ÃÂ°ÃÂÃÂ¦ÃÂ", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Osaka Castle Park", time: "09:00", cost: "Free park / ÃÂÃÂ¥600 museum (under-15 FREE)",
          notes: "Beautiful castle grounds ÃÂ¢ÃÂÃÂ lush green in June, moat full. Castle museum traces Osaka's history under Toyotomi Hideyoshi. Elevator to 8th floor for panoramic views. Kids under 15 are FREE for the museum!",
          location: "Osaka Castle Park Chuo Osaka",
          ticket: "Suica ÃÂÃÂ· Subway Tanimachi or Chuo Line ÃÂ¢ÃÂÃÂ Osakajo-koen Stn (ÃÂÃÂ¥200)" },
        { name: "Kaiyukan Aquarium", time: "13:00", cost: "ÃÂÃÂ¥2,400 adult / ÃÂÃÂ¥1,200 child",
          notes: "One of the world's largest aquariums. The central 8m tank houses a whale shark ÃÂ¢ÃÂÃÂ the only one in Japan! 14 zones following the Pacific Rim. Sea otters (kids' absolute favourite), penguins, manta rays. Route spirals DOWN ÃÂ¢ÃÂÃÂ very clever design. Allow 2 hrs.",
          location: "Kaiyukan Aquarium Minato Osaka", officialUrl: "https://www.kaiyukan.com/language/eng/",
          ticket: "Suica ÃÂÃÂ· Subway Chuo Line ÃÂ¢ÃÂÃÂ Osaka-ko Stn (ÃÂÃÂ¥230 from castle)" },
        { name: "Tempozan Ferris Wheel", time: "15:30", cost: "ÃÂÃÂ¥800 adult / ÃÂÃÂ¥400 child",
          notes: "Right next to Kaiyukan. Transparent gondolas available! Panoramic view of Osaka Bay and the city. 15-min ride. One of Japan's largest ferris wheels.",
          location: "Tempozan Ferris Wheel Osaka",
          ticket: "Walk 2 min from Kaiyukan" },
        { name: "Indian Dinner at Apt Kitchen", time: "Evening", cost: "Groceries ÃÂÃÂ¥1,500",
          notes: "Cook dal tadka, sabzi and rice in Osaka apt kitchen. Saves ÃÂ¢ÃÂÃÂ¹2,500. Good supermarket: Seiyu or Fresco near Namba.",
          location: "Namba Station Osaka", ticket: "Suica ÃÂÃÂ· Subway back to Namba" }
      ],
      food: [
        { name: "Veg ekiben at castle park", where: "Pack from konbini before leaving", price: "ÃÂÃÂ¥600ÃÂ¢ÃÂÃÂ900", notes: "Pick up a bento from 7-Eleven before heading to castle ÃÂ¢ÃÂÃÂ much cheaper than castle-area restaurants." },
        { name: "Kaiyukan cafÃÂÃÂ© veg options", where: "Inside Kaiyukan", price: "ÃÂÃÂ¥800ÃÂ¢ÃÂÃÂ1,200", notes: "Vegetable curry and udon available. Ask counter staff for 'ÃÂ¨ÃÂÃÂÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂ' (no meat)." }
      ],
      shopping: [
        { name: "Aquarium themed goods", where: "Kaiyukan gift shop", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ2,000", notes: "Whale shark stuffed toys are a Kaiyukan exclusive ÃÂ¢ÃÂÃÂ only sold here. Kids love them." }
      ],
      facts: ["Kaiyukan's central whale shark tank holds 5,400 tonnes of water ÃÂ¢ÃÂÃÂ one of the largest in the world.", "Osaka Castle has been rebuilt three times ÃÂ¢ÃÂÃÂ the current concrete reconstruction dates to 1931."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Buy Kaiyukan tickets at konbini kiosks (7-Eleven, FamilyMart) to skip the entry queue entirely.", "ÃÂ°ÃÂÃÂÃÂ° Kids under 15 are FREE at Osaka Castle museum ÃÂ¢ÃÂÃÂ save ÃÂÃÂ¥600+ per child!", "ÃÂ°ÃÂÃÂÃÂ Transparent gondola on Tempozan: arrive 15 min early and request it ÃÂ¢ÃÂÃÂ stunning views straight down."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 17 ÃÂ¢ÃÂÃÂ POKEMON CAFE + SHINSEKAI ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 17, date: "2026-06-04", dayOfWeek: "Thu",
      city: "Osaka", theme: "PokÃÂÃÂ©mon Cafe + Shinsekai + Den Den Town ÃÂ¢ÃÂÃÂ¡", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "ÃÂ¢ÃÂ­ÃÂ PokÃÂÃÂ©mon Cafe Osaka (PRE-BOOKED)", time: "Booked slot (11:00 or 12:00)", cost: "~ÃÂÃÂ¥3,000/person",
          notes: "ÃÂ¢ÃÂÃÂ ÃÂ¯ÃÂ¸ÃÂ ALARM: 6 May at 6am JST = booking opens exactly 30 days before! Official only: cafe.pokemon.co.jp. PokÃÂÃÂ©mon-shaped pancakes, character drinks, themed menu. Absolutely magical for kids. Each reservation comes with a character coaster.",
          location: "Pokemon Cafe Osaka Namba", officialUrl: "https://cafe.pokemon.co.jp/en/",
          ticket: "Walk from Namba Station (5 min)" },
        { name: "Den Den Town (Osaka's Akihabara)", time: "14:00", cost: "Free",
          notes: "Nipponbashi ÃÂ¢ÃÂÃÂ electronics, anime, cosplay, vintage manga. More laid-back than Tokyo's Akihabara. Cheaper prices on anime figures. Great for finding older/rarer PokÃÂÃÂ©mon games.",
          location: "Den Den Town Nipponbashi Osaka",
          ticket: "Suica ÃÂÃÂ· Subway Sakaisuji Line ÃÂ¢ÃÂÃÂ Ebisucho Stn (ÃÂÃÂ¥200)" },
        { name: "Shinsekai Retro District", time: "16:00", cost: "Free",
          notes: "Osaka's old entertainment district from the 1920s. Neon signs, retro arcades, old-school restaurants. Tsutenkaku Tower ÃÂÃÂ¥1,000 (kids love the quirky Billiken luck statue at the top). America-Mura street art nearby.",
          location: "Shinsekai Osaka",
          ticket: "Walk 10 min from Den Den Town" },
        { name: "Kuromon Ichiba Market", time: "17:30", cost: "Free to browse",
          notes: "Osaka's famous covered food market. Closes 6pm ÃÂ¢ÃÂÃÂ go before then. Fresh tofu, veg tempura, Kyoto pickles, tofu donuts. Stock up the apt kitchen. Also try: grilled corn ÃÂÃÂ¥300.",
          location: "Kuromon Ichiba Market Osaka",
          ticket: "Suica ÃÂÃÂ· Walk from Shinsekai or Subway Sakaisuji Line ÃÂ¢ÃÂÃÂ Nipponbashi" }
      ],
      food: [
        { name: "PokÃÂÃÂ©mon Cafe character pancakes", where: "PokÃÂÃÂ©mon Cafe Osaka", price: "ÃÂÃÂ¥1,200ÃÂ¢ÃÂÃÂ1,800", notes: "Pikachu pancakes, themed omelette sets. Ask staff for vegetarian option ÃÂ¢ÃÂÃÂ egg-based but no meat." },
        { name: "Veg kushikatsu", where: "Shinsekai area restaurants", price: "ÃÂÃÂ¥100ÃÂ¢ÃÂÃÂ200/skewer", notes: "Deep-fried breaded vegetables on skewers: potato, pumpkin, lotus root, onion. Ask for veg only (ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ®ÃÂ£ÃÂÃÂ¿). The strict rule: never double-dip the sauce!" },
        { name: "Kuromon tofu donuts", where: "Kuromon Ichiba Market", price: "ÃÂÃÂ¥100ÃÂ¢ÃÂÃÂ150 each", notes: "Freshly fried tofu donuts in various flavours. Hot and crispy. Completely vegetarian." }
      ],
      shopping: [
        { name: "PokÃÂÃÂ©mon Cafe exclusive merch", where: "PokÃÂÃÂ©mon Cafe shop", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ3,000", notes: "Cafe-exclusive plushies and items only available at the cafÃÂÃÂ©. Buy at the end of your meal." },
        { name: "Tsutenkaku omiyage", where: "Tsutenkaku Tower souvenir shop", price: "ÃÂÃÂ¥300ÃÂ¢ÃÂÃÂ800", notes: "Billiken (Osaka's lucky god) themed goods are unique to Shinsekai and not found elsewhere." }
      ],
      facts: ["Shinsekai means 'New World' ÃÂ¢ÃÂÃÂ it was built in 1912 modeled after two districts: Paris (south) and New York (north).", "The Billiken statue at Tsutenkaku is considered Osaka's symbol of luck ÃÂ¢ÃÂÃÂ rubbing his feet is said to grant wishes."],
      hacks: ["ÃÂ¢ÃÂÃÂ ÃÂ¯ÃÂ¸ÃÂ PokÃÂÃÂ©mon Cafe: set phone alarm for 6 May at 6am JST ÃÂ¢ÃÂÃÂ books in seconds! Official site ONLY.", "ÃÂ°ÃÂÃÂÃÂ Kushikatsu: the double-dip rule is serious ÃÂ¢ÃÂÃÂ violating it causes genuine offense. Dip once only!", "ÃÂ°ÃÂÃÂÃÂ° Den Den Town has better prices on anime figures and older games than Akihabara."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 18 ÃÂ¢ÃÂÃÂ SHOPPING ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 18, date: "2026-06-05", dayOfWeek: "Fri",
      city: "Osaka", theme: "Sumiyoshi Shrine + Shopping Day ÃÂ°ÃÂÃÂÃÂÃÂ¯ÃÂ¸ÃÂ", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Sumiyoshi Taisha Shrine", time: "09:00", cost: "Free",
          notes: "One of Japan's oldest and most important shrines (3rd century!). Unique architectural style (sumiyoshi-zukuri) found nowhere else. Beautiful arched bridge. Very peaceful with almost no tourists. The grounds are huge and tranquil.",
          location: "Sumiyoshi Taisha Shrine Osaka",
          ticket: "Suica ÃÂÃÂ· Nankai Honsen Line ÃÂ¢ÃÂÃÂ Sumiyoshi-taisha Stn (ÃÂÃÂ¥250 from Namba)" },
        { name: "Shinsaibashi Shopping Arcade", time: "11:30", cost: "Tax-free on ÃÂÃÂ¥5,000+",
          notes: "580m covered arcade ÃÂ¢ÃÂÃÂ Osaka's main shopping street. Fashion boutiques, Kiddyland (for kids' toys), Uniqlo, cosmetics. Show passport at department stores for 10% tax-free refund on ÃÂÃÂ¥5,000+ per transaction. Good for: Japanese skincare, Uniqlo basics, unique snacks.",
          location: "Shinsaibashi Shopping Arcade Osaka",
          ticket: "Suica ÃÂÃÂ· Subway Midosuji Line ÃÂ¢ÃÂÃÂ Shinsaibashi Stn (ÃÂÃÂ¥350)" },
        { name: "Amerika-Mura Street Art", time: "14:00", cost: "Free",
          notes: "Osaka's hipster quarter in America Village (Amerikamura). Street art, vintage fashion, indie music shops, food trucks. Very different vibe from the rest of Osaka. Big Amerika Park has a small Statue of Liberty!",
          location: "Amerikamura Osaka",
          ticket: "Walk 5 min from Shinsaibashi" },
        { name: "Dotonbori Farewell Walk", time: "Evening", cost: "Free",
          notes: "Final evening stroll under the neon lights. Take all the photos you missed on Day 1. The canal boat ride (ÃÂÃÂ¥900 adult) gives a unique low-angle view of all the neon signs.",
          location: "Dotonbori Osaka",
          ticket: "Walk from Shinsaibashi area" },
        { name: "Depachika Basement Food Hunt", time: "After 19:00", cost: "Half-price deals!",
          notes: "Department store food basements (Takashimaya B2F, Daimaru B1F). After 7pm: look for orange ÃÂÃÂ½ÃÂ¤ÃÂ¾ÃÂ¡ (han-ka = half price) stickers on premium wagashi, bento, French pastries. Premium sweets for ÃÂÃÂ¥200ÃÂ¢ÃÂÃÂ400. Truly excellent late-night hack.",
          location: "Takashimaya Department Store Namba Osaka",
          ticket: "Walk from Dotonbori (5 min)" }
      ],
      food: [
        { name: "Veg tempura set lunch", where: "Restaurants near Shinsaibashi", price: "ÃÂÃÂ¥1,200ÃÂ¢ÃÂÃÂ1,800", notes: "Vegetable tempura teishoku: seasonal veg, rice, miso, pickles. Light and satisfying." },
        { name: "Depachika wagashi (after 7pm)", where: "Takashimaya or Daimaru basement", price: "ÃÂÃÂ¥200ÃÂ¢ÃÂÃÂ400 after discount", notes: "Wait for the ÃÂÃÂ½ÃÂ¤ÃÂ¾ÃÂ¡ stickers ÃÂ¢ÃÂÃÂ premium sweets like Yatsuhashi, wagashi sets, ÃÂÃÂ©clair at half price." }
      ],
      shopping: [
        { name: "Souvenirs for Pune", where: "Don Quijote / Shinsaibashi", price: "ÃÂÃÂ¥200ÃÂ¢ÃÂÃÂ500/item", notes: "Matcha Kit Kat, Tokyo Banana, Royce chocolate, wasabi peas, pocky sets ÃÂ¢ÃÂÃÂ great for gifts, well-priced." },
        { name: "Uniqlo Heattech / LifeWear", where: "Uniqlo Shinsaibashi", price: "ÃÂÃÂ¥990ÃÂ¢ÃÂÃÂ2,990", notes: "Tax-free applies on ÃÂÃÂ¥5,000+ spend. Japanese Uniqlo has first-run items not yet in India." }
      ],
      facts: ["Sumiyoshi Taisha's style ÃÂ¢ÃÂÃÂ separate male/female deities in separate shrines connected by a bridge ÃÂ¢ÃÂÃÂ influenced over 2,300 shrines across Japan.", "Don Quijote (fondly called 'Donki') is open 24 hours and sells literally everything ÃÂ¢ÃÂÃÂ it has been called Japan's most chaotic and wonderful store."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ° Tax-free at Shinsaibashi: show passport, min ÃÂÃÂ¥5,000 spend per store = 10% back instantly.", "ÃÂ°ÃÂÃÂÃÂ° Depachika after 7pm = best food deals in Osaka. Keep ÃÂÃÂ¥2,000 cash for this.", "ÃÂ°ÃÂÃÂÃÂ Canal boat in Dotonbori: ÃÂÃÂ¥900 for 20 min ÃÂ¢ÃÂÃÂ worth it for the unique low-angle neon photos."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 19 ÃÂ¢ÃÂÃÂ UMEDA SKY + FINAL OSAKA ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 19, date: "2026-06-06", dayOfWeek: "Sat",
      city: "Osaka", theme: "Umeda Sky Building + Final Osaka Moments ÃÂ°ÃÂÃÂÃÂ", region: "osaka", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Umeda Sky Building Floating Garden", time: "09:00 (or at sunset)", cost: "ÃÂÃÂ¥1,500 adult / ÃÂÃÂ¥700 child",
          notes: "Two towers connected at 173m by an 'air corridor'. The 360ÃÂÃÂ° open-air roof deck gives panoramic views of Osaka. The underground food hall (Takimi-koji) is a 1920s-style lantern-lit market. Open until 10:30pm ÃÂ¢ÃÂÃÂ also stunning at night!",
          location: "Umeda Sky Building Kita Osaka", officialUrl: "https://www.kuchu-teien.com/en/",
          ticket: "Suica ÃÂÃÂ· JR Osaka Loop Line or Subway ÃÂ¢ÃÂÃÂ Umeda/Osaka Stn (ÃÂÃÂ¥200 from Namba)" },
        { name: "Tenjinbashisuji Covered Arcade", time: "11:00", cost: "Free",
          notes: "Japan's longest covered shopping arcade at 2.6km. More local and less touristy than Shinsaibashi. Great for everyday Japanese items, kitchen goods, local food. Has a fun house-museum at one end.",
          location: "Tenjinbashisuji Shopping Street Kita Osaka",
          ticket: "Subway Tanimachi Line ÃÂ¢ÃÂÃÂ Tenjimbashisuji 6-chome (ÃÂÃÂ¥200)" },
        { name: "Final Konbini Snack Haul", time: "Afternoon", cost: "ÃÂÃÂ¥3,000ÃÂ¢ÃÂÃÂ5,000",
          notes: "Last chance to stock up on Japanese snacks for Pune. Vacuum-packed items: matcha Kit Kat, Pocky sets, Royce chocolate (buy frozen pouch from store). Kirin/Suntory special drinks for adults. 7-Eleven or FamilyMart near apt.",
          location: "FamilyMart near Namba Osaka", ticket: "Walk from hotel" },
        { name: "Pack Bags for Early Departure", time: "Evening", cost: "",
          notes: "ÃÂ¢ÃÂÃÂ ÃÂ¯ÃÂ¸ÃÂ Must pack tonight ÃÂ¢ÃÂÃÂ travel to Haneda tomorrow morning! Confirm HND hotel booking. Put all omiyage (gifts) in checked bags carefully.",
          location: "Hotel Osaka", ticket: "" }
      ],
      food: [
        { name: "Takimi-koji underground market", where: "Umeda Sky Building basement", price: "ÃÂÃÂ¥800ÃÂ¢ÃÂÃÂ1,500", notes: "Atmospheric 1920s market design in the basement. Several veg-friendly options including tofu hot pot and veg curry." }
      ],
      shopping: [
        { name: "Royce Chocolate (buy from store only)", where: "7-Eleven or airport", price: "ÃÂÃÂ¥1,500ÃÂ¢ÃÂÃÂ3,000/box", notes: "Keep refrigerated ÃÂ¢ÃÂÃÂ get a cold pouch from the store. The nama chocolate is famous and best as a gift." },
        { name: "Vacuum-packed matcha goods", where: "Any konbini", price: "ÃÂÃÂ¥300ÃÂ¢ÃÂÃÂ800/pack", notes: "Matcha Kit Kats, Matcha Oreos, Maccha Yan Yan ÃÂ¢ÃÂÃÂ best airline-friendly gifts." }
      ],
      facts: ["The Tenjinbashisuji arcade covers all of Tenjinbashi street ÃÂ¢ÃÂÃÂ walking its full 2.6km length is a Osaka bucket list item.", "Umeda Sky's Floating Garden was designed by architect Hiroshi Hara and completed in 1993 ÃÂ¢ÃÂÃÂ it was revolutionary for its connected sky walkway."],
      hacks: ["ÃÂ¢ÃÂÃÂ ÃÂ¯ÃÂ¸ÃÂ PACK TONIGHT ÃÂ¢ÃÂÃÂ leave for Haneda tomorrow morning!", "ÃÂ°ÃÂÃÂÃÂ° Royce chocolate: buy from the store with the cold pack ÃÂ¢ÃÂÃÂ not airport, where it's marked up 30%.", "ÃÂ°ÃÂÃÂÃÂ Umeda Sky at dusk (around 7pm in June): best of both day views AND the lit-up city. Open till 10:30pm."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 20 ÃÂ¢ÃÂÃÂ OSAKA ÃÂ¢ÃÂÃÂ HANEDA ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 20, date: "2026-06-07", dayOfWeek: "Sun",
      city: "Osaka ÃÂ¢ÃÂÃÂ Haneda", theme: "Travel Day: Osaka to Haneda ÃÂ¢ÃÂÃÂ", region: "transit", confirmed: false,
      startLocation: "Namba Station Osaka",
      activities: [
        { name: "Check out Osaka Hotel", time: "By 11:00", cost: "",
          notes: "Settle any final charges. Store bags if checkout is before transport time.",
          location: "Shin-Osaka Station Osaka", ticket: "Suica ÃÂÃÂ· Subway to Shin-Osaka" },
        { name: "Shin-Osaka ÃÂ¢ÃÂÃÂ Shinagawa (Shinkansen Hikari)", time: "~11:30", cost: "JR Pass covers Hikari (ÃÂÃÂ¥6,740 adult / ÃÂÃÂ¥3,370 child without)",
          notes: "~2h 15min on Hikari Shinkansen. Book window seats (A/E side) for Mt. Fuji view around Shin-Fuji station! NOTE: JR Pass does NOT cover Nozomi ÃÂ¢ÃÂÃÂ use Hikari.",
          location: "Shinagawa Station Tokyo", ticket: "JR Pass: Shin-Osaka ÃÂ¢ÃÂÃÂ Shinagawa on Hikari" },
        { name: "Shinagawa ÃÂ¢ÃÂÃÂ Haneda Terminal 2 (Keikyu)", time: "~14:00", cost: "ÃÂÃÂ¥470/person",
          notes: "Keikyu Airport Line from Shinagawa: 14 min, very frequent. Easy with luggage.",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Suica ÃÂÃÂ· Keikyu Airport Express (ÃÂÃÂ¥470)" },
        { name: "Check in HND-area Hotel", time: "Afternoon", cost: "ÃÂ¢ÃÂÃÂ ÃÂ¯ÃÂ¸ÃÂ TO BE BOOKED",
          notes: "Must be within 15 min of HND Terminal 2. Flight tomorrow 11:00 ÃÂ¢ÃÂÃÂ arrive airport by 08:00.",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Hotel shuttle or walk" },
        { name: "HND Duty-Free Shopping", time: "Evening", cost: "Budget ÃÂÃÂ¥5,000ÃÂ¢ÃÂÃÂ10,000",
          notes: "HND International Terminal T3 is a short bus/train from T2. Excellent duty free: Japanese whisky, cosmetics, confectionery, matcha everything. Last Japan shopping!",
          location: "Haneda International Terminal Tokyo", ticket: "Free shuttle between HND terminals" }
      ],
      food: [
        { name: "Shinkansen ekiben", where: "Shin-Osaka platform shops", price: "ÃÂÃÂ¥1,200ÃÂ¢ÃÂÃÂ1,800", notes: "Buy a bento at the platform before boarding. Veg options: vegetable rice box, tofu box sets." }
      ],
      shopping: [
        { name: "Japanese whisky / sake", where: "HND duty free", price: "ÃÂÃÂ¥3,000ÃÂ¢ÃÂÃÂ8,000", notes: "Yamazaki, Hibiki, Nikka at better prices than India. Popular gift." },
        { name: "Last matcha goods", where: "HND duty free", price: "ÃÂÃÂ¥500ÃÂ¢ÃÂÃÂ2,000", notes: "Airport has good selection of matcha Kit Kat, Pocky, and branded confectionery boxes." }
      ],
      facts: ["The Tokaido Shinkansen route from Osaka to Tokyo is 515km ÃÂ¢ÃÂÃÂ the world's busiest high-speed rail corridor.", "Mt. Fuji is visible from the shinkansen for about 90 seconds ÃÂ¢ÃÂÃÂ it appears on the LEFT side (seat A) going Tokyo-bound."],
      hacks: ["ÃÂ°ÃÂÃÂÃÂ» Mt. Fuji from shinkansen: sit on LEFT side (A seat) going Tokyo-bound, look between Shin-Fuji and Mishima stations (~45 min from Shin-Osaka).", "ÃÂ¢ÃÂÃÂ ÃÂ¯ÃÂ¸ÃÂ JR Pass: USE HIKARI not Nozomi ÃÂ¢ÃÂÃÂ Nozomi is not covered by JR Pass!", "ÃÂ°ÃÂÃÂÃÂ° HND duty free: Japanese whisky significantly cheaper here than India."]
    },

    // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ DAY 21 ÃÂ¢ÃÂÃÂ FLY HOME ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
    {
      day: 21, date: "2026-06-08", dayOfWeek: "Mon",
      city: "Tokyo Haneda ÃÂ¢ÃÂÃÂ Delhi ÃÂ¢ÃÂÃÂ Pune", theme: "Fly Home! ÃÂ¢ÃÂÃÂ Sayonara Japan!", region: "transit", confirmed: true,
      startLocation: "Haneda Airport Terminal 2 Tokyo",
      activities: [
        { name: "Arrive HND Terminal 2 by 08:00", time: "08:00", cost: "",
          notes: "ANA check-in counter opens 3 hrs before. PNR: 8GXZOP. Check in all bags. 2 checked bags per person per leg. Request vegetarian meals confirmed.",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "Hotel shuttle or walk to terminal" },
        { name: "Tax Refund at Departure Customs", time: "Before security (08:30)", cost: "REFUND ÃÂ¢ÃÂÃÂ bring all receipts!",
          notes: "Collect consumption tax (10%) refund at the customs tax-refund counter BEFORE going through security. Bring: passport, all tax-free purchase receipts, and the goods (unopened). Worth doing for large purchases!",
          location: "Haneda Airport Terminal 2 Tokyo", ticket: "" },
        { name: "Board NH837: HND ÃÂ¢ÃÂÃÂ DEL", time: "11:00 ÃÂ¢ÃÂÃÂ 16:30", cost: "Confirmed",
          notes: "Seat 21K (Achin). Terminal 2. Arrive Delhi Terminal 3.",
          location: "Indira Gandhi International Airport Delhi T3", ticket: "No transit" },
        { name: "Delhi: T3 ÃÂ¢ÃÂÃÂ T2 Terminal Transfer", time: "~17:00", cost: "Free shuttle",
          notes: "Terminal 3 (international) ÃÂ¢ÃÂÃÂ Terminal 2 (domestic). Use free inter-terminal transfer bus. Allow 45ÃÂ¢ÃÂÃÂ60 min transit. DigiYatra works for domestic check-in at T2.",
          location: "Indira Gandhi International Airport Delhi T2", ticket: "Free inter-terminal bus" },
        { name: "Board NH6935: DEL ÃÂ¢ÃÂÃÂ PNQ", time: "19:10 ÃÂ¢ÃÂÃÂ 21:15", cost: "Confirmed",
          notes: "Seat 30F (Achin). Arrive Pune 21:15. ÃÂ°ÃÂÃÂÃÂ Sayonara Japan ÃÂ¢ÃÂÃÂ the most beautiful country your family has ever visited!",
          location: "Pune International Airport", ticket: "" }
      ],
      food: [
        { name: "HND T2 Airport food", where: "Terminal 2 F&B before security", price: "ÃÂÃÂ¥800ÃÂ¢ÃÂÃÂ1,500", notes: "Last Japanese meal! Try a proper bowl of ramen or katsu curry before boarding." }
      ],
      shopping: [
        { name: "Last minute duty free", where: "After security, HND", price: "As needed", notes: "Post-security duty free is same products, sometimes slightly different prices. Check both sides." }
      ],
      facts: ["ANA (All Nippon Airways) has won the Skytrax 5-star rating for 7 consecutive years.", "Haneda handles 85+ million passengers annually ÃÂ¢ÃÂÃÂ one of the world's busiest airports."],
      hacks: ["ÃÂ¢ÃÂÃÂ° Be at T2 by 8am sharp ÃÂ¢ÃÂÃÂ 3 hours before departure is ANA's recommendation.", "ÃÂ°ÃÂÃÂÃÂ° Tax refund: do this BEFORE security ÃÂ¢ÃÂÃÂ the counter is in the departures hall. Don't forget receipts!", "ÃÂ°ÃÂÃÂÃÂ Final tip: keep one ÃÂÃÂ¥10 coin as a souvenir ÃÂ¢ÃÂÃÂ it has Byodoin Temple on it!"]
    }

  ] // end days
}; // end TRIP_DATA

// ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ Helpers ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ

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
  tokyo:   { bg: "#EEF8F2", accent: "#2D7A4F", label: "ÃÂ°ÃÂÃÂÃÂ¼ Tokyo"   },
  kyoto:   { bg: "#FDF5E8", accent: "#C06B1A", label: "ÃÂ¢ÃÂÃÂ© Kyoto"   },
  osaka:   { bg: "#FDF0F3", accent: "#B83A52", label: "ÃÂ°ÃÂÃÂÃÂ¯ Osaka"   },
  transit: { bg: "#EEF5FD", accent: "#1F6BB5", label: "ÃÂ¢ÃÂÃÂ Transit" }
};

// ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ Japanese Phrases ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
// Shared by phrases.html (display) and search.html (search index)
const PHRASES = [

  // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ BASICS ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ«ÃÂ£ÃÂÃÂ¡ÃÂ£ÃÂÃÂ¯', romaji:'Konnichiwa', en:'Hello (daytime)', tip:'Use until about 6pm. Say it with a slight bow.' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ', romaji:'Ohayou gozaimasu', en:'Good morning', tip:'More polite version. Informal: just ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ (ohayou).' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ°ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯', romaji:'Konbanwa', en:'Good evening', tip:'Use after about 6pm.' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¨ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ', romaji:'Arigatou gozaimasu', en:'Thank you (polite)', tip:'The go-to thank you. Casual: ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¨ÃÂ£ÃÂÃÂ (arigatou).' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¿ÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Sumimasen', en:'Excuse me / Sorry', tip:'The most useful word in Japan. Use to get attention, apologise, and say thanks.' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ', romaji:'Hai', en:'Yes', tip:'Also used as "I understand" or "I\'m listening" during conversations.' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Iie', en:'No', tip:'Japanese often avoid saying no directly ÃÂ¢ÃÂÃÂ shaking your head also works.' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Wakarimasen', en:'I don\'t understand', tip:'Say this clearly and staff will often find someone who speaks English.' },
  { cat:'basics', jp:'ÃÂ¨ÃÂÃÂ±ÃÂ¨ÃÂªÃÂÃÂ£ÃÂÃÂÃÂ¨ÃÂ©ÃÂ±ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Eigo wo hanasemasu ka?', en:'Do you speak English?', tip:'Most young people in tourist areas do.' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¤ÃÂ¸ÃÂÃÂ¥ÃÂºÃÂ¦ÃÂ£ÃÂÃÂÃÂ©ÃÂ¡ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ', romaji:'Mou ichido onegaishimasu', en:'Please say that again', tip:'Point to this phrase to ask someone to repeat themselves.' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ©ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'~ wa doko desu ka?', en:'Where is ~ ?', tip:'Replace ~ with any place name. Works everywhere!' },
  { cat:'basics', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¤ÃÂ£ÃÂÃÂ¬ÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ©ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Toire wa doko desu ka?', en:'Where is the toilet?', tip:'Toilets in Japan are incredibly clean ÃÂ¢ÃÂÃÂ don\'t be shy asking!' },
  { cat:'basics', jp:'ÃÂ¥ÃÂÃÂÃÂ§ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¦ÃÂÃÂ®ÃÂ£ÃÂÃÂ£ÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ¨ÃÂÃÂ¯ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Shashin wo totte mo ii desu ka?', en:'May I take a photo?', tip:'Always ask before photographing people. Never photograph geisha.' },

  // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ TRANSPORT ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
  { cat:'transport', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ©ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'~ Eki wa doko desu ka?', en:'Where is ~ station?', tip:'Replace ~ with station name. e.g. "Aoto Eki wa doko desu ka?"' },
  { cat:'transport', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ§ÃÂ¤ÃÂ¸ÃÂÃÂ¦ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'~ made ichimai kudasai', en:'One ticket to ~, please', tip:'Show the destination name on your phone screen.' },
  { cat:'transport', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ®ÃÂ©ÃÂÃÂ»ÃÂ¨ÃÂ»ÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ«ÃÂ¦ÃÂ­ÃÂ¢ÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Kono densha wa ~ ni tomarimasu ka?', en:'Does this train stop at ~?', tip:'Very useful when you\'re not sure if you\'re on the right train.' },
  { cat:'transport', jp:'ÃÂ¦ÃÂ¬ÃÂ¡ÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Tsugi wa ~ desu ka?', en:'Is the next stop ~?', tip:'Ask fellow passengers ÃÂ¢ÃÂÃÂ Japanese people will often help.' },
  { cat:'transport', jp:'ICÃÂ£ÃÂÃÂ«ÃÂ£ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ«2000ÃÂ¥ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ£ÃÂ£ÃÂÃÂ¼ÃÂ£ÃÂÃÂ¸ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'IC caado ni nisen en chaaji shite kudasai', en:'Please charge ÃÂÃÂ¥2,000 on my IC card', tip:'Say this at any station staffed counter.' },
  { cat:'transport', jp:'ÃÂ¤ÃÂ¹ÃÂÃÂ£ÃÂÃÂÃÂ¦ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ©ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Norikawe wa doko desu ka?', en:'Where do I transfer?', tip:'Show your destination ÃÂ¢ÃÂÃÂ staff will point to the right platform.' },
  { cat:'transport', jp:'ÃÂ£ÃÂÃÂ¿ÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ·ÃÂ£ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ¥ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Takushii wo yonde kudasai', en:'Please call a taxi', tip:'Hotels will always call a taxi for you.' },
  { cat:'transport', jp:'ÃÂ§ÃÂ©ÃÂºÃÂ¦ÃÂ¸ÃÂ¯ÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ§ÃÂ¨ÃÂ¡ÃÂÃÂ£ÃÂÃÂ£ÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Kuukou made itte kudasai', en:'Please take me to the airport', tip:'Show the kanji to the driver: ÃÂ§ÃÂ¾ÃÂ½ÃÂ§ÃÂÃÂ°ÃÂ§ÃÂ©ÃÂºÃÂ¦ÃÂ¸ÃÂ¯ (Haneda) or ÃÂ¦ÃÂÃÂÃÂ§ÃÂÃÂ°ÃÂ§ÃÂ©ÃÂºÃÂ¦ÃÂ¸ÃÂ¯ (Narita).' },

  // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ FOOD ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
  { cat:'food', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¸ÃÂ£ÃÂÃÂ¿ÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂ¢ÃÂ£ÃÂÃÂ³ÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂ', romaji:'Bejitarian desu', en:'I am vegetarian', tip:'Japan is not as vegetarian-friendly as India ÃÂ¢ÃÂÃÂ always clarify!' },
  { cat:'food', jp:'ÃÂ¨ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ©ÃÂ£ÃÂÃÂ£ÃÂÃÂ¹ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Niku wa taberaremasen', en:'I cannot eat meat', tip:'Very important. Meat = ÃÂ¨ÃÂÃÂ (niku). Fish = ÃÂ©ÃÂ­ÃÂ (sakana).' },
  { cat:'food', jp:'ÃÂ©ÃÂ­ÃÂÃÂ£ÃÂÃÂÃÂ©ÃÂ£ÃÂÃÂ£ÃÂÃÂ¹ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Sakana mo taberaremasen', en:'I cannot eat fish either', tip:'Japanese "vegetarian" often includes fish. Say this too!' },
  { cat:'food', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ¨ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¥ÃÂÃÂ¥ÃÂ£ÃÂÃÂ£ÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Kore wa niku ga haitte imasu ka?', en:'Does this contain meat?', tip:'Show the dish and ask. Staff will usually check the kitchen for you.' },
  { cat:'food', jp:'ÃÂ©ÃÂÃÂÃÂ¨ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ®ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ®ÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Yasai dake no mono wa arimasu ka?', en:'Do you have anything with only vegetables?', tip:'Very useful at restaurants without English menus.' },
  { cat:'food', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Oishii!', en:'Delicious!', tip:'Say this after eating ÃÂ¢ÃÂÃÂ the chef or staff will be absolutely delighted!' },
  { cat:'food', jp:'ÃÂ£ÃÂÃÂÃÂ¤ÃÂ¼ÃÂÃÂ¨ÃÂ¨ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ©ÃÂ¡ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ', romaji:'Okaikei wo onegaishimasu', en:'The bill please', tip:'Or just mime signing a check in the air ÃÂ¢ÃÂÃÂ universally understood.' },
  { cat:'food', jp:'ÃÂ£ÃÂÃÂÃÂ¦ÃÂ°ÃÂ´ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Omizu wo kudasai', en:'Water please', tip:'In Japan, water is always free at restaurants. Just ask!' },
  { cat:'food', jp:'ÃÂ¨ÃÂ¾ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ®ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Karakunai mono wo kudasai', en:'Please give me something not spicy', tip:'For the kids ÃÂ¢ÃÂÃÂ Japanese food is mild but some dishes surprise!' },
  { cat:'food', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¨ÃÂ¥ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ®ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Kore to onaji mono wo kudasai', en:'Same as this please', tip:'Point to another diner\'s food ÃÂ¢ÃÂÃÂ completely acceptable in Japan!' },

  // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ SHOPPING ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
  { cat:'shopping', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Ikura desu ka?', en:'How much is this?', tip:'For any item. Point and ask.' },
  { cat:'shopping', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Kore wo kudasai', en:'I\'ll take this one', tip:'Point at the item + say this. Done!' },
  { cat:'shopping', jp:'ÃÂ¥ÃÂÃÂÃÂ§ÃÂ¨ÃÂÃÂ£ÃÂÃÂ«ÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Menzei ni narimasu ka?', en:'Can this be tax-free?', tip:'Show your passport ÃÂ¢ÃÂÃÂ many shops offer 10% back on ÃÂÃÂ¥5,000+ purchases.' },
  { cat:'shopping', jp:'ÃÂ¨ÃÂ¢ÃÂÃÂ£ÃÂÃÂ«ÃÂ¥ÃÂÃÂ¥ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Fukuro ni irete kudasai', en:'Please put it in a bag', tip:'Japanese shops often ask if you want a bag.' },
  { cat:'shopping', jp:'ÃÂ£ÃÂÃÂ«ÃÂ£ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ¤ÃÂ½ÃÂ¿ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Kaado wa tsukaemasu ka?', en:'Do you accept cards?', tip:'Most large shops do. Smaller shops and food stalls are often cash only.' },
  { cat:'shopping', jp:'ÃÂ¥ÃÂ°ÃÂÃÂ£ÃÂÃÂÃÂ¥ÃÂ®ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Sukoshi yasuku narimasu ka?', en:'Can it be a little cheaper?', tip:'Bargaining is NOT normal in Japan. Only try at flea markets or antique shops.' },
  { cat:'shopping', jp:'ÃÂ£ÃÂÃÂÃÂ¨ÃÂÃÂ²ÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'~ iro wa arimasu ka?', en:'Do you have it in ~ colour?', tip:'e.g. "Aka iro" (red), "Ao iro" (blue), "Shiro" (white), "Kuro" (black).' },

  // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ HOTEL ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
  { cat:'hotel', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ¤ÃÂ£ÃÂÃÂ³ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ©ÃÂ¡ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ', romaji:'Chekkuin wo onegaishimasu', en:'Check in please', tip:'Show booking confirmation on your phone.' },
  { cat:'hotel', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ¢ÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ©ÃÂ¡ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ', romaji:'Chekkuauto wo onegaishimasu', en:'Check out please', tip:'' },
  { cat:'hotel', jp:'Wi-FiÃÂ£ÃÂÃÂ®ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¹ÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¦ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Wai-fai no passuwaado wo oshiete kudasai', en:'Please tell me the WiFi password', tip:'' },
  { cat:'hotel', jp:'ÃÂ¨ÃÂÃÂ·ÃÂ§ÃÂÃÂ©ÃÂ£ÃÂÃÂÃÂ©ÃÂ ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ£ÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Nimotsu wo azukatte moraemasu ka?', en:'Can you store my luggage?', tip:'Most hotels store bags for free before check-in and after check-out.' },
  { cat:'hotel', jp:'ÃÂ£ÃÂÃÂ¿ÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂ«ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¤ÃÂ¸ÃÂÃÂ¦ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Taoru wo mou ichimai kudasai', en:'One more towel please', tip:'' },
  { cat:'hotel', jp:'ÃÂ£ÃÂÃÂ¨ÃÂ£ÃÂÃÂ¢ÃÂ£ÃÂÃÂ³ÃÂ£ÃÂÃÂ³ÃÂ£ÃÂÃÂ®ÃÂ¤ÃÂ½ÃÂ¿ÃÂ£ÃÂÃÂÃÂ¦ÃÂÃÂ¹ÃÂ£ÃÂÃÂÃÂ¦ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Eakon no tsukaikata wo oshiete kudasai', en:'Please show me how to use the AC', tip:'Japanese AC remotes can be confusing. Just ask!' },

  // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ EMERGENCY ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
  { cat:'emergency', jp:'ÃÂ¥ÃÂÃÂ©ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Tasukete kudasai!', en:'Help me please!', tip:'Say loudly. Japanese people will respond quickly.' },
  { cat:'emergency', jp:'ÃÂ¦ÃÂÃÂÃÂ¦ÃÂÃÂ¥ÃÂ¨ÃÂ»ÃÂÃÂ£ÃÂÃÂÃÂ¥ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Kyuukyuusha wo yonde kudasai', en:'Please call an ambulance', tip:'Emergency number in Japan: 119 (ambulance/fire), 110 (police).' },
  { cat:'emergency', jp:'ÃÂ¨ÃÂ­ÃÂ¦ÃÂ¥ÃÂ¯ÃÂÃÂ£ÃÂÃÂÃÂ¥ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Keisatsu wo yonde kudasai', en:'Please call the police', tip:'Emergency number: 110' },
  { cat:'emergency', jp:'ÃÂ¨ÃÂ¿ÃÂ·ÃÂ¥ÃÂ­ÃÂÃÂ£ÃÂÃÂ«ÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Maigo ni narimashita', en:'I am lost', tip:'Say this at any police box (koban ÃÂ¢ÃÂÃÂ small blue police stations everywhere).' },
  { cat:'emergency', jp:'ÃÂ¦ÃÂ°ÃÂÃÂ¥ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¦ÃÂÃÂªÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂ', romaji:'Kibun ga warui desu', en:'I feel sick', tip:'Japan has excellent pharmacies (ÃÂ¨ÃÂÃÂ¬ÃÂ¥ÃÂ±ÃÂ yakkyoku) on every street.' },
  { cat:'emergency', jp:'ÃÂ£ÃÂÃÂ¢ÃÂ£ÃÂÃÂ¬ÃÂ£ÃÂÃÂ«ÃÂ£ÃÂÃÂ®ÃÂ£ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂ', romaji:'Arerugii ga arimasu', en:'I have allergies', tip:'Combined with the food phrases above ÃÂ¢ÃÂÃÂ very important for vegetarians.' },
  { cat:'emergency', jp:'ÃÂ§ÃÂÃÂÃÂ©ÃÂÃÂ¢ÃÂ£ÃÂÃÂ«ÃÂ©ÃÂÃÂ£ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¦ÃÂ¨ÃÂ¡ÃÂÃÂ£ÃÂÃÂ£ÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Byouin ni tsurete itte kudasai', en:'Please take me to a hospital', tip:'' },
  { cat:'emergency', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¹ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¼ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ§ÃÂ´ÃÂÃÂ¥ÃÂ¤ÃÂ±ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ', romaji:'Pasupooto wo funshitsu shimashita', en:'I lost my passport', tip:'Go to the nearest police box (koban) first, then your embassy.' },

  // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ KIDS ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
  { cat:'kids', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Kawaii!', en:'Cute! (kids say this all the time)', tip:'Japanese people will love hearing this from kids about anything!' },
  { cat:'kids', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Oishii!', en:'Yummy / Delicious!', tip:'The word kids use most in Japan. Say it about everything!' },
  { cat:'kids', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¨ÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Arigatou!', en:'Thanks! (casual)', tip:'Teach kids this from day 1 ÃÂ¢ÃÂÃÂ they\'ll use it constantly.' },
  { cat:'kids', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¤ÃÂ½ÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Kore nan desu ka?', en:'What is this?', tip:'Kids can point and ask ÃÂ¢ÃÂÃÂ most vendors love explaining.' },
  { cat:'kids', jp:'ÃÂ£ÃÂÃÂÃÂ¦ÃÂÃÂÃÂ¦ÃÂ´ÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ¯ÃÂ£ÃÂÃÂ©ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Otearai wa doko desu ka?', en:'Where is the bathroom?', tip:'More polite version for kids to use.' },
  { cat:'kids', jp:'ÃÂ¤ÃÂ¸ÃÂÃÂ§ÃÂ·ÃÂÃÂ£ÃÂÃÂ«ÃÂ¥ÃÂÃÂÃÂ§ÃÂÃÂÃÂ¦ÃÂÃÂ®ÃÂ£ÃÂÃÂ£ÃÂ£ÃÂÃÂ¦ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Issho ni shashin totte mo ii desu ka?', en:'Can we take a photo together?', tip:'Japanese people sometimes ask kids this! This is how to ask back.' },
  { cat:'kids', jp:'ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ±ÃÂ£ÃÂÃÂ¢ÃÂ£ÃÂÃÂ³ÃÂ¥ÃÂ¥ÃÂ½ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'PokÃÂÃÂ©mon suki desu!', en:'I like PokÃÂÃÂ©mon!', tip:'Instant friendship with any Japanese child. Magic words.' },
  { cat:'kids', jp:'ÃÂ£ÃÂÃÂ¤ÃÂ£ÃÂÃÂ¾ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂªÃÂ£ÃÂÃÂÃÂ¢ÃÂÃÂ¦', romaji:'Tsumaranai...', en:'I\'m bored... (use with caution)', tip:'Teach kids this for the shinkansen. Though Japan will keep them entertained!' },

  // ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ NUMBERS ÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂÃÂ¢ÃÂÃÂ
  { cat:'numbers', jp:'ÃÂ¤ÃÂ¸ÃÂ (ichi) / ÃÂ¤ÃÂºÃÂ (ni) / ÃÂ¤ÃÂ¸ÃÂ (san)', romaji:'ichi / ni / san', en:'1 / 2 / 3', tip:'' },
  { cat:'numbers', jp:'ÃÂ¥ÃÂÃÂ (shi/yon) / ÃÂ¤ÃÂºÃÂ (go) / ÃÂ¥ÃÂÃÂ­ (roku)', romaji:'shiÃÂÃÂ·yon / go / roku', en:'4 / 5 / 6', tip:'4 is unlucky (sounds like "death") ÃÂ¢ÃÂÃÂ so shi is avoided, use yon.' },
  { cat:'numbers', jp:'ÃÂ¤ÃÂ¸ÃÂ (nana) / ÃÂ¥ÃÂÃÂ« (hachi) / ÃÂ¤ÃÂ¹ÃÂ (ku) / ÃÂ¥ÃÂÃÂ (juu)', romaji:'nana / hachi / ku / juu', en:'7 / 8 / 9 / 10', tip:'' },
  { cat:'numbers', jp:'ÃÂ§ÃÂÃÂ¾ (hyaku) / ÃÂ¥ÃÂÃÂ (sen) / ÃÂ¤ÃÂ¸ÃÂ (man)', romaji:'hyaku / sen / man', en:'100 / 1,000 / 10,000', tip:'ÃÂÃÂ¥10,000 = ichiman en. ÃÂÃÂ¥1,000 = sen en.' },
  { cat:'numbers', jp:'ÃÂ¤ÃÂ¸ÃÂÃÂ£ÃÂÃÂ¤ (hitotsu) / ÃÂ¤ÃÂºÃÂÃÂ£ÃÂÃÂ¤ (futatsu)', romaji:'hitotsu / futatsu', en:'One (thing) / Two (things)', tip:'When ordering food: "hitotsu kudasai" = one please.' },
  { cat:'numbers', jp:'ÃÂ¤ÃÂ½ÃÂÃÂ§ÃÂÃÂªÃÂ§ÃÂ·ÃÂÃÂ£ÃÂÃÂ§ÃÂ£ÃÂÃÂÃÂ£ÃÂÃÂÃÂ¯ÃÂ¼ÃÂ', romaji:'Nani bansen desu ka?', en:'Which platform number?', tip:'Extremely useful at train stations. Show destination, ask this.' }
];
