import { InMemoryFilmRepository } from './repository.inmemory';
import { InMongoDBRepository } from './repository.inmongodb';

export class RepositoryData extends InMongoDBRepository {}
