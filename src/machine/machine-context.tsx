import { createActorContext } from '@xstate/react';
import { theMachine } from './the-machine';

export const MachineContext = createActorContext(theMachine)