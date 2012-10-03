var profile = {
	basePath: './',

	releaseDir: "./release/dgrid",

	packages: [
		'dojo', 'dijit', 'dgrid', 'xstyle', 'put-selector'		
	],

	cssOptimize: 'comments',

	// include the tests for now
	mini: false,

	layerOptimize: 'closure',
	optimize: 'closure',

	stripConsole: 'all',

	selectorEngine: 'lite',

	layers: {
		'dojo/dojo': {
			include: ['dojo/dojo', 'dojo/domReady', 'dojo/_base/declare'],
			boot: true,
			customBase: true
		},
		'dgrid/dgrid': {
			include: ["dgrid/List", "dgrid/OnDemandGrid", "dgrid/Selection", "dgrid/Keyboard", "dgrid/test/data/perf"]
		}

	},

	staticHasFeatures: {
		// The trace & log APIs are used for debugging the loader, so we don't need them in the build
		'dojo-trace-api': 0,
		'dojo-log-api': 0,

		// This causes normally private loader data to be exposed for debugging, so we don't need that either
		'dojo-publish-privates': 0,

		// We're fully async, so get rid of the legacy loader
		'dojo-sync-loader': 0,

		// We aren't loading tests in production
		'dojo-test-sniff': 0
	}
};