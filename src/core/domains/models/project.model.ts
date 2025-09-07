export class Project {
  constructor(
    public readonly id: string,
    public title: string,
    public description: Record<string, string>,
    public role: string,
    public thumbnail: string,
    public tools: string[],
    public made_at: string,
    public date: string,
    public is_favorite: boolean,
    public link?: {
      title: string;
      url: string;
    },
  ) {}
}
