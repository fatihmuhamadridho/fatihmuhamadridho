export class Project {
  constructor(
    public readonly id: string,
    public name: string,
    public alias_name: string,
    public description: string,
    public tools: string,
    public image_url: string,
    public made_at: string,
    public is_top: boolean,
    public url: string,
    public year: number,
  ) {}
}
