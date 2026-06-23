
// const buttom = document.querySelector('.buy-btn');

// buttom.addEventListener('click', () => {
//     console.log('you did this!');
// })

// const theme = document.querySelector('.theme-btn');
// theme.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');
// })







// // База данных игроков (никуда не делась, лежит в памяти)
// const playersBase = [
//   { name: 'Neymar', position: 'Нападающий' },
//   { name: 'Raphinha', position: 'Полузащитник' },
//   { name: 'Ederson', position: 'Вратарь' }
// ];

// const login = document.querySelector('.login-btn');
// login.addEventListener('click', () => {
//     const input = document.querySelector('.login-input');
//     const have = playersBase.find(({ name }) => name === input.value);
//     if (have !== undefined) {
//         console.log("Игрок найден! Позиция: " + have.position);
//     } else {
//         console.log("Такого игрока нет в базе данных!");
//     }
// })



// const addplayer = document.querySelector('.add-player-btn');
// const list = document.querySelector('.players-list');

// addplayer.addEventListener('click', () => {
//     const textInput = document.querySelector('.login-input').value;
//     if (textInput.length !== 0) {
//         const notification = document.createElement('div');
//         notification.textContent = 'Система: Карточка игрока обновлена!';
//         document.body.append(notification);
    
//         setTimeout(() => {
//             notification.remove();
//         }, 2000);
    
//         setTimeout(() => {
//             const newli = document.createElement('li');
//             newli.textContent = textInput;
//             list.append(newli);
            
//         }, 1000);
//     } else {
//         const pusto = document.createElement('div');
//         pusto.textContent = "Поле пусто! Напишите что-нибудь";
//         document.body.append(pusto);
        
//         setTimeout(() => {
//             pusto.remove();
//         }, 2000)
//     }
    
// })

// const delbtn = document.querySelector('.remove-player-btn');
// delbtn.addEventListener('click', () => {
//     const delli = document.querySelector('.players-list li:last-child');
//     delli.remove(); 
// })


function AddTask() {
    const tasklist = document.querySelector('.task-list');
    const val = document.querySelector('.todo-input');
    if (val.value !== '') {
        const newli = document.createElement('li');
        newli.textContent = val.value;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        newli.append(deleteBtn);
        tasklist.append(newli);

        newli.addEventListener('click', () => {
            newli.classList.toggle('done');
        })
        val.value = '';

        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            newli.remove();
        })
    }
}


const addtask = document.querySelector('.add-task-btn');
addtask.addEventListener('click', AddTask);

const delall = document.querySelector('.clear-completed-btn');
delall.addEventListener('click', () => {
    const completed = document.querySelectorAll('.task-list li.done');
    completed.forEach(now => {
        now.remove();
    })
})

const inputent = document.querySelector('.todo-input');
inputent.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        AddTask();
    }
})