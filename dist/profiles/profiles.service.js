"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ProfilesService = class ProfilesService {
    profiles = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'John Doe',
            description: 'A sample profile',
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Jane Smith',
            description: 'Another sample profile',
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Alice Johnson',
            description: 'Yet another sample profile',
        },
    ];
    findAll() {
        return this.profiles;
    }
    findOne(id) {
        const matchingProfile = this.profiles.find((profile) => profile.id === id);
        if (!matchingProfile) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        return matchingProfile;
    }
    create(createProfileDto) {
        const newProfile = {
            id: (0, crypto_1.randomUUID)(),
            ...createProfileDto,
        };
        this.profiles.push(newProfile);
        return newProfile;
    }
    update(id, updateProfileDto) {
        const matchingProfile = this.profiles.find((existingProfile) => existingProfile.id === id);
        if (!matchingProfile) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        matchingProfile.name = updateProfileDto.name ?? matchingProfile.name;
        matchingProfile.description =
            updateProfileDto.description ?? matchingProfile.description;
        return matchingProfile;
    }
    remove(id) {
        const matchingProfileIndex = this.profiles.findIndex((existingProfile) => existingProfile.id === id);
        if (matchingProfileIndex === -1) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        const [deleted] = this.profiles.splice(matchingProfileIndex, 1);
        return deleted;
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)()
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map