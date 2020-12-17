import { logger } from 'src/utils/logger';
import { expressLoader } from 'src/loaders/express';
import { Application } from 'express';
import { connectDb } from 'src/loaders/mongoose';
export const loaders = async (app: Application): Promise<void> => {
  logger.info('Loaders running');
  await connectDb();
  expressLoader(app);
};
