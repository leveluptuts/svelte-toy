import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        store: any;
        label: any;
        isOpen: any;
    };
    events: {
        [evt: string]: any;
    };
    slots: {};
};
export declare type ToyInputProps = typeof __propDef.props;
export declare type ToyInputEvents = typeof __propDef.events;
export declare type ToyInputSlots = typeof __propDef.slots;
export default class ToyInput extends SvelteComponentTyped<ToyInputProps, ToyInputEvents, ToyInputSlots> {
}
export {};
