import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const UserApi = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/api/v1"}),
    endpoints:(builder) => ({
        getUsers:builder.query({
            query:() => "getUsers"
        })
    })
})

export const {useGetUsersQuery} = UserApi;