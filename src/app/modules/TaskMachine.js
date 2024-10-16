import { createMachine } from "xstate";

export const toggleMachine = createMachine({
  id: "task",
  initial: "incomplete",
  states: {
    incomplete: {
      on: { TOGGLE: "complete" },
    },
    complete: {
      on: { TOGGLE: "incomplete" },
    },
  },
});
