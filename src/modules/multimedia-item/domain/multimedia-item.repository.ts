import { MemoryRepository } from '../../../core/domain/repository/memory.repository';
import { Repository } from '../../../core/domain/repository/repository';
import { MultimediaItem } from './multimedia-item.model';

export interface MultimediaItemRepository extends Repository<MultimediaItem> {}

export class MultimediaItemMemoryRepository
  extends MemoryRepository<MultimediaItem>
  implements MultimediaItemRepository
{
  constructor(data: MultimediaItem[]) {
    super(data);
  }
}
