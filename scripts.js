//let buttonTakeOff = null;
// const allButtons = document.getElementsByTagName('button');
// const left = allButtons[3];
//let rocket = document.querySelector("#rocket");
//
function init() {
	const buttonTakeOff = document.querySelector('#takeoff');
	const buttonLanding = document.querySelector('#landing');
	const buttonMissionAbort = document.querySelector('#missionAbort');
	const allButtons = document.getElementsByTagName('button');
	const up = allButtons[0];
	const down = allButtons[1];
	const right = allButtons[2];
	const left = allButtons[3];
	const flightStatus = document.querySelector('#flightStatus');
	const shuttleBackground = document.querySelector('#shuttleBackground');
	const spaceShuttleHeight = document.querySelector('#spaceShuttleHeight');
	let rocket = document.querySelector("#rocket");
	rocket.style.position= 'absolute'; 
    rocket.style.left = '225px'; 
    rocket.style.bottom = '150px';
	
    let counter = 0
            
	buttonTakeOff.addEventListener('click', () => {
		let confirm = window.confirm('Confirm that the shuttle is ready for takeoff.');
		if (confirm) {
			flightStatus.innerText = 'Shuttle in flight.';
			shuttleBackground.style.backgroundColor = 'blue';
			counter += 10000;
			spaceShuttleHeight.innerText = counter;
		}
        
	});                         
	buttonLanding.addEventListener('click', () => {
		alert('The shuttle is landing. Landing gear engaged.');
		flightStatus.innerText = 'The shuttle has landed.';
		shuttleBackground.style.backgroundColor = 'green';
		spaceShuttleHeight.innerText = 0;
	});
	buttonMissionAbort.addEventListener('click', () => {
		let askConfirm = window.confirm('Confirm that you want to abort the mission.');
		if (askConfirm) {
			flightStatus.innerText = 'Mission Aborted';
			shuttleBackground.style.backgroundColor = 'green';
			spaceShuttleHeight.innerText = 0;
			rocket.style.position= 'absolute'; 
			rocket.style.left = '225px'; 
			rocket.style.bottom = '150px';
		}
	});
		
	up.addEventListener('click', () => {
        counter += 10000;
		spaceShuttleHeight.innerText = counter;
		move = parseInt(rocket.style.bottom) + 10 + 'px';
        rocket.style.bottom = move;
		
	});
	down.addEventListener('click', () => {
		counter -= 10000;
		spaceShuttleHeight.innerText = counter;
		move = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = move;
	});
	right.addEventListener('click', () => {
		move = parseInt(rocket.style.left) + 10 +'px';
		rocket.style.left = move;
	});
	left.addEventListener('click', () => {
		move = parseInt(rocket.style.left) - 10 +'px';
		rocket.style.left = move;
	});

}

window.onload = init;
