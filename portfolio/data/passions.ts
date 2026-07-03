import type { Passion } from "./types";

/**
 * "What I'm passionate about" — each entry becomes a tab with its own
 * hero media, first-person story, and stats. Keep the story in your voice.
 */
export const passions: Passion[] = [
  {
    id: "dance",
    title: "Dance",
    tagline: "Bollywood, hip-hop, and stage energy.",
    story:
      "Dance is where I switch off the engineer brain and just feel. I've performed Bollywood and hip-hop on stage — from college cult nights to Google stages. The reps, the choreography, the nerves before going on: it's the same loop as building software, just with more sweat and louder applause.",
    media: {
      type: "youtube",
      src: "https://www.youtube.com/watch?v=SC1XXnYLfvA",
      start: 5,
      caption: "My most viewed video so far — 53K and counting.",
    },
    stats: [
      { label: "Years dancing", value: "10+" },
      { label: "Stage performances", value: "20+" },
      { label: "Styles", value: "Bollywood · Hip-hop" },
    ],
    links: [
      { label: "Seduce @ Google", href: "https://www.instagram.com/p/CdIC1TxovmW/" },
      { label: "Banthan Chali", href: "https://www.instagram.com/p/CdKpBPHqvo-/" },
    ],
  },
  {
    id: "tennis",
    title: "Tennis",
    tagline: "Consistency beats flash.",
    story:
      "Tennis taught me that consistency beats flash. It's a game of staying calm under pressure and out-lasting the moment. It's a stress buster for me, and I try to hit the court three times a week. I'm just a text away for the next game — whether you're the best at this sport or it's your first time, I'd love to play. I started playing in 2017 and won a tournament early on; that positive feedback loop kept me going. But I only got consistent after I moved to California, and I believe I'm a 3.5 now.",
    media: {
      type: "video",
      src: "/passions/tennis.mp4",
      alt: "Playing tennis",
      start: 5,
      end: 25,
    },
    stats: [
      { label: "Playing since", value: "2017" },
      { label: "On court", value: "3×/week" },
      { label: "Level", value: "NTRP 3.5" },
    ],
  },
  {
    id: "skiing",
    title: "Skiing",
    tagline: "Mountains, speed, and respect for the fall line.",
    story:
      "My first time on skis was in Seattle. Since then I've had two great seasons hitting the mountains in Lake Tahoe and Denver — and this year I finally got my first black diamond down.",
    media: {
      type: "image",
      src: "/passions/skiing.jpg",
      alt: "Skiing down a mountain",
    },
    stats: [
      { label: "Seasons", value: "2" },
      { label: "Mountains", value: "Tahoe · Denver" },
      { label: "This year", value: "First black" },
    ],
  },
  {
    id: "connection",
    title: "Connection building",
    tagline: "People first. Relationships compound.",
    story:
      "I believe the best opportunities and the best work come from genuine relationships. I love connecting people, hosting, and being the person who follows up. This is the throughline across everything I do — turning a one-time conversation into a long-term connection. Most recently, I got to help bring my VNIT college community together at the Alumni Association's Bay Area chapter.",
    media: {
      type: "image",
      src: "/passions/vnit-aa-self.png",
      alt: "Speaking at the VNIT Alumni Association Bay Area Chapter launch, 2026",
      caption: "Kicking off the VNIT Alumni Association — Bay Area Chapter, 2026.",
      gallery: [
        {
          src: "/passions/vnit-aa-group.png",
          alt: "VNIT alumni gathered at the Bay Area chapter meetup",
        },
      ],
    },
    stats: [],
  },
  {
    id: "vipassana",
    title: "Vipassana",
    tagline: "10 days of silence. One of the most life-changing things I've ever done.",
    story:
      "I did my 10-day Vipassana course at Dhamma Giri in Igatpuri — one of the world's largest Vipassana centres, tucked into the hills of Maharashtra. No phone, no laptop, no talking, no eye contact. Waking up at 4 AM, lights out at 9 PM. Dinner was a small snack — they say an empty stomach helps you focus on the mind, and I believe it. Those 10 days were genuinely one of the most life-changing experiences I've had. It made me extremely grounded as a person. It taught me the right way to meditate — not just sitting with eyes closed, but actually observing sensation without reaction. The routine was one of the best I've ever lived. I'm going to write much more about this very soon.",
    media: {
      type: "image",
      src: "/passions/vipassana-dhammagiri.jpg",
      alt: "Dhamma Giri — Vipassana International Academy, Igatpuri",
      caption: "Dhamma Giri — Vipassana International Academy, Igatpuri, Maharashtra.",
    },
    stats: [
      { label: "Duration", value: "10 days" },
      { label: "Centre", value: "Dhamma Giri, Igatpuri" },
      { label: "Daily schedule", value: "4 AM – 9 PM" },
    ],
    links: [
      { label: "Learn about Vipassana", href: "https://www.dhamma.org" },
    ],
  },
  {
    id: "mentorship",
    title: "Mentorship",
    tagline: "Paying it forward, one session at a time.",
    story:
      "I spend about 3 hours a week guiding juniors — career advice, mentorship, mock interviews, and resume reviews. Resume review is something I believe I understand really well: I love helping people tell their story in a way top tech companies actually respond to. If that's useful to you, you can book a session with me on Topmate.",
    media: {
      type: "image",
      src: "/passions/topmate.png",
      alt: "Dhiraj's Topmate mentorship profile",
      fit: "contain",
    },
    stats: [
      { label: "Time given", value: "3 hrs/week" },
      { label: "Topmate", value: "Top 1%" },
      { label: "Rating", value: "5/5" },
    ],
    links: [
      { label: "Book a session on Topmate", href: "https://topmate.io/dhiraj_gandhi" },
    ],
  },
];
