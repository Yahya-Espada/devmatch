/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(@Query('location') location: string) {
    return [`welcome to ${location}`];
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return createProfileDto;
  }
}
