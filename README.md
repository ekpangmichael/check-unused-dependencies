

<div>
	<img src="https://i.imgur.com/y46CgWg.gif">
	<h1 style="font-weight:bold;">check-unused-dependencies </h1>

[![Build Status](https://travis-ci.org/ekpangmichael/check-unused-dependencies.svg?branch=master)](https://travis-ci.org/ekpangmichael/check-unused-dependencies)


</div>

## Description
Sometimes, we add packages that we never end up using and forget to remove them, `check-unused-dependencies ` is a CLI tool that scans through your project for such packages and let you remove them if you want to.

## Dependencies
This project uses `jq` 
###  Install `jq` for mac
`brew  install jq`

### Install `jq` for windows
`chocolatey install jq`

### Install `jq` for Linux
`sudo apt-get install jq`

## Installation

The recommended way to install  this package is to do a global install
### Install as global package
```bash
$ sudo npm install -g check-unused-dependencies
```

### Install as devDependencies
```bash
$ npm install check-unused-dependencies
```
## Usage

### If installed globally
cd into any project and run `check-dep`

### If installed  as  devDependencies
You can run it as an npm script

## Example

  ``` {

"name": "test",
"version": "1.0.0",
"description": "",
"main": "index.js",

"scripts": {
"check": "check-dep"
},
"dependencies": {
"check-unused-dependencies": "^1.1.6",
"express": "^4.17.0"
}
} 
```

```bash
$  npm run check 
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

This project is licensed under
[MIT](https://github.com/codeshifu/sync-dotenv/blob/master/LICENSE)