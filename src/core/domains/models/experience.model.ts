export class Experience {
  constructor(
    public readonly id: string,
    public company_name: string,
    public position_name: string,
    public location: string,
    public description: string,
    public portofolio: string, // ini nanti berupa point-point pencapaian kerja gitu sih, kayaknya perlu diganti nama attribute nya
    public tools: string[],
    public start_date: string, // epoch to MMM-YYYY
    public end_date: string, // epoch to MMM-YYYY
    public is_until_now: boolean,
    public is_top: boolean,
  ) {}
}
