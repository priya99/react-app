import { render, screen } from '@testing-library/react'
import Welcome from '../Components/Welcome';
import {
    MemoryRouter
  } from "react-router-dom";

test('Welcome renders successfully', () => {
    render(<MemoryRouter><Welcome /></MemoryRouter>);

    const element = screen.getByText(/Welcome to User Module/i);

    expect(element).toBeInTheDocument();
});


