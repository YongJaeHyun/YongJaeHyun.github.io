interface IProjectInfo {
  id: string;
  title: string;
  numOfPeople: number;
  imgLength: number;
  githubURL?: string;
  deployURL?: string;
  summary: string;
  tasks: string[];
  result: string;
  resultDetail?: string;
  skills: string[];
  startDate: string;
  endDate: string;
  hasVideo: boolean;
}
