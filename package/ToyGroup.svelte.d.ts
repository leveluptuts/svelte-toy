import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        store: any;
        label: any;
        isOpen: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ToyGroupProps = typeof __propDef.props;
export declare type ToyGroupEvents = typeof __propDef.events;
export declare type ToyGroupSlots = typeof __propDef.slots;
export default class ToyGroup extends SvelteComponentTyped<ToyGroupProps, ToyGroupEvents, ToyGroupSlots> {
}
export {};
