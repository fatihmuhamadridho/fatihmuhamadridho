export class Project {
  constructor(
    public readonly id: number,
    public readonly year: number,
    public readonly project: string,
    public readonly madeAt: string,
    public readonly isFavorite: boolean,
    public readonly role: string,
    public readonly description: string,
    public readonly image: string,
  ) {}

  getFavoritedProject(): Project[] {
    return [];
  }
}
