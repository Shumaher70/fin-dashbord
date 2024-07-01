import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
   GetKpisResponse,
   GetProductsResponse,
   GetTransactionsResponse,
} from '@/state/types';

export const api = createApi({
   baseQuery: fetchBaseQuery({ baseUrl: 'https://fin-dashbord.onrender.com' }),
   reducerPath: 'main',
   tagTypes: ['Kpis', 'Products', 'Transactions'],
   endpoints: (build) => ({
      getKpis: build.query<Array<GetKpisResponse>, void>({
         query: () => 'kpi/kpis/',
         providesTags: ['Kpis'],
      }),
      getProducts: build.query<Array<GetProductsResponse>, void>({
         query: () => 'product/products/',
         providesTags: ['Products'],
      }),
      getTransactions: build.query<Array<GetTransactionsResponse>, void>({
         query: () => 'transaction/transactions/',
         providesTags: ['Transactions'],
      }),
   }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
   api;
