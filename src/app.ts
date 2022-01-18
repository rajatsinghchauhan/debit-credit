const anchor = document.querySelector("a");

console.log(anchor?.href);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(amount.valueAsNumber);
  console.log(tofrom.value);
});

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
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
