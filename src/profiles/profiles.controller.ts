/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Put, Delete , ParseUUIDPipe , UseGuards} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';
@Controller('profiles')
export class ProfilesController {
constructor(private profilesService: ProfilesService) {}

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.findOne(id);
    
  }
  @Post()
  create(@Body(/*new ValidationPipe()*/) createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }
  @Put(':id')
  update(
  @Param('id' , ParseUUIDPipe) id: UUID,
  @Body() updateProfileDto: UpdateProfileDto,
  )
  {
      return this.profilesService.update(id, updateProfileDto);
  } 
  @Delete(':id')
  @UseGuards(ProfilesGuard) /* Protect this route with ProfilesGuard (7atit false donc mamno3) */
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.remove(id);
  }
}
