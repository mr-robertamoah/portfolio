import axios from 'axios';

global.axios = axios;

class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
}

global.ResizeObserver = ResizeObserver;

jest.mock('@inertiajs/inertia-react', () => require('./__mocks__/inertia'));
