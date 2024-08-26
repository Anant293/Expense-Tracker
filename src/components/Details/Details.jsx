import React from 'react';
import { Card,CardHeader,CardContent,Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
import useStyles from './styles';
import {Chart as Chartjs,ArcElement,Tooltip,Legend} from 'chart.js';

Chartjs.register(
  ArcElement,Tooltip,Legend
)
const Details = ({title}) => {
    const classes= useStyles();
    const {total,chartData}=useTransactions(title);
  return (
    <Card className={title ==='Income'? classes.income:classes.expense}>
        <CardHeader title={title}/>
        <CardContent>
            <Typography variant='h5'>${total}</Typography>
            <div style={{height:'300px',width:'400px',paddingLeft:'30px'}}>
            <Doughnut  data={chartData}/>
            </div>
        </CardContent> 
    </Card>
  )
}

export default Details