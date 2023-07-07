import { CommandTypeEnum } from '../enum/run-command.enum';

export class RunCommandDto {
  command: string;
  args: string[];

  public static getCommand(command: CommandTypeEnum, argument?: string) {
    const dto = new RunCommandDto();
    dto.command = 'teos-cli';
    dto.args = [command];
    if (argument) {
      dto.args.push(argument);
    }
    return dto;
  }
}
