# BookApp

一個讓你用寫網頁的方式，撰寫並出版 APP 的平台。

## 採用技術

在桌面端，我們使用 electron.js 處理。

在手機端我們還沒開始，預計使用 cordova.js 處理。

## 執行方法

請先安裝好 node.js, electron.js 之後，切到 electron 資料夾，然後執行本專案。

```
$ npm i -g electron
$ git clone https://github.com/ccckmit/bookApp.git
$ cd bookApp/electron
$ npm install
$ electron .
```

## 接下來

1. 架站讓大家可以寫 App 後上傳
  * ftp 限制上傳資料夾
  * [How to create a FTP user with specific /dir/ access only on a Centos / linux installation](https://unix.stackexchange.com/questions/83221/how-to-create-a-ftp-user-with-specific-dir-access-only-on-a-centos-linux-ins)
2. 撰寫可以發布 APP 到該站上的程式。
  * 用這個 jsftp 套件 https://github.com/sergi/jsftp
  * 加上使用 gulp 來寫發布程式。
3. 包裝 BookApp 以便安裝到 Windows, Linux, Mac，並將下載點發布到 bookApp 的官網上。
  * 完整從測試到發布的範例 (最後用 npm run release 透過 webpack 打包)： https://github.com/szwacz/electron-boilerplate
  * 完整從測試到發布的範例 (最後用 npm run release 透過 gulp 打包，並且會安裝入 windows, 讚!)： https://github.com/chuyik/electron-boilerplate
  * 完整從測試到發布的範例 (只用 npm + electron-packager, 不會安裝入 windows)：https://github.com/sindresorhus/electron-boilerplate/tree/master/boilerplate
  * 從開發到打包的套件 -- https://github.com/railsware/bozon
  * 打包套件 1：https://github.com/electron-userland/electron-builder
  * 打包套件 2：https://github.com/electron-userland/electron-forge
  * 打包套件 3：https://github.com/electron-userland/electron-packager
  * https://github.com/electron/electron/blob/master/docs/tutorial/application-distribution.md#packaging-your-app-into-a-file
  * https://github.com/electron/electron/releases

## 未來

1. 把這套方法用在手機 App 上，以 cordova 為承載平台。

## 注意

* https://leo.im/2017/electron-next

Nowadays, many of the daily tasks previously handled by native apps are now done by software that runs on top of Electron: Editing code (Atom), sending and receiving messages (WhatsApp, Slack) or emails (Nylas Mail) and even complex things like running commands (Hyper):


