declare const styles: {
    readonly bold: "\u001B[1m";
    readonly dim: "\u001B[2m";
    readonly italic: "\u001B[3m";
    readonly underline: "\u001B[4m";
    readonly bgBlack: "\u001B[40m";
    readonly bgRed: "\u001B[41m";
    readonly bgGreen: "\u001B[42m";
    readonly bgYellow: "\u001B[43m";
    readonly bgBlue: "\u001B[44m";
    readonly bgMagenta: "\u001B[45m";
    readonly bgCyan: "\u001B[46m";
    readonly bgWhite: "\u001B[47m";
    readonly bgBrightBlack: "\u001B[100m";
    readonly bgBrightRed: "\u001B[101m";
    readonly bgBrightGreen: "\u001B[102m";
    readonly bgBrightYellow: "\u001B[103m";
    readonly bgBrightBlue: "\u001B[104m";
    readonly bgBrightMagenta: "\u001B[105m";
    readonly bgBrightCyan: "\u001B[106m";
    readonly bgBrightWhite: "\u001B[107m";
    readonly black: "\u001B[30m";
    readonly red: "\u001B[31m";
    readonly green: "\u001B[32m";
    readonly yellow: "\u001B[33m";
    readonly blue: "\u001B[34m";
    readonly magenta: "\u001B[35m";
    readonly cyan: "\u001B[36m";
    readonly white: "\u001B[37m";
    readonly brightBlack: "\u001B[90m";
    readonly brightRed: "\u001B[91m";
    readonly brightGreen: "\u001B[92m";
    readonly brightYellow: "\u001B[93m";
    readonly brightBlue: "\u001B[94m";
    readonly brightMagenta: "\u001B[95m";
    readonly brightCyan: "\u001B[96m";
    readonly brightWhite: "\u001B[97m";
};
type StyleName = keyof typeof styles;
type ColorFunction = ((text: string) => string) & {
    [K in StyleName]: ColorFunction;
};
/**
 * Main color object for terminal text styling
 *
 * @example
 * ```ts
 * import { color } from 'termcolors';
 * console.log(color.blue("this text is blue!"));
 * console.log(color.green.bold("this text is green and bold!"));
 * console.log(color.green.bgYellow("this text is green with a yellow background!"));
 * ```
 */
export declare const color: ColorFunction;
export {};
