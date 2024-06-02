/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.baseURL = `${import.meta.env.VITE_APP_URL}/api`
window.axios.defaults.withCredentials = true
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import './echo'