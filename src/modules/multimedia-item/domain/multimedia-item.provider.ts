import { multimediaItemsData } from "./multimedia-item.data";
import { MultimediaItemMemoryRepository, MultimediaItemRepository } from "./multimedia-item.repository";


export const userManagementRepository: MultimediaItemRepository =  new MultimediaItemMemoryRepository(multimediaItemsData)