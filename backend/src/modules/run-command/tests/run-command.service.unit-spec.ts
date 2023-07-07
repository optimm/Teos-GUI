import { Test, TestingModule } from '@nestjs/testing';
import { RunCommandService } from '../run-command.service';
import { RunCommandDto } from '../dto/run-command.dto';
import { TeosCliError } from '../error/cli.error';

describe('RunCommandService', () => {
  let service: RunCommandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RunCommandService],
    }).compile();

    service = module.get<RunCommandService>(RunCommandService);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('check: service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('check: running command', () => {
    it('check: should resolve with output when command succeeds', async () => {
      const commandData: RunCommandDto = {
        command: 'echo',
        args: ['Teos'],
      };

      const result = await service.runCommand(commandData);
      expect(result).toEqual('Teos\n');
    });

    it('check: should reject with TeosCliError when command fails', async () => {
      const commandData: RunCommandDto = {
        command: 'invalid',
        args: [],
      };

      await expect(service.runCommand(commandData)).rejects.toThrowError(
        TeosCliError,
      );
      try {
        await service.runCommand(commandData);
      } catch (error) {
        expect(error).toBeInstanceOf(TeosCliError);
        expect(error.message).toContain('invalid');
      }
    });

    it('check: should reject with TeosCliError on child process close with non-zero code', async () => {
      const commandData: RunCommandDto = {
        command: 'exit',
        args: ['1'],
      };

      await expect(service.runCommand(commandData)).rejects.toThrowError(
        TeosCliError,
      );
    });
  });
});
