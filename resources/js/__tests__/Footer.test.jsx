import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Footer from '@/Components/Footer';
import useAlert from '@/Composables/useAlert';
import useModal from '@/Composables/useModal';
import Welcome from '@/Pages/Welcome';

jest.mock('@/Composables/useAlert'); // Mock the useAlert hook
jest.mock('@/Composables/useModal'); // Mock the useModal hook

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

beforeEach(() => {
    window.axios = {
      post: jest.fn()
    };

    window.route = jest.fn((routeName) => {
      if (routeName === 'api.contacts.create') {
        return '/api/contacts'; // Return the expected URL for this route
      }
      return '/';
    });
});

test('renders Footer component', () => {
    useAlert.mockReturnValue({
      alertData: {},
      showSuccessAlert: jest.fn(),
      showFailureAlert: jest.fn(),
      clearAlert: jest.fn(),
    });

    useModal.mockReturnValue({
      modalData: {},
      showModal: jest.fn(),
      closeModal: jest.fn(),
    });

    render(<Footer />);

    // Add your assertions here
    expect(screen.getByText('Robert Amoah')).toBeInTheDocument();
});

test('submits contact form successfully', async () => {
    const showSuccessAlert = jest.fn();
    const closeModal = jest.fn();

    useAlert.mockReturnValue({
      alertData: {},
      showSuccessAlert,
      showFailureAlert: jest.fn(),
      clearAlert: jest.fn(),
    });

    axios.post.mockResolvedValue({ data: { status: true } });

    useModal.mockReturnValue({
      modalData: { show: true, type: 'contact'},
      showModal: jest.fn(),
      closeModal,
    });

    render(<Footer />);

    fireEvent.change(screen.getByPlaceholderText("Robert Amoah"), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText("mr_robertamoah@yahoo.com"), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText("+233245634617"), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText("what do you have in mind?"), { target: { value: 'Hello!' } });

    // Add your assertions here
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    
    // render(<Welcome />);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/contacts', {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      message: 'Hello!',
      type: 'GENERAL',
    }));

    await waitFor(() => expect(showSuccessAlert).toHaveBeenCalledWith({
      time: 5000,
      message: "You have successfully contacted Robert Amoah. You will be hearing from him soon."
  }));
    await waitFor(() => expect(closeModal).toHaveBeenCalledTimes(1));
    // await waitFor(() => expect(screen.getByText('You have successfully contacted Robert Amoah. You will be hearing from him soon.')).toBeInTheDocument());
});

test('submits contact form unsuccessfully', async () => {
    const showFailureAlert = jest.fn();
    const closeModal = jest.fn();

    useAlert.mockReturnValue({
      alertData: {},
      showFailureAlert,
      showSuccessAlert: jest.fn(),
      clearAlert: jest.fn(),
    });

    axios.post.mockRejectedValue({ data: { status: false } });

    useModal.mockReturnValue({
      modalData: { show: true, type: 'contact'},
      showModal: jest.fn(),
      closeModal,
    });

    render(<Footer />);

    fireEvent.change(screen.getByPlaceholderText("Robert Amoah"), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText("mr_robertamoah@yahoo.com"), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText("+233245634617"), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText("what do you have in mind?"), { target: { value: 'Hello!' } });

    // Add your assertions here
    fireEvent.click(screen.getByRole('button', { name: /send/i }));
    
    // render(<Welcome />);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/contacts', {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      message: 'Hello!',
      type: 'GENERAL',
    }));

    await waitFor(() => expect(showFailureAlert).toHaveBeenCalledWith({
      time: 5000,
      message: "Something unfortunate happened. Please try again shortly."
    }));
    await waitFor(() => expect(closeModal).toHaveBeenCalledTimes(0));
    // await waitFor(() => expect(screen.getByText('You have successfully contacted Robert Amoah. You will be hearing from him soon.')).toBeInTheDocument());
});