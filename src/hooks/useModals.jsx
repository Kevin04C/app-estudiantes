import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

export const newCourseModal = () => {
  const Modal = lazy(() => import('../app/components/Course/NewCourse'));
  const modalContainer = document.createElement('div');
  modalContainer.id = 'modal';
  modalContainer.className = 'modals';
  document.body.appendChild(modalContainer);
  const root = createRoot(modalContainer);
  console.log(root);
  root.render(
    <Suspense fallback={<p style={{ fontSize: '20rem' }}>RODRIGO</p>}>
      <Modal root={root} title='Nuevo Curso' />
    </Suspense>,
  );
};

// Más modales... 👇👇👇
