# termcolors
Terminal color library. Less portable than chalk since it doesn't use [supports-color](https://github.com/chalk/chalk/tree/main/source/vendor/supports-color) but simpler source code and supports Typescript.

## Installation

```bash
pnpm add egonSchiele/termcolors
```

## Usage

```typescript
import { color } from 'termcolors';
console.log(color.red.bold('This is bold red text'));
console.log(color.green.bgYellow('Multiple', 'arguments', 'are', 'supported'));
```