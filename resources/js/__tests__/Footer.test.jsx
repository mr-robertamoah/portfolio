import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '@/Components/Footer';
import useAlert from '@/Composables/useAlert';

jest.mock('@/Composables/useAlert'); // Mock the useAlert hook

test('renders Footer component', () => {
    if (!useAlert) {
        throw new Error('useAlert is not defined');
    }

  useAlert.mockReturnValue({
    alertData: {},
    showSuccessAlert: jest.fn(),
    showFailureAlert: jest.fn(),
    clearAlert: jest.fn(),
  });

  render(<Footer />);

  // Add your assertions here
  expect(screen.getByText('Your Footer Text')).toBeInTheDocument();
});

test('submits contact form', async () => {
    if (!useAlert) {
        throw new Error('useAlert is not defined');
      }
  useAlert.mockReturnValue({
    alertData: {},
    showSuccessAlert: jest.fn(),
    showFailureAlert: jest.fn(),
    clearAlert: jest.fn(),
  });

  render(<Footer />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello!' } });

  fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

  // Add your assertions here
  expect(screen.getByText('Your Success Message')).toBeInTheDocument();
});