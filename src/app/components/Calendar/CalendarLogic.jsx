import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';

const init = () => {
  const rediminders = JSON.parse(localStorage.getItem('reminders'));
  if (rediminders) {
    return rediminders.map((reminder) => ({
      ...rediminders,
      date: new Date(reminder.date),
    }));
  }
  return [];
};

export const CalendarLogic = () => {
  // // if reminders exit on localStorage, it has to create a new Date base on reminder.date else create []
  const [reminders, setReminders] = useState(init);
  const [view, setView] = useState('Calendario');
  const [activeForm, setActiveForm] = useState(false);
  const date = new Date();
  date.setHours(0, 0, 0, 0);

  const DEFAULTFORM = {
    date: date,
    id: reminders.length,
    title: '',
    description: '',
    noti: false,
  };
  const [form, setForm] = useState(DEFAULTFORM);

  const toggleActive = () => {
    setActiveForm(!activeForm);
  };

  const toggleForm = (reminder) => {
    if (reminder) {
      setForm(reminder);
      toggleActive();
    } else {
      setForm(DEFAULTFORM);
      toggleActive();
    }
  };

  const handleForm = (key, value) => {
    const setDate = key === 'date' ? new Date(`${value}T00:00`) : null;
    setForm((prev) => ({
      ...prev,
      [key]:
        key === 'alarm' || key === 'noti'
          ? !prev[key]
          : key === 'date'
          ? setDate
          : value,
    }));
  };

  const handleReminder = (action = 'add', index) => {
    const editReminder = [...reminders];

    switch (action) {
      case 'delete':
        setReminders([
          ...reminders.slice(0, index),
          ...reminders.slice(index + 1),
        ]);
        break;

      case 'edit':
        editReminder[form.id] = form;
        setReminders(editReminder);
        toggleForm();
        break;

      default:
        setReminders((prev) => [...prev, form]);
        toggleForm();
    }
  };

  const changeView = (event) => {
    const view = event.target.innerHTML;
    setActiveForm(false);
    setView(view);
  };

  const saveReminders = () => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  };

  const checkDate = (reminder) => {
    const saveDate = reminder.date.getTime();
    const currentDate = date.getTime();

    if (saveDate === currentDate && reminder.noti) {
      toast(
        `Hoy es ${reminder.title === '' ? '(Sin título)' : reminder.title}`,
        {
          icon: '⏰',
          position: 'top-right',
          duration: 5700,
        },
      );
      toast('¡RECUERDA!', {
        icon: '👀',
        position: 'top-right',
        duration: 4500,
      });
    }
  };

  useEffect(() => {
    saveReminders();
    let timer = setTimeout(() => reminders.forEach(checkDate), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [reminders]);

  return {
    reminders,
    view,
    form,
    activeForm,
    handleForm,
    toggleForm,
    changeView,
    handleReminder,
  };
};
