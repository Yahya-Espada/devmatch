import { CreateProfileDto } from './dto/create-profile.dto';
export declare class ProfilesController {
    findAll(location: string): string[];
    findOne(id: string): string;
    create(createProfileDto: CreateProfileDto): CreateProfileDto;
}
