import { render } from '@testing-library/react';
import Backpack from '../src/app/components/backpack/Backpack';

describe('test', () => {
  test('should return true', () => {
    expect(true).toBeTruthy();
  });

  test('should to render the component ', () => {
    render(<Backpack />);
    screen.debug();
  });
});
