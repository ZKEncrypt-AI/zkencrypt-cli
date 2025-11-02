#!/usr/bin/env node

import { Command } from 'commander';
import { initCommand } from './commands/init';
import { walletCommands } from './commands/wallet';
import { encryptCommands } from './commands/encrypt';
import { paymentCommands } from './commands/payment';
import { oracleCommands } from './commands/oracle';
import { swapCommands } from './commands/swap';
import { statsCommand } from './commands/stats';
import { deployCommands } from './commands/deploy';

const program = new Command();

program
  .name('zkencrypt')
  .description('CLI tool for ZKEncrypt Network')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize ZKEncrypt configuration')
  .action(initCommand);

program
  .command('wallet')
  .description('Wallet management commands')
  .addCommand(walletCommands);

program
  .command('encrypt')
  .description('Encryption commands')
  .addCommand(encryptCommands);

program
  .command('pay')
  .description('Payment commands')
  .addCommand(paymentCommands);

program
  .command('oracle')
  .description('AI Oracle commands')
  .addCommand(oracleCommands);

program
  .command('swap')
  .description('Private swap commands')
  .addCommand(swapCommands);

program
  .command('stats')
  .description('View network statistics')
  .action(statsCommand);

program
  .command('deploy')
  .description('Deploy contracts')
  .addCommand(deployCommands);

program.parse(process.argv);
