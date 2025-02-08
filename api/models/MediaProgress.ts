export interface MediaProgress {
  id: string; // The ID of the media progress
  libraryItemId: string; // The ID of the library item
  episodeId: string | null; // The ID of the podcast episode, null if it's a book
  duration: number; // Total duration in seconds, 0 if marked as finished without listening
  progress: number; // Percentage completion (0 to 1), 1 if finished
  currentTime: number; // Current time in seconds, last position if finished
  isFinished: boolean; // Whether the media is finished
  hideFromContinueListening: boolean; // Whether it's hidden from "Continue Listening"
  lastUpdate: number; // Timestamp (ms since POSIX epoch) when last updated
  startedAt: number; // Timestamp (ms since POSIX epoch) when created
  finishedAt: number | null; // Timestamp (ms since POSIX epoch) when finished, null if not finished
}
