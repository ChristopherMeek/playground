import { setup, fromPromise, assign, sendTo } from 'xstate'
import { Person, fetchPerson } from './fetchPerson'
import { tabMachine } from './tab-machine'

const Tabs = ['definition', 'references'] as const
export type Tab = typeof Tabs[number]

type FetchPerson = { type: 'fetch-person' }
type NameDirty = { type: 'name-dirty' }

export const theMachine = setup({
  types: {} as {
    context: {
      person: Person | null,

    },
    events:
    | FetchPerson
    | NameDirty
  },
  actors: {
    fetchPerson: fromPromise(() => fetchPerson()),
    tab: tabMachine
  }
}).createMachine({
  id: 'the-machine',
  context: { person: null },
  initial: 'idle',
  states: {
    idle: {
      on: {
        'fetch-person': 'loading'
      }
    },
    loading: {
      invoke: {
        src: 'fetchPerson',
        onDone: {
          target: 'loaded',
          actions: assign({
            person: ({ event }) => event.output
          })
        }
      }
    },
    loaded: {
      tags: ['ready'],
      invoke: [
        { src: 'tab', id: 'name', systemId: 'name' },
        { src: 'tab', id: 'age', systemId: 'age' }
      ],
      on: {
        'name-dirty': {
          actions: sendTo('age', { type: 'disable' })
        }
      }
    }
  }
})

