import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    findAll(): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    }[];
    findOne(id: string): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    } | undefined;
    create(createProfileDto: CreateProfileDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
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
