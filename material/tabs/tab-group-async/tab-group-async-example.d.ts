import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<TabGroupAsyncExample>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TabGroupAsyncExample, "tab-group-async-example", never, {}, {}, never>;
}
