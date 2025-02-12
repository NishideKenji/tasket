'use client'

import {
  Checkbox,
  Container,
  Grid2,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'

export default function Home() {
  return (
    <Container maxWidth={false} sx={{}}>
      <Grid2 container spacing={1}>
        <Grid2
          size={6}
          sx={{ p: 2, background: 'rgb(238, 238, 238)', borderRadius: '8px' }}
        >
          <Typography variant="h5" gutterBottom>
            Task List
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>タイトル</TableCell>
                <TableCell>完了状況</TableCell>
                <TableCell>計画日時</TableCell>
                <TableCell>完了日時</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>No.1</TableCell>
                <TableCell>タスク1 要件を確認する</TableCell>
                <TableCell>
                  <Checkbox disabled={true} checked={true} />
                </TableCell>
                <TableCell>{dayjs('2022/1/1').format('YYYY/MM/DD')}</TableCell>
                <TableCell>{dayjs('2022/1/10').format('YYYY/MM/DD')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid2>
        <Grid2
          size={6}
          sx={{
            p: 2,
            //borderLeft: '1px solid #ccc'
          }}
        >
          <Typography variant="h5" gutterBottom>
            Details and Edit Task
          </Typography>
          <Paper sx={{ p: 2 }}></Paper>
        </Grid2>
      </Grid2>
    </Container>
  )
}
