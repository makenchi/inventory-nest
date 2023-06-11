import { DataSource } from 'typeorm';
import { configService } from './src/config/config.service';

export default new DataSource(configService.getTypeOrmConfig() as any);