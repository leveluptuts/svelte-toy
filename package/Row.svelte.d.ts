import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        key: any;
        value: any;
        store: any;
        path: any;
        simple?: boolean;
        label?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RowProps = typeof __propDef.props;
export declare type RowEvents = typeof __propDef.events;
export declare type RowSlots = typeof __propDef.slots;
export default class Row extends SvelteComponentTyped<RowProps, RowEvents, RowSlots> {
}
export {};
