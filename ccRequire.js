let moduleMap = {
'src/assets/moosnowSdk/moosnow.conf.js' () { return require('src/assets/moosnowSdk/moosnow.conf.js') },
'src/assets/moosnowSdk/moosnow.platform.sdk.js' () { return require('src/assets/moosnowSdk/moosnow.platform.sdk.js') },
'assets/internal/index.js' () { return require('assets/internal/index.js') },
'assets/resources/index.js' () { return require('assets/resources/index.js') },
'assets/ad/index.js' () { return require('assets/ad/index.js') },
'assets/tryform/index.js' () { return require('assets/tryform/index.js') },
'assets/main/index.js' () { return require('assets/main/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};