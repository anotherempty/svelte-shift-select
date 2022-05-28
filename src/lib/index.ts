export default function shiftSelect(
	node: HTMLInputElement,
	{ bind = false, change = true, checkboxes = undefined, index = undefined } = {}
) {
	const handle = (event: Event) => {
		if (!event.shiftKey) return;

		let items: NodeListOf<HTMLInputElement>;
		let selected: number;
		let checkedState: boolean;

		const params = {
			change,
			checkboxes,
			index,
			bind
		};

		if (params.checkboxes == null) {
			if (typeof node.name == undefined) throw new Error('the name attribute must be set');

			items = document.querySelectorAll("[name='" + node.name + "']");
			selected = Array.from(items).indexOf(node);
			checkedState = items[selected].checked;

			// if binded, trigger change to set the checked checkbox value
			if (params.bind) node.dispatchEvent(new Event('change'));
		} else {
			items = params.checkboxes;
			selected = params.index;
			checkedState = !items[selected].checked;
		}

		// get last checked before the selected index
		let first = selected;
		for (let i = selected - 1; i >= 0; i--) {
			if (items[i].checked === checkedState) {
				first = i;
				break;
			}
		}

		// get last checked after the selected index
		let last = selected;
		for (let i = selected + 1; i < items.length; i++) {
			if (items[i].checked === checkedState) {
				last = i;
				break;
			}
		}

		const setChecked = (start, end) => {
			for (let i = start; i < end; i++) {
				items[i].checked = checkedState;

				// trigger change event if allowed && checkboxes array isn't set
				if (params.change && !params.checkboxes) items[i].dispatchEvent(new Event('change'));
			}
		};

		if (first === selected) {
			if (last === selected) {
				setChecked(0, selected);
			} else {
				setChecked(selected + 1, last + 1);
			}
		} else {
			setChecked(first, selected);
		}
	};

	node.addEventListener('click', handle);

	return {
		destroy() {
			node.removeEventListener('click', handle);
		}
	};
}
