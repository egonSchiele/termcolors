import { describe, it, expect } from 'vitest';
import { color } from './index.js';

const RESET = '\x1b[0m';

describe('termcolors', () => {
  describe('basic colors', () => {
    it('should apply black color', () => {
      expect(color.black('test')).toBe('\x1b[30mtest\x1b[0m');
    });

    it('should apply red color', () => {
      expect(color.red('test')).toBe('\x1b[31mtest\x1b[0m');
    });

    it('should apply green color', () => {
      expect(color.green('test')).toBe('\x1b[32mtest\x1b[0m');
    });

    it('should apply yellow color', () => {
      expect(color.yellow('test')).toBe('\x1b[33mtest\x1b[0m');
    });

    it('should apply blue color', () => {
      expect(color.blue('test')).toBe('\x1b[34mtest\x1b[0m');
    });

    it('should apply magenta color', () => {
      expect(color.magenta('test')).toBe('\x1b[35mtest\x1b[0m');
    });

    it('should apply cyan color', () => {
      expect(color.cyan('test')).toBe('\x1b[36mtest\x1b[0m');
    });

    it('should apply white color', () => {
      expect(color.white('test')).toBe('\x1b[37mtest\x1b[0m');
    });
  });

  describe('bright colors', () => {
    it('should apply brightBlack color', () => {
      expect(color.brightBlack('test')).toBe('\x1b[90mtest\x1b[0m');
    });

    it('should apply brightRed color', () => {
      expect(color.brightRed('test')).toBe('\x1b[91mtest\x1b[0m');
    });

    it('should apply brightGreen color', () => {
      expect(color.brightGreen('test')).toBe('\x1b[92mtest\x1b[0m');
    });

    it('should apply brightYellow color', () => {
      expect(color.brightYellow('test')).toBe('\x1b[93mtest\x1b[0m');
    });

    it('should apply brightBlue color', () => {
      expect(color.brightBlue('test')).toBe('\x1b[94mtest\x1b[0m');
    });

    it('should apply brightMagenta color', () => {
      expect(color.brightMagenta('test')).toBe('\x1b[95mtest\x1b[0m');
    });

    it('should apply brightCyan color', () => {
      expect(color.brightCyan('test')).toBe('\x1b[96mtest\x1b[0m');
    });

    it('should apply brightWhite color', () => {
      expect(color.brightWhite('test')).toBe('\x1b[97mtest\x1b[0m');
    });
  });

  describe('background colors', () => {
    it('should apply bgBlack', () => {
      expect(color.bgBlack('test')).toBe('\x1b[40mtest\x1b[0m');
    });

    it('should apply bgRed', () => {
      expect(color.bgRed('test')).toBe('\x1b[41mtest\x1b[0m');
    });

    it('should apply bgGreen', () => {
      expect(color.bgGreen('test')).toBe('\x1b[42mtest\x1b[0m');
    });

    it('should apply bgYellow', () => {
      expect(color.bgYellow('test')).toBe('\x1b[43mtest\x1b[0m');
    });

    it('should apply bgBlue', () => {
      expect(color.bgBlue('test')).toBe('\x1b[44mtest\x1b[0m');
    });

    it('should apply bgMagenta', () => {
      expect(color.bgMagenta('test')).toBe('\x1b[45mtest\x1b[0m');
    });

    it('should apply bgCyan', () => {
      expect(color.bgCyan('test')).toBe('\x1b[46mtest\x1b[0m');
    });

    it('should apply bgWhite', () => {
      expect(color.bgWhite('test')).toBe('\x1b[47mtest\x1b[0m');
    });
  });

  describe('bright background colors', () => {
    it('should apply bgBrightBlack', () => {
      expect(color.bgBrightBlack('test')).toBe('\x1b[100mtest\x1b[0m');
    });

    it('should apply bgBrightRed', () => {
      expect(color.bgBrightRed('test')).toBe('\x1b[101mtest\x1b[0m');
    });

    it('should apply bgBrightGreen', () => {
      expect(color.bgBrightGreen('test')).toBe('\x1b[102mtest\x1b[0m');
    });

    it('should apply bgBrightYellow', () => {
      expect(color.bgBrightYellow('test')).toBe('\x1b[103mtest\x1b[0m');
    });

    it('should apply bgBrightBlue', () => {
      expect(color.bgBrightBlue('test')).toBe('\x1b[104mtest\x1b[0m');
    });

    it('should apply bgBrightMagenta', () => {
      expect(color.bgBrightMagenta('test')).toBe('\x1b[105mtest\x1b[0m');
    });

    it('should apply bgBrightCyan', () => {
      expect(color.bgBrightCyan('test')).toBe('\x1b[106mtest\x1b[0m');
    });

    it('should apply bgBrightWhite', () => {
      expect(color.bgBrightWhite('test')).toBe('\x1b[107mtest\x1b[0m');
    });
  });

  describe('modifiers', () => {
    it('should apply bold', () => {
      expect(color.bold('test')).toBe('\x1b[1mtest\x1b[0m');
    });

    it('should apply dim', () => {
      expect(color.dim('test')).toBe('\x1b[2mtest\x1b[0m');
    });

    it('should apply italic', () => {
      expect(color.italic('test')).toBe('\x1b[3mtest\x1b[0m');
    });

    it('should apply underline', () => {
      expect(color.underline('test')).toBe('\x1b[4mtest\x1b[0m');
    });
  });

  describe('chaining', () => {
    it('should chain color and modifier', () => {
      expect(color.green.bold('test')).toBe('\x1b[32m\x1b[1mtest\x1b[0m');
    });

    it('should chain color and background', () => {
      expect(color.green.bgYellow('test')).toBe('\x1b[32m\x1b[43mtest\x1b[0m');
    });

    it('should chain multiple modifiers', () => {
      expect(color.bold.underline('test')).toBe('\x1b[1m\x1b[4mtest\x1b[0m');
    });

    it('should chain color, background, and modifier', () => {
      expect(color.red.bgWhite.bold('test')).toBe('\x1b[31m\x1b[47m\x1b[1mtest\x1b[0m');
    });

    it('should work with different chaining order', () => {
      expect(color.bold.green('test')).toBe('\x1b[1m\x1b[32mtest\x1b[0m');
    });

    it('should chain bright colors with modifiers', () => {
      expect(color.brightMagenta.italic.underline('test')).toBe('\x1b[95m\x1b[3m\x1b[4mtest\x1b[0m');
    });

    it('should chain multiple styles in any order', () => {
      expect(color.cyan.bgBlack.bold.underline('test')).toBe('\x1b[36m\x1b[40m\x1b[1m\x1b[4mtest\x1b[0m');
    });
  });

  describe('edge cases', () => {
    it('should handle empty string', () => {
      expect(color.red('')).toBe('\x1b[31m\x1b[0m');
    });

    it('should handle multiline text', () => {
      const text = 'line1\nline2';
      expect(color.blue(text)).toBe('\x1b[34mline1\nline2\x1b[0m');
    });

    it('should handle text with special characters', () => {
      const text = 'test!@#$%^&*()';
      expect(color.red(text)).toBe('\x1b[31mtest!@#$%^&*()\x1b[0m');
    });
  });

  describe('usage examples from documentation', () => {
    it('should work as shown in example 1', () => {
      expect(color.blue('this text is blue!')).toBe('\x1b[34mthis text is blue!\x1b[0m');
    });

    it('should work as shown in example 2', () => {
      expect(color.green.bold('this text is green and bold!')).toBe('\x1b[32m\x1b[1mthis text is green and bold!\x1b[0m');
    });

    it('should work as shown in example 3', () => {
      expect(color.green.bgYellow('this text is green with a yellow background!')).toBe('\x1b[32m\x1b[43mthis text is green with a yellow background!\x1b[0m');
    });
  });
});
