/*
 * 메시지 이벤트를 처리하고 부모 프로세스에 데이터를 다시 전송하는 자식 프로세스.
 * child_fork.js 를 node application으로 실행하자.
 */
process.on('message', function(message, parent) {
	var meal = {};
	switch (message.cmd) {
		case 'makeBreakfast':
			meal = ['ham', 'eggs', 'toast'];
			break;
		case 'makeLunch':
			meal = ['burger', 'fries', 'shake'];
			break;
		case 'makeDinner':
			meal = ['soup', 'salad', 'steak'];
			break;			
	}
	process.send(meal);
})