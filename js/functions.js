	const prev = document.querySelector('.demo-prev');
	const next = document.querySelector('.demo-next');
	const today = document.querySelector('.demo-today');
	const picked = document.querySelector('.demo-picked');
	const last = document.querySelector('.demo-last');

	function updateInfo() {
		if (this.today) {
			today.innerHTML = '';
			var li = document.createElement('li');
			li.innerHTML = this.today;
			today.appendChild(li);
		}

		if (this.lastSelectedDay) {

			picked.innerHTML = '';
			for (days of this.selectedDays) {
				var li = document.createElement('li');
				li.innerHTML = days;
				picked.appendChild(li);
			}

			last.innerHTML = '';
			var li = document.createElement('li');
			li.innerHTML = this.lastSelectedDay;
			last.appendChild(li);
		}
	}

	const myCalendar = new HelloWeek({
		selector: '.hello-week',
		lang: 'en',
		format: 'DD/MM/YYYY',
		monthShort: true,
		weekShort: true,
		disablePastDays: true,
		multiplePick: false,
		// minDate: 1520696057,
		// maxDate: 1522519829,
		onLoad: updateInfo,
		onChange: updateInfo,
		onSelect: updateInfo
	});

	prev.addEventListener('click', () => myCalendar.prev());
	next.addEventListener('click', () => myCalendar.next());