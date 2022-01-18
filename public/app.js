"use strict";
const anchor = document.querySelector("a");
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(amount.valueAsNumber);
    console.log(tofrom.value);
});
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const inone = new Invoice("rajat", "website work ", 700);
const intwo = new Invoice("anish", "notes ", 1100);
console.log(inone);
console.log(intwo);
