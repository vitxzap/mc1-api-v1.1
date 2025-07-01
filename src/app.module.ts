import { Module } from '@nestjs/common';
import { HostController } from './controllers/host.controller';
import { PrismaService } from './database/prisma.service';
import { manipulateHost } from './repositories/host.repository';
import { prismaManipulationHost } from './repositories/prisma/prisma-host.repository';
import { manipulateServer } from './repositories/server.repository';
import { prismaManipulationServer } from './repositories/prisma/prisma-server.repository';
import { ServerController } from './controllers/server.controller';
import { ClientController } from './controllers/client.controller';
import { manipulateClient } from './repositories/client.repository';
import { prismaManipulationClient } from './repositories/prisma/prisma-client.repository';
import { alertController } from './controllers/alert.controller';
import { manipulateAlert } from './repositories/alert.repository';
import { prismaManipulationAlert } from './repositories/prisma/prisma-alert.repository';
import { minutes, ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [{
        ttl: minutes(1),
        limit: 20,
        blockDuration: minutes(1),
        
      }]
    })
  ],
  controllers: [HostController, ServerController, ClientController, alertController],
  providers: [
    PrismaService,
    {
      provide: manipulateHost,
      useClass: prismaManipulationHost,
    },
    {
      provide: manipulateServer,
      useClass: prismaManipulationServer,
    },
    {
      provide: manipulateClient,
      useClass: prismaManipulationClient,
    },
     {
      provide: manipulateAlert,
      useClass: prismaManipulationAlert,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
     }
  ],
})
export class AppModule {}
