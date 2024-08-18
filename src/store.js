import { create } from 'zustand';
import { chromogenZustandMiddleware } from 'chromogen';

export default create(
  chromogenZustandMiddleware((set) => ({
    calls: 0,
    caller: 'Steve',
    addCall: () => set((state) => ({ calls: state.calls + 1 }), false, 'addCall'),
    resetCalls: () => set({ calls: 0 }, false, 'resetCalls'),
    updateCaller: (newCaller) => set({ caller: newCaller }, false, 'updateCaller'),
  }))
);
