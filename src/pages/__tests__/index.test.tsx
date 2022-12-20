import { render, screen } from '@testing-library/react'
import Home from '..'

it("renders without crashing", () => {
  render(<Home />);
});
