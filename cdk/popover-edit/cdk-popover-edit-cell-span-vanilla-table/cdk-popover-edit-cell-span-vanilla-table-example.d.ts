import { NgForm } from '@angular/forms';
export interface Person {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
}
/**
 * @title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
export declare class CdkPopoverEditCellSpanVanillaTableExample {
    readonly preservedValues: WeakMap<Person, any>;
    readonly persons: Person[];
    onSubmit(person: Person, f: NgForm): void;
}
