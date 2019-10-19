import React from 'react'
import {Container, makeStyles} from '@material-ui/core'
import Subject from '../Subject'

const useStyles = makeStyles({
  container: {
    marginTop: '16px',
    marginBottom: '16px'
  }
});

function Tuesday() {
  const subjects = [
    {
      id: '0',
      startTime: '10:10',
      endTime: '11:40',
      title: 'Практикум',
      cabinet: '',
      teachers: 'Анциферова Л.В. / Бурумбаева А.М.'
    },
    {
      id: '1',
      startTime: '11:50',
      endTime: '13:20',
      title: 'МНПИ',
      cabinet: '',
      teachers: 'Бичун Л.В.'
    },
    {
      id: '2',
      startTime: '14:00',
      endTime: '15:30',
      title: 'Теоретическая грамматика',
      cabinet: '',
      teachers: 'Анциферова Л.В.'
    }
  ];

  const classes = useStyles();

  return(
      <Container className={classes.container}>
        {subjects.map(subject => (
            <Subject data={subject} />
        ))}
      </Container>
  )
}

export default Tuesday