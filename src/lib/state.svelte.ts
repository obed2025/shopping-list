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
	title = $state('');
	subtitle = $state('');
	list: ListItem[] = $state([]);

	reset() {
		this.title = '';
		this.subtitle = '';
		this.list = [];
	}

	str = $derived(
		JSON.stringify({
			title: this.title,
			subtitle: this.subtitle,
			list: this.list
		})
	);
}

export const page = new Page();
export const data = new Data();
