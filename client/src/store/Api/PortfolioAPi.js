import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:`http://localhost:4000/api/v1/creations`}),
    endpoints:(builder) => ({
        getPortfolio:builder.query({
            query:({skip,limit}) => `/getAll?skip=${skip}&?limit=${limit}`
        }),
        specificPortfolio:builder.query({
            query:(type) => `/portfolio/${type}`
        })
    })
})

export const {useGetPortfolioQuery,useSpecificPortfolioQuery} = api;