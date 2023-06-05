import React from "react";
import TodoList from "../Components/TodoList";
import { QueryClient, QueryClientProvider } from 'react-query';


export const HomePage = () => {

    const myQueryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={myQueryClient}>
                <TodoList />
            </QueryClientProvider>
        </>
    )
}