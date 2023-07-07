import { RunCommandDto } from '../dto/run-command.dto';
import { CommandTypeEnum } from '../enum/run-command.enum';

describe('RunCommandDto', () => {
  describe('check: getCommand', () => {
    it('check: should return a RunCommandDto object with the command and arguments', () => {
      const command = CommandTypeEnum.getTowerInfo;
      const argument = 'some-argument';

      const dto = RunCommandDto.getCommand(command, argument);

      expect(dto).toBeInstanceOf(RunCommandDto);
      expect(dto.command).toBe('teos-cli');
      expect(dto.args).toEqual([CommandTypeEnum.getTowerInfo, 'some-argument']);
    });
  });
});
