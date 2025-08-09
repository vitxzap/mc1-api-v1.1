import { IsInt, IsNotEmpty, IsPositive } from "class-validator";
export class GetHostModel {
  id: number;
}

export class GetServerModel {
  hostId: number;
}

export class GetAlertModel {
  alertName: string;
  clientId: number;
}

export class PostAlertModel {
  @IsNotEmpty()
  alertName: string;

  alertDescription: string;

  alertQuery: string;
  alertLink: string;
  @IsNotEmpty()
  @IsPositive({
    message: "This Client ID does not exist."
  })
  clientId: number;
}

export class deleteAlertModel {
  @IsNotEmpty()
  alertId: number;
}

export class GetClientModel {
  serverId: number;
}
