import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.set('authorization', ``);
      }

      return headers;
    },
  }),
  tagTypes: 'Contacts',
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => `contacts`,
      // providesTags: ['Contacts'],
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: 'Contacts', id })) : ['Contacts'],
    }),
    addContactItem: builder.mutation({
      query: (item) => ({
        url: `/contacts`,
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContactById: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllContactsQuery,
  useAddContactItemMutation,
  useDeleteContactByIdMutation,
} = contactsApi;
