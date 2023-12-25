import { BlockReference } from '@near-js/types';
import { Account, FunctionCallOptions } from '../account';
interface ViewFunctionCallOptions extends FunctionCallOptions {
    blockQuery?: BlockReference;
}
export declare class LocalViewExecution {
    private readonly account;
    private readonly storage;
    constructor(account: Account);
    private fetchContractCode;
    private fetchContractState;
    private fetch;
    private loadOrFetch;
    viewFunction({ contractId, methodName, args, blockQuery, ...ignored }: ViewFunctionCallOptions): Promise<any>;
}
export {};
//# sourceMappingURL=index.d.ts.map