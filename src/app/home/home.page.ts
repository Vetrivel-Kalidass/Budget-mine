import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface expense {
  title: string
  reason: string
  amount: number
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  expenseList: expense[] = [];
  totalExpAmt: number;

  ngOnInit() {
    this.totalExpAmt = this.expenseList.reduce((acc, val) => acc + val.amount, 0);
  }

  createExpense(expenseForm: NgForm) {
    if (expenseForm.invalid) return;
    this.expenseList.push(expenseForm.value);
    this.totalExpAmt = this.expenseList.reduce((acc, val) => acc + val.amount, 0);
  }

}
