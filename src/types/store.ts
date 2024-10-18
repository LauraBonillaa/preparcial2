export type AppState = {
   tasks: []
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
    ADD_TASK = 'ADD_TASK',
    TOOGLE_TASK = 'TOOGLE_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
};