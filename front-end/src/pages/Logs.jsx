import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLogs } from '../app/Slices/logSclice';
import AnimatedLine from '../components/AnimatedLine';
import AccordionItem from '../components/AccordionItem';

const Logs = () => {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs.logs);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/log/combined', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const groupedLogs = groupLogsByDate(response.data);
        dispatch(setLogs(groupedLogs));
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();
  }, [dispatch, token]);

  const groupLogsByDate = (data) => {
    const logsByDate = {};

    [...data.exercises, ...data.cardios].forEach((item) => {
      const date = new Date(item.createdAt).toLocaleDateString();

      if (!logsByDate[date]) {
        logsByDate[date] = { exercises: [], cardios: [] };
      }

      if (item.exercise) {
        logsByDate[date].exercises.push({ ...item });
      } else {
        logsByDate[date].cardios.push({ ...item });
      }
    });

    return logsByDate;
  };

  return (
    <div>
      <AnimatedLine />
      {Object.entries(logs).map(([date, log]) => (
        <AccordionItem key={date} date={date} log={log} />
      ))}
    </div>
  );
};

export default Logs;
