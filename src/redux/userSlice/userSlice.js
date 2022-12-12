import {createApi} from '@reduxjs/toolkit/query/react';
import {gql} from 'graphql-request';
import graphqlBaseQuery from '../../utils/GraphqlBaseQuery';
import moment from 'moment';

const getRequestToken = () => {
  //var now = moment(new Date()).format("MMM DD YYYY h:mm");
  var now = moment(new Date()).format('MMM DD YYYY');
  console.log(now);
  var sha1 = require('sha1');
  sha1 = sha1(now + 'vimkes');
  return sha1;
};

const client_ip = '59.96.173.82';

const request_token = getRequestToken();

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: graphqlBaseQuery({
    baseUrl: 'https://www.api.keedriver.com/graphql',
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: ({username, password}) => ({
        body: gql`
          mutation SignInAction(
            $username: String
            $password: String
            $client_ip: String
            $request_token: String
          ) {
            SignInAction(
              username: $username
              password: $password
              client_ip: $client_ip
              request_token: $request_token
            ) {
              message
              first_name
              last_name
              token
              image_address
              mobile_number1
              email_id
            }
          }
        `,
        variables: {
          username,
          password,
          client_ip,
          request_token,
        },
      }),

      transformResponse: response => response,
    }),
  }),
});

export const {useLoginMutation} = userApi;
