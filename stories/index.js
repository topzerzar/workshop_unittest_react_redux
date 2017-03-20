import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TodoItem from '../src/components/TodoItem';

storiesOf('TodoItem', module)
  .add('Not Have', () => (
    <TodoItem text="Not Complete" />
  ))
  .add('Have Complete', () => (
    <TodoItem text="Have Complete" complete />
  ));
