/**
 * Shared data types for the portfolio.
 * Every section reads from a typed array/object in /data so content stays
 * decoupled from presentation. Skills (.cursor/skills/portfolio-*) edit these.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** lucide-react icon name, resolved in components/icon.tsx */
  icon: "github" | "linkedin" | "mail" | "instagram" | "twitter" | "globe";
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  /** One-line hook shown large in the hero. */
  headline: string;
  /** Supporting paragraph under the headline. */
  summary: string;
  availability?: string;
  resumeUrl?: string;
  /** Public scheduling link (e.g. Google Calendar appointments) for 1:1 booking. */
  bookingUrl?: string;
  email: string;
  /** Profile/cover photo, e.g. /dhiraj_profile.jpg */
  photo?: string;
  socials: SocialLink[];
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  team?: string;
  location: string;
  start: string;
  end: string; // "Present" allowed
  /** Short, impact-first bullets. */
  highlights: string[];
  stack?: string[];
  /** Optional brand/logo color used for the timeline node. */
  accent?: string;
  /** Company logo, e.g. /companies/google.png */
  logo?: string;
};

export type Person = {
  id: string;
  name: string;
  title: string;
  relationship: string; // e.g. "Manager at Google", "Collaborator"
  quote: string;
  avatar?: string; // /people/foo.jpg or remote URL
  href?: string; // LinkedIn / profile link
};

export type PassionStat = {
  label: string;
  value: string;
};

export type Passion = {
  id: string;
  title: string;
  tagline: string;
  /** Long-form, first-person blog/story text (kept in the user's own voice). */
  story: string;
  /** Hero image, local video, or YouTube embed. Use type to switch rendering. */
  media?: {
    type: "image" | "video" | "youtube";
    /** Image/video path, or a YouTube URL or video id when type is "youtube". */
    src: string;
    poster?: string;
    alt?: string;
    /**
     * How the media fills its box. "cover" (default) crops to fill; "contain"
     * shows the whole asset, framed — use for screenshots/cards.
     */
    fit?: "cover" | "contain";
    /**
     * Start (and optional end) time. For local video, values in (0,1] are a
     * fraction of duration and the clip loops between start/end. For YouTube,
     * these are seconds passed to the player.
     */
    start?: number;
    end?: number;
    /** Optional caption shown under the media. */
    caption?: string;
    /** Optional extra images shown as a strip/grid beneath the hero media. */
    gallery?: { src: string; alt?: string }[];
  };
  stats: PassionStat[];
  links?: { label: string; href: string }[];
};

export type Goal = {
  id: string;
  title: string;
  description: string;
  horizon: string; // e.g. "2026", "Long-term"
  status: "exploring" | "in-progress" | "done";
};

export type Thought = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  href?: string;
  tags?: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  year?: string;
  repo?: string;
  demo?: string;
  featured?: boolean;
  /** UI preview image, e.g. /projects/uninex.png */
  image?: string;
};
