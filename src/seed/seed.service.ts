import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  async seedDB() {
    return 'This action adds a new seed';
  }
}
