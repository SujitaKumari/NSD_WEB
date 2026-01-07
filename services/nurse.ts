import requests from '../lib/axios';
import axios from 'axios';

const NurseService = {
  registerAsNurse: async (payload: FormData) => {
    const { data } = await axios.post(
      'http://192.168.29.48:8080/api/v1/auth/nurse/register',
      payload
    );
    return data;
  },

  // createRegistrationOrder: async () => {
  //   const { data } = await axios.post('https://nsdapi.designoftime.co.in/api/v1/auth/nurse/register/payment-order');
  //   return data;
  // },

  // sendOtpPhoneNumber: async (body: { phoneNumber: string; countryCode: string }) => {
  //   const { data } = await requests.post('/auth/nurse/register/registration-phone-otp', body);
  //   return data;
  // },

  // verifyOtpPhoneNumber: async (body: { phoneNumber: string; countryCode: string; otp: number }) => {
  //   const { data } = await requests.post('/auth/nurse/register/registration-phone-verify', body);
  //   return data;
  // },

  // SERVICES
  createRegistrationOrder: async () => {
    const { data } = await requests.post('/auth/nurse/register/payment-order');
    return data;
  },
  getMyServiceStatus: () => {
    return requests.get('/nurse/me/services');
  },

  applyForServices: (serviceIds: string[]) => {
    return requests.post('/nurse/me/services/apply', { serviceIds });
  },
};

export default NurseService;
