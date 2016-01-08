import test from 'ava';
import fn from './';

test('colors', t => {
	// maroon
	t.is(fn({r: 128, g: 0, b: 0}), 'red');

	// orange
	t.is(fn({r: 255, g: 165, b: 0}), 'yellow');

	// dark green
	t.is(fn({r: 0, g: 100, b: 0}), 'green');

	// teal
	t.is(fn({r: 0, g: 128, b: 128}), 'green');

	// lavender
	t.is(fn({r: 230, g: 230, b: 250}), 'white');
});

