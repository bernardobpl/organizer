import { Box } from '@mui/material'
import { TaskT, UpdateTaskT } from '../../types/task'
import { TaskListItem } from './task-list-item'
import { TaskListLoading } from './task-list-loading'
import { TaskListEmpty } from './task-list-empty'

export interface TaskListProps {
  tasks: TaskT[]
  isLoading: boolean
  isError: boolean
  onTaskClick: (task: TaskT) => void
  onTaskUpdate: (task: TaskT, updates: UpdateTaskT) => void
  onTaskDelete: (task: TaskT) => void
}

export const TaskList = ({
  tasks,
  isLoading,
  isError,
  onTaskClick,
  onTaskUpdate,
  onTaskDelete,
}: TaskListProps) => {
  if(isLoading) return <TaskListLoading />
  if(isError) return <TaskListEmpty />
  if(tasks.length === 0) return <TaskListEmpty />
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          onClick={() => onTaskClick(task)}
          onUpdate={onTaskUpdate}
          onDelete={onTaskDelete}
        />
      ))}
    </Box>
  )
}
