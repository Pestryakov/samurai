import './App.css'

//const tasks = null;
const tasks = [
  {
    id: 1,
    title: "Buy groceries for the week",
    isDone: false,
    addedAt: "September 1",
    priority: 2,
  },
  {
    id: 2,
    title: "Water the flowers",
    isDone: true,
    addedAt: "September 2",
    priority: 0,
  },
  {
    id: 3,
    title: "Go to training",
    isDone: false,
    addedAt: "September 3",
    priority: 1,
  },
  {
    id: 4,
    title: "Send a work report",
    isDone: false,
    addedAt: "September 4",
    priority: 4,
  },
  {
    id: 5,
    title: "Pay for utilities",
    isDone: false,
    addedAt: "September 5",
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