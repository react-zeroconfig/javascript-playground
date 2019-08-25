# Start development

- `npm test` Run unit test (Jest)
- `npm start` Run storybook test (Storybook)

# Source Import Sample

## Jest 
<!-- import src/__tests__/*.{js,jsx} --title-tag h3 -->
<h3>src/__tests__/sample.js</h3>
```js
describe('Sample', () => {
  test('Test', () => {
    expect('text').toEqual('text');
  });
});
```
<!-- importend -->

<!-- import src/**/*.test.{js,jsx} --title-tag h3 -->
<!-- importend -->

## Storybook
<!-- import src/**/*.stories.{js,jsx} --title-tag h3 -->
<h3>src/components/Sample.stories.jsx</h3>
```jsx
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Sample } from './Sample';

storiesOf('Sample', module)
  .add('text=Hello?', () => (
    <Sample text="Hello?"/>
  ))
  .add('text=World?', () => (
    <Sample text="World?"/>
  ));
```
<!-- importend -->