import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        register: any;
        icon?: string;
        active?: boolean;
        theme?: string;
    };
    events: {
        [evt: string]: any;
    };
    slots: {};
};
export declare type ToyProps = typeof __propDef.props;
export declare type ToyEvents = typeof __propDef.events;
export declare type ToySlots = typeof __propDef.slots;
export default class Toy extends SvelteComponentTyped<ToyProps, ToyEvents, ToySlots> {
}
export {};
