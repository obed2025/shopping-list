export interface ListItem {
	description: string;
	unit: string;
	quantity: number | null;
	unitPrice: number | null;
}

export interface AdditionalExpenses {
	name: string;
	amount: number | null;
}

class Page {
	title = $state('');
	headerHeight = $state(0);
	selectedOption: 'items' | 'additional-expenses' = $state('items');
}

class Data {
	title = $state('');
	subtitle = $state('');
	list: ListItem[] = $state([]);
	additionalExpenses: AdditionalExpenses[] = $state([]);

	reset() {
		this.title = '';
		this.subtitle = '';
		this.list = [];
	}

	str = $derived(
		JSON.stringify({
			title: this.title,
			subtitle: this.subtitle,
			list: this.list,
			additionalExpenses: this.additionalExpenses
		})
	);
}

export const page = new Page();
export const data = new Data();
