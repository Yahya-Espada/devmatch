/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfilesService } from './profiles.service';
@Controller('profiles')
export class ProfilesController {
constructor(private profilesService: ProfilesService) {}

  @Get()
  findAll() {
    return this.profilesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne(id);
  }
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto.name, createProfileDto.description);
  }
    @Put(':id')
    update(
    @Param('id') id: string,
    @Body() updateProfileDto: CreateProfileDto,
    )
    {
        return {
        id,
        ...updateProfileDto
        };
    } 
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {}


}
