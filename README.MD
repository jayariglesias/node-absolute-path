## NODE JS ABSOLUTE PATH v1

This library can simplify the require paths in your node project. Instead of using relative paths like ../../../../controller/sample, you can write controller/sample. You won't need to calculate how many levels of directory you have to go up before accessing the file.

```javascript
// Use this:
const sample = require('controller/sample');

// Instead of:
const sample = include('../../../../controller/sample');
```

## Installation

Using npm:

```bash
$ npm install node-absolute-path --save
```

## Example
```javascript
require('node-absolute-path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = include('controller');
const app = express();

......
......
......

```


## Browser Support

![Chrome](https://raw.githubusercontent.com/jayariglesias/jayariglesias/main/chrome.png) | ![Firefox](https://raw.githubusercontent.com/jayariglesias/jayariglesias/main/firefox.png) | ![Safari](https://raw.githubusercontent.com/jayariglesias/jayariglesias/main/safari.png) | ![Opera](https://raw.githubusercontent.com/jayariglesias/jayariglesias/main/opera.png) | ![Edge](https://raw.githubusercontent.com/jayariglesias/jayariglesias/main/chromium.png) | ![IE](https://raw.githubusercontent.com/jayariglesias/jayariglesias/main/explorer.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Contributing

<a href="https://github.com/jayariglesias/node-absolute-path.git"><strong>GITHUB</strong></a>

## License

<img height="100" width="100" src="https://raw.githubusercontent.com/jayariglesias/jayariglesias/main/name.png" />





