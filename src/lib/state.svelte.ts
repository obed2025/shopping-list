interface ListItem {
	description: string;
	unit: string;
	quantity: number;
	unitPrice: number;
}

class Page {
	title = $state('');
}

class Data {
	title = $state('Shopping list');
	subtitle = $state('');

	list: ListItem[] = $state([{ description: 'Rice', unit: 'kg', quantity: 10, unitPrice: 1.5e3 }]);
}

export const page = new Page();
export const data = new Data();
