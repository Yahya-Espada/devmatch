import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'A sample profile',
    },
    {
      id: randomUUID(),
      name: 'Jane Smith',
      description: 'Another sample profile',
    },
    {
      id: randomUUID(),
      name: 'Alice Johnson',
      description: 'Yet another sample profile',
    },
  ];
  findAll() {
    return this.profiles;
  }
  findOne(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }
  create(name: string, description: string) {
    const newProfile = {
      id: randomUUID(),
      name,
      description,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }
}
