module.exports = function (config) {
    config.set({
        basePath: '../../',
        captureTimeout: 3e5,
        browserNoActivityTimeout: 3e5,
        browserDisconnectTimeout: 3e5,
        browserDisconnectTolerance: 3,
        concurrency: 1,

        urlRoot: '/karma',

        frameworks: ['mocha', 'chai', 'sinon'],

        files: [
            '!./**/*.d.ts',
            './Tools/DevLoader/BabylonLoader.js',
            './tests/unit/babylon/babylon.example.tests.js',
            './tests/unit/babylon/src/Mesh/babylon.positionAndRotation.tests.js',
            './tests/unit/babylon/serializers/babylon.glTFSerializer.tests.js',
            './tests/unit/babylon/src/babylon.node.tests.js',
            './tests/unit/babylon/src/Animations/babylon.animation.tests.js',
            './tests/unit/babylon/src/Animations/babylon.animationGroup.tests.js',
            './tests/unit/babylon/src/Loading/babylon.sceneLoader.tests.js',
            './tests/unit/babylon/src/PostProcess/babylon.postProcess.tests.js',
            './tests/unit/babylon/src/Material/babylon.material.tests.js',
            './tests/unit/babylon/src/Mesh/babylon.geometry.tests.js',
            './tests/unit/babylon/src/Mesh/babylon.mesh.vertexData.tests.js',
            './tests/unit/babylon/src/Tools/babylon.promise.tests.js',
            './tests/unit/babylon/src/Cameras/babylon.pointerInput.tests.js',
            { pattern: 'dist/preview release/**/*.js', watched: false, included: false, served: true },
            { pattern: 'assets/**/*', watched: false, included: false, served: true },
            //{ pattern: 'tests/**/*', watched: false, included: false, served: true },
            { pattern: 'Playground/scenes/**/*', watched: false, included: false, served: true },
            { pattern: 'Playground/textures/**/*', watched: false, included: false, served: true },
            { pattern: 'Playground/sounds/**/*', watched: false, included: false, served: true },
            { pattern: 'Tools/Config/config.json', watched: false, included: false, served: true },
        ],
        proxies: {
            '/': '/base/'
        },

        port: 3000,
        colors: true,
        autoWatch: false,
        singleRun: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        reporters: ['progress', 'junit'],

        junitReporter: {
            outputDir: '.temp/testResults', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'UnitTests.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: 'Unit Tests', // suite will become the package name attribute in xml testsuite element
            useBrowserName: false, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the <properties> section of the report
        },

        browsers: ['ChromeHeadless']
    })
}
