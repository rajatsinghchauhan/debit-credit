import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter";

// let docone: HasFormatter;
// let doctwo: HasFormatter;

// docone = new Invoice("tripti", "interest related to **** ", 11);
// doctwo = new Payment("vijay", " work on .com website", 300);

//
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
  list.render(doc, type.value, "end");
});

// const inone = new Invoice("rajat", "website work ", 700);
// const intwo = new Invoice("anish", "notes ", 1100);

// console.log(inone);
// console.log(intwo);
