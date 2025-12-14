/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
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
    return {
        name: createProfileDto.name,
        description: createProfileDto.description,
    };
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
