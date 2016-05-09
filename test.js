import test from 'ava';
import Radix from '.';

test('Testing functionality', t => {
	let ten = new Radix(10);
	t.is(ten.to(2).value, '1010');
	t.is(ten.from(2).to(16).value, 'a');
	t.is(ten.from(16).to(8).value, '12');

	let a = new Radix('a');
	t.is(a.from(16).to(10).value, '10');
	t.is(a.from(10).to(16).value, 'a');
	t.is(a.from(8).to(2).value, 'NaN');
});
