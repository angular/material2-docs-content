import * as i0 from '@angular/core';
import * as i4 from '@angular/material/button';
import * as i5 from '@angular/material/divider';
import * as i6 from '@angular/material/icon';

export declare class ButtonExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ButtonExamplesModule, [typeof i1.ButtonOverviewExample, typeof i2.ButtonTypesExample, typeof i3.ButtonHarnessExample], [typeof i4.MatButtonModule, typeof i5.MatDividerModule, typeof i6.MatIconModule], [typeof i1.ButtonOverviewExample, typeof i2.ButtonTypesExample, typeof i3.ButtonHarnessExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ButtonExamplesModule>;
}

/**
 * @title Testing with MatButtonHarness
 */
export declare class ButtonHarnessExample {
    clicked: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonHarnessExample, "button-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Basic buttons
 */
export declare class ButtonOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonOverviewExample, "button-overview-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Button varieties
 */
export declare class ButtonTypesExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonTypesExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonTypesExample, "button-types-example", never, {}, {}, never, never, false, never>;
}

declare namespace i1 {
    export {
        ButtonOverviewExample
    }
}

declare namespace i2 {
    export {
        ButtonTypesExample
    }
}

declare namespace i3 {
    export {
        ButtonHarnessExample
    }
}

export { }
