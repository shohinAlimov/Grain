import { assets } from "../assets/assets";

export type CardProps = {
  id: number;
  title: string;
  desc: string;
  color: "purple" | "blue" | "orange" | "green";
  img: string;
  circleClass?: string | "";
};

export const AiMeetingNotes: CardProps[] = [
  {
    id: 1,
    title: "AI Notes & Templates",
    desc:
      "Grain will join your calendar meetings to generate a recording, transcript, and AI-powered notes with the content you want, in the format you want",
    color: "purple",
    img: assets.image1,
  },
  {
    id: 2,
    title: "Custom AI Note Prompts",
    desc:
      "Never settle for generic AI outputs. Ask questions of the transcript until satisfied with the response, then add it to your notes",
    color: "purple",
    img: assets.image2,
  },
  {
    id: 3,
    title: "Video Highlights & Sharing",
    desc:
      "Click any AI note or select text in the transcript to create a video highlight you can share anywhere you can paste a link",
    color: "purple",
    img: assets.image3,
  },
];

export const MeetingAutomation: CardProps[] = [
  {
    id: 1,
    title: "Sync AI Notes w/ CRMs",
    desc:
      "Grain matches meeting participants with CRM records to automatically sync the AI notes as an activity on the Contact or Deal record",
    color: "blue",
    img: assets.image2,
  },
  {
    id: 2,
    title: "CRM Field Enrichment",
    desc:
      "Automatically enrich your CRM fields whenever Grain detects a match with data contained within your meeting transcripts",
    color: "blue",
    img: assets.image3,
  },
  {
    id: 3,
    title: "AI-powered Followup Emails",
    desc:
      "Save hours per week prepping meeting follow-ups by having Grain write them for you using the transcript content",
    color: "blue",
    img: assets.image1,
  },
];

export const CoachingCollaboration: CardProps[] = [
  {
    id: 1,
    title: "Playlists & Reels",
    desc:
      "All meetings belong to your team Library but playlists and reels make it easy to curate, create, and share team training content",
    color: "orange",
    img: assets.image3,
  },
  {
    id: 2,
    title: "Time-stamped Comments",
    desc:
      "No more game of telephone, select any transcript text to leave a comment for your reps at the exact relevant moment",
    color: "orange",
    img: assets.image1,
  },
  {
    id: 3,
    title: "Timeline & Coaching Stats",
    desc:
      "Everyone knows when their reps talk too much, but with coaching stats you finally have the data too",
    color: "orange",
    img: assets.image4,
  },
];

export const Analytics: CardProps[] = [
  {
    id: 1,
    title: "Playlists & Reels",
    desc:
      "All meetings belong to your team Library but playlists and reels make it easy to curate, create, and share team training content",
    color: "green",
    img: assets.image4,
  },
  {
    id: 2,
    title: "Time-stamped Comments",
    desc:
      "No more game of telephone, select any transcript text to leave a comment for your reps at the exact relevant moment",
    color: "green",
    img: assets.image2,
  },
  {
    id: 3,
    title: "Timeline & Coaching Stats",
    desc:
      "Everyone knows when their reps talk too much, but with coaching stats you finally have the data too",
    color: "green",
    img: assets.image1,
  },
];
