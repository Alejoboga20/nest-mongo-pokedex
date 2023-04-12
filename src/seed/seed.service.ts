import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  seedDB() {
    return 'This action adds a new seed';
  }
}
