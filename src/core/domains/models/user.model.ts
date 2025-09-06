import { UserModelData } from '../types/user.type';
import { Experience } from './experience.model';
import { Project } from './project.model';
import { TupleMapper } from './tupleMapper.model';

export class User {
  constructor(
    public readonly id: string,
    public username: string,
    public email: string,
    private password: string,
    public fullname: string,
    public phone: string,
    public detail: {
      role: string;
      short_description: Record<string, string>;
      long_description: Record<string, string>;
      social_media: Array<{ icon: string; url: string }>;
    },
    public experiences?: Experience[],
    public projects?: Project[],
  ) {}

  static userTupleMapper = new TupleMapper<User>([
    'id',
    'username',
    'email',
    'password',
    'fullname',
    'phone',
    [
      'detail',
      [
        'role',
        ['short_description', ['id', 'en']],
        ['long_description', ['id', 'en']],
        ['social_media', ['icon', 'url'], { isArray: true }],
      ],
    ],
    [
      'experiences',
      ['id', 'company', 'role', 'type', 'description', 'tools', 'start_date', 'end_date', 'is_present', 'is_show'],
      { isArray: true },
    ],
    [
      'projects',
      ['id', 'title', 'description', 'role', 'thumbnail', 'tools', 'made_at', 'date', ['link', ['title', 'url']]],
      { isArray: true },
    ],
  ]);

  static toModelData(data: UserModelData): User {
    const id = data.id || '',
      username = data.username || '',
      email = data.email || '',
      password = data.password || '',
      fullname = data.fullname || '',
      phone = data.phone || '',
      detail = data.detail || {
        role: '',
        short_description: { id: '' },
        long_description: { id: '' },
        social_media: '',
      },
      experiences = (data.experiences as Experience[]) || [],
      projects =
        (data.projects as Project[]).map((item) => ({
          ...item,
          link: item.link?.title || item.link?.url ? item.link : undefined,
        })) || [];
    return new User(id, username, email, password, fullname, phone, detail, experiences, projects);
  }

  static toTupleData(data: User): any {
    const response = [
      data.id,
      data.username,
      data.email,
      data.password,
      data.fullname,
      data.phone,
      [
        data.detail.role,
        [data.detail.short_description.id, data.detail.short_description.en],
        [data.detail.long_description.id, data.detail.long_description.en],
        [data.detail.social_media.map((item) => [item.icon, item.url])],
      ],
      data.experiences?.map((item) => [
        item.id,
        item.company,
        item.role,
        item.type,
        item.description,
        item.tools,
        item.start_date,
        item.end_date,
        item.is_present,
        item.is_show,
      ]),
      data.projects?.map((item) => [
        item.id,
        item.title,
        item.description,
        item.role,
        item.thumbnail,
        item.tools,
        item.made_at,
        item.date,
        [item.link?.title, item.link?.url],
      ]),
    ];
    return response;
  }
}
