import { UserModelData } from '../types/user.type';
import { Experience } from './experience.model';
import { Project } from './project.model';
import { Security } from './security.model';
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

  static userTupleMapper = new TupleMapper<User>(
    [
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
        [
          'id',
          'company',
          'role',
          'type',
          ['description', ['id', 'en']],
          ['tools', { isArrayOfString: true }],
          'start_date',
          'end_date',
          'is_present',
          'is_show',
        ],
        { isArray: true },
      ],
      [
        'projects',
        [
          'id',
          'title',
          ['description', ['id', 'en']],
          'role',
          'thumbnail',
          ['tools', { isArrayOfString: true }],
          'made_at',
          'date',
          ['link', ['title', 'url']],
          'is_favorite',
        ],
        { isArray: true },
      ],
    ],
    {
      beforeWrite: (val) => (typeof val === 'string' ? Security.encodeValue(val) : val),
      afterRead: (val) => (typeof val === 'string' ? Security.decodeValue(val) : val),
    },
  );

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
}
