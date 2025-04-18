import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType = {
    correlationId:string;
}

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();  // created an instance

export const getCorrelationId = () =>{
    const asyncStore = asyncLocalStorage.getStore();
    return asyncStore?.correlationId || 'unknown-error-while-creating-correlation-id';  // default  
}