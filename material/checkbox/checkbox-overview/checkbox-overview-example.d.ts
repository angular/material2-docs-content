import { ThemePalette } from '@angular/material/core';
import * as i0 from "@angular/core";
export interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
}
/**
 * @title Basic checkboxes
 */
export declare class CheckboxOverviewExample {
    task: Task;
    allComplete: boolean;
    updateAllComplete(): void;
    someComplete(): boolean;
    setAll(completed: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<CheckboxOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CheckboxOverviewExample, "checkbox-overview-example", never, {}, {}, never, never>;
}
