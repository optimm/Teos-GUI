import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { RunCommandDto } from './dto/run-command.dto';
import { TeosCliError } from './error/cli.error';

@Injectable()
export class RunCommandService {
  async runCommand(commandData: RunCommandDto): Promise<string> {
    const { command, args } = commandData;

    return new Promise<string>((resolve, reject) => {
      const childProcess = spawn(command, args);
      let output = '';
      let error = '';

      childProcess.stdout.on('data', (data) => {
        output += data;
      });

      childProcess.stderr.on('data', (data) => {
        error += data;
      });

      childProcess.on('close', (code) => {
        if (code === 0) {
          resolve(output);
        } else {
          reject(new TeosCliError(TeosCliError.getMessage(error)));
        }
      });

      childProcess.on('error', (error) => {
        reject(new TeosCliError(TeosCliError.getMessage(error)));
      });

      childProcess.on('exit', (code) => {
        if (code === null) {
          reject(new TeosCliError());
        }
      });
    });
  }
}
