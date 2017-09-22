import axios from 'axios';

export default {
  user: {
    login: credentials =>
      axios
        .post('/api/auth', { credentials })
        .then(response => response.data.user),
    signup: user =>
      axios.post('/api/users', { user }).then(response => response.data.user),
    confirm: token =>
      axios
        .post('/api/auth/confirmation', { token })
        .then(res => res.data.user),
    resetPasswordRequest: email =>
      axios.post('/api/auth/reset_password_request', { email }),
    validateToken: token => axios.post('/api/auth/validate_token', { token }),
    resetPassword: data => axios.post('/api/auth/reset_password', { data })
  }
};
