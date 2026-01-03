import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
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
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return matchingProfile;
  }
  create(createProfileDto: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }
  update(id: string, updateProfileDto: UpdateProfileDto) {
    const matchingProfile = this.profiles.find(
      (existingProfile) => existingProfile.id === id,
    );
    if (!matchingProfile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    matchingProfile.name = updateProfileDto.name ?? matchingProfile.name;
    matchingProfile.description =
      updateProfileDto.description ?? matchingProfile.description;

    return matchingProfile;
  }
  remove(id: string) {
    const matchingProfileIndex = this.profiles.findIndex(
      (existingProfile) => existingProfile.id === id,
    );
    if (matchingProfileIndex === -1) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    const [deleted] = this.profiles.splice(matchingProfileIndex, 1);
    return deleted;
  }
}
