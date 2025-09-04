import { User } from '@/core/domains/models/user.model';
import { UserRepository } from '@/core/domains/repositories/user.repository';
import { UserQueryParams, UserProfileWebResponseDTO } from '@/core/domains/types/user.type';
import { HttpService } from '../services/http.service';
import { AxiosError } from 'axios';

export class UserRepositoryFrontendImpl implements UserRepository {
  constructor(private httpService: HttpService) {}
  async getProfileWeb(params?: UserQueryParams): Promise<User> {
    try {
      const response = await this.httpService.get('/api/profile', { params });
      if (!String(response).startsWith(")]}',")) {
        throw new Error('Something went wrong!');
      }
      return User.fromApiForProfileWeb(response);
    } catch (err: unknown) {
      const error = err as AxiosError;
      throw new Error(error.message || 'Something went wrong!');
    }
  }
}

export class UserRepositoryBackendImpl implements UserRepository {
  constructor() {}
  async getProfileWeb(params?: UserQueryParams): Promise<User> {
    try {
      const mockResponse: UserProfileWebResponseDTO = [
        true,
        [
          User.encodeData('45cd7266-83f8-4d35-b861-e93e204f5c55'),
          User.encodeData('Fatih M. Ridho'),
          [
            User.encodeData('Software Development'),
            [
              User.encodeData(
                'Saya membangun pengalaman digital yang mudah diakses dan sempurna hingga ke piksel untuk web.',
              ),
              User.encodeData('I build accessible, pixel-perfect digital experiences for the web.'),
            ],
            [
              User.encodeData(
                '<p>Saya adalah seorang Frontend Developer yang memiliki semangat tinggi dalam menciptakan aplikasi responsif dan dinamis dengan pengalaman pengguna yang mulus. Dengan keahlian dalam teknologi modern seperti React.js, Next.js, dan React Native, saya menikmati proses membangun solusi digital yang menggabungkan desain yang matang dengan fungsionalitas yang kuat. Komitmen saya terhadap kode yang bersih dan mudah dirawat memastikan setiap proyek yang saya kerjakan dapat diskalakan dan memiliki performa tinggi.</p><br /><p>Sepanjang karier saya, saya telah menangani berbagai proyek mulai dari aplikasi mobile, sistem manajemen konten, hingga platform marketplace. Bekerja sama dengan tim lintas fungsi, saya telah berhasil menghadirkan fitur-fitur inovatif yang sesuai dengan kebutuhan pengguna dan mengikuti praktik terbaik industri. Pengalaman saya mencakup integrasi REST API, penerapan prinsip clean architecture, serta optimalisasi performa aplikasi untuk platform web dan mobile.</p><br /><p>Saya bangga terus mengembangkan keterampilan melalui sertifikasi dan proyek-proyek praktis. Dengan selalu mengikuti perkembangan teknologi terbaru, saya memastikan hasil kerja saya mencerminkan standar dan tren pengembangan modern. Keahlian saya mencakup tidak hanya aspek teknis, tetapi juga kolaborasi dan pemecahan masalah secara efektif—dua hal yang sangat penting untuk menghasilkan solusi yang berdampak.</p><br /><p>Di waktu luang, saya senang mengeksplorasi teknologi baru dan berkontribusi pada proyek-proyek open-source. Saya berupaya menciptakan pengalaman digital yang tidak hanya fungsional, tetapi juga bermakna bagi para pengguna.</p>',
              ),
              User.encodeData(
                '<p>I’m a Frontend Developer passionate about creating responsive and dynamic applications that provide seamless user experiences. With expertise in modern technologies like React.js, Next.js, and React Native, I enjoy building digital solutions that combine thoughtful design with robust functionality. My commitment to clean and maintainable code ensures every project is both scalable and high-performing.</p><br /><p>Throughout my career, I have worked on diverse projects ranging from mobile applications to content management systems and marketplace platforms. Collaborating with cross-functional teams, I’ve delivered innovative features that meet user needs while adhering to industry best practices. My experience includes integrating REST APIs, implementing clean architecture principles, and optimizing application performance for both web and mobile environments.</p><br /><p>I take pride in continuously developing my skills through certifications and practical projects. By staying up-to-date with the latest technologies, I ensure that my work reflects modern development standards and trends. My expertise spans not only technical implementation but also effective collaboration and problem-solving, which are crucial for delivering impactful results.</p><br /><p>In my free time, I enjoy exploring new technologies and contributing to open-source projects. I strive to create digital experiences that are both functional and meaningful for users.</p>',
              ),
            ],
            [
              [User.encodeData('github'), User.encodeData('https://github.com/fatihmuhamadridho')],
              [User.encodeData('linkedin'), User.encodeData('https://www.linkedin.com/in/fatihmuhamadridho/')],
              [User.encodeData('instagram'), User.encodeData('https://www.instagram.com/fatihmuhamadridho')],
            ],
          ],
        ],
      ];
      return Promise.resolve(User.toResponseApi(mockResponse));
    } catch (err: unknown) {
      return err as any;
    }
  }
}
