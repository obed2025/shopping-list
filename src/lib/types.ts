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

export interface List {
	title: string;
	subtitle: string;
	items: ListItem[];
	additionalExpenses: AdditionalExpenses[];
}
