import api from "./axios";

export interface PublicEnquiryPayload{
    fullName: string;
    mobileNumber: string;
    city: string;
    serviceNeeded: string;
    email?: string;
    message?: string;
}

export const submitPublicEnquiry = async (
  payload: PublicEnquiryPayload
) => {
  const response = await api.post("/api/contact", payload);
  return response.data;
};