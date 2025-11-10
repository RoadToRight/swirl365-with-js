import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4000/api/v1"}),
    endpoints:(builder) => ({
        getPortfolio:builder.query({
            query:() => "/getPortfolio"
        }),
        specificPortfolio:builder.query({
            query:(slug) => `/portfolio/${slug}`
        })
    })
})

export const {useGetPortfolioQuery,useSpecificPortfolioQuery} = api;