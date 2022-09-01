'use strict';

{
	const open = document.getElementById('open');
	const pay = document.getElementById('pay');
	const modal = document.getElementById('modal');
	const filter = document.getElementById('filetr');

	open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    filter.classList.remove('hidden');
  });

  pay.addEventListener('click', () => {
    modal.classList.add('hidden');
    filter.classList.add('hidden');
  });

  filter.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    pay.click();
  });
}

