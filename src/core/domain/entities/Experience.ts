export class Experience {
  constructor(
    public readonly id: number,
    public readonly from: string,
    public readonly to: 'PRESENT' | string,
    public readonly role: string,
    public readonly type: 'contract' | 'permanent',
    public readonly description: string,
    public readonly tools: string[],
  ) {}
}
