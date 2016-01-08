'use strict';

var supportedColors = {
	black: {
		r: 0, g: 0, b: 0
	},
	red: {
		r: 255, g: 0, b: 0
	},
	green: {
		r: 0, g: 128, b: 0
	},
	yellow: {
		r: 255, g: 255, b: 0
	},
	blue: {
		r: 0, g: 0, b: 255
	},
	magenta: {
		r: 255, g: 0, b: 255
	},
	cyan: {
		r: 0, g: 255, b: 255
	},
	white: {
		r: 255, g: 255, b: 255
	},
	gray: {
		r: 128, g: 128, b: 128
	}
};

module.exports = function (obj) {
	if (typeof obj !== 'object') {
		throw new TypeError('Expected an object');
	}

	return normalize(obj);
};

// Euclidean distance in RGB space
function distance(colorA, colorB) {
	return square(colorA.r - colorB.r) + square(colorA.g - colorB.g) + square(colorA.b - colorB.b);
}

// Math.pow is much slower in v8
function square(x) {
	return x * x;
}

function normalize(color) {
	var output = {};
	var score;

	Object
		.keys(supportedColors)
		.forEach(function (key) {
			score = distance(supportedColors[key], color);

			if (output.score === undefined || score < output.score) {
				output.score = score;
				output.key = key;
			}
		});

	return output.key;
}

