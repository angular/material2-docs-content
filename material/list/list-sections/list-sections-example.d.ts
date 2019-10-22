import * as i0 from "@angular/core";
export interface Section {
    name: string;
    updated: Date;
}
/**
 * @title List with sections
 */
export declare class ListSectionsExample {
    folders: Section[];
    notes: Section[];
    static ngFactoryDef: i0.ɵɵFactoryDef<ListSectionsExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<ListSectionsExample, "list-sections-example", never, {}, {}, never>;
}
