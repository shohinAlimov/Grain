export type AiNote = {
  id: number;
  title: string;
  desc: string;
  color: "purple" | "blue" | "orange" | "green";
};

export const AiMeetingNotes: AiNote[] = [
  {
    id: 1,
    title: "AI Notes & Templates",
    desc:
      "Grain will join your calendar meetings to generate a recording, transcript, and AI-powered notes with the content you want, in the format you want",
    color: "purple",
  },
  {
    id: 2,
    title: "Custom AI Note Prompts",
    desc:
      "Never settle for generic AI outputs. Ask questions of the transcript until satisfied with the response, then add it to your notes",
    color: "purple",
  },
  {
    id: 3,
    title: "Video Highlights & Sharing",
    desc:
      "Click any AI note or select text in the transcript to create a video highlight you can share anywhere you can paste a link",
    color: "purple",
  },
];
