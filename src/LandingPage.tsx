import { Anchor } from '@mantine/core';
import { Document } from '@medplum/react';
import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage(): JSX.Element {
  return (
    <Document>
      <h1>Bienvenido!</h1>
      <p>
        This app demonstrates how to use the Medplum SDK to work with{' '}
        <Anchor href="https://www.hl7.org/fhir/task" target="_blank">
          Tareas FHIR
        </Anchor>
        .
      </p>
      <ul>
        <li>Crear una tarea</li>
        <li>Lista de tareas</li>
        <li>Filtrar tareas</li>
        <li>Asignar tarea a usuario</li>
        <li>Completar una tarea</li>
      </ul>
      <p>
        <Anchor to="/signin" component={Link}>
          Login
        </Anchor>
      </p>
    </Document>
  );
}
