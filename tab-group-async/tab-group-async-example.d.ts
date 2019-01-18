import { Observable } from 'rxjs';
export interface ExampleTab {
    label: string;
    content: string;
}
/**
 * @title Tab group with asynchronously loading tab contents
 */
export declare class TabGroupAsyncExample {
    asyncTabs: Observable<ExampleTab[]>;
    constructor();
}
