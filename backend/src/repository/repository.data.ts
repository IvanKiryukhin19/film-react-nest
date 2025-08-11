import { InMemoryFilmRepository } from './repository.inmemory';
import { InMongoDBRepository } from './repository.inmongodb';
import { InPostgreSQLRepository } from './repository.inpostgresql';

export class RepositoryData extends InPostgreSQLRepository {}
