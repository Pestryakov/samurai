import './App.css'

//const tasks = null;
const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 0,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 1,
  },
  {
    id: 4,
    title: "Срочно отправить рабочий отчет",
    isDone: false,
    addedAt: "4 сентября",
    priority: 4,
  },
  {
    id: 5,
    title: "Заплатить за коммунальные услуги",
    isDone: false,
    addedAt: "3 сентября",
    priority: 3,
  },
]

export function App() {
  if (tasks === null) {
    return (
      <div>
        <h1>TO-DO List</h1>
        <span>Loading...</span>
      </div>
    )
  }
  if (tasks.length === 0) {
    return (
      <div>
        <h1>TO-DO List</h1>
        <span>No tasks</span>
      </div>
    )
  }

  const getPriorityClass = (priority: number) => {
    switch (priority) {
      case 0: return 'priority-low'       // #ffffff
      case 1: return 'priority-medium'    // #ffd7b5
      case 2: return 'priority-high'      // #ffb38a
      case 3: return 'priority-urgent'    // #ff9248
      case 4: return 'priority-critical'  // #ff6700
      default: return 'priority-low'
    }
  }
  
  return (
    <div className="container">
      <h1>TO-DO List</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${getPriorityClass(task.priority)}`}>
            <div className="task-row">
              <strong>Title:</strong> 
              <span className={task.isDone ? 'done-title' : ''}>{task.title}</span>
            </div>
            <div className="task-row">
              <strong>Status:</strong>
              <input
                type="checkbox"
                checked={task.isDone}
                readOnly
                className="checkbox"
              />
              <span className="status-text">
                {task.isDone ? 'Выполнено' : 'Не выполнено'}
              </span>
            </div> 
            <div className="task-row">
              <strong>Date:</strong> {task.addedAt}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App