import { Box, Paper, Skeleton } from '@mui/material'

export interface TaskListSkeletonProps {
  count?: number
}

export const TaskListLoading = ({ count = 5 }: TaskListSkeletonProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {Array.from({ length: count }).map((_, index) => (
        <Paper
          key={index}
          sx={{
            p: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Skeleton variant="rectangular" width={24} height={24} />
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="60%" height={24} />
              <Skeleton variant="text" width="40%" height={20} sx={{ mt: 0.5 }} />
            </Box>
            <Skeleton variant="circular" width={32} height={32} />
          </Box>
        </Paper>
      ))}
    </Box>
  )
}
