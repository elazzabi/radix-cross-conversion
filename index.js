'use strict';

module.exports = class {
	constructor(value) {
		this.value = value;
	}

	from(radix) {
		this.value = parseInt(this.value, radix).toString();
		return this;
	}

	to(radix) {
		this.value = (parseInt(this.value, 10)).toString(radix);
		return this;
	}
};
