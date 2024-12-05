export class ProjectImageIncludeHttp {
  constructor(
    public readonly projectId: number,
    public readonly includesProjectIds: number[],
  ) {}

  isProjectIncludeHttp(): boolean {
    return true;
  }
}
