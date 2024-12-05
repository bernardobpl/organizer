import { Box, Container, Paper, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useMemo, useState } from 'react'
import {
  TaskDetailsModal,
  TaskInputAdd,
  TaskList,
  TaskSearch,
} from '../components/tasks'
import { useTasksMutation, useTasks } from '../hooks'
import { TaskT, UpdateTaskT } from '../types/task'

export const Route = createFileRoute('/tasks')({
  component: Tasks,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      query: typeof search.query === 'string' ? search.query : undefined,
      taskIdModal: typeof search.taskIdModal === 'number' ? search.taskIdModal : undefined,
    }
  },
})

function Tasks() {
  const searchParams = Route.useSearch()
  const navigate = Route.useNavigate()

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
  } = useTasks(searchParams)
  
  const { createTaskMutation, updateTaskMutation, deleteTaskMutation } = useTasksMutation()

  const [taskIdModal, setTaskIdModal] = useState(searchParams.taskIdModal)
  const [searchInput, setSearchInput] = useState(searchParams.query || '')
  const debouncedSearchInput = useDebounce(searchInput, 500)

  const taskModal = useMemo(() => {
    return tasks?.find((task) => task.id === searchParams.taskIdModal)
  }, [searchParams.taskIdModal, tasks])

  useEffect(() => {
    const newSearchParams = {
      query: debouncedSearchInput || undefined,
      taskIdModal: taskIdModal,
    }

    navigate({
      search: newSearchParams,
      replace: true,
    })
  }, [debouncedSearchInput, taskIdModal, navigate])

  const handleAdd = (title: string) => {
    createTaskMutation({ title })
  }

  const handleUpdate = (task: TaskT, updates: UpdateTaskT) => {
    updateTaskMutation({ id: task.id, updates })
  }

  const handleDelete = (task: TaskT) => {
    deleteTaskMutation(task.id)
  }

  const handleTaskClick = (task: TaskT) => {
    setTaskIdModal(task.id)
  }

  const handleCloseModal = () => setTaskIdModal(undefined)

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Tasks
        </Typography>
      </Box>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Box sx={{ mb: 2 }}>
          <TaskInputAdd onAdd={handleAdd} />
        </Box>
        <TaskSearch value={searchInput} onChange={setSearchInput} />
      </Paper>

      <TaskList
        tasks={tasks ?? []}
        isLoading={isLoadingTasks}
        isError={isErrorTasks}
        onTaskClick={handleTaskClick}
        onTaskUpdate={handleUpdate}
        onTaskDelete={handleDelete}
      />

      <TaskDetailsModal
        task={taskModal}
        open={Boolean(taskModal)}
        onClose={handleCloseModal}
        onUpdate={handleUpdate}
      />
    </Container>
  )
}
