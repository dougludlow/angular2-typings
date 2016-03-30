var dts = require('dts-generator').default;

dts({
    name: 'angular2',
    baseDir: './node_modules/angular2',
    out: 'typings/angular2/angular2.d.ts',
    files: [
        'core.d.ts',
        'http.d.ts',
        'common.d.ts',
        'router.d.ts',
        'testing.d.ts',
        'platform/browser.d.ts',
        'platform/server.d.ts'
    ]
});