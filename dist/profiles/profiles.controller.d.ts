import { CreateProfileDto } from './dto/create-profile.dto';
export declare class ProfilesController {
    findAll(location: string): string[];
    findOne(id: string): string;
    create(createProfileDto: CreateProfileDto): {
        name: string;
        description: string;
    };
    update(id: string, updateProfileDto: CreateProfileDto): {
        name: string;
        description: string;
        id: string;
    };
    remove(id: string): void;
}
