import { Page, Locator } from '@playwright/test';

export class UserPage {
  private page: Page;

  /**
   * @param {Page} page - Playwright page object
   */
  constructor(page: Page) {
    this.page = page;
  }

  async openApp(): Promise<void> {
    await this.page.goto('apps/budget-tracker/');
    await this.page.locator('.budget-tracker').waitFor({ state: 'visible' });
  }

  async addEntry(record: BudgetRecord): Promise<BudgetRecordLocators> {
    const previousRecords = await this.page.locator('.entries >> tr').count();

    await this.page.locator('text="New Entry"').click();

    const currentRow = this.page.locator('.entries >> tr').nth(previousRecords);
    const date = currentRow.locator('[type="date"]');
    const description = currentRow.locator('.input-description');
    const type = currentRow.locator('.input-type');
    const amount = currentRow.locator('.input-amount');
    const total = this.page.locator('.total');

    // Setting date by executing JavaScript code in the page
    await date.evaluate(
      (datepicker, date) => {
        (datepicker as HTMLInputElement).value = date;
      },
      record.date
    );

    await description.type(record.description);
    await type.selectOption(record.type);
    await amount.clear();
    await amount.type(record.amount.toString());
    await amount.press('Enter');

    return {
      date,
      description,
      type,
      amount,
      total,
    };
  }

  async editRow(row: number, record: BudgetRecord): Promise<BudgetRecordLocators> {
    const currentRow = this.page.locator('.entries >> tr').nth(row - 1);
    const date = currentRow.locator('[type="date"]');
    const description = currentRow.locator('.input-description');
    const type = currentRow.locator('.input-type');
    const amount = currentRow.locator('.input-amount');
    const total = this.page.locator('.total');

    await date.type(record.date);
    await description.clear();
    await description.type(record.description);
    await type.selectOption(record.type);
    await amount.clear();
    await amount.type(record.amount.toString());
    await amount.press('Enter');

    return {
      date,
      description,
      type,
      amount,
      total,
    };
  }

  async removeAllRecords(): Promise<Locator> {
    const rows = this.page.locator('.entries >> tr');
    for (let index = await rows.count(); index > 0; index--) {
      await rows
        .nth(index - 1)
        .locator('.delete-entry')
        .click({ delay: 300 });
    }

    return rows;
  }

  convertDate(date: string): string {
    return new Date(date).toLocaleString('en-US');
  }
}

export interface BudgetRecord {
  date: string;
  description: string;
  type: 'income' | 'expense';
  amount: number;
}

export interface BudgetRecordLocators {
  date: Locator;
  description: Locator;
  type: Locator;
  amount: Locator;
  total: Locator;
}
