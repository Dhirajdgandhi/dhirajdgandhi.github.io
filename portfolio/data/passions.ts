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
      type: "image",
      src: "/passions/dance.jpg",
      alt: "Dhiraj performing on stage",
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
      "I believe the best opportunities and the best work come from genuine relationships. I love connecting people, hosting, and being the person who follows up. This is the throughline across everything I do — turning a one-time conversation into a long-term connection.",
    media: {
      type: "image",
      src: "/passions/connection.jpg",
      alt: "With friends and community",
    },
    stats: [],
  },
  {
    id: "mentorship",
    title: "Mentorship",
    tagline: "Paying it forward, one session at a time.",
    story:
      "I spend about 3 hours a week guiding juniors — career advice, mentorship, mock interviews, and resume reviews. Resume review is something I believe I understand really well: I love helping people tell their story in a way top tech companies actually respond to. If that's useful to you, you can book a session with me on Topmate.",
    media: {
      type: "image",
      src: "/passions/mentorship.jpg",
      alt: "Mentoring and career guidance sessions",
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
